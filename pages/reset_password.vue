<template>
	<section class="Reset">
		<h2 class="title"><span>Reset Password</span></h2>
		<p>Sorry, please contact an organizer to have your password reset</p>
	</section>
</template>

<script>
import {mapState} from 'vuex';

export default {
	data() {
		return {
			isError: false,
		};
	},
	computed: {
		...mapState(['isLoggedIn', 'csrfToken']),
	},
	async asyncData(context) {
		await context.store.dispatch('updateCsrfToken', context);
	},
	mounted() {
		if (document.referrer) {
			const referrer = new URL(document.referrer);
			if (referrer.pathname === '/reset_password') {
				this.isError = true;
			}
		}
	},
	head() {
		return {
			title: 'Reset Password - TSG LIVE! 8 CTF',
		};
	},
};
</script>

<style lang="postcss">
.Reset {
	text-align: center;

	.title {
		margin-bottom: 3rem;
	}

	.subtitle {
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}
}
</style>
