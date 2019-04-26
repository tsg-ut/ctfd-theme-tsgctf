<template>
	<section class="Index">
		<div>
			<h1 class="ctf-logo">TSG CTF</h1>
			<p class="subtitle">Pwn, Rev, Web, Crypto, Forensics, Stego, etc...</p>
			<div class="timer">{{timer}}</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			remainingTime: new Date('2019-05-04T07:00:00Z') - Date.now(),
		};
	},
	computed: {
		timer() {
			const days = Math.floor(this.remainingTime / 1000 / 60 / 60 / 24).toString().padStart(2, '0');
			const hours = (Math.floor(this.remainingTime / 1000 / 60 / 60) % 24).toString().padStart(2, '0');
			const minutes = (Math.floor(this.remainingTime / 1000 / 60) % 60).toString().padStart(2, '0');
			const seconds = (Math.floor(this.remainingTime / 1000) % 60).toString().padStart(2, '0');
			return `${days}:${hours}:${minutes}:${seconds}`;
		},
	},
	mounted() {
		setInterval(() => {
			this.remainingTime = new Date('2019-05-04T07:00:00Z') - Date.now();
		}, 1000);
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
	}

	.subtitle {
		font-family: 'Roboto', sans-serif;
		font-size: 1.5rem;
		margin-top: -1rem;
		opacity: 0.3;
	}

	.timer {
		margin-top: 1rem;
		font-family: 'Roboto', sans-serif;
		font-size: 4rem;
	}
}
</style>
