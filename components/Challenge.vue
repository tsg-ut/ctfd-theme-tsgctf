<template>
	<div class="Challenge">
		<div class="list-marker">
			<div class="checkbox" :class="{solved: challenge.solved}"/>
		</div>
		<div class="list-content">
			<div class="title" @click="onClickTitle">
				<span class="title-name">{{challenge.name}}</span>
				<span class="points"> {{challenge.value}}pts </span>
			</div>
			<div v-if="isOpen" class="content">
				<div v-if="challenge.details" class="details">
					<div class="solves" :class="{'someone-solved': challenge.details.solves > 0, solved: challenge.solved}">
						{{getSolvesText(challenge.details.solves)}}
					</div>
					<!-- eslint-disable-next-line vue/no-v-html -->
					<div class="description" v-html="$md.render(challenge.details.description)"/>
					<div class="attachments">
						<a
							v-for="file in challenge.details.files"
							:key="file"
							class="attachment"
							:href="file"
							target="_blank"
							rel="noopener"
						>
							{{getFileName(file)}}
						</a>
					</div>
				</div>
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
						:placeholder="getPlaceholderText(challenge)"
						:disabled="challenge.solved || isEnded"
					>
					<button type="submit" class="flag-submit" :disabled="yay || challenge.solved || isEnded">Send</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import {mapState} from 'vuex';

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
	computed: {
		...mapState(['isEnded']),
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
		getFileName(path) {
			const components = new URL(path, location.href).pathname.split('/');
			return components[components.length - 1];
		},
		getSolvesText(solves) {
			const rule = new Intl.PluralRules('en-US').select(solves);
			return `${solves} ${{one: 'solve', other: 'solves'}[rule] || ''}`;
		},
		getPlaceholderText(challenge) {
			if (challenge.solved) {
				return 'You\'ve already solved this challenge!';
			}

			if (this.isEnded) {
				return 'Contest has been ended';
			}

			return 'TSGCTF{......}';
		},
		async onSubmitFlag(event) {
			event.preventDefault();
			this.boo = false;
			const form = new FormData(event.target);
			const inputFlag = form.get('flag');
			const {data} = await this.$axios.post(
				'/api/v1/challenges/attempt',
				{
					challenge_id: parseInt(this.challenge.id),
					submission: inputFlag,
				},
				{
					headers: {
						'content-type': 'application/json',
					},
				}
			);
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
		display: inline-block;
		letter-spacing: 1px;
		cursor: pointer;
	}

	.title-name {
		color: rgb(0, 150, 250);
		-webkit-text-fill-color: transparent;
		background: linear-gradient(90deg, rgb(255, 24, 13) 0%, rgb(138, 0, 255) 100%);
		background-clip: text;
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

	.content {
		margin-top: 1rem;
		margin-left: 0.5rem;
		margin-bottom: 1.5rem;
		background: rgba(255, 255, 255, 0.2);
		padding: 1rem;
		width: auto;
		box-sizing: border-box;
		border-radius: 1rem;
		position: relative;
		border-top-right-radius: 0;
	}

	.solves {
		background: #2f2f44;
		position: absolute;
		bottom: 100%;
		right: 0;
		padding: 0 0.3rem;
		border-radius: 5px;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;

		&.someone-solved {
			background: #FF5722;
		}

		&.solved {
			background: #4CAF50;
		}
	}

	.description {
		font-size: 1.2rem;
		margin-bottom: 1rem;

		strong {
			color: #ffeb3b;
		}

		p {
			margin: 0.5rem 0;
		}

		a {
			color: #03a9f4;
		}

		code {
			background: #333;
			padding: 0.1rem 0.5rem;
		}

		pre {
			background: #333;
			padding: 0.5rem;
		}

		hr {
			opacity: 0.4;
			margin: 1.5rem 1rem;
		}
	}

	.attachments {
		display: flex;
		flex-wrap: wrap;
	}

	.attachment {
		width: 15rem;
		margin: 0.5rem;
		height: 3rem;
		line-height: 3rem;
		background: #222;
		border-radius: 3px;
		text-align: center;

		&::before {
			content: '';
			background: url("https://cdn.jsdelivr.net/gh/google/material-design-icons@2.2.0/file/2x_web/ic_attachment_white_18dp.png");
			background-size: cover;
			display: inline-block;
			width: 1.4rem;
			height: 1.4rem;
			vertical-align: middle;
		}
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
		width: 0;
		height: 2.5rem;
		border-radius: 9999px;
		margin-right: 0.5rem;
		padding: 0 1rem;
		font-family: 'Roboto', sans-serif;
		font-size: 1.4rem;
		background: #ddd;
		color: #333;

		&[disabled] {
			background: #aaa;
			color: black;
		}

		&.yay {
			background: linear-gradient(
				-45deg,
				#ee7752,
				#e73c7e,
				#23a6d5,
				#23d5ab,
				#ee7752,
				#e73c7e,
				#23a6d5,
				#23d5ab,
				#ee7752,
				#e73c7e,
				#23a6d5,
				#23d5ab,
				#ee7752,
				#e73c7e,
				#23a6d5,
				#23d5ab,
				#ee7752,
				#e73c7e,
				#23a6d5,
				#23d5ab
			);
			background-size: 1000% 1000%;
			animation: Gradient 3s ease-out 1 both;
			color: white;
			font-size: 2rem;
			font-family: 'Fredoka One', cursive;
			font-weight: 300;

			@keyframes Gradient {
				0% {
					background-position: 0% 50%;
				}
				100% {
					background-position: 100% 50%;
				}
			}
		}

		&.boo {
			animation-name: shake;
			animation-duration: 0.7s, 0.35s;
			animation-iteration-count: 1, 2;
		}

		@keyframes shake {
			0%,
			20%,
			40%,
			60%,
			80% {
				transform: translateX(8px);
			}
			50% {
				color: indianred;
			}
			10%,
			30%,
			50%,
			70%,
			90% {
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
