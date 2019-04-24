<template>
	<section class="container">
		<div>
			<logo/>
			<h1 class="title">
				{{ctfName}}
			</h1>
			<h2 class="subtitle">
				Custom CTFd theme made for TSG CTF
			</h2>
			<div class="links">
				<a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
				<a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
			</div>
			<ul>
				<li v-for="challenge in challenges" :key="challenge.id">
					{{challenge.name}}
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import Logo from '~/components/Logo.vue';

export default {
	components: {
		Logo,
	},
	computed: {
		...mapGetters({
			ctfName: 'ctfName',
		}),
		...mapState({
			challenges: (state) => state.challenges.challenges,
		}),
	},
	async asyncData(context) {
		await context.store.dispatch('challenges/updateChallenges', context);
	},
};
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
