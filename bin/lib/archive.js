const path = require('node:path');
const {pipeline} = require('node:stream/promises');
const fs = require('fs-extra');
const axios = require('axios');
const MarkdownIt = require('markdown-it');

class Archive {
	constructor({baseURL, session = '', directory}) {
		this.baseURL = new URL(baseURL.endsWith('/') ? baseURL : `${baseURL}/`);
		this.cookie = session ? `session=${session}` : '';
		this.directory = directory;
		this.filesPrefix = `${this.baseURL.pathname}files/`;
		this.downloads = new Map();
		this.markdown = new MarkdownIt({linkify: true, breaks: true});
	}

	async request(url) {
		let current = new URL(url);
		for (let redirects = 0; redirects <= 5; redirects++) {
			if (!['http:', 'https:'].includes(current.protocol)) {
				throw new Error('Unsupported download URL protocol');
			}
			const response = await axios.get(current.href, {
				responseType: 'stream',
				maxRedirects: 0,
				timeout: 30000,
				headers: current.origin === this.baseURL.origin && this.cookie ? {Cookie: this.cookie} : {},
				validateStatus: () => true,
			});
			if ([301, 302, 303, 307, 308].includes(response.status) && response.headers.location) {
				response.data.resume();
				current = new URL(response.headers.location, current);
				continue;
			}
			if (response.status !== 200) {
				response.data.resume();
				throw new Error(`HTTP ${response.status} while fetching ${new URL(url).pathname}`);
			}
			response.archiveURL = current;
			return response;
		}
		throw new Error(`Too many redirects while fetching ${new URL(url).pathname}`);
	}

	fileURL(value) {
		const url = new URL(value, this.baseURL);
		return url.origin === this.baseURL.origin && url.pathname.startsWith(this.filesPrefix) ? url : null;
	}

	async file(value) {
		const url = this.fileURL(value);
		if (!url) {
			return value;
		}
		const relative = url.pathname.slice(this.filesPrefix.length);
		const parts = relative.split('/').map(decodeURIComponent);
		if (parts.some((part) => !part || part === '.' || part === '..' || /[/\\\x00-\x1f]/.test(part))) {
			throw new Error('Invalid archive file path');
		}
		if (!this.downloads.has(url.pathname)) {
			this.downloads.set(url.pathname, (async () => {
				const response = await this.request(url);
				// A login redirect must not become a supposedly successful attachment.
				const finalURL = response.archiveURL;
				const authPaths = ['login', 'confirm', 'team'].map((route) => `${this.baseURL.pathname}${route}`);
				if (finalURL.origin === this.baseURL.origin && authPaths.includes(finalURL.pathname.replace(/\/$/, ''))) {
					response.data.resume();
					throw new Error(`File redirected outside the download endpoint: ${url.pathname}`);
				}
				const destination = path.join(this.directory, ...parts);
				await fs.ensureDir(path.dirname(destination));
				await pipeline(response.data, fs.createWriteStream(destination));
			})());
		}
		await this.downloads.get(url.pathname);
		// These links are used by top-level pages such as /challenges/ and /rules/.
		return `../files/${relative}${url.hash}`;
	}

	async rewriteMarkdown(source) {
		const urls = new Set();
		const automatic = new Set();
		const visit = (tokens) => {
			for (const token of tokens) {
				if (token.type === 'link_open' || token.type === 'image') {
					const url = token.attrGet(token.type === 'image' ? 'src' : 'href');
					urls.add(url);
					if (token.markup === 'linkify' || token.markup === 'autolink') {
						automatic.add(url);
					}
				}
				if (token.children) {
					visit(token.children);
				}
			}
		};
		const tokens = this.markdown.parse(source, {});
		visit(tokens);
		const replacements = new Map();
		for (const url of urls) {
			if (!this.fileURL(url)) {
				continue;
			}
			const replacement = await this.file(url);
			const label = this.fileURL(url).pathname.split('/').pop();
			// Markdown normalizes Unicode URLs and unescapes destinations.
			for (const original of new Set([url, decodeURI(url)])) {
				for (const variant of [original, original.replace(/&/g, '&amp;'), original.replace(/[()]/g, '\\$&')]) {
					replacements.set(variant, {replacement, label, automatic: automatic.has(url)});
					if (automatic.has(url)) {
						replacements.set(`<${variant}>`, {replacement, label, automatic: true, angle: true});
					}
				}
			}
		}
		if (!replacements.size) {
			return source;
		}
		const pattern = [...replacements.keys()].sort((a, b) => b.length - a.length)
			.map((url) => url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
		const rewrite = (text) => text.replace(new RegExp(pattern, 'g'), (url, offset) => {
			const item = replacements.get(url);
			const before = text.slice(0, offset);
			const destination = /\]\(\s*<?$/.test(before) || /(?:^|\n)\s{0,3}\[[^\]\n]+\]:\s*<?$/.test(before);
			if (item.angle && destination) {
				return `<${item.replacement}>`;
			}
			return item.automatic && !destination ? `[${item.label}](${item.replacement})` : item.replacement;
		});
		// Leave code examples intact, even when they contain a URL linked elsewhere.
		const lineOffsets = [0];
		for (const match of source.matchAll(/\n/g)) {
			lineOffsets.push(match.index + 1);
		}
		lineOffsets.push(source.length);
		const ranges = tokens.filter((token) => ['fence', 'code_block'].includes(token.type))
			.map((token) => [lineOffsets[token.map[0]], lineOffsets[token.map[1]]]);
		const rewriteInline = (text) => {
			let result = '';
			let offset = 0;
			for (const match of text.matchAll(/(?<!`)(`+)(?!`)[\s\S]*?(?<!`)\1(?!`)/g)) {
				result += rewrite(text.slice(offset, match.index)) + match[0];
				offset = match.index + match[0].length;
			}
			return result + rewrite(text.slice(offset));
		};
		let result = '';
		let offset = 0;
		for (const [start, end] of ranges) {
			result += rewriteInline(source.slice(offset, start)) + source.slice(start, end);
			offset = end;
		}
		return result + rewriteInline(source.slice(offset));
	}

	async api(requestPath) {
		const url = new URL(requestPath.replace(/^\//, ''), this.baseURL);
		const response = await this.request(url);
		const chunks = [];
		for await (const chunk of response.data) {
			chunks.push(chunk);
		}
		if (!/^application\/json\b/.test(response.headers['content-type'] || '')) {
			throw new Error(`Expected JSON from ${url.pathname}; check SESSION and visibility settings`);
		}
		const json = JSON.parse(Buffer.concat(chunks).toString());
		if (json.success !== true) {
			throw new Error(`API request failed: ${url.pathname}`);
		}
		const endpoint = new URL(requestPath, 'http://proxy').pathname;
		if (/^\/api\/v1\/challenges\/\d+$/.test(endpoint)) {
			json.data.files = await Promise.all((json.data.files || []).map((file) => this.file(file)));
			json.data.description = await this.rewriteMarkdown(json.data.description || '');
			for (const hint of json.data.hints || []) {
				if (typeof hint.content === 'string') {
					hint.content = await this.rewriteMarkdown(hint.content);
				}
			}
		} else if (endpoint === '/api/v1/rules') {
			json.data.content = await this.rewriteMarkdown(json.data.content || '');
		}
		return json;
	}
}

module.exports = {Archive};
