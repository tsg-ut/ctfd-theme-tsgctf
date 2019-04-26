<template>
	<section class="Settings">
		<h2 class="title"><span>Settings</span></h2>
		<div class="subtitle">
			User: {{user.name}}<br>
			Team: <nuxt-link :to="`/teams/${team.id}`">{{team.name}}</nuxt-link>
		</div>
		<form
			id="user-settings-form"
			method="post"
			accept-charset="utf-8"
			autocomplete="off"
			role="form"
			@submit="onSubmit"
		>
			<div class="form-group">
				<label for="name-input">
					User Name
				</label>
				<input
					id="name-input"
					v-model="name"
					class="form-control"
					type="text"
					name="name"
				>
			</div>
			<div class="form-group">
				<label for="email-input">
					Email
				</label>
				<input
					id="email-input"
					v-model="email"
					class="form-control"
					type="email"
					name="email"
				>
			</div>
			<div class="form-group">
				<label for="confirm-input">
					Current Password
				</label>
				<input
					id="confirm-input"
					v-model="confirm"
					class="form-control"
					type="password"
					name="confirm"
				>
			</div>
			<div class="form-group">
				<label for="password-input">
					New Password
				</label>
				<input
					id="password-input"
					v-model="password"
					class="form-control"
					type="password"
					name="password"
				>
			</div>
			<div class="form-group">
				<label for="affiliation-input">
					Affiliation
				</label>
				<input
					id="affiliation-input"
					v-model="affiliation"
					class="form-control"
					type="text"
					name="affiliation"
				>
			</div>
			<div class="form-group">
				<label for="website-input">
					Website
				</label>
				<input
					id="website-input"
					v-model="website"
					class="form-control"
					type="url"
					name="website"
				>
			</div>
			<div class="form-group">
				<label for="country-input">
					Country
				</label>
				<select
					id="country-input"
					v-model="country"
					class="form-control"
					name="country"
				>
					<option value=""/>
					<option
						v-for="[code] in countries"
						:key="code"
						:value="code"
					>
						{{country}}
					</option>
				</select>
			</div>

			<div class="form-group">
				<button
					v-if="!isSubmitting"
					id="submit"
					type="submit"
					tabindex="5"
				>
					Submit
				</button>
				<pulse-loader v-else color="white"/>
			</div>

			<div class="result">
				<span v-if="isSuccess" class="success">
					Your profile has been updated
				</span>
				<ul v-if="errors.length > 0" class="errors">
					<li v-for="error in errors" :key="error">
						{{error}}
					</li>
				</ul>
			</div>
		</form>
	</section>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import flatten from 'lodash/flatten';
import {mapState} from 'vuex';

export default {
	components: {PulseLoader},
	data() {
		return {
			errors: [],
			isSuccess: false,
			isSubmitting: false,
			name: '',
			email: '',
			confirm: '',
			password: '',
			affiliation: '',
			website: '',
			country: '',
		};
	},
	computed: {
		...mapState(['csrfToken', 'user', 'team', 'countries']),
	},
	watch: {
		user(newValue) {
			this.name = newValue.name;
			this.email = newValue.email;
			this.affiliation = newValue.affiliation;
			this.website = newValue.website;
			this.country = newValue.country;
		},
	},
	async asyncData(context) {
		await context.store.dispatch('updateCsrfToken', context);
	},
	mounted() {
		if (!this.isLoggedIn) {
			this.$router.push({
				path: '/login',
			});
			return;
		}

		this.name = this.user.name;
		this.email = this.user.email;
		this.affiliation = this.user.affiliation;
		this.website = this.user.website;
		this.country = this.user.country;
	},
	methods: {
		async onSubmit(event) {
			event.preventDefault();
			const form = new FormData(event.target);

			this.isSubmitting = true;
			this.isSuccess = false;
			this.errors = [];

			const {data} = await this.$axios.patch('/api/v1/users/me', Object.fromEntries(form), {
				headers: {
					'content-type': 'application/json',
				},
				validateStatus: null,
			});
			this.isSubmitting = false;

			if (data.success) {
				this.isSuccess = true;
				await this.$store.dispatch('updateUser', {$axios: this.$axios});
			} else {
				this.errors = flatten(Object.values(data.errors));
			}
		},
	},
};
</script>

<style>
.Settings {
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

	.result {
		font-size: 1.5rem;
		font-family: 'Fredoka One', cursive;
		font-weight: 300;

		.success {
			color: #45d823;
		}

		.errors {
			color: #F44336;
			padding: 0;
			line-height: 2rem;
		}
	}

	button[type=submit] {
		width: 10rem;
		margin: 1rem 0;
	}
}
</style>
