<template>
	<team-profile v-if="privateTeam" :team="privateTeam" :score="privateScore"/>
	<section v-else class="JoinTeam">
		<h2 class="title"><span>Join or Create Team</span></h2>
		<div class="subtitle">In order to participate you must either join or create a team.</div>
		<iso-link to="/teams/join" class="button join">Join Team</iso-link>
		<iso-link to="/teams/new" class="button new">Create Team</iso-link>
	</section>
</template>

<script>
import IsoLink from '~/components/IsoLink.vue';
import TeamProfile from '~/components/TeamProfile.vue';
import {mapState} from 'vuex';

export default {
	components: {IsoLink, TeamProfile},
	async asyncData(context) {
		if (context.store.state.isStatic) {
			return {privateTeam: null};
		}
		const [privateTeam] = await Promise.all([
			context.store.dispatch('teams/getOwnTeam', context),
			context.store.dispatch('teams/fetchBrackets', {$axios: context.$axios, type: 'teams'}),
		]);
		return {privateTeam};
	},
	head() {
		return {
			title: 'Team - TSG LIVE! 17 CTF',
		};
	},
	computed: {
		privateScore() {
			return {score: this.privateTeam.score, pos: this.privateTeam.place};
		},
		...mapState(['isVerified', 'isLoggedIn']),
	},
	mounted() {
		if (!this.isVerified) {
			this.$router.replace({
				path: '/confirm',
			});
			return;
		}

		if (!this.isLoggedIn) {
			this.$router.replace({
				path: '/login',
			});
			return;
		}
	},
};
</script>

<style lang="postcss">
.JoinTeam {
	text-align: center;

	.title {
		margin-bottom: 0;
	}

	.subtitle {
		margin-bottom: 2rem;
		font-size: 1.5rem;
	}

	.button {
		display: block;
		margin: 1rem auto;
		width: 18rem;
		height: 3rem;
		line-height: 3rem;
		border-radius: 9999px;
		font-size: 1.5rem;
		font-family: 'Fredoka One', cursive;
		font-weight: 300;

		&.join {
			background: #2b1c08;
			border: 1px solid #ffd600;
			color: #fff8e7;
		}

		&.new {
			background: linear-gradient(90deg, #ffd600 0%, #ff8a00 100%);
			color: #120d00;
		}
	}
}
</style>
