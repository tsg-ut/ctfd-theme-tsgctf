import axios from 'axios';
import proxyMiddleware from 'http-proxy-middleware';

const proxy = proxyMiddleware({
	target: 'http://localhost:8000',
});

const isStatic = process.env.NUXT_ENV_STATIC === 'true';

const staticBase = (process.env.NODE_ENV === 'development' || isStatic) ? '' : '/themes/tsgctf/static';

export default {
	mode: isStatic ? 'universal' : 'spa',

	head: {
		title: 'TSG CTF',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{
				name: 'description',
				hid: 'description',
				content: 'TSG CTF is an on-line CTF organized by TSG, the official computer society of The University of Tokyo',
			},
			{name: 'apple-mobile-web-app-title', content: 'TSG CTF'},
			{name: 'og:title', content: 'TSG CTF'},
			{name: 'og:site_name', content: 'TSG CTF'},
			{name: 'og:description', content: 'TSG CTF is an on-line CTF organized by TSG, the official computer society of The University of Tokyo'},
			{name: 'og:type', content: 'website'},
			{name: 'og:url', content: 'https://score.ctf.tsg.ne.jp'},
			{name: 'og:image', content: `${staticBase}/ogimage.jpg`},
			{name: 'twitter:card', content: 'summary'},
			{name: 'twitter:site', content: '@tsg_ut'},
			{name: 'twitter:title', content: 'TSG CTF'},
			{
				name: 'twitter:description',
				content: 'TSG CTF is an on-line CTF organized by TSG, the official computer society of The University of Tokyo',
			},
			{name: 'twitter:image', content: `${staticBase}/ogimage.jpg`},
			{name: 'twitter:image:alt', content: 'TSG CTF'},
		],
		link: [{rel: 'icon', type: 'image/png', href: `${staticBase}/favicon.png`}],
	},

	loading: {color: '#fff'},

	css: [],

	plugins: ['~/plugins/axios', '~/plugins/vue-timeago', '~/plugins/inject-is-static'],

	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/markdownit',
		'@nuxtjs/pwa',
		...(isStatic ? [] : [
			'@nuxtjs/onesignal',
			'nuxt-client-init-module',
		]),
	],

	generate: {
		fallback: '404.html',
		routes: async () => {
			if (!isStatic) {
				return [];
			}
			const {data} = await axios.get('https://score.ctf.tsg.ne.jp/api/v1/teams');
			return data.data.map(({id}) => `/teams/${id}`) && [];
		},
		concurrency: 5,
	},

	axios: {
		baseURL: 'https://score.ctf.tsg.ne.jp/',
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
		publicPath: `${staticBase}/_nuxt/`,
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

	env: {
		session: process.env.SESSION || '',
	},
};
