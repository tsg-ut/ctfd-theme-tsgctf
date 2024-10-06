<template>
	<section class="About">
		<h2 class="title"><span>About</span></h2>
		<h3>Period</h3>
		<p class="period">
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20231104T16&p1=248" target="_blank" rel="noopener noreferrer"> 08/11 18:00 </a>
			-
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20231105T16&p1=248" target="_blank" rel="noopener noreferrer"> 10/11 18:00 </a>
		</p>
		<p :style="{textAlign: 'center'}">(UTC)</p>
		<h3>Socials</h3>
		<ul class="socials">
			<li>
				<iframe
					src="https://discord.com/widget?id=1261029732582162442&theme=dark" 
					allowtransparency="true"
					frameborder="0"
					width="100%"
					height="100%"
				>
					<a href="https://discord.gg/2AbXu9sD2G" target="_blank" rel="noopener noreferrer">Discord</a>
				</iframe>
			</li>
		</ul>
		<h3>Sponsor</h3>
		<a href="https://www.infomaniak.com/" target="_blank" rel="noopener noreferrer">
			<img src="./infomaniak.png">
		</a>
		<p>Infomaniak is a Swiss-based company specializing in web hosting, cloud services, and domain registration.</p>
		<p>Known for its focus on privacy, security, and sustainability, it offers solutions for websites, email, and drive.</p>
		<p>Do not hesitate to take a look to their offers ! <a href="https://www.infomaniak.com/">https://www.infomaniak.com/</a> </p>
		<h3>Prizes</h3>

		<p>TBD</p>

		<h3>Staffs</h3>
		<a href="https://4ts.fr" target="_blank" rel="noopener noreferrer">
			<img src="./logo.png">
		</a>
		<p>
			TSG CTF is organized by <a href="https://4ts.fr/" target="_blank" rel="noopener noreferrer">4T$</a>, a group of CTF enjoyers.
		</p>
		<p>Below is the full list of 4T$ members who contributed to this 4T$ CTF in success. So many thanks!!</p>
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
				{ url: 'https://yewolf.fr', name: 'Yewolf' },
				{ url: 'https://github.com/Nounoursdestavernes', name: 'Nounours des tavernes' },
				{ url: 'https://example.com/', name: 'Nathan' },
				{ url: 'https://example.com/', name: 'Thib' }, 
				{ url: 'https://example.com/', name: 'Mada07' },
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
