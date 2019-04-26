<template>
	<div class="Challenge">
		<div class="list-marker">
			<div class="checkbox"/>
		</div>
		<div class="list-content">
			<div class="title" @click="onClickTitle">
				{{challenge.name}}
				<span class="points">
					{{challenge.value}}pts
				</span>
			</div>
			<div v-if="isOpen" class="details">
				<div v-if="challenge.details" class="description">{{challenge.details.description}}</div>
				<div v-else class="description-loading">
					<pulse-loader color="#4f0f6b"/>
				</div>
				<form class="flag-form">
					<input type="text" class="flag-input" placeholder="TSGCTF{......}">
					<button type="submit" class="flag-submit">Send</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
	components: {PulseLoader},
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
	margin-bottom: 30px;
	display: flex;
	text-align: left;

	.list-marker {
		flex: 0 0 48px;
		position: relative;

		.checkbox {
			width: 42px;
			height: 42px;
			position: absolute;
			top: 3px;
			left: 0;
			background: url('../static/checkbox_on.svg');
			background-size: cover;
			opacity: 0.8;
		}
	}

	.list-content {
		width: 100%;
	}

	&:not(:last-child) .list-marker::before {
		content: '';
		position: absolute;
		background: rgba(255, 255, 255, 0.5);
		top: 46px;
		left: 20px;
		bottom: -30px;
		width: 3px;
		border-radius: 3px;
	}

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

	.details {
		margin-top: 0.5rem;
		margin-left: 2rem;
		background: rgba(255, 255, 255, 0.2);
		padding: 1rem;
		width: 100%;
		box-sizing: border-box;
	}

	.description {
		white-space: pre-line;
	}

	.description-loading {
		height: 6rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.flag-form {
		display: flex;
		margin-top: 1rem;
	}

	.flag-input {
		flex: 1 1 0;
		height: 2.5rem;
		border-radius: 9999px;
		margin-right: 0.5rem;
		padding: 0 1rem;
		font-family: 'Roboto', sans-serif;
		font-size: 1.4rem;
		background: #DDD;
		color: #333;
	}

	.flag-submit {
		flex: 0 0 6rem;
		height: 2.5rem;
		border-radius: 9999px;
		font-size: 1.5rem;
		font-family: 'Fredoka One', cursive;
		font-weight: 300;
		background: linear-gradient(90deg, #3e91a6 0%, #5e0fa9 100%);
	}
}
</style>
