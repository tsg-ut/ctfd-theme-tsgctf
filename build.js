const path = require('path');
const {JSDOM} = require('jsdom');
const fs = require('fs-extra');
const klaw = require('klaw');

const templates = [
	'base.html',
	'challenge.html',
	'challenges.html',
	'confirm.html',
	'errors/403.html',
	'errors/404.html',
	'errors/429.html',
	'errors/500.html',
	'errors/502.html',
	'login.html',
	'notifications.html',
	'page.html',
	'register.html',
	'reset_password.html',
	'scoreboard.html',
	'settings.html',
	'setup.html',
	'teams/join_team.html',
	'teams/new_team.html',
	'teams/private.html',
	'teams/public.html',
	'teams/teams.html',
	'teams/team_enrollment.html',
	'users/private.html',
	'users/public.html',
	'users/users.html',
];
(async () => {
	if (!(await fs.pathExists('dist'))) {
		// eslint-disable-next-line no-console
		console.error('Build contents by `nuxt generate` first');
		return;
	}
	await fs.remove('4t$ctf');
	await fs.mkdirp('4t$ctf/static');
	await fs.mkdirp('4t$ctf/templates');

	const walker = klaw('dist');
	walker.on('data', async (item) => {
		if (!item.stats.isDirectory() && !item.path.endsWith('.html')) {
			const newPath = item.path.includes('_nuxt')
				? path.join('4t$ctf/static', path.relative(path.join(__dirname, 'dist/themes/4t$ctf/static'), item.path))
				: path.join('4t$ctf/static', path.relative(path.join(__dirname, 'dist'), item.path));
			if (item.path.endsWith('OneSignalSDKWorker.js')) {
				const worker = await fs.readFile(item.path);
				const newWorker = worker.toString().replace('/sw.js', '/themes/4t$ctf/static/sw.js');
				await fs.outputFile(newPath, newWorker);
			} else {
				fs.copy(item.path, newPath);
			}
		}
	});
	await new Promise((resolve) => {
		walker.on('end', resolve);
	});

	const data = await fs.readFile('dist/index.html');
	const dom = new JSDOM(data);
	const meta = dom.window.document.createElement('meta');
	meta.name = 'csrf-token';
	meta.content = '{{Session.nonce}}';
	dom.window.document.querySelector('head').appendChild(meta);
	const html = dom.serialize();

	for (const template of templates) {
		await fs.outputFile(path.join('4t$ctf/templates', template), html);
	}
})();
