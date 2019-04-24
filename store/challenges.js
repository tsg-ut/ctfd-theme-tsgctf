export const state = () => ({
	challenges: [],
});

export const getters = {
};

export const mutations = {
	setChallenges(s, payload) {
		s.challenges = payload;
	},
};

export const actions = {
	async updateChallenges({commit}, {$axios}) {
		const {data} = await $axios.get('/api/v1/challenges');
		commit('setChallenges', data.data);
	},
};
