<template>
	<section class="About">
		<h2 class="title"><span>About</span></h2>
		<h3>Period</h3>
		<p class="period">
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210516T1433&p1=248" target="_blank" rel="noopener">11/21 14:03</a>
			-
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20210516T1613&p1=248" target="_blank" rel="noopener">11/21 15:43</a>
		</p>
		<p :style="{textAlign: 'center'}">(JST)</p>
		<h3>Staffs</h3>
		<a href="https://tsg.ne.jp/" target="_blank" rel="noopener">
			<img src="https://old.tsg.ne.jp/images/tsg-logo.png">
		</a>
		<p>
			TSG LIVE! 7 CTF is organized by <a href="https://tsg.ne.jp/" target="_blank" rel="noopener">TSG</a>, the official computer society of The
			University of Tokyo.
		</p>
		<p>Below is the full list of TSG members who contributed to this CTF in success. So many thanks!!</p>
		<ul>
			<li><a href="https://twitter.com/hakatashi" target="_blank" rel="noopener">@hakatashi</a></li>
			<li><a href="https://twitter.com/moratorium08" target="_blank" rel="noopener">@moratorium08</a></li>
			<li><a href="https://twitter.com/smallkirby_" target="_blank" rel="noopener">@smallkirby_</a></li>
			<li><a href="https://twitter.com/naan112358" target="_blank" rel="noopener">@naan112358</a></li>
			<li><a href="https://twitter.com/kcz146" target="_blank" rel="noopener">@kcz146</a></li>
			<li><a href="https://twitter.com/JP3BGY" target="_blank" rel="noopener">@JP3BGY</a></li>
			<li><a href="https://twitter.com/platypus999" target="_blank" rel="noopener">@platypus999</a></li>
		</ul>
	</section>
</template>

<script>
import {Timeline} from 'vue-tweet-embed';

export default {
	components: {Timeline},
	head() {
		return {
			title: 'About - TSG LIVE! 7 CTF',
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
}
</style>
