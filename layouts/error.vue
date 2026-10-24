<template>
	<section class="error-page" aria-labelledby="error-title">
		<div class="error-content">
			<div class="error-code" aria-hidden="true">{{ statusCode }}</div>
			<h1 id="error-title">{{ title }}</h1>
			<p class="error-description">
				{{ isNotFound
					? 'The page you are looking for could not be found.'
					: 'We could not load this page. Please try again in a moment.' }}
			</p>
			<iso-link to="/" class="home-link">Back to home <span aria-hidden="true">→</span></iso-link>
		</div>
	</section>
</template>

<script>
import IsoLink from '~/components/IsoLink.vue';

export default {
	components: {IsoLink},
	props: {
		error: {
			type: Object,
			default: () => ({}),
		},
	},
	computed: {
		statusCode() {
			return this.error.statusCode || 500;
		},
		isNotFound() {
			return this.statusCode === 404;
		},
		title() {
			return this.isNotFound ? 'Page not found' : 'Something went wrong';
		},
	},
	head() {
		return {
			title: `${this.statusCode} - ${this.title} - TSG LIVE! 17 CTF`,
			meta: [{hid: 'robots', name: 'robots', content: 'noindex'}],
		};
	},
};
</script>

<style scoped>
.error-page {
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 65vh;
	padding: 3rem 0 1rem;
	text-align: center;
}

.error-content {
	width: 100%;
	max-width: 36rem;
}

.error-code {
	margin: 0.5rem 0;
	font-family: 'Fredoka One', cursive;
	font-size: clamp(7rem, 25vw, 13rem);
	line-height: 1.1;
	letter-spacing: 0.03em;
	color: #ffd600;
	background: linear-gradient(120deg, #ffd600 15%, #ff8a00 90%);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	filter: drop-shadow(0 0 2rem rgba(255, 138, 0, 0.18));
}

#error-title {
	margin: 1rem 0;
	font-family: 'Fredoka One', cursive;
	font-size: clamp(1.7rem, 6vw, 2.5rem);
	font-weight: 400;
	color: #fff8e7;
}

.error-description {
	max-width: 27rem;
	margin: 0 auto;
	font-size: 1.1rem;
	font-weight: 700;
	line-height: 1.7;
	color: #ead2a2;
}

.home-link {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	margin-top: 2rem;
	padding: 0.85rem 1.6rem;
	border: 1px solid #ffb000;
	border-radius: 9999px;
	font-family: 'Fredoka One', cursive;
	font-size: 1.15rem;
	color: #120d00;
	background: linear-gradient(90deg, #ffd600, #ff8a00);
	transition: box-shadow 0.15s;
}

.home-link:hover {
	box-shadow: 0 0 1.5rem rgba(255, 214, 0, 0.25);
}

.home-link:focus-visible {
	outline: 2px solid #fff8e7;
	outline-offset: 5px;
}

@media (prefers-reduced-motion: reduce) {
	.home-link {
		transition: none;
	}
}
</style>
