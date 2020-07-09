<template>
	<section class="About">
		<h2 class="title"><span>About</span></h2>
		<h3>Period</h3>
		<p class="period">
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20200711T16&p1=248" target="_blank" rel="noopener">07/11 07:00</a>
			-
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20200712T16&p1=248" target="_blank" rel="noopener">07/12 07:00</a>
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
					<a href="https://discord.gg/xJn7v62" target="_blank" rel="noopener">Discord</a>
				</iframe>
			</li>
			<li>
				<timeline
					id="tsgctf"
					source-type="profile"
					:options="{tweetLimit: '3', theme: 'dark', height: '500'}"
				>
					<a href="https://twitter.com/tsgctf" target="_blank" rel="noopener">Tweets from @tsgctf</a>
				</timeline>
			</li>
		</ul>
		<h3>Rules</h3>
		<ol>
			<li>Don’t prevent other teams from having fun.</li>
			<li>Don’t share flags or hints, or you’ll be banned.</li>
			<li>Don’t attack (e.g. DoS) our infrastructure, or you’ll be banned.</li>
			<li>Don’t do automated scanning. It will be considered to be DoS.</li>
			<li>The flag format is <span class="Common_Code">TSGCTF{blahblah}</span>, unless otherwise specified.</li>
			<li>The prize will be paid with PayPal. If it doesn't suit you, we can pay that in BitCoin at an arbitrary exchange rate we determine.</li>
			<li>The teams must publish the writeups of the solved problems to get their prizes.</li>
			<li>
				If you have any questions during the contest, please contact us via
				<a href="https://discord.gg/xJn7v62" target="_blank" rel="noopener">Discord server</a>.
			</li>
		</ol>
		<h3>Prizes</h3>
		<ul>
			<li>1st: 513.31 USD</li>
			<li>2nd: 213.31 USD</li>
			<li>3rd: 113.31 USD</li>
		</ul>
		<h3>Sponsor</h3>
		<a href="https://flatt.tech/" target="_blank" rel="noopener">
			<img src="https://ctf.tsg.ne.jp/images/flatt_image.png">
		</a>
		<p>Flatt Security Inc. is a cyber security startup based in Tokyo, Japan.</p>
		<p>We provide security assessments and other cyber security services and have been also developing security software for client companies.</p>
		<p>We are hiring engineers. Please contact to <a href="mailto:contact@flatt.tech">contact@flatt.tech</a> or <a href="https://flatt.tech/contact">https://flatt.tech/contact</a></p>
		<h3>Staffs</h3>
		<a href="https://tsg.ne.jp/" target="_blank" rel="noopener">
			<img src="https://tsg.ne.jp/images/tsg-logo.png">
		</a>
		<p>
			TSG CTF is organized by <a href="https://tsg.ne.jp/" target="_blank" rel="noopener">TSG</a>, the official computer society of The
			University of Tokyo.
		</p>
		<p>Below is the full list of TSG members who contributed to this TSG CTF in success. So many thanks!!</p>
		<ul>
			<li><a href="https://twitter.com/hakatashi" target="_blank" rel="noopener">@hakatashi</a></li>
			<li><a href="https://twitter.com/moratorium08" target="_blank" rel="noopener">@moratorium08</a></li>
			<li><a href="https://twitter.com/smallkirby_" target="_blank" rel="noopener">@smallkirby_</a></li>
			<li><a href="https://twitter.com/naan112358" target="_blank" rel="noopener">@naan112358</a></li>
			<li><a href="https://twitter.com/satos___jp" target="_blank" rel="noopener">@satos___jp</a></li>
			<li><a href="https://twitter.com/kcz146" target="_blank" rel="noopener">@kcz146</a></li>
			<li><a href="https://twitter.com/y0n3uchy" target="_blank" rel="noopener">@y0n3uchy</a></li>
			<li><a href="https://twitter.com/coil_kpc" target="_blank" rel="noopener">@coil_kpc</a></li>
			<li><a href="https://twitter.com/JP3BGY" target="_blank" rel="noopener">@JP3BGY</a></li>
			<li><a href="https://twitter.com/hideo54" target="_blank" rel="noopener">@hideo54</a></li>
			<li><a href="https://twitter.com/gh_end_" target="_blank" rel="noopener">@gh_end_</a></li>
			<li><a href="https://twitter.com/sitositositoo" target="_blank" rel="noopener">@sitositositoo</a></li>
			<li><a href="https://twitter.com/pizzacat83" target="_blank" rel="noopener">@pizzacat83</a></li>
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

<style>
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
}
</style>
