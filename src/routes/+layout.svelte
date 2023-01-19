<script lang="ts">
	import Footer from './layout/Footer.svelte';
	import Header from './layout/Header.svelte';
	const themeColor: string = 'transparent';
</script>

<svelte:head>
	<meta name="msapplication-TileColor" content={themeColor} />
	<meta name="og:url" content="https://advenccre.design" />
	<meta name="referrer" content="origin" />
	<meta
		content="https://www.google.co.jp/images/branding/googleg/1x/googleg_standard_color_128dp.png"
		itemprop="image"
	/>
</svelte:head>
<div
	class="scroll:w-2 scroll:bg-transparent scroll-tb:bg-gray-400 scroll-tb:bg-opacity-40 [&_main]:min-h-screen"
>
	<Header />
	<slot />
	<Footer />
</div>

<style>
	@import url('./app.pcss');
</style>
