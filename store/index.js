import get from 'lodash/get';

export const state = () => ({
	configs: [],
	csrfToken: undefined,
	isLoggedIn: true,
	user: {},
	team: {},
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
	setUser(s, payload) {
		s.user = {...s.user, ...payload};
	},
	setTeam(s, payload) {
		s.team = {...s.team, ...payload};
	},
};

export const actions = {
	async nuxtClientInit({dispatch}, context) {
		await Promise.all([
			dispatch('updateUser', context),
			dispatch('updateTeam', context),
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
	async updateUser({commit}, {$axios}) {
		const {data, headers} = await $axios.get('/api/v1/users/me');
		if (headers['content-type'] === 'application/json') {
			commit('setUser', data.data);
		} else {
			commit('setIsLoggedIn', false, {root: true});
		}
	},
	async updateTeam({commit}, {$axios}) {
		const {data, headers} = await $axios.get('/api/v1/teams/me');
		if (headers['content-type'] === 'application/json') {
			commit('setTeam', data.data);
		} else {
			commit('setIsLoggedIn', false, {root: true});
		}
	},
	async updateCsrfToken({commit, dispatch, state: s}, {$axios}) {
		if (process.env.NODE_ENV === 'development') {
			const {data} = await $axios.get('/api/v1/users');
			if (data.nonce) {
				commit('setCsrfToken', data.nonce);
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
