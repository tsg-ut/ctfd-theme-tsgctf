import get from 'lodash/get';

export const state = () => ({
	configs: [],
	csrfToken: undefined,
	isLoggedIn: true,
});

export const getters = {
	ctfName: ({configs}) => get(configs.find(({key}) => key === 'ctf_name'), ['value'], ''),
};

export const mutations = {
	setConfigs(s, payload) {
		s.configs = payload;
	},
	setIsLoggedIn(s, payload) {
		s.isLoggedIn = payload;
	},
	setCsrfToken(s, payload) {
		s.csrfToken = payload;
	},
};

export const actions = {
	async nuxtClientInit({dispatch}, context) {
		await Promise.all([
			dispatch('updateConfigs', context),
			dispatch('updateCsrfToken', context),
			dispatch('notifications/updateNotifications', context),
		]);
	},
	async updateConfigs({commit}, {$axios}) {
		const {data, headers} = await $axios.get('/api/v1/configs');
		if (headers['content-type'] === 'application/json') {
			commit('setConfigs', data.data.map(({key, value}) => ({key, value})));
		} else {
			commit('setIsLoggedIn', false, {root: true});
		}
	},
	async updateCsrfToken({commit}, {$axios}) {
		if (process.env.NODE_ENV === 'development') {
			const {data, headers} = await $axios.get('/api/v1/users/me');
			if (headers['content-type'] === 'application/json') {
				commit('setCsrfToken', data.data.nonce);
			} else {
				commit('setIsLoggedIn', false, {root: true});
			}
		} else {
			const meta = document.querySelector('meta[name=csrf-token]');
			if (meta) {
				const token = meta.getAttribute('content');
				commit('setCsrfToken', token);
			}
		}
	},
};
