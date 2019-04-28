<template>
	<div>
		<div class="header">
			<div class="title">
				<nuxt-link to="/">TSG CTF</nuxt-link>
			</div>
			<div class="spacer"/>
			<div v-if="isLoggedIn" class="menu">
				<div class="menu-item">
					<nuxt-link to="/notifications">Notifications</nuxt-link>
				</div>
				<div class="menu-item">
					<nuxt-link to="/rules">Rules</nuxt-link>
				</div>
				<div class="menu-item">
					<nuxt-link to="/scoreboard">Scoreboard</nuxt-link>
				</div>
				<div class="menu-item">
					<nuxt-link to="/challenges">Challenges</nuxt-link>
				</div>
				<div v-on-clickaway="onClickaway" class="menu-item dropdown">
					<div class="dropdown-trigger" @click="isDropping = !isDropping">
						{{team && team.name}}
					</div>
					<div v-if="isDropping" class="dropdown-menu">
						<nuxt-link :to="isInTeam ? `/teams/${team && team.id}` : '/team'" class="dropdown-menu-item">Team</nuxt-link>
						<nuxt-link to="/settings" class="dropdown-menu-item">Settings</nuxt-link>
						<a href="/logout" class="dropdown-menu-item" @click="logout">Logout</a>
					</div>
				</div>
			</div>
			<div v-else class="menu">
				<div class="menu-item">
					<nuxt-link to="/rules">Rules</nuxt-link>
				</div>
				<div class="menu-item">
					<nuxt-link to="/scoreboard">Scoreboard</nuxt-link>
				</div>
				<div class="menu-item">
					<nuxt-link to="/login">Login</nuxt-link>
				</div>
				<div class="menu-item">
					<nuxt-link to="/register">Register</nuxt-link>
				</div>
			</div>
		</div>
		<div class="root-content">
			<nuxt/>
		</div>
		<div class="footer">
			<p class="flatt-line">
				Sponsored by
				<a href="https://flatt.tech/" target="_blank" rel="noopener">
					<img class="flatt" src="../static/flatt.svg" alt="flatt Security">
				</a>
				<a href="https://jpninfo.com/4905" target="_blank" rel="noopener">
					<img class="ojigineko" src="../static/ojigineko-white.gif" alt="ojigineko">
				</a>
			</p>
			<p>Organized by <a href="https://tsg.ne.jp/" target="_blank" rel="noopener">TSG</a>, a student team from The University of Tokyo</p>
			<p>Powered by <a href="https://ctfd.io/" target="_blank" rel="noopener">CTFd</a></p>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex';
import {directive as onClickaway} from 'vue-clickaway';

export default {
	directives: {onClickaway},
	data() {
		return {
			isDropping: false,
		};
	},
	computed: {
		...mapState(['isLoggedIn', 'isInTeam', 'team', 'user']),
	},
	methods: {
		onClickaway() {
			this.isDropping = false;
		},
		logout(event) {
			event.preventDefault();
			location.href = '/logout';
		},
	},
	head() {
		return {
			title: 'TSG CTF',
		};
	},
};
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Fredoka+One|Roboto:100';

html {
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	background: radial-gradient(circle, #300e29 0%, #130414 100%), #000000;
	color: white;
}

body {
	min-height: 100vh;
	background: url('../static/background.svg');
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
}

a {
	text-decoration: none;
	color: inherit;
}

input[type='text'],
input[type='password'],
input[type='email'],
input[type='url'],
select {
	border: 0;
	outline: 0;
	border-radius: 9999px;
	padding: 0 1rem;
	font-family: 'Roboto', sans-serif;
	font-size: 1.4rem;
}

button {
	border: 0;
	color: inherit;
	cursor: pointer;
}

button[type='submit'] {
	width: 6rem;
	height: 2.5rem;
	border-radius: 9999px;
	font-size: 1.5rem;
	font-family: 'Fredoka One', cursive;
	font-weight: 300;
	background: linear-gradient(90deg, #3e91a6 0%, #5e0fa9 100%);
}

table {
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	font-size: 1.5rem;
	border-collapse: collapse;

	a {
		color: #90cbff;
	}
}

tbody td {
	font-family: 'Roboto';
}

tr {
	height: 3rem;
}

tbody tr {
	border-top: rgba(255, 255, 255, 0.7) 1px solid;
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
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0) 100%);
	color: rgba(255, 255, 255, 0.8);

	.title {
		font-family: 'Fredoka One', cursive;
		font-weight: 300;
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

	.dropdown {
		position: relative;
	}

	.dropdown-trigger {
		text-transform: none;
		cursor: pointer;

		&::after {
			content: '';
			display: inline-block;
			width: 0;
			height: 0;
			border-top: white 6px solid;
			border-left: transparent 6px solid;
			border-right: transparent 6px solid;
			vertical-align: middle;
		}
	}

	.team-score {
		font-family: 'Fredoka One', cursive;
		font-weight: 300;
	}

	.dropdown-menu {
		z-index: 1;
		position: absolute;
		top: calc(100% - 0.5rem);
		right: 0;

		background: #520514;
		line-height: 3rem;
		display: flex;
		flex-direction: column;

		box-shadow: 0 0 5px black;
	}

	.dropdown-menu-item {
		height: 3rem;
		padding: 0 1rem;

		&:hover {
			background: rgba(255, 255, 255, 0.2);
		}
	}
}

.root-content {
	padding-top: 4rem;
	min-height: calc(100vh - 14rem);
}

section > h2.title {
	font-size: 4rem;
	font-family: 'Fredoka One', cursive;
	font-weight: 300;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin-top: 3rem;
	margin-bottom: 1rem;

	span {
		color: rgb(0, 150, 250);
		-webkit-text-fill-color: transparent;
		background: linear-gradient(90deg, rgb(255, 24, 13) 0%, rgb(138, 0, 255) 100%);
		background-clip: text;
	}
}

.footer {
	text-align: center;
	margin-top: 5rem;
	padding-bottom: 2rem;
	color: rgba(255, 255, 255, 0.8);
	line-height: 1.2rem;

	&::before {
		content: '';
		display: inline-block;
		width: 8rem;
		height: 1px;
		background: white;
		margin-bottom: 1.2rem;
	}

	a {
		color: #90cbff;
	}

	.flatt-line {
		line-height: 2rem;

		&::before {
			content: '';
			display: inline-block;
			width: 1rem;
			height: 1rem;
		}
	}

	.flatt {
		vertical-align: middle;
		width: 15rem;
	}

	.ojigineko {
		background: url('../static/ojigineko-white.gif');
		background-size: cover;
		display: inline-block;
		width: 1rem;
		height: 1rem;
		opacity: 0;
		vertical-align: -28%;
		transition: opacity 0.2s;
	}

	.flatt-line:hover .ojigineko {
		opacity: 0.3;
	}
}
</style>
