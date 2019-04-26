<template>
	<div class="Challenge">
		<div class="list-marker">
			<div class="checkbox" :class="{solved: challenge.solved}"/>
		</div>
		<div class="list-content">
			<div class="title" @click="onClickTitle">
				{{challenge.name}}
				<span class="points">
					{{challenge.value}}pts
				</span>
			</div>
			<div v-if="isOpen" class="details">
				<div v-if="challenge.details" class="description">{{challenge.details.description}}</div>
				<div v-else class="description-loading">
					<pulse-loader color="white"/>
				</div>
				<form class="flag-form" @submit="onSubmitFlag">
					<input
						v-model="flagText"
						type="text"
						name="flag"
						class="flag-input"
						autocomplete="off"
						autocorrect="off"
						autocapitalize="off"
						spellcheck="false"
						:class="{yay, boo}"
						:readonly="yay"
						:placeholder="challenge.solved ? 'You\'ve already solved this challenge!' : 'TSGCTF{......}'"
						:disabled="challenge.solved"
					>
					<button type="submit" class="flag-submit" :disabled="yay || challenge.solved">Send</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
	components: {PulseLoader},
	props: {
		challenge: {
			required: true,
			type: Object,
		},
	},
	data() {
		return {
			isOpen: false,
			yay: false,
			boo: false,
			flagText: '',
		};
	},
	methods: {
		onClickTitle() {
			if (this.isOpen) {
				this.isOpen = false;
			} else {
				this.$store.dispatch('challenges/getDetail', {$axios: this.$axios, id: this.challenge.id});
				this.isOpen = true;
			}
		},
		async onSubmitFlag(event) {
			event.preventDefault();
			this.boo = false;
			const form = new FormData(event.target);
			const inputFlag = form.get('flag');
			const {data} = await this.$axios.post('/api/v1/challenges/attempt', {
				challenge_id: parseInt(this.challenge.id),
				submission: inputFlag,
			}, {
				headers: {
					'content-type': 'application/json',
				},
			});
			if (data.data.status === 'correct') {
				this.yay = true;
				this.flagText = 'Brilliant!';
				await this.$store.dispatch('challenges/updateChallenges', {$axios: this.$axios});
			} else {
				this.boo = true;
			}
		},
	},
};
</script>

<style>
.Challenge {
	margin-bottom: 30px;
	display: flex;
	text-align: left;

	.list-marker {
		flex: 0 0 48px;
		position: relative;

		.checkbox {
			width: 42px;
			height: 42px;
			position: absolute;
			top: 3px;
			left: 0;
			background: url('../static/checkbox_off.svg');
			background-size: cover;
			opacity: 0.8;

			&.solved {
				background: url('../static/checkbox_on.svg');
			}
		}
	}

	.list-content {
		width: 100%;
	}

	&:not(:last-child) .list-marker::before {
		content: '';
		position: absolute;
		background: rgba(255, 255, 255, 0.5);
		top: 46px;
		left: 20px;
		bottom: -30px;
		width: 3px;
		border-radius: 3px;
	}

	.title {
		font-size: 2.5rem;
		font-family: 'Fredoka One', cursive;
		font-weight: 300;
		color: rgb(0, 150, 250);
		-webkit-text-fill-color: transparent;
		background: linear-gradient(90deg, rgb(255, 24, 13) 0%, rgb(138, 0, 255) 100%);
		background-clip: text;
		display: inline-block;
		letter-spacing: 1px;
		cursor: pointer;
	}

	.points {
		background: rgba(255, 255, 255, 0.6);
		display: inline-block;
		color: #0d030e;
		-webkit-text-fill-color: #0d030e;
		font-size: 1.2rem;
		margin-left: 0.2rem;
		padding: 0.1rem 0.3rem;
		vertical-align: middle;
		letter-spacing: 0;
		border-radius: 3px;
	}

	.details {
		margin-top: 1rem;
		margin-left: 0.5rem;
		margin-bottom: 1.5rem;
		background: rgba(255, 255, 255, 0.2);
		padding: 1rem;
		width: 100%;
		box-sizing: border-box;
		border-radius: 1rem;
	}

	.description {
		font-size: 1.2rem;
		white-space: pre-line;
	}

	.description-loading {
		height: 6rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.flag-form {
		display: flex;
		margin-top: 1rem;
	}

	.flag-input {
		flex: 1 1 0;
		height: 2.5rem;
		border-radius: 9999px;
		margin-right: 0.5rem;
		padding: 0 1rem;
		font-family: 'Roboto', sans-serif;
		font-size: 1.4rem;
		background: #DDD;
		color: #333;

		&[disabled] {
			background: #AAA;
			color: black;
		}

		&.yay {
			background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB, #EE7752, #E73C7E, #23A6D5, #23D5AB, #EE7752, #E73C7E, #23A6D5, #23D5AB, #EE7752, #E73C7E, #23A6D5, #23D5AB, #EE7752, #E73C7E, #23A6D5, #23D5AB);
			background-size: 1000% 1000%;
			animation: Gradient 3s ease-out 1 both;
			color: white;
			font-size: 2rem;
			font-family: 'Fredoka One', cursive;
			font-weight: 300;

			@keyframes Gradient {
				0% {
					background-position: 0% 50%
				}
				100% {
					background-position: 100% 50%
				}
			}
		}

		&.boo {
			animation-name: shake;
			animation-duration: 0.7s, 0.35s;
			animation-iteration-count: 1, 2;
		}

		@keyframes shake {
			0%, 20%, 40%, 60%, 80% {
				transform: translateX(8px);
			}
			50% {
				color: indianred;
			}
			10%, 30%, 50%, 70%, 90% {
				transform: translateX(-8px);
			}
		}
	}

	.flag-submit {
		flex: 0 0 6rem;

		&[disabled] {
			cursor: default;
			background: #888;
		}
	}
}
</style>
