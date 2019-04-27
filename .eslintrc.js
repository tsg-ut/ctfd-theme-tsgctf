module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: ['@nuxtjs', '@hakatashi'],
	plugins: ['prettier'],
	rules: {
		'node/no-unsupported-features': 'off',
		'node/no-unsupported-features/es-syntax': 'off',
		semi: ['error', 'always'],
		'import/order': 'off',
	},
}
