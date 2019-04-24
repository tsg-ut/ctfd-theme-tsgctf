import get from 'lodash/get';

export const state = () => ({
	configs: [],
});

export const getters = {
	ctfName: ({configs}) => get(configs.find(({key}) => key === 'ctf_name'), ['value'], ''),
};

export const mutations = {
	setConfigs(s, payload) {
		s.configs = payload;
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
		const {data} = await $axios.get('/api/v1/configs');
		commit('setConfigs', data.data.map(({key, value}) => ({key, value})));
	},
};
