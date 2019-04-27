<template>
	<section class="Challenges">
		<h2 class="title"><span>Challenges</span></h2>
		<div v-if="isStarted">
			<div v-for="category in categories" :key="category.name" class="category">
				<h3 class="category-name">{{category.name}}</h3>
				<ul class="challenges">
					<challenge v-for="challenge in category.challenges" :key="challenge.id" :challenge="challenge"/>
				</ul>
			</div>
		</div>
		<div v-else class="not-started">
			<p>Hang tight!</p>
			<p class="protip">
				ProTip: We listen to
				<a
					v-if="melody === 0"
					href="https://www.youtube.com/watch?v=d_T1StgldnM"
					target="_blank"
					rel="noopener"
				>
					this Iwashi melody
				</a>
				<a
					v-if="melody === 1"
					href="https://www.youtube.com/watch?v=ceyr4ezheOg"
					target="_blank"
					rel="noopener"
				>
					this Maguro melody
				</a>
				<a
					v-if="melody === 2"
					href="https://www.youtube.com/watch?v=C9PFVo1FEwU"
					target="_blank"
					rel="noopener"
				>
					this Yatsume melody
				</a>
				<a
					v-if="melody === 3"
					href="https://www.youtube.com/watch?v=ok7UX3utzvI"
					target="_blank"
					rel="noopener"
				>
					this Kurage melody
				</a>
				to tune up our mind. Follow us?
			</p>
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
			melody: 0,
		};
	},
	computed: {
		...mapGetters({
			categories: 'challenges/getCategories',
		}),
		...mapState({
			isLoggedIn: 'isLoggedIn',
			isStarted: 'isStarted',
			isInTeam: 'isInTeam',
			challenges: (state) => state.challenges.challenges,
		}),
	},
	watch: {
		isInTeam(newValue) {
			if (newValue === false) {
				this.$router.push({
					path: '/team',
				});
			}
		},
	},
	async asyncData(context) {
		await context.store.dispatch('challenges/updateChallenges', context);
	},
	mounted() {
		if (!this.isLoggedIn) {
			this.$router.push({
				path: '/login',
			});
			return;
		}

		if (!this.isInTeam) {
			this.$router.push({
				path: '/team',
			});
		}

		this.melody = Math.floor(Math.random() * 4);
	},
	head() {
		return {
			title: 'Challenges - TSG CTF',
		};
	},
};
</script>

<style>
.Challenges {
	max-width: 800px;
	margin: 0 auto;
	min-height: 100vh;

	.category {
		margin-top: 3rem;
		text-align: center;
	}

	.category-name {
		display: inline-block;
		text-transform: capitalize;
		font-family: 'Roboto';
		font-size: 2rem;
		text-align: center;
		padding: 0.5rem 1rem;
		background: #520514;
		position: relative;
		margin-bottom: 1rem;

		&::before {
			content: '';
			position: absolute;
			border: dashed 1px white;
			top: 0.3rem;
			left: 0.3rem;
			right: 0.3rem;
			bottom: 0.3rem;
		}
	}

	.challenges {
		list-style: none;
		padding: 0;
	}

	.not-started {
		text-align: center;
		font-size: 2.5rem;
		font-family: 'Fredoka One', cursive;
		font-weight: 300;
		padding: 0;
		margin-top: 6rem;
		line-height: 2rem;
	}

	.protip {
		font-family: 'Roboto';
		font-size: 1rem;
		margin-top: 2rem;
		opacity: 0.3;

		a {
			color: cyan;
		}
	}
}
</style>
