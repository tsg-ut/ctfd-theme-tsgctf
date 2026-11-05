const path = require('node:path');
const fs = require('fs-extra');

async function preparePreContest(root, temporary) {
	const source = path.join(temporary, 'pre-contest');
	// Build from a minimal source tree so archive pages and stores cannot be bundled.
	const files = [
		'pages/index.vue',
		'layouts/default.vue',
		'layouts/error.vue',
		'components/IsoLink.vue',
		'plugins/inject-is-static.js',
		'static/background.svg',
		'static/favicon.png',
		'static/ogimage.jpg',
		'static/CNAME',
	];
	await Promise.all(files.map((file) => fs.copy(path.join(root, file), path.join(source, file))));
	await fs.outputFile(path.join(source, 'store/index.js'), `
export const state = () => ({
    isStatic: true,
    isPreContest: true,
    isStarted: false,
    isEnded: false,
    isLoggedIn: false,
    isInTeam: false,
    user: {},
    team: {},
    language: 'en',
});

export const mutations = {
    setLanguage(state, language) {
        state.language = language;
    },
};
`);
	return source;
}

module.exports = {preparePreContest};
