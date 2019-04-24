import get from 'lodash/get';

export const state = () => ({
	configs: [],
});

export const getters = {
	ctfName: ({configs}) => get(configs.find(([key]) => key === 'ctf_name'), [1], ''),
};

export const mutations = {
	setConfigs(s, payload) {
		s.configs = payload;
	},
};

export const actions = {
	async nuxtClientInit({dispatch}, context) {
		await dispatch('updateConfigs', context);
	},
	async updateConfigs({commit}, {$axios}) {
		const {data} = await $axios.get('/api/v1/configs');
		commit('setConfigs', data.data.map(({key, value}) => [key, value]));
	},
};
