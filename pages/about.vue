<template>
	<section class="About">
		<h2 class="title"><span>About</span></h2>
		<h3>Period</h3>
		<p class="period">
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20261121T1500&p1=248" target="_blank" rel="noopener noreferrer">11/21 15:00</a>
			-
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20261121T1730&p1=248" target="_blank" rel="noopener noreferrer">11/21 17:30</a>
		</p>
		<p :style="{textAlign: 'center'}">(JST)</p>
		<h3>Staffs</h3>
		<a href="https://tsg.ne.jp/" target="_blank" rel="noopener noreferrer">
			<img src="https://old.tsg.ne.jp/images/tsg-logo.png">
		</a>
		<p>
			TSG LIVE! CTF is organized by <a href="https://tsg.ne.jp/" target="_blank" rel="noopener noreferrer">TSG</a>, the official computer society of The
			University of Tokyo.
		</p>
		<p>Below is the full list of TSG members who contributed to this TSG LIVE! 17 CTF in success. So many thanks!!</p>
		<ul class="members">
			<li v-for="member in members" :key="member.url" class="member">
				<a :href="member.url" target="_blank" rel="noopener noreferrer">{{ member.name }}</a>
				<a href="https://en.wiktionary.org/wiki/%E3%81%8A%E8%BE%9E%E5%84%80" target="_blank" rel="noopener noreferrer">
					<img class="ojigineko" src="@/static/ojigineko-white.gif" alt="ojigineko">
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: 'About - TSG LIVE! 17 CTF',
		};
	},
	data() {
		return {
			members: [
				{ url: 'https://twitter.com/lluuiiggeeinfo', name: '@LLUUIIGGEE' },
				{ url: 'https://twitter.com/sashiming_syumi', name: '@sashiming' },
				{ url: 'https://twitter.com/13lackade', name: '@mtmt' },
				{ url: 'https://x.com/hiikun_Z', name: '@hiikunZ' },
				{ url: 'https://x.com/Ojun52', name: '@Ojun' },
			],
		};
	},
};
</script>

<style lang="postcss">
.About {
	h3 {
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

	.period {
		text-align: center;
		font-size: 3rem;
		line-height: 3rem;
	}

	p,
	ul,
	ol {
		font-family: 'Roboto';
		width: 100%;
		max-width: 50rem;
		margin: 0 auto;
		font-size: 1.4rem;
		line-height: 2rem;
	}

	img {
		display: block;
		margin: 0 auto;
		width: 80vw;
		max-width: 30rem;
		margin-bottom: 1rem;
	}

	a {
		color: #ff8a00;
	}

	.ojigineko {
		background: url('../static/ojigineko-white.gif');
		background-size: cover;
		display: inline-block;
		width: 1rem;
		opacity: 0;
		transition: opacity 0.2s;
		margin-bottom: 0;
		margin-left: 0.2rem;
	}

	.member {
		&:hover {
			.ojigineko {
				opacity: 0.3;
			}
		}
	}
}
</style>
