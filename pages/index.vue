<template>
	<section class="container">
		<div>
			<h1 class="ctf-logo">
				{{ctfName}}
			</h1>
			<div class="timer">{{timer}}</div>
			<ul class="challenges">
				<li v-for="challenge in challenges" :key="challenge.id">
					{{challenge.name}}
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
import {mapGetters, mapState} from 'vuex';

export default {
	data() {
		return {
			remainingTime: new Date('2019-05-04T07:00:00Z') - Date.now(),
		};
	},
	computed: {
		...mapGetters({
			ctfName: 'ctfName',
		}),
		...mapState({
			challenges: (state) => state.challenges.challenges,
		}),
		timer() {
			const days = Math.floor(this.remainingTime / 1000 / 60 / 60 / 24).toString().padStart(2, '0');
			const hours = (Math.floor(this.remainingTime / 1000 / 60 / 60) % 24).toString().padStart(2, '0');
			const minutes = (Math.floor(this.remainingTime / 1000 / 60) % 60).toString().padStart(2, '0');
			const seconds = (Math.floor(this.remainingTime / 1000) % 60).toString().padStart(2, '0');
			const milliseconds = (this.remainingTime % 1000).toString().padStart(3, '0');
			return `${days}:${hours}:${minutes}:${seconds}`;
		},
	},
	async asyncData(context) {
		await context.store.dispatch('challenges/updateChallenges', context);
	},
	mounted() {
		setInterval(() => {
			this.remainingTime = new Date('2019-05-04T07:00:00Z') - Date.now();
		}, 1000);
	},
};
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.ctf-logo {
	font-family: 'Fredoka One', cursive;
	font-size: 8rem;
	font-weight: 300;
	color: rgb(0, 150, 250);
	-webkit-text-fill-color: transparent;
	background: linear-gradient(90deg, rgb(234, 41, 32) 0%, rgb(128, 8, 230) 100%);
	background-clip: text;
	display: block;
	letter-spacing: 1px;
	margin-left: 1rem;
}

.timer {
	font-family: 'Roboto', sans-serif;
	font-size: 4rem;
}

.challenges {
	display: none;
}
</style>
