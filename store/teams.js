export const state = () => ({
	teams: new Map(),
});

export const getters = {
	getTeam: (s, id) => s.teams.get(id),
};

export const mutations = {
	setTeam(s, team) {
		s.teams.set(team.id, team);
	},
};

export const actions = {
	async getTeam({commit}, {$axios, id}) {
		const [{data: team, headers}, {data: solves}] = await Promise.all([
			$axios.get(`/api/v1/teams/${id}`),
			$axios.get(`/api/v1/teams/${id}/solves`),
		]);
		if (headers['content-type'] === 'application/json') {
			const teamData = {
				...team.data,
				solves: solves.data,
			};
			commit('setTeam', teamData);
			return teamData;
		}
		commit('setIsLoggedIn', false, {root: true});
		return null;
	},
};
