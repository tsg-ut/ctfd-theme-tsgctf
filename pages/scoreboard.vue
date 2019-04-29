<template>
	<section class="Scoreboard">
		<h2 class="title"><span>Score<wbr>board</span></h2>
		<div class="table-wrap">
			<table class="scoreboard">
				<thead>
					<tr>
						<td scope="col" class="place"><b>Place</b></td>
						<td scope="col"><b>Team</b></td>
						<td scope="col"><b>Score</b></td>
					</tr>
				</thead>
				<tbody>
					<tr v-for="team in scoreboard" :key="team.name" :class="{active: team.account_id === myTeam.id}">
						<th scope="row" class="place">{{team.pos}}</th>
						<td class="team">
							<nuxt-link :to="`/teams/${team.account_id}`">{{team.name}}</nuxt-link>
						</td>
						<td>{{team.score}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

<script>
import {mapGetters, mapState} from 'vuex';

export default {
	computed: {
		...mapGetters({
			scoreboard: 'scoreboard/getScoreboard',
		}),
		...mapState({
			myTeam: 'team',
		}),
	},
	async asyncData(context) {
		await context.store.dispatch('scoreboard/update', context);
	},
	methods: {
		getFlag(countryCode) {
			return `https://cdn.jsdelivr.net/gh/behdad/region-flags@gh-pages/svg/${countryCode.toUpperCase()}.svg`;
		},
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

	.team {
		max-width: 18rem;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	tr.active {
		background: rgba(255, 0, 0, 0.3);
	}
}
</style>
