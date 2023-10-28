<template>
	<section class="About">
		<h2 class="title"><span>About</span></h2>
		<h3>Period</h3>
		<p class="period">
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20231104T16&p1=248" target="_blank" rel="noopener noreferrer">11/04 07:00</a>
			-
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20231105T16&p1=248" target="_blank" rel="noopener noreferrer">11/05 07:00</a>
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
		<a href="https://flatt.tech/" target="_blank" rel="noopener noreferrer">
			<img src="https://ctf.tsg.ne.jp/images/flatt_image.png" :style="{maxWidth: '60rem'}">
		</a>
		<p>Flatt Security Inc. is a cyber security startup based in Tokyo, Japan.</p>
		<p>We provide a variety of cyber security services, including security assessment.  We also develop and provide security software “Shisho Cloud” for client companies.</p>
		<p>We are hiring engineers. Please see our employment page <a href="https://recruit.flatt.tech/">https://recruit.flatt.tech/</a> and contact to <a href="https://flatt.tech/contact/">https://flatt.tech/contact/</a></p>
		<h3>Prizes</h3>
		<ul>
			<li>1st: 1,000USD</li>
			<li>2nd: 500 USD</li>
			<li>3rd: 200 USD</li>
		</ul>
		<h3>Staffs</h3>
		<a href="https://tsg.ne.jp/" target="_blank" rel="noopener noreferrer">
			<img src="https://old.tsg.ne.jp/images/tsg-logo.png">
		</a>
		<p>
			TSG CTF is organized by <a href="https://tsg.ne.jp/" target="_blank" rel="noopener noreferrer">TSG</a>, the official computer society of The
			University of Tokyo.
		</p>
		<p>Below is the full list of TSG members who contributed to this TSG CTF 2023 in success. So many thanks!!</p>
		<ul>
			<li><a href="https://twitter.com/hakatashi" target="_blank" rel="noopener noreferrer">@hakatashi</a></li>
			<li><a href="https://twitter.com/moratorium08" target="_blank" rel="noopener noreferrer">@moratorium08</a></li>
			<li><a href="https://twitter.com/smallkirby" target="_blank" rel="noopener noreferrer">@smallkirby</a></li>
			<li><a href="https://twitter.com/m1kit" target="_blank" rel="noopener noreferrer">@m1kit</a></li>
			<li><a href="https://twitter.com/naan112358" target="_blank" rel="noopener noreferrer">@naan112358</a></li>
			<li><a href="https://twitter.com/__dAi00" target="_blank" rel="noopener noreferrer">@__dAi00</a></li>
			<li><a href="https://twitter.com/JP3BGY" target="_blank" rel="noopener noreferrer">@JP3BGY</a></li>
			<li><a href="https://twitter.com/iwashiira" target="_blank" rel="noopener noreferrer">@iwashiira</a></li>
			<li><a href="https://twitter.com/shell_mug" target="_blank" rel="noopener noreferrer">@shell_mug</a></li>
			<li><a href="https://twitter.com/sitositositoo" target="_blank" rel="noopener noreferrer">@sitositositoo</a></li>
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
}
</style>
