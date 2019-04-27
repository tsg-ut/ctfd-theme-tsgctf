<template>
	<section class="Rules">
		<h2 class="title"><span>Rules</span></h2>
		<ol>
			<li>Don’t share flags or hints, or you’ll be banned.</li>
			<li>Don’t attack our score server, or you’ll be banned.</li>
			<li>Do not DoS, or you’ll be banned.</li>
			<li>The flag format is TSGCTF{blahblah}, unless otherwise specified.</li>
			<li>All challenges have dynamic score value, including sanity check.</li>
			<li>The prize reward is paid in Bitcoin with conversion according to the exchange rate on May 4, 2019.</li>
			<li>Writeups of solved problems are required to claim prizes. Plus, they will be open to the public.</li>
		</ol>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: 'Rules - TSG CTF',
		};
	},
};
</script>

<style>
.Rules {
	ol {
		width: 100%;
		max-width: 40rem;
		margin: 0 auto;
		font-size: 1.4rem;
		line-height: 2rem;
	}
}
</style>
