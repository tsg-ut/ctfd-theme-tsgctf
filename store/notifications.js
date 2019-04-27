export const state = () => ({
	notifications: [],
});

export const getters = {};

export const mutations = {
	setNotifications(s, payload) {
		s.notifications = payload;
	},
};

export const actions = {
	async updateNotifications({commit}, {$axios}) {
		const {data, headers} = await $axios.get('/api/v1/notifications');
		if (headers['content-type'] === 'application/json') {
			commit('setNotifications', data.data);
		} else {
			commit('setIsLoggedIn', false, {root: true});
		}
	},
};
