<script>
	import { onMount } from 'svelte';
	import { useKonami } from '$lib/components/script/useKonami';
	import PageDesc from './layout/PageDesc.svelte';
	let konamaied = false;
	onMount(() => {
		useKonami(() => (konamaied = true));
	});
	console.info('👆 👆 👇 👇 👈 👉 👈 👉 b a');
</script>

<PageDesc />
<main class="grid h-screen place-items-center text-center">
	<div>
		<h1 class="mb-6 font-marker text-8xl">404 :-(</h1>
		<p class="text-lg">The page you are looking for is not founded.</p>
		{#if konamaied}
			<a
				class="text-3xl font-bold hover:text-amber-400"
				href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				>WOW! YOU ARE SUCH BRILLIANT!!!!! CLICK ME!!!!!!!!!!</a
			>
		{/if}
	</div>
</main>
