<script lang="ts">
	import Footer from './layout/Footer.svelte';
	import Header from './layout/Header.svelte';
	import { getDevice } from '$lib/components/script/getDevice';
	export let title: string = 'Home';
	export let pageType: string = 'home';
	const themeColor: string = 'transparent';
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
	class="scroll:w-2 scroll:bg-transparent scroll-tb:bg-gray-400 scroll-tb:bg-opacity-40 dark:bg-slate-700 [&_main]:min-h-screen"
>
	<Header />
	<slot />
	{getDevice()}
	<Footer />
</div>

<style>
	@import url('./app.pcss');
</style>
