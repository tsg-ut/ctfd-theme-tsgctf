<script >
import {mapGetters, mapState} from "vuex";
import VueApexCharts from 'vue-apexcharts'
export default {
	components:{
		 apexchart:VueApexCharts
	},
	data() {
		return {series: [],
			chartOptions: {
				annotations:{
					xaxis:[{
						label:{
							style:{
								color: '#23f'
							}
						}
					}]
				},
				legend:{
					labels:{
						colors: ['#fff']
					}
				},
				chart: {
					height: 350,
					type: 'line',
					zoom: {
						enabled: false
					}
				},
				dataLabels: {
					enabled: false,
					background:{
						enabled: false
					}
				},
				tooltip:{
					enabled: false
				},
				stroke: {
					curve: 'straight'
				},
				title: {
					text: 'Top 10',
					align: 'center',
					style:{
						color: '#fff',
						fontSize:'16px'
					}
				},
				grid: {
					row: {
						colors: [ 'transparent'], // takes an array which will be repeated on columns
						opacity: 0.5
					},
				},
				xaxis: {
					categories: [],
					labels:{
						style:{
							fontSize: "14px",
							colors: []
						}
					}

				},
				yaxis: {

					labels:{
						style:{
							fontSize: "14px",
							colors: ['#fff']
						}
					}

				}
			},
		}


	},
	async asyncData(context) {
		await context.store.dispatch('scoreboard/update', context);
	},
	computed: {
		...mapGetters({
			scoreboard: 'scoreboard/getScoreboard',
			scoreboardTop10: "scoreboard/getScoreboardTop10"
		}),
		...mapState({
			isStatic: 'isStatic',
			myTeam: 'team',
		}),
	},
	async mounted(){
		if (!this.isStatic) {
			await this.$store.dispatch('scoreboard/update', {$axios: this.$axios});

			this.interval = setInterval(() => {
				this.$store.dispatch('scoreboard/updateScoreboard', {$axios: this.$axios});
			}, 60 * 1000);

			await this.initGraph()
			this.interval = setInterval(() => {
				this.$store.dispatch('scoreboard/updateScoreboardTop10', {$axios: this.$axios});
				const xvalues = this.getXaxisValues()

				this.series = this.getYaxisValues(xvalues)
				this.$refs.realtimeChart.updateOptions(this.generateGraphOptions(xvalues,this.series))

			}, 30*1000); // 30s refresh graph


		}
	},	destroyed() {
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
		getXaxisValues(){
			var categories = ['0'];
			for(let i in this.scoreboardTop10){
				categories =[... new Set(categories.concat(this.scoreboardTop10[i].solves.map(e=>e.date.split('T')[1].split('.')[0])))];
			}
			return categories
		},
		generateGraphOptions(xValues,yValues){
			return {
				xaxis:{
					categories: xValues,
					labels:{
						style:{
							fontSize: "14px",
							colors: xValues.map(e=>'#fff')
						}
					}
				},
				legend:{
					fontSize: '14px',
					labels:{
						colors:yValues.map(e=>'#fff')
					}
				}
			}
		},
		getYaxisValues(xaxis){
			var series = []
			var flagCummul=[]
			for(let i in this.scoreboardTop10){

				var flagsValues = xaxis.map(e=>{
					if(this.scoreboardTop10[i].solves.map(e=>e.date.split('T')[1].split('.')[0]).includes(e)){return this.scoreboardTop10[i].solves.find(f=>f.date.split('T')[1].split('.')[0] === e).value}
					return 0
				})

				flagCummul = flagsValues.reduce((accumulateur, valeurActuelle, index) => {
					if (index === 0) {
						accumulateur.push(valeurActuelle);
					} else {
						accumulateur.push(accumulateur[index - 1] + valeurActuelle);
					}
					return accumulateur;
				}, []);

				series.push({"name":this.scoreboardTop10[i].name,"data":flagCummul})
			}
			return series
		},

		async initGraph(){
			await  this.$store.dispatch('scoreboard/updateScoreboardTop10', {$axios: this.$axios});
			const xvalues = this.getXaxisValues()
			this.series = this.getYaxisValues(xvalues)
			this.$refs.realtimeChart.updateOptions(this.generateGraphOptions(xvalues,this.series))
			console.log(this.$refs.realtimeChart)
		}
	},
};
</script>

<template>
	<div id="myChart">
		<apexchart ref="realtimeChart" type="line" height="350" :options="chartOptions" :series="series" ></apexchart>
	</div>
</template>

<style scoped lang="postcss">

</style>
