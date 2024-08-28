<template>
  <section class="challenges">
    <h2 class="title"><span>Challenges</span></h2>
		<div v-if="isStarted" class="hide-solved">
			<input id="checkbox" v-model="isHideSolved" type="checkbox">
			<label for="checkbox">Hide solved</label>
		</div>
		<div v-if="isEnded" class="ended">TSG CTF has been ended!<br>Thank you for your pariticipation!</div>
		<div v-if="isStarted" class="challenges-container">
			<div class="side-panel-category">
				<div>
					<h3>Categories</h3>

					<div v-for="(category,index) in categories" :key="category.name" class="category">
						<input :id="category.name+'checkbox'" v-model="categoriesFilter[index]" @change="toggleFilter(index)"  type="checkbox">
						<label :for="category.name+'checkbox'">{{ category.name }}</label>
					</div>
				</div>

			</div>
			<div class="challenges-tiles">
				<div v-for="category in categories" :key="category.name"  >
				<div v-if="!filteredCategories.length ||  filteredCategories.includes(category.name)" class="category-challenges">
					<h3 class="category-challenges-title">{{ category.name }}</h3>
					<div>
						<div v-for="challenge in category.challenges.filter(({solved_by_me}) => !isHideSolved || !solved_by_me)"
								 :key="challenge.id"

								 :class="challengeTileClass(challenge.solved_by_me)"
								 @click="openModal(challenge.id)"
						>
							{{ challenge.name }}
						</div>
					</div>

				</div>

			</div>
			</div>

        </div>
		<div >
			<challenge-modal :display="isChallengeModalOpen" @closeModal="closeModal()"/>
		</div>

  </section>
</template>

<script>
import {mapGetters, mapState} from 'vuex';

import ChallengeModal from '../components/ChallengeModal.vue';
export default {
	components: {ChallengeModal},
	async asyncData(context) {
		await Promise.all([
			//context.store.dispatch('updateDates', context),
			context.store.dispatch('challenges/updateChallenges', context),
		]);
	},
	data() {
		return {
			melody: 0,
			isHideSolved: false,
			isChallengeModalOpen: false,
			categoriesFilter: [],
			filteredCategories: [],
		};
	},
	head() {
		return {
			title: 'Challenges - TSG CTF',
		};
	},
	computed: {
		...mapGetters({
			categories: 'challenges/getCategories',
		}),
		...mapState({
			isStatic: 'isStatic',
			isLoggedIn: 'isLoggedIn',
			isStarted: 'isStarted',
			isEnded: 'isEnded',
			isVerified: 'isVerified',
			isInTeam: 'isInTeam',
			challenges: (state) => state.challenges.challenges,
		}),


	},
	watch: {
		isInTeam(newValue) {
			if (newValue === false) {
				this.$router.replace({
					path: '/team',
				});
			}
		},
	},
	async mounted() {
		if (!this.isStatic && !this.isVerified) {
			await  this.$router.replace({
				path: '/confirm',
			});
			return;
		}

		if (!this.isStatic && !this.isLoggedIn) {
			await this.$router.replace({
				path: '/login',
			});
			return;
		}

		if (!this.isStatic && !this.isInTeam) {
		await	this.$router.replace({
				path: '/team',
			});
		}

		this.melody = Math.floor(Math.random() * 4);
		if (!this.isStatic) {
			 this.interval = setInterval(() => {
				this.$store.dispatch('updateDates', {$axios: this.$axios});
				this.$store.dispatch('challenges/updateChallenges', {$axios: this.$axios});
			}, 60 * 1000);
		}
		this.categoriesFilter = this.categories.map(c=>false)

	},
	destroyed() {
		clearInterval(this.interval);
	},
	methods: {
		closeModal() {
			this.isChallengeModalOpen = false;
		},
		async openModal(id) {
			await this.$store.dispatch('challenges/getSelectedChallengeDetail', {$axios: this.$axios, id});
			this.isChallengeModalOpen = true;
		},
		challengeTileClass(solved_by_me) {
			return {
				'challenge-tile': true,
				'challenge-tile-completed': solved_by_me,
			};
		},
		toggleFilter(index){
			if(this.categoriesFilter[index]){
				this.filteredCategories.push(this.categories[index].name);
			}else{
				this.filteredCategories = this.filteredCategories.filter(e=>e!== this.categories[index].name);
			}

		}
	},
};
</script>

<style lang="postcss" scoped>



.challenges {
	max-width: 1200px;
	margin: 0 auto;
	min-height: 100vh;


	.title {
		margin-bottom: 0;
		word-break: break-word;
	}

	.hide-solved {
		text-align: center;
		font-family: 'Roboto',serif;
		font-size: 1.2rem;
	}

	.ended {
		font-size: 2rem;
		font-family: 'Fredoka One', cursive;
		font-weight: 300;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-top: 3rem;
		margin-bottom: 1rem;
		word-break: break-word;
	}



	.category-title {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
		& > div {
			flex: 1;
			border-top: 1px solid #ccc;
		}
	}
	.category-name {
		display: inline-block;
		text-transform: capitalize;
		font-family: "General Sans Regular", sans-serif;
		font-size: 2rem;
		text-align: center;
		padding: 0.5rem 1rem;
		background: none;
		position: relative;
		color: rgba(100, 233, 160, 0.692);

		&::before {
			content: '';
			position: absolute;

			top: 0.2rem;
			left: 0.2rem;
			right: 0.2rem;
			bottom: 0.2rem;
			opacity: 0.5;
		}
	}

	.challenges {
		list-style: none;
		padding: 0;
	}

	.not-started {
		text-align: center;
		font-size: 2.5rem;
		font-family: 'Fredoka One', cursive;
		font-weight: 300;
		padding: 0;
		margin-top: 6rem;
		line-height: 2rem;
	}

	.protip {
		font-family: 'Roboto',serif;
		font-size: 1rem;
		margin-top: 2rem;
		opacity: 0.3;

		a {
			color: cyan;
		}
	}
}

.separator{
    height: 1px;
    width: 100%;
    border-bottom:1px solid  grey;
}
.challenges-container{
    display: flex;
		flex-grow: 1;
	.challenges-tiles{
		width: 70%;
	}

}
.side-panel-category{


    width: 30%;
    float: left;
    color: white;

	display: flex;
	flex-direction: column;
	margin: 10px 20px;
	&>div{
		padding: 10px 20px;
		background-color: #ffffff09;
		border-radius: 10px;
	}

    &>h3{
		padding: 5px;
	}


input[type='checkbox'] + label {
	position: relative;
	cursor: pointer;
	user-select: none;
	padding-left: 1.8rem;
}


	input[type='checkbox'] + label::before {
	content: '';
	display: block;
	width: 1.3rem;
	height: 1.3rem;
	left: 0;
	top: 0rem;
	border: 1px solid #ffffff;
	position: absolute;
	opacity: 0.8;
	transition: all 0.07s;
}

input[type='checkbox']:checked + label::before {
	width: 8px;
	top: -0.2rem;
	left: 0.2rem;
	border-top-color: transparent;
	border-left-color: transparent;
	transform: translateY(5px) rotate(45deg);
}


}
.category{
		padding: 0 20px;
	font-family: 'Roboto',serif;
		font-size: 1.2rem;
		margin: 10px 0;
		font-weight: bold;
}


.category-challenges{
	padding: 10px;
	background-color: #ffffff09;

	border-radius: 10px;
	margin: 10px 0;
	float: right;
	color: white;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	font-weight: bold;
	& > div {

		display: flex;
		flex-wrap: wrap;
		padding: 10px;
		margin: 10px;
		border-radius: 10px;
		color: white;
		font-weight: bold;

}

.category-challenges-title{
	font-size: 1.4rem;
	color: rgba(100, 233, 160, 0.692);
	font-weight: bold;
}

.challenge-tile{
	margin: 10px;
	padding: 20px;
	width: 30%;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #333;
	border-radius: 10px;
	color: white;
	font-weight: bold;
	&:hover {
		background-color: #4e4e4e;
	}
}

.challenge-tile-completed{
	background-color: #14a807;
}.challenge-tile-completed:hover{
	background-color: #14a807;
}

}

</style>
