<script lang="ts">
	import Footer from './layout/Footer.svelte';
	import Header from './layout/Header.svelte';
	export let title: string = 'Home';
	export let pageType: string = 'home';
	const themeColor: string = '#94a3b8';
</script>

<svelte:head>
	<meta name="description" content={'desc'} />
	<meta name="msapplication-TileColor" content={themeColor} />
	<meta name="theme-color" content={themeColor} />
	<meta property="og:title" content={title + ' - Advenccre'} />
	<meta property="og:type" content={pageType} />
	<meta property="og:url" content="https://advenccre.design" />
	<title>{title + ' - Advenccre'}</title>
</svelte:head>
<div
	class="scroll:w-2 scroll:bg-transparent scroll-tb:bg-gray-400 scroll-tb:bg-opacity-40 dark:bg-slate-800 [&_main]:min-h-screen"
>
	<Header />
	<slot />
	<Footer />
</div>

<style>
	@import url('./app.pcss');
</style>
