import proxyMiddleware from 'http-proxy-middleware';
import pkg from './package';

const proxy = proxyMiddleware({
	target: 'http://localhost:8000',
});

export default {
	mode: 'spa',

	/*
	 ** Headers of the page
	 */
	head: {
		title: 'TSG CTF',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: pkg.description},
		],
		link: [
			{rel: 'icon', type: 'image/png', href: '/favicon.png'},
		],
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: {color: '#fff'},

	css: [],

	plugins: [
		'~/plugins/axios',
	],

	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/onesignal',
		'@nuxtjs/pwa',
		'nuxt-client-init-module',
	],

	/*
	 ** Axios module configuration
	 */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	oneSignal: {
		init: {
			appId: '6acee8f3-7842-4a55-91f6-b63ac21a667d',
			allowLocalhostAsSecureOrigin: true,
		},
	},

	build: {
		postcss: {
			plugins: {
				precss: {},
				'postcss-import-url': {},
			},
			preset: {
				features: {
					customProperties: false,
				},
			},
		},
	},

	router: {
		base: process.env.NODE_ENV === 'development' ? '/' : '/themes/tsgctf/static/',
	},

	serverMiddleware: [
		...(process.env.NODE_ENV === 'development'
			? [
				{
					path: '/api',
					handler: proxy,
				},
				{
					path: '/login',
					handler: proxy,
				},
				{
					path: '/logout',
					handler: proxy,
				},
				{
					path: '/register',
					handler: proxy,
				},
				{
					path: '/teams/join',
					handler: proxy,
				},
				{
					path: '/teams/new',
					handler: proxy,
				},
			  ]
			: []),
	],
};
