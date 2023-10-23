export default ({$axios, store, env}) => {
	$axios.onRequest((config) => {
		if (store.state.csrfToken !== undefined) {
			config.headers['csrf-token'] = store.state.csrfToken;
		}
		if (store.state.isStatic) {
			config.headers.cookie = `session=${env.session}`;
		}
	});
};
