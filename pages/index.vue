<template>
	<section class="Index">
		<div>
			<h1 class="ctf-logo">TSG CTF</h1>
			<p class="subtitle">Pwn, Rev, Web, Crypto, Forensics, Stego, etc...</p>
			<div class="timer">{{timer}}</div>
			<div v-if="!isLoggedIn" class="buttons">
				<nuxt-link to="/login" class="button login">Login</nuxt-link>
				<nuxt-link to="/register" class="button register">Register</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex';

const contestStart = new Date('2019-05-04T07:00:00Z').getTime();
const contestEnd = new Date('2019-05-05T07:00:00Z').getTime();

export default {
	data() {
		return {
			remainingTime: contestStart - Date.now(),
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
			const now = Date.now();
			if (now > contestEnd) {
				this.remainingTime = 0;
			} else if (now > contestStart) {
				this.remainingTime = contestEnd - now;
			} else {
				this.remainingTime = contestStart - now;
			}
		}, 1000);
	},
	destroyed() {
		clearInterval(this.interval);
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
