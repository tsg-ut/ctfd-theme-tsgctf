<template>
	<section class="Scoreboard">
		<h2 class="title"><span>Scoreboard</span></h2>
		<table class="scoreboard">
			<thead>
				<tr>
					<td scope="col" class="place"><b>Place</b></td>
					<td scope="col"><b>Team</b></td>
					<td scope="col"><b>Score</b></td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="team in scoreboard" :key="team.name">
					<th scope="row" class="place">{{team.pos}}</th>
					<td>
						<nuxt-link :to="`/teams/${team.account_id}`">{{team.name}}</nuxt-link>
					</td>
					<td>{{team.score}}</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
import {mapState} from 'vuex';

export default {
	computed: {
		...mapState({
			scoreboard: (state) => state.scoreboard.scoreboard,
		}),
	},
	async asyncData(context) {
		await context.store.dispatch('scoreboard/updateScoreboard', context);
	},
	head() {
		return {
			title: 'Scoreboard - TSG CTF',
		};
	},
};
</script>

<style>
.Scoreboard {
	table .place {
		padding-right: 1rem;
		width: 6rem;
		text-align: right;
	}
}
</style>
