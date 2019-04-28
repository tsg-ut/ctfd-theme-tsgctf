<template>
	<section class="Confirm">
		<h2 class="title"><span>Confirmation Step</span></h2>
		<div class="subtitle">
			We've sent a confirmation email to you!<br>
			Please click the link in that email to confirm your account.
		</div>
		<form method="POST">
			<button id="submit" type="submit" tabindex="5">Resend</button>
			<input type="hidden" name="nonce" :value="csrfToken">
		</form>
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
			if (referrer.pathname === '/login') {
				this.isError = true;
			}
		}
	},
	head() {
		return {
			title: 'Login - TSG CTF',
		};
	},
};
</script>

<style>
.Confirm {
	text-align: center;

	.title {
		margin-bottom: 3rem;
	}

	.subtitle {
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}

	button[type='submit'] {
		width: 10rem;
		margin: 1rem 0;
	}
}
</style>
