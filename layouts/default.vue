<template>
	<div>
		<div class="header">
			<div class="title">
				<nuxt-link to="/">{{ctfName}}</nuxt-link>
			</div>
			<div class="spacer"/>
			<div class="menu">
				<div class="menu-item">
					<nuxt-link to="/notifications">Notifications</nuxt-link>
				</div>
				<div class="menu-item">
					<nuxt-link to="/scoreboard">Scoreboard</nuxt-link>
				</div>
				<div class="menu-item">
					<nuxt-link to="/challenges">Challenges</nuxt-link>
				</div>
			</div>
		</div>
		<div class="content">
			<nuxt/>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
	computed: {
		...mapGetters({
			ctfName: 'ctfName',
		}),
	},
};
</script>

<style>
html {
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	background: radial-gradient(circle, #300e29 0%, #130414 100%);;
	color: white;
}

body {
	background: url('../static/background.svg');
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
}

a {
	text-decoration: none;
	color: inherit;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

.header {
	width: 100%;
	height: 4rem;
	line-height: 4rem;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0) 100%);
	color: rgba(255, 255, 255, 0.8);
}

.title {
	font-family: 'Fredoka One', cursive;
	font-size: 2rem;
	display: block;
	letter-spacing: 1px;
	margin-left: 1rem;
}

.spacer {
	flex: 1 1 0;
}

.menu {
	display: flex;
	font-family: 'Roboto', sans-serif;
	font-size: 1.2rem;
	margin-right: 1rem;
	text-transform: uppercase;
}

.menu-item {
	margin: 0 0.5rem;
}

.content {
	padding-top: 4rem;
}
</style>
