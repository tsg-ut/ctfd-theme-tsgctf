<template>
	<section class="Team">
		<h2 class="title">
			<span>{{team.name}}</span>
		</h2>
		<div class="score">{{place}} {{score.score}}pts</div>
		<div class="bracket" v-if="bracketFor(team)">
			{{bracketFor(team).name}}
		</div>
		<div class="members-head">Members</div>
		<div class="members">
			<div v-for="member in team.members" :key="member" class="member">
				<span v-if="getUser(member)">{{getUser(member).name}}</span>
				<pulse-loader v-else color="#ffd600" size="10px"/>
			</div>
		</div>
		<div class="table-wrap">
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
						<td>
							<b>{{solve.challenge.name}}</b>
						</td>
						<td>{{solve.challenge.category}}</td>
						<td>{{solve.challenge.value}}</td>
						<td>
							<span v-if="solve.user">
								{{solve.user.name}}
							</span>
							<pulse-loader v-else color="#ffd600" size="10px"/>
						</td>
						<td><iso-timeago :datetime="solve.date" :auto-update="60"/></td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import IsoTimeago from '~/components/IsoTimeago.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

// https://stackoverflow.com/a/13627586/2864502
const formatOrdinals = (i) => {
	const j = i % 10;
	const k = i % 100;
	if (j === 1 && k !== 11) {
		return `${i}st`;
	}
	if (j === 2 && k !== 12) {
		return `${i}nd`;
	}
	if (j === 3 && k !== 13) {
		return `${i}rd`;
	}
	return `${i}th`;
};

export default {
	components: {PulseLoader, IsoTimeago},
	props: {
		team: {
			type: Object,
			required: true,
		},
		score: {
			type: Object,
			required: true,
		},
	},
	computed: {
		place() {
			if (!this.score.pos) {
				return 'Unranked';
			}
			return typeof this.score.pos === 'number' ? formatOrdinals(this.score.pos) : this.score.pos;
		},
		...mapState({
			isStatic: 'isStatic',
		}),
		...mapState('teams', ['brackets']),
		...mapGetters({
			getUser: 'users/getUser',
		}),
	},
	watch: {
		team: {
			immediate: true,
			handler(team) {
				if (this.isStatic) {
					return;
				}
				const solvers = Array.from(new Set([
					...(team.solves || []).map(({user}) => user && user.id),
					...(team.members || []),
				])).filter((id) => id !== undefined && id !== null);
				this.$store.dispatch('users/getUsers', {$axios: this.$axios, ids: solvers});
			},
		},
	},
	methods: {
		bracketFor(team) {
			return this.brackets.find(br => br.id === team.bracket_id) || null;
		},
	},
};
</script>

<style lang="postcss">
.Team {
	.title {
		text-transform: none;
		margin-bottom: 0;
		z-index: -1;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;

		&::before {
			content: 'Team';
			font-family: initial;
			color: #ead2a2;
			font-size: 1rem;
			line-height: 0.2rem;
			text-align: center;
			left: 0;
			right: 0;
			bottom: calc(100% - 0.3rem);
		}
	}

	.verified {
		margin: 1rem 0;
		text-align: center;
	}

	.verified-badge {
		display: inline-block;
		margin: 0 auto;
		background-color: #a8c4af;
		color: #120d00;
		height: 1.5rem;
		line-height: 1.5rem;
		padding: 0 1rem;
		border-radius: 0.5rem;

		& > *, svg {
			vertical-align: text-bottom;
		}
	}

	.score {
		text-align: center;
		font-family: 'Roboto';
		font-size: 2rem;
	}

	.bracket {
		font-family: 'Fredoka One', cursive;
		font-size: 1.5rem;
		font-weight: 300;
		text-align: center;
		color: #ead2a2;
	}

	.members-head {
		font-family: 'Roboto';
		font-size: 1.2rem;
		text-align: center;
		margin-top: 2rem;
	}

	.members {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		max-width: 30rem;
		margin: 0 auto 0;
		justify-content: center;
	}

	.member {
		font-size: 1.5rem;
		margin: 0 0.5rem;
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
