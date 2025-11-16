<template>
	<section class="Scoreboard">
		<h2 class="title">
			<span>Score<wbr>board</span>
		</h2>
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
					<tr v-for="team in scoreboard" :key="team.id" :class="{active: team.account_id === myTeam.id}">
						<th scope="row" class="place">{{team.pos}}</th>
						<td class="team">
							<div class="team-flag" :style="getFlagStyle(team.country)"/>
							<iso-link :to="`/teams/${team.account_id}`" class="team-name">
								<span>{{team.name}}</span>
							</iso-link>
							<span v-if="team.bracket_name === 'Domestic'" class="bracket">
								{{ team.bracket_name }}
							</span>
							<span v-else-if="isDomestic(team)" class="bracket">
								{{ bracketFor(team).name }}
							</span>
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
import CheckCircle from 'vue-material-design-icons/CheckCircle.vue';
import IsoLink from '~/components/IsoLink.vue';

export default {
	components: {IsoLink, CheckCircle},
	async asyncData(context) {
		await context.store.dispatch('scoreboard/update', context);
	},
	data() {
		return {
			brackets: [],
		};
	},
	head() {
		return {
			title: 'Scoreboard - TSG CTF',
		};
	},
	computed: {
		...mapGetters({
			scoreboard: 'scoreboard/getScoreboard',
		}),
		...mapState({
			isStatic: 'isStatic',
			myTeam: 'team',
		}),
	},
	mounted() {
		if (!this.isStatic) {
			this.$store.dispatch('scoreboard/update', {$axios: this.$axios});
			this.interval = setInterval(() => {
				this.$store.dispatch('scoreboard/updateScoreboard', {$axios: this.$axios});
			}, 60 * 1000);
		}
		this.$axios
			.$get('/api/v1/brackets', {
				params: { type: 'teams' },
			})
			.then((res) => {
				this.brackets = res.data || [];
			})
			.catch((err) => {
				console.error('Failed to load brackets:', err);
			});
	},
	destroyed() {
		clearInterval(this.interval);
	},
	methods: {
		getFlagStyle(countryCode) {
			if (countryCode === null || countryCode === '') {
				return {backgroundColor: 'transparent'};
			}
			return {
				backgroundImage: `url(https://cdn.jsdelivr.net/gh/behdad/region-flags@gh-pages/svg/${countryCode.toUpperCase()}.svg)`,
			};
		},
		bracketFor(team) {
			return this.brackets.find(br => br.id === team.bracket_id) || null;
		},
		isDomestic(team) {
			const br = this.bracketFor(team);
			return br && br.name === 'Domestic';
		}
	},
};
</script>

<style lang="postcss">
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

	.team-flag {
		display: inline-block;
		width: 27px;
		height: 18px;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}

	.team-name > * {
		vertical-align: middle;
	}

	.bracket {
		display: inline-block;
		font-family: 'Fredoka One', cursive;
		font-size: 1.2rem;
		font-weight: 200;
	}

	tr.active {
		background: rgba(255, 0, 0, 0.3);
	}
}
</style>
