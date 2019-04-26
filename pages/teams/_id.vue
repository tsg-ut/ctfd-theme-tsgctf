<template>
	<section class="Team">
		<h2 class="title"><span>{{team.name}}</span></h2>
		<div class="score">{{formatOrdinals(score.pos)}} {{score.score}}pts</div>
		<table class="scoreboard">
			<thead>
				<tr>
					<td scope="col"><b>Challenge</b></td>
					<td scope="col"><b>Category</b></td>
					<td scope="col"><b>Value</b></td>
					<td scope="col"><b>Solver</b></td>
					<td scope="col"><b>Time</b></td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="solve in team.solves" :key="solve.challenge_id">
					<td><b>{{solve.challenge.name}}</b></td>
					<td>{{solve.challenge.category}}</td>
					<td>{{solve.challenge.value}}</td>
					<td>
						<span v-if="getUser(solve.user)">
							{{getUser(solve.user).name}}
						</span>
						<pulse-loader v-else color="white" size="10px"/>
					</td>
					<td>{{solve.date}}</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

const pr = new Intl.PluralRules('en-US', {type: 'ordinal'});
const suffixes = new Map([
	['one', 'st'],
	['two', 'nd'],
	['few', 'rd'],
	['other', 'th'],
]);
const formatOrdinals = (n) => {
	const rule = pr.select(n);
	const suffix = suffixes.get(rule);
	return `${n}${suffix}`;
};

export default {
	components: {PulseLoader},
	computed: {
		team(context) {
			return this.teams.get(parseInt(this.$route.params.id)) || {};
		},
		score(context) {
			return this.$store.getters['scoreboard/getScore'](parseInt(this.$route.params.id)) || {};
		},
		...mapState({
			teams: (state) => state.teams.teams,
		}),
		...mapGetters({
			getUser: 'users/getUser',
		}),
	},
	async asyncData(context) {
		const [team] = await Promise.all([
			context.store.dispatch('teams/getTeam', {...context, id: context.route.params.id}),
			context.store.dispatch('scoreboard/updateScoreboard', context),
		]);
		if (team === null) {
			context.error({statusCode: 404, message: 'Team not found'});
		}
	},
	mounted() {
		const solvers = Array.from(new Set(this.team.solves.map(({user}) => user)));
		this.$store.dispatch('users/getUsers', {$axios: this.$axios, ids: solvers});
	},
	methods: {formatOrdinals},
};
</script>

<style>
.Team {
	.title {
		text-transform: none;
		position: relative;
		margin-bottom: 0;

		&::before {
			content: 'Team';
			position: absolute;
			font-family: initial;
			color: rgba(255, 255, 255, 0.6);
			font-size: 1rem;
			text-align: center;
			left: 0;
			right: 0;
			bottom: calc(100% - 0.3rem);
		}
	}

	.score {
		text-align: center;
		font-family: 'Roboto';
		font-size: 2rem;
	}

	table {
		max-width: 1000px;
		margin-top: 4rem;
	}

	thead {
		font-size: 1.4rem;
	}

	tbody {
		font-size: 1.2rem;
	}
}
</style>