export const state = () => ({
	notifications: [],
});

export const getters = {
};

export const mutations = {
	setNotifications(s, payload) {
		s.notifications = payload;
	},
};

export const actions = {
	async updateNotifications({commit}, {$axios}) {
		const {data} = await $axios.get('/api/v1/notifications');
		commit('setNotifications', data.data);
	},
};
