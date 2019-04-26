export default ({$axios, store}) => {
	$axios.onRequest((config) => {
		if (store.state.csrfToken !== undefined) {
			config.headers.common['csrf-token'] = store.state.csrfToken;
		}
	});
};
