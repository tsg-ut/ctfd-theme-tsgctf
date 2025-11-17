<template>
	<section class="About">
		<h2 class="title"><span>About</span></h2>
		<h3>Period</h3>
		<p class="period">
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20241214T16&p1=248" target="_blank" rel="noopener noreferrer">12/14 07:00</a>
			-
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20241215T16&p1=248" target="_blank" rel="noopener noreferrer">12/15 07:00</a>
		</p>
		<p :style="{textAlign: 'center'}">(UTC)</p>
		<h3>Socials</h3>
		<ul class="socials">
			<li>
				<iframe
					src="https://discord.com/widget?id=546339917459095552&theme=dark"
					allowtransparency="true"
					frameborder="0"
					width="100%"
					height="100%"
				>
					<a href="https://discord.gg/xcZ3t9bC2A" target="_blank" rel="noopener noreferrer">Discord</a>
				</iframe>
			</li>
			<li>
				<timeline
					id="tsgctf"
					source-type="profile"
					:options="{tweetLimit: '3', theme: 'dark', height: '500'}"
				>
					<a href="https://twitter.com/tsgctf" target="_blank" rel="noopener noreferrer">Tweets from @tsgctf</a>
				</timeline>
			</li>
		</ul>
		<h3>Sponsor</h3>
		<a href="https://flatt.tech/en" target="_blank" rel="noopener noreferrer">
			<img src="https://ctf.tsg.ne.jp/images/fs_logo.png" :style="{maxWidth: '60rem'}">
		</a>
		<p>Flatt Security, based in Tokyo, offers expert security assessments and penetration testing for software.</p>
		<p>Our seasoned professionals deliver proven, top-tier services.</p>
		<p>We also provide tools to help you internalize cutting edge, state of the art security practices.</p>
		<h3>Prizes</h3>
		<ul>
			<li>1st: 1,000USD</li>
			<li>2nd: 500 USD</li>
			<li>3rd: 200 USD</li>
		</ul>
		<ul>
			<li>The winning team will also qualify for the SECCON CTF 14 Finals (International Division).</li>
			If the first-place team has already qualified, it will receive another entry unless it declines; if the team withdraws from qualification, the second-place team qualifies instead.
		</ul>
		<h3>Staffs</h3>
		<a href="https://tsg.ne.jp/" target="_blank" rel="noopener noreferrer">
			<img src="https://old.tsg.ne.jp/images/tsg-logo.png">
		</a>
		<p>
			TSG CTF is organized by <a href="https://tsg.ne.jp/" target="_blank" rel="noopener noreferrer">TSG</a>, the official computer society of The
			University of Tokyo.
		</p>
		<p>Below is the full list of TSG members who contributed to this TSG CTF 2025 in success. So many thanks!!</p>
		<ul class="members">
			<li v-for="member in members" :key="member" class="member">
				<a :href="member.url" target="_blank" rel="noopener noreferrer">{{ member.name }}</a>
				<a href="https://en.wiktionary.org/wiki/%E3%81%8A%E8%BE%9E%E5%84%80" target="_blank" rel="noopener noreferrer">
					<img class="ojigineko" src="@/static/ojigineko-white.gif" alt="ojigineko">
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
import {Timeline} from 'vue-tweet-embed';

export default {
	components: {Timeline},
	head() {
		return {
			title: 'About - TSG CTF',
		};
	},
	data() {
		return {
			members: [
				{ url: 'https://twitter.com/hakatashi', name: '@hakatashi' },
				{ url: 'https://twitter.com/caphosra', name: '@caphosra' },
				{ url: 'https://twitter.com/__dAi00', name: '@dai' },
				{ url: 'https://twitter.com/iwashiira', name: '@iwashiira' },
				{ url: 'https://twitter.com/jiei_univ', name: '@jiei_univ' },
				{ url: 'https://twitter.com/JP3BGY', name: '@JP3BGY' },
				{ url: 'https://twitter.com/sasakiy84', name: '@sasakiy84' },
				{ url: 'https://twitter.com/sitositositoo', name: '@settyan117' },
				{ url: 'https://twitter.com/syobon_hinata', name: '@syobon_hinata (fabon)' },
				{ url: 'https://twitter.com/yuimyun_hykook', name: '@yuimyun' },
				{ url: 'https://twitter.com/lluuiiggeeinfo', name: '@LLUUIIGGEE' },
				{ url: 'https://twitter.com/aperiodicmikan', name: '@mikanami' },
				{ url: 'https://twitter.com/sashiming_syumi', name: '@sashiming' },
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

	ul.socials {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding: 0;

		li {
			flex: 0 0 20rem;
			height: 30rem;
			overflow-y: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 1rem;
			margin: 0 1rem 0.6rem;
		}
	}

	img {
		display: block;
		margin: 0 auto;
		width: 80vw;
		max-width: 30rem;
		margin-bottom: 1rem;
	}

	a {
		color: #90cbff;
	}

	:has(.twitter-timeline) {
		width: 100%;
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
