<template>
	<team-profile :team="team" :score="score"/>
</template>

<script>
import {mapState} from 'vuex';
import TeamProfile from '~/components/TeamProfile.vue';

export default {
	components: {TeamProfile},
	async asyncData(context) {
		const [team] = await Promise.all([
			context.store.dispatch('teams/getTeam', {...context, id: context.route.params.id}),
			context.store.dispatch('scoreboard/updateScoreboard', context),
			context.store.dispatch('teams/fetchBrackets', {$axios: context.$axios, type: 'teams'}),
		]);
		if (team === null) {
			context.error({statusCode: 404, message: 'Team not found'});
		}
	},
	head() {
		return {
			title: `Team ${this.team && this.team.name} - TSG LIVE! 17 CTF`,
		};
	},
	computed: {
		team() {
			return this.teams.get(parseInt(this.$route.params.id)) || {};
		},
		score() {
			return this.$store.getters['scoreboard/getScore'](parseInt(this.$route.params.id)) || {};
		},
		...mapState({
			isStatic: 'isStatic',
			isLoggedIn: 'isLoggedIn',
			isVerified: 'isVerified',
			teams: (state) => state.teams.teams,
		}),
	},
	mounted() {
		if (!this.isStatic && !this.isLoggedIn) {
			this.$router.replace({path: '/login'});
			return;
		}
		if (!this.isStatic && !this.isVerified) {
			this.$router.replace({path: '/confirm'});
		}
	},
};
</script>
