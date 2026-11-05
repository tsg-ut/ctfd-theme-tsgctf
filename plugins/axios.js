export default ({$axios, store}) => {
	$axios.onRequest((config) => {
		if (store.state.csrfToken !== undefined) {
			config.headers['csrf-token'] = store.state.csrfToken;
		}
	});
};
