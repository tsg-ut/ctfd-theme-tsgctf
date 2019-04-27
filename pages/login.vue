<template>
	<section class="Login">
		<h2 class="title"><span>Login</span></h2>
		<div class="subtitle">or <nuxt-link to="/register">Register</nuxt-link></div>
		<form
			class="login-form"
			method="post"
			accept-charset="utf-8"
			autocomplete="off"
		>
			<div class="form-group">
				<label for="name-input">
					User Name or Email
				</label>
				<input
					id="name-input"
					class="form-control"
					type="text"
					name="name"
				>
			</div>
			<div class="form-group">
				<label for="password-input">
					Password
				</label>
				<input
					id="password-input"
					class="form-control"
					type="password"
					name="password"
				>
			</div>
			<div>
				<button
					id="submit"
					type="submit"
					tabindex="5"
				>
					Submit
				</button>
			</div>
			<div v-if="isError" class="error">
				Login errored. Maybe incorrect username of password?
			</div>
			<div>
				<a href="/reset_password">
					Forgot your password?
				</a>
			</div>
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
.Login {
	text-align: center;

	.title {
		margin-bottom: 0;
	}

	.subtitle {
		margin-bottom: 2rem;
		font-size: 1.5rem;

		a {
			color: #90cbff;
		}
	}

	.form-group {
		display: flex;
		justify-content: center;
		line-height: 2rem;
		padding: 0.6rem 0;
	}

	label {
		font-size: 1rem;
		width: 10rem;
		text-align: right;
		padding-right: 1rem;
	}

	.form-control {
		font-size: 1.2rem;
		width: 20rem;
	}

	.error {
		font-size: 1.5rem;
		font-family: 'Fredoka One', cursive;
		font-weight: 300;

		color: #F44336;
		padding: 0;
		line-height: 2rem;
	}

	button[type=submit] {
		width: 10rem;
		margin: 1rem 0;
	}
}
</style>
