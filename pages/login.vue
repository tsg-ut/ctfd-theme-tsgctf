<template>
	<section class="Login">
		<h2 class="title"><span>Login</span></h2>
		<div class="subtitle">or <iso-link to="/register">Register</iso-link></div>
		<form
			class="login-form"
			method="post"
			accept-charset="utf-8"
			autocomplete="off"
		>
		<p>
			User Name or Email
		</p>
			<div class="form-group">
				
				<input
					id="name-input"
					class="form-control"
					type="text"
					name="name"
				>
			</div>
			<p>Password</p>
			<div class="form-group">
			
				<input
					id="password-input"
					class="form-control"
					type="password"
					name="password"
				>
			</div>
			<div>
				<button id="submit" type="submit" tabindex="5">
					Submit
				</button>
			</div>
			<div v-if="isError" class="error">
				Login errored. Maybe incorrect username of password?
			</div>
			<div>
				<iso-link to="/reset_password">
					Forgot your password?
				</iso-link>
			</div>
			<input type="hidden" name="nonce" :value="csrfToken">
		</form>
	</section>
</template>

<script>
import IsoLink from '~/components/IsoLink.vue';
import {mapState} from 'vuex';

export default {
	components: {IsoLink},
	async asyncData(context) {
		await context.store.dispatch('updateCsrfToken', context);
	},
	data() {
		return {
			isError: false,
		};
	},
	head() {
		return {
			title: 'Login - TSG CTF',
		};
	},
	computed: {
		...mapState(['isLoggedIn', 'csrfToken']),
	},
	mounted() {
		if (document.referrer) {
			const referrer = new URL(document.referrer);
			if (referrer.pathname === '/login') {
				this.isError = true;
			}
		}
	},
};
</script>

<style lang="postcss">
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
		align-items: center;
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
		background-color: rgba(29, 29, 29, 0.753);
		border-radius: 5px;
		color: white;
		box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.952);
	}

	.error {
		font-size: 1.3rem;
		font-family: 'Fredoka One', cursive;
		font-weight: 100;

		color: #f44336;
		padding: 0;
		line-height: 2rem;
	}

	button[type='submit'] {
		width: 10rem;
		margin: 1rem 0;
		box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.952);

	}

	button[type='submit']:hover {
		background-color: white;
		color: rgb(29, 29, 29);
	}
}
</style>
