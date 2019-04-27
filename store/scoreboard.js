export const state = () => ({
	scoreboard: [],
	teams: [],
});

export const getters = {
	getScore: (s) => (id) => s.scoreboard.find((team) => team.account_id === id) || {
		score: 0,
		pos: s.scoreboard.length + 1,
	},
	getScoreboard: (s) => {
		const listedTeams = new Set(s.scoreboard.map((team) => team.account_id));
		const nonListedTeams = s.teams.filter(({id}) => !listedTeams.has(id));
		return [
			...s.scoreboard,
			...nonListedTeams.map((team) => ({
				name: team.name,
				account_id: team.id,
				pos: s.scoreboard.length + 1,
				score: 0,
			})),
		];
	},
};

export const mutations = {
	setScoreboard(s, scoreboard) {
		s.scoreboard = scoreboard;
	},
	setTeams(s, teams) {
		s.teams = teams;
	},
};

export const actions = {
	async update({dispatch}, {$axios}) {
		await Promise.all([
			dispatch('updateScoreboard', {$axios}),
			dispatch('updateTeams', {$axios}),
		]);
	},
	async updateScoreboard({commit}, {$axios}) {
		const {data, headers} = await $axios.get('/api/v1/scoreboard');
		if (headers['content-type'] === 'application/json') {
			commit('setScoreboard', data.data);
		} else {
			commit('setIsLoggedIn', false, {root: true});
		}
	},
	async updateTeams({commit}, {$axios}) {
		const {data, headers} = await $axios.get('/api/v1/teams');
		if (headers['content-type'] === 'application/json') {
			commit('setTeams', data.data);
		} else {
			commit('setIsLoggedIn', false, {root: true});
		}
	},
};
