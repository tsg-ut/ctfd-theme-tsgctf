import Vue from 'vue';

export const state = () => ({
	challenges: [],
});

export const getters = {
};

export const mutations = {
	setChallenges(s, payload) {
		s.challenges = payload;
		for (const challenge of s.challenges) {
			challenge.details = null;
		}
	},
	setChallengeDetail(s, {id, data}) {
		const target = s.challenges.findIndex((challenge) => challenge.id === id);
		Vue.set(s.challenges, target, {
			...s.challenges[target],
			details: data,
		});
	},
};

export const actions = {
	async updateChallenges({commit}, {$axios}) {
		const {data} = await $axios.get('/api/v1/challenges');
		commit('setChallenges', data.data);
	},
	async getDetail({commit}, {$axios, id}) {
		const {data} = await $axios.get(`/api/v1/challenges/${id}`);
		commit('setChallengeDetail', {id, data: data.data});
	},
};
