<template>
	<section class="About">
		<h2 class="title"><span>About</span></h2>
		<h3>Period</h3>
		<p class="period">05/04 07:00 - 05/05 07:00</p>
		<p :style="{textAlign: 'center'}">(UTC)</p>
		<h3>Links</h3>
		<ul class="links">
			<li>Chatting <a href="https://discord.gg/xJn7v62" target="_blank" rel="noopener">Discord</a></li>
			<li>Twitter <a href="https://twitter.com/tsgctf" target="_blank" rel="noopener">@tsgctf</a></li>
		</ul>
		<h3>Rules</h3>
		<ol>
			<li>Don’t share flags or hints, or you’ll be banned.</li>
			<li>Don’t attack our score server, or you’ll be banned.</li>
			<li>Do not DoS, or you’ll be banned.</li>
			<li>The flag format is TSGCTF{blahblah}, unless otherwise specified.</li>
			<li>All challenges have dynamic score value, including sanity check.</li>
			<li>The prize reward is paid in Bitcoin with conversion according to the exchange rate on May 4, 2019.</li>
			<li>Writeups of solved problems are required to claim prizes. Plus, they will be open to the public.</li>
            <li>If you have any questions during the contest, please contact us via <a href="https://discord.gg/xJn7v62" target="_blank" rel="noopener">Discord server</a>. </li>
		</ol>
		<h3>Prizes</h3>
		<ul>
			<li>1st: 513.31 USD</li>
			<li>2nd: 213.31 USD</li>
			<li>3rd: 113.31 USD</li>
		</ul>
		<h3>Sponsor</h3>
		<a href="https://flatt.tech/" target="_blank" rel="noopener">
			<img src="https://ctf.tsg.ne.jp/images/flatt_image.jpg">
		</a>
		<p>Flatt SECURITY is the cyber security assessment service provided by Flatt, Inc.</p>
		<p>And Flatt is the company for cyber security based in Hongo, Tokyo, nearby The University of Tokyo.</p>
		<p>Flatt is hiring engineers. Please contact to support<a href="https://twitter.com/flatt" target="_blank" rel="noopener">@flatt</a>.tech or to form in official web site.</p>
		<h3>Staffs</h3>
		<a href="https://tsg.ne.jp/" target="_blank" rel="noopener">
			<img src="https://tsg.ne.jp/images/tsg-logo.png">
		</a>
		<p>TSG CTF is organized by <a href="https://tsg.ne.jp/" target="_blank" rel="noopener">TSG</a>, the official computer society of The University of Tokyo.</p>
		<p>Below is the full list of TSG members who contributed to this TSG CTF in success. So many thanks!!</p>
		<ul>
			<li><a href="https://twitter.com/hakatashi" target="_blank" rel="noopener">@hakatashi</a></li>
			<li><a href="https://twitter.com/kcz146" target="_blank" rel="noopener">@kcz146</a></li>
			<li><a href="https://twitter.com/y0n3uchy" target="_blank" rel="noopener">@y0n3uchy</a></li>
			<li><a href="https://twitter.com/satos___jp" target="_blank" rel="noopener">@satos___jp</a></li>
			<li><a href="https://twitter.com/moratorium08" target="_blank" rel="noopener">@moratorium08</a></li>
			<li><a href="https://twitter.com/kurgm" target="_blank" rel="noopener">@kurgm</a></li>
			<li><a href="https://twitter.com/taiyoslime" target="_blank" rel="noopener">@taiyoslime</a></li>
			<li><a href="https://twitter.com/JP3BGY" target="_blank" rel="noopener">@JP3BGY</a></li>
			<li><a href="https://twitter.com/__dAi00" target="_blank" rel="noopener">@__dAi00</a></li>
			<li><a href="https://twitter.com/hideo54" target="_blank" rel="noopener">@hideo54</a></li>
			<li><a href="https://twitter.com/naan112358" target="_blank" rel="noopener">@naan112358</a></li>
			<li><a href="https://twitter.com/coil_kpc" target="_blank" rel="noopener">@coil_kpc</a></li>
			<li><a href="https://twitter.com/kuromunori" target="_blank" rel="noopener">@kuromunori</a></li>
			<li><a href="https://twitter.com/gh_end_" target="_blank" rel="noopener">@gh_end_</a></li>
		</ul>
	</section>
</template>

<script>
export default {
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

	p, ul, ol {
		font-family: 'Roboto';
		width: 100%;
		max-width: 40rem;
		margin: 0 auto;
		font-size: 1.4rem;
		line-height: 2rem;
	}

	ul.links {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding: 0;

		li {
			flex: 0 0 10rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 1rem;
			margin: 0 1rem 0.6rem;

			a {
				color: inherit;
				width: 12rem;
				text-align: center;
				height: 2.5rem;
				line-height: 2.5rem;
				border-radius: 9999px;
				font-size: 1.5rem;
				font-family: 'Fredoka One', cursive;
				font-weight: 300;
				background: linear-gradient(90deg, #3e91a6 0%, #5e0fa9 100%);
			}
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
