import get from 'lodash/get';

export const state = () => ({
	configs: [],
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
};

export const actions = {
	async nuxtClientInit({dispatch}, context) {
		await Promise.all([
			dispatch('updateConfigs', context),
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
};
