<template>
	<section class="Index">
		<div class="index-content">
			<h1 class="ctf-logo">TSG CTF</h1>
			<p class="subtitle">Pwn, Rev, Web, Crypto, Forensics, Stego, etc...</p>
			<div class="timer">{{timer}}</div>
			<div v-if="!isLoggedIn" class="buttons">
				<iso-link to="/login" class="button login">Login</iso-link>
				<iso-link to="/register" class="button register">Register</iso-link>
			</div>
		</div>
	</section>
</template>

<script>
import IsoLink from '~/components/IsoLink.vue';
import {mapState} from 'vuex';

const contestStart = new Date('2019-05-04T07:00:00Z').getTime();
const contestEnd = new Date('2019-05-05T07:00:00Z').getTime();

export default {
	components: {IsoLink},
	data() {
		return {
			remainingTime: this.getRemaining(),
		};
	},
	computed: {
		timer() {
			const days = Math.floor(this.remainingTime / 1000 / 60 / 60 / 24)
				.toString()
				.padStart(2, '0');
			const hours = (Math.floor(this.remainingTime / 1000 / 60 / 60) % 24).toString().padStart(2, '0');
			const minutes = (Math.floor(this.remainingTime / 1000 / 60) % 60).toString().padStart(2, '0');
			const seconds = (Math.floor(this.remainingTime / 1000) % 60).toString().padStart(2, '0');
			return `${days}:${hours}:${minutes}:${seconds}`;
		},
		...mapState(['isLoggedIn']),
	},
	mounted() {
		this.interval = setInterval(() => {
			this.remainingTime = this.getRemaining();
		}, 1000);
	},
	destroyed() {
		clearInterval(this.interval);
	},
	methods: {
		getRemaining() {
			const now = Date.now();
			if (now > contestEnd) {
				return 0;
			}
			if (now > contestStart) {
				return contestEnd - now;
			}
			return contestStart - now;
		},
	},
	head() {
		return {
			title: 'TSG CTF',
		};
	},
};
</script>

<style>
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
		color: rgb(0, 150, 250);
		-webkit-text-fill-color: transparent;
		background: linear-gradient(90deg, rgb(255, 24, 13) 0%, rgb(138, 0, 255) 100%);
		background-clip: text;
		display: block;
		letter-spacing: 1px;
		mix-blend-mode: screen;

		@media (max-width: 900px) {
			font-size: 18vw;
		}
	}

	.subtitle {
		font-family: 'Roboto', sans-serif;
		font-size: 1.5rem;
		margin-top: -1rem;
		opacity: 0.3;
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
			background: linear-gradient(90deg, #6299a7 0%, #21207d 100%);
		}

		&.register {
			background: linear-gradient(90deg, #ffc107 0%, #f44336 100%);
		}
	}

	.timer {
		margin-top: 1rem;
		font-family: 'Roboto', sans-serif;
		font-size: 4rem;
	}
}
</style>
