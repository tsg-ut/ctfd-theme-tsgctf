const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const {spawn} = require('node:child_process');
const fs = require('fs-extra');
const {Archive} = require('./lib/archive');

async function main() {
	const root = path.resolve(__dirname, '..');
	const temporary = await fs.mkdtemp(path.join(os.tmpdir(), 'tsgctf-export-'));
	const archive = new Archive({
		baseURL: process.env.CTFD_URL || 'https://score.live-ctf.tsg.ne.jp/',
		session: process.env.SESSION || '',
		directory: path.join(temporary, 'files'),
	});
	const requests = new Map();
	let failed = false;
	const server = http.createServer(async (request, response) => {
		if (request.method !== 'GET' || !request.url.startsWith('/api/v1/')) {
			response.writeHead(404).end();
			return;
		}
		try {
			if (!requests.has(request.url)) {
				requests.set(request.url, archive.api(request.url));
			}
			const json = await requests.get(request.url);
			response.writeHead(200, {'Content-Type': 'application/json'});
			response.end(JSON.stringify(json));
		} catch (error) {
			failed = true;
			// Do not log request configurations containing cookies or signed URLs.
			console.error(`Export failed for ${new URL(request.url, 'http://proxy').pathname}`);
			response.writeHead(502, {'Content-Type': 'application/json'});
			response.end(JSON.stringify({success: false, message: 'Archive data or file download failed'}));
		}
	});
	try {
		await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
		const env = {...process.env, NUXT_ENV_STATIC: 'true', CTFD_URL: `http://127.0.0.1:${server.address().port}`};
		delete env.SESSION;
		const status = await new Promise((resolve, reject) => {
			const child = spawn(process.execPath, [require.resolve('nuxt/bin/nuxt.js'), 'generate', '--fail-on-error'], {cwd: root, env, stdio: 'inherit'});
			child.once('error', reject);
			child.once('exit', resolve);
		});
		if (status !== 0 || failed) {
			throw new Error('Static export failed; do not publish the generated output');
		}
		if (await fs.pathExists(archive.directory)) {
			await fs.copy(archive.directory, path.join(root, 'dist/files'));
		}
	} finally {
		await new Promise((resolve) => server.close(resolve));
		await fs.remove(temporary);
	}
}

main().catch((error) => {
	console.error(error.message);
	process.exitCode = 1;
});
