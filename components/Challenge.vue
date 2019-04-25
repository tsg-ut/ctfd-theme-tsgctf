<template>
	<div class="Challenge">
		<div class="title" @click="onClickTitle">
			{{challenge.name}}
			<span class="points">
				{{challenge.value}}pts
			</span>
		</div>
		<div v-if="isOpen && challenge.details" class="description">{{challenge.details.description}}</div>
	</div>
</template>

<script>
export default {
	props: {
		challenge: {
			required: true,
			type: Object,
		},
	},
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		onClickTitle() {
			if (this.isOpen) {
				this.isOpen = false;
			} else {
				this.$store.dispatch('challenges/getDetail', {$axios: this.$axios, id: this.challenge.id});
				this.isOpen = true;
			}
		},
	},
};
</script>

<style>
.Challenge {
	margin-left: 2rem;
	margin-bottom: 1rem;

	.title {
		font-size: 2.5rem;
		font-family: 'Fredoka One', cursive;
		font-weight: 300;
		color: rgb(0, 150, 250);
		-webkit-text-fill-color: transparent;
		background: linear-gradient(90deg, rgb(255, 24, 13) 0%, rgb(138, 0, 255) 100%);
		background-clip: text;
		display: inline-block;
		letter-spacing: 1px;
		cursor: pointer;
	}

	.points {
		background: rgba(255, 255, 255, 0.6);
		display: inline-block;
		color: #0d030e;
		-webkit-text-fill-color: #0d030e;
		font-size: 1.2rem;
		margin-left: 0.2rem;
		padding: 0.1rem 0.3rem;
		vertical-align: middle;
		letter-spacing: 0;
		border-radius: 3px;
	}

	.description {
		margin-top: 0.5rem;
		margin-left: 2rem;
		background: rgba(255, 255, 255, 0.2);
		padding: 1rem;
		white-space: pre-line;
	}
}
</style>
