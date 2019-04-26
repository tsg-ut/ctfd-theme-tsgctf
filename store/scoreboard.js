export const state = () => ({
	scoreboard: [],
});

export const getters = {
	getScore: (s) => (id) => (
		s.scoreboard.find((team) => team.account_id === id)
	),
};

export const mutations = {
	setScoreboard(s, scoreboard) {
		s.scoreboard = scoreboard;
	},
};

export const actions = {
	async updateScoreboard({commit}, {$axios}) {
		const {data, headers} = await $axios.get('/api/v1/scoreboard');
		if (headers['content-type'] === 'application/json') {
			commit('setScoreboard', data.data);
		} else {
			commit('setIsLoggedIn', false, {root: true});
		}
	},
};
