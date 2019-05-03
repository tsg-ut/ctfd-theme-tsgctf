import Vue from 'vue';
import get from 'lodash/get';
import groupBy from 'lodash/groupBy';

const categoryOrders = ['warmup', 'pwn', 'rev', 'web', 'crypto', 'stego'];

export const state = () => ({
	challenges: [],
	solves: new Set(),
});

export const getters = {
	getChallenges: (s) => s.challenges.map((challenge) => ({
		...challenge,
		solved: s.solves.has(challenge.id),
	})),
	getCategories: (s, g) => Object.entries(groupBy(g.getChallenges, ({category}) => category))
		.map(([name, challenges]) => ({
			name,
			challenges: challenges.sort((a, b) => a.value - b.value),
		}))
		.sort((a, b) => {
			const orderA = categoryOrders.indexOf(a.name.toLowerCase());
			const orderB = categoryOrders.indexOf(b.name.toLowerCase());
			return (orderA === -1 ? 9999 : orderA) - (orderB === -1 ? 9999 : orderB);
		}),
};

export const mutations = {
	setChallenges(s, challenges) {
		const oldChallenges = s.challenges || [];
		s.challenges = challenges.map((challenge) => {
			const oldChallenge = oldChallenges.find(({id}) => id === challenge.id);

			if (!oldChallenge) {
				return challenge;
			}

			for (const [key, value] of Object.entries(challenge)) {
				Vue.set(oldChallenge, key, value);
			}
			return oldChallenge;
		});
	},
	setSolves(s, solves) {
		s.solves = new Set(solves.map((solve) => solve.challenge_id));
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
	async updateChallenges({commit, dispatch}, {$axios}) {
		try {
			const {data, headers} = await $axios.get('/api/v1/challenges');
			if (headers['content-type'] === 'application/json') {
				commit('setIsStarted', true, {root: true});
				commit('setChallenges', data.data);
			} else {
				commit('setIsLoggedIn', false, {root: true});
				return;
			}
		} catch (error) {
			const message = get(error, ['response', 'data', 'message'], '');
			if (message.includes('not started')) {
				commit('setIsStarted', false, {root: true});
			} else if (message.includes('has ended')) {
				commit('setIsEnded', true, {root: true});
			} else {
				commit('setIsInTeam', false, {root: true});
			}
			return;
		}

		await dispatch('updateSolved', {$axios});
	},
	async updateSolved({commit}, {$axios}) {
		const {data, headers} = await $axios.get('/api/v1/teams/me/solves');
		if (headers['content-type'] === 'application/json') {
			commit('setSolves', data.data);
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
