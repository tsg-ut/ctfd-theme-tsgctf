<template>
	<section class="Challenges">
		<h2 class="title"><span>Challenges</span></h2>
		<div v-for="category in categories" :key="category.name" class="category">
			<h3 class="category-name">{{category.name}}</h3>
			<ul class="challenges">
				<challenge v-for="challenge in category.challenges" :key="challenge.id" :challenge="challenge"/>
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
			categories: 'challenges/getCategories',
		}),
		...mapState({
			isLoggedIn: 'isLoggedIn',
			isInTeam: 'isInTeam',
			challenges: (state) => state.challenges.challenges,
		}),
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
}
</style>
