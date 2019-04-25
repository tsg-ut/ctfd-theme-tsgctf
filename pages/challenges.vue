<template>
	<section class="Challenges">
		<h2 class="title"><span>Challenges</span></h2>
		<div>
			<ul class="challenges">
				<challenge v-for="challenge in challenges" :key="challenge.id" :challenge="challenge"/>
			</ul>
		</div>
	</section>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import Challenge from '~/components/Challenge.vue';

export default {
	components: {Challenge},
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
.Challenges {
	max-width: 800px;
	margin: 0 auto;
	min-height: 100vh;

	& > .title {
		font-size: 3rem;
		font-family: 'Fredoka One', cursive;
		font-weight: 300;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-top: 3rem;
		margin-bottom: 1rem;

		span {
			color: rgb(0, 150, 250);
			-webkit-text-fill-color: transparent;
			background: linear-gradient(90deg, rgb(255, 24, 13) 0%, rgb(138, 0, 255) 100%);
			background-clip: text;
		}
	}

	.challenges {
		list-style: none;
		padding: 0;
	}
}
</style>
