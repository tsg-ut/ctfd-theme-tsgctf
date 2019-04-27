import proxyMiddleware from 'http-proxy-middleware';
import pkg from './package';

const proxy = proxyMiddleware({
	target: 'http://localhost:8000',
});

export default {
	mode: 'spa',

	head: {
		title: 'TSG CTF',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: pkg.description},
		],
		link: [{rel: 'icon', type: 'image/png', href: process.env.NODE_ENV === 'development' ? '/favicon.png' : '/themes/tsgctf/static/favicon.png'}],
	},

	loading: {color: '#fff'},

	css: [],

	plugins: ['~/plugins/axios', '~/plugins/vue-timeago'],

	modules: ['@nuxtjs/axios', '@nuxtjs/onesignal', '@nuxtjs/pwa', '@nuxtjs/markdownit', 'nuxt-client-init-module'],

	axios: {
		browserBaseURL: '/',
	},

	oneSignal: {
		init: {
			appId: '6acee8f3-7842-4a55-91f6-b63ac21a667d', // public token
			allowLocalhostAsSecureOrigin: true,
		},
	},

	markdownit: {
		injected: true,
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
		publicPath: process.env.NODE_ENV === 'development' ? '/_nuxt/' : '/themes/tsgctf/static/_nuxt/',
	},

	router: {},

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
