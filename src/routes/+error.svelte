<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { useKonami } from '$lib/components/script/useKonami';
	import PageDesc from './layout/PageDesc.svelte';
	let konamaied = false;
	onMount(() => {
		useKonami(() => (konamaied = true));
	});
	console.info('👆 👆 👇 👇 👈 👉 👈 👉 b a');
	const whatHappeded: () => string | undefined = () => {
		switch ($page.status) {
			case 404:
				return 'The page you are looking for is not founded.';
				break;
			case 403:
				return 'You do not have access rights for this page.';
				break;
			case 500:
				return 'This website looks went wrong. Plese report this bug to github for the website and me.';
				break;
		}
	};
</script>

<PageDesc />
<main class="grid h-screen place-items-center text-center">
	<div>
		<h1 class="mb-6 font-marker text-8xl">{$page.status} :-(</h1>
		<p class="text-lg">{whatHappeded()}</p>
		{#if konamaied}
			<a
				class="text-3xl font-bold hover:text-amber-400"
				href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				>WOW! YOU ARE SUCH BRILLIANT!!!!! CLICK ME!!!!!!!!!!</a
			>
		{/if}
	</div>
</main>
