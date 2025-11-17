<template>
	<section class="NewTeam">
		<h2 class="title"><span>Create Team</span></h2>
		<div class="subtitle">After creating your team, share the team name and password with your teammates so they can join your team.</div>
		<form
			class="login-form"
			method="post"
			accept-charset="utf-8"
			autocomplete="off"
		>
			<div class="form-group">
				<label for="name-input">
					Team Name
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
					Team Password
				</label>
				<input
					id="password-input"
					class="form-control"
					type="password"
					name="password"
				>
			</div>
			<div class="form-group" v-if="brackets && brackets.length">
				<label for="bracket-input"> Bracket </label>
				<select
					id="bracket-input"
					class="form-control"
					name="bracket_id"
					required
				>
					<option disabled value="">Select bracket</option>
					<option
						v-for="bracket in brackets"
						:key="bracket.id"
						:value="bracket.id"
					>
						{{ bracket.name }}
					</option>
				</select>
			</div>
			<div v-for="field in fields" :key="field.id">
				<div v-if="field.field_type === 'boolean'">
					<div class="field-container" :class="{ optional: !field.required }">
						<small class="field-description">
							{{field.description}}
						</small>
						<div class="form-check">
							<label class="form-check-label" :for="`fields[${field.id}]`">
								{{ field.name }}
							</label>
							<input
								class="form-check-input"
								:id="`fields[${field.id}]`"
								:name="`fields[${field.id}]`"
								type="checkbox"
								value="y"
								:required="field.required"
							>
						</div>
					</div>
				</div>
			</div>
			<div>
				<button id="submit" type="submit" tabindex="5">
					Create
				</button>
			</div>
			<input type="hidden" name="nonce" :value="csrfToken">
		</form>
	</section>
</template>

<script>
import {mapState} from 'vuex';

export default {
	async asyncData(context) {
		await context.store.dispatch('updateCsrfToken', context);
	},
	data() {
		return {
			brackets: [],
			fields: [],
			isError: false,
		};
	},
	head() {
		return {
			title: 'Create Team - TSG CTF',
		};
	},
	computed: {
		...mapState(['csrfToken']),
	},
	mounted() {
		if (document.referrer) {
			const referrer = new URL(document.referrer);
			if (referrer.pathname === '/teams/new') {
				this.isError = true;
			}
		}
		this.$axios
			.$get('/api/v1/brackets', {
				params: { type: 'teams' },
			})
			.then((res) => {
				this.brackets = res.data || [];
			})
			.catch((err) => {
				console.error('Failed to load brackets:', err);
			});
		this.$axios
			.$get('/api/v1/fields', {
				params: { type: 'teams' },
			})
			.then((res) => {
				this.fields = res.data || [];
			})
			.catch((err) => {
				console.error('Failed to load brackets:', err);
			});
	},
};
</script>

<style lang="postcss">
.NewTeam {
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
	}

	.field-container {
		position: relative;
		display: block;
		border: 2px solid #ffffff;
		border-radius: 8px;
		width: fit-content;
		min-width: 600px;
		background: rgba(255,255,255,0.05);
		margin: 1.5rem auto;
		padding: 1rem 1.5rem;
	}

	.field-container.optional::before {
    display: inline;
		content: "Optional";
		position: absolute;
		top: -12px;
		left: 10px;

		background: #ffeb8a;
		color: #000;
		font-size: 0.7rem;
		font-weight: bold;

		padding: 2px 6px;
		border-radius: 4px;

		box-shadow: 0 2px 3px rgba(0,0,0,0.2);
	}

  .form-check {
		display: block;
    align-items: center;
		margin: 0.8rem auto;
  }

  .form-check-input {
    display: inline;
    width: 20px;
    height: 20px;
    margin: 0;
    -webkit-appearance: none;
    background-color: transparent;
    border: 2.5px solid #ffffff;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
  }

  .form-check-input:checked::after {
    content: "✔";
    color: #5ced73;
    font-size: 30px;
    position: absolute;
    top: -13px;
    left: 0px;
  }

	.form-check-label {
		font-family: 'Fredoka One', cursive;
    text-align: center;
    padding-right: 0.5rem;
    font-size: 1.5rem;
		font-weight: bold;
  }

	.field-description {
		font-weight: bold;
  }

	button[type='submit'] {
		width: 10rem;
		margin: 1rem 0;
	}
}
</style>
