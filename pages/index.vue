<template>
	<section class="Index">
		<div class="index-content">
			<h1 class="ctf-logo">
				<span>T</span><span>S</span><span>G</span>
				<span>L</span><span>I</span><span>V</span><span>E</span><span>!</span>
				<span>C</span><span>T</span><span>F</span>
			</h1>
			<p class="subtitle">Pwn, Web, Crypto, Rev, etc...</p>
			<div class="timer">{{ timer }}</div>
			<div v-if="!isLoggedIn" class="buttons">
				<iso-link to="/login" class="button login">Login</iso-link>
				<iso-link to="/register" class="button register">Register</iso-link>
			</div>
		</div>
	</section>
</template>

<script>
import IsoLink from '~/components/IsoLink.vue'
import { mapState } from 'vuex'

const contestStart = new Date('2025-12-20T07:00:00Z').getTime()
const contestEnd = new Date('2025-12-21T07:00:00Z').getTime()

export default {
	components: { IsoLink },
	data() {
		return {
			remainingTime: this.getRemaining(),
		}
	},
	head() {
		return {
			title: 'TSG LIVE! 17 CTF',
		}
	},
	computed: {
		timer() {
			const days = Math.floor(this.remainingTime / 1000 / 60 / 60 / 24)
				.toString()
				.padStart(2, '0')
			const hours = (Math.floor(this.remainingTime / 1000 / 60 / 60) % 24)
				.toString()
				.padStart(2, '0')
			const minutes = (Math.floor(this.remainingTime / 1000 / 60) % 60)
				.toString()
				.padStart(2, '0')
			const seconds = (Math.floor(this.remainingTime / 1000) % 60)
				.toString()
				.padStart(2, '0')
			return `${days}:${hours}:${minutes}:${seconds}`
		},
		...mapState(['isLoggedIn']),
	},
	mounted() {
		this.interval = setInterval(() => {
			this.remainingTime = this.getRemaining()
		}, 1000)
	},
	destroyed() {
		clearInterval(this.interval)
	},
	methods: {
		getRemaining() {
			const now = Date.now()
			if (now > contestEnd) {
				return 0
			}
			if (now > contestStart) {
				return contestEnd - now
			}
			return contestStart - now
		},
	},
}
</script>

<style lang="postcss">
@property --shadow-color {
	syntax: '<color>';
	inherits: false;
	initial-value: rgba(255, 214, 0, 0);
}

@keyframes blinkLogo {
	0%, 11%, 12%, 13%, 24%, 25.5%, 27%, 50%,
	51.5%, 52.5%, 54%, 65%, 76%, 77%, 78%, 79.5% {
		--shadow-color: rgba(255, 214, 0, 0.1);
	}

	1%, 11.5%, 12.5%, 13.5%, 25%, 26.5%, 27.5%, 51%,
	52%, 53.5%, 54.5%, 66%, 76.5%, 77.5%, 79%, 80%, 100% {
		--shadow-color: rgba(255, 138, 0, 0);
	}
}

.Index {
	margin: 0 auto;
	height: calc(100vh - 4rem);
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	.index-content {
		max-width: 100%;
	}

	.ctf-logo {
		font-family: 'Fredoka One', cursive;
		font-size: 8rem;
		font-weight: 300;
		color: #ffd600;
		-webkit-text-fill-color: transparent;
		animation: blinkLogo 10s step-end infinite;
		text-shadow:
			0 0 3px var(--shadow-color, rgba(255, 214, 0, 0)),
			0 0 10px var(--shadow-color, rgba(255, 214, 0, 0)),
			0 0 20px var(--shadow-color, rgba(255, 214, 0, 0)),
			0 0 30px var(--shadow-color, rgba(255, 214, 0, 0)),
			0 0 40px var(--shadow-color, rgba(255, 214, 0, 0)),
			0 0 50px var(--shadow-color, rgba(255, 214, 0, 0)),
			0 0 70px var(--shadow-color, rgba(255, 214, 0, 0)),
			0 0 100px var(--shadow-color, rgba(255, 214, 0, 0));
		background: linear-gradient(90deg, #ffd600 0%, #ff8a00 100%);
		background-clip: text;
		display: block;
		letter-spacing: 1px;

		@media (max-width: 900px) {
			font-size: 18vw;
		}

		@media (prefers-reduced-motion: reduce) {
			animation: none;
			text-shadow: none;
		}
	}

	.subtitle {
		font-family: 'Roboto', sans-serif;
		font-size: 1.5rem;
		margin-top: -1rem;
		color: #ead2a2;
		opacity: 1;
	}

	.buttons {
		display: flex;
		margin-top: 1rem;
		justify-content: center;
	}

	.button {
		display: block;
		margin: 0 0.5rem;
		width: 10rem;
		height: 2.6rem;
		line-height: 2.6rem;
		border-radius: 9999px;
		font-size: 1.5rem;
		font-family: 'Fredoka One', cursive;
		font-weight: 300;

		&.login {
			background: #2b1c08;
			border: 1px solid #ffd600;
			color: #fff8e7;
		}

		&.register {
			background: linear-gradient(90deg, #ffd600 0%, #ff8a00 100%);
			color: #120d00;
		}
	}

	.timer {
		margin-top: 1rem;
		font-family: 'Roboto', sans-serif;
		font-size: 4rem;
	}
}
</style>
