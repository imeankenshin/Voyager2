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
	<link rel="stylesheet" href="/icons/css/voyager2.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div
	class="scroll:w-2 scroll:bg-transparent scroll-tb:bg-gray-400 scroll-tb:bg-opacity-40 [&_main]:min-h-screen"
>
	<Header />
	<slot />
	<Footer />
</div>

<style global>
	@import url('./app.pcss');
</style>
