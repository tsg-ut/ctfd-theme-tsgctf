import Vue from 'vue';
import groupBy from 'lodash/groupBy';

const categoryOrders = [
	'warmup',
	'pwn',
	'rev',
	'web',
	'crypto',
	'stego',
];

export const state = () => ({
	challenges: [],
});

export const getters = {
	getCategories: (s) => (
		Object.entries(groupBy(s.challenges, ({category}) => category)).map(([name, challenges]) => ({
			name,
			challenges,
		})).sort((a, b) => {
			const orderA = categoryOrders.indexOf(a.name.toLowerCase());
			const orderB = categoryOrders.indexOf(b.name.toLowerCase());
			return (orderA === -1 ? 9999 : orderA) - (orderB === -1 ? 9999 : orderB);
		})
	),
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
		const {data, headers} = await $axios.get('/api/v1/challenges');
		if (headers['content-type'] === 'application/json') {
			commit('setChallenges', data.data);
		} else {
			commit('setIsLoggedIn', false, {root: true});
		}
	},
	async getDetail({commit}, {$axios, id}) {
		const {data, headers} = await $axios.get(`/api/v1/challenges/${id}`);
		if (headers['content-type'] === 'application/json') {
			commit('setChallengeDetail', {id, data: data.data});
		} else {
			commit('setIsLoggedIn', false, {root: true});
		}
	},
};
