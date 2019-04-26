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
					<td><nuxt-link :to="`/teams/${team.account_id}`">{{team.name}}</nuxt-link></td>
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
	mounted() {
		setInterval(() => {
			this.remainingTime = new Date('2019-05-04T07:00:00Z') - Date.now();
		}, 1000);
	},
};
</script>

<style>
.Scoreboard {
	.scoreboard {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
		font-size: 1.5rem;
		border-collapse: collapse;

		.place {
			padding-right: 1rem;
			width: 6rem;
			text-align: right;
		}

		a {
			color: #90cbff;
		}
	}

	tbody td {
		font-family: 'Roboto';
	}

	tr {
		height: 3rem;
	}

	tbody tr {
		border-top: rgba(255, 255, 255, 0.7) 1px solid;
	}
}
</style>
