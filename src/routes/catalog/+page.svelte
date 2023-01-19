<script lang="ts">
	import ComingSoon from '../layout/ComingSoon.svelte';
	import PageDesc from '../layout/PageDesc.svelte';
	import { onMount } from 'svelte';
	import IconCard from './components/IconCard.svelte';

	onMount(() => {
		const searchInput = document.getElementById('search');
		window.addEventListener('keyup', (e) => {
			const searchCommnad_Sharp = e.key == '/' && searchInput;
			if (searchCommnad_Sharp) {
				searchInput.focus();
			}
		});
		window.addEventListener('keydown', (e) => {
			const searchCommand_Cmd_K = e.key == 'k' && e.metaKey && searchInput;
			if (searchCommand_Cmd_K) {
				searchInput.focus();
			}
		});
	});
	const icons: { name: string; code: string }[] = [
		{
			name: 'yes',
			code: ''
		},
		{
			name: 'no',
			code: ''
		},
		{
			name: 'iof',
			code: ''
		},
		{
			name: 'hello',
			code: ''
		}
	];
	let results: { name: string; code: string }[] = [];
	let value: string | null;

	$: if (value) {
		const j = () => {
			let a: { name: string; code: string }[] = [];
			for (let i = 0; i <= icons.length - 1; i++) {
				if (value == icons[i].name) {
					a.push(icons[i]);
				}
			}
			return a;
		};
		results = j();
	}
</script>

<PageDesc
	content={{
		title: 'Catalog',
		desc: 'Search Advenccre icons that you want.',
		type: 'article'
	}}
/>
<main>
	<div role="search" class="flex justify-center py-24">
		<label
			for="search"
			class="mx-6 flex w-full max-w-2xl items-center rounded-lg border-2 border-gray-400  px-4 py-3 focus-within:border-sky-400"
		>
			<span class="mr-4 flex h-7 w-7 items-center [&_*]:fill-black dark:[&_*]:fill-white">
				<svg
					id="q"
					data-name="glass-outline"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 48 48"
				>
					<path
						d="m36.88,32.88c-.56-.56-1.33-.88-2.12-.88h-.64l-3.43-3.43c1.83-2.37,2.9-5.35,2.9-8.57,0-7.73-6.17-14-13.79-14s-13.8,6.27-13.8,14,6.18,14,13.8,14c3.36,0,6.44-1.22,8.83-3.25l3.37,3.37v.64c0,.79.32,1.56.88,2.12l5.12,5.12h1c1.66,0,3-1.34,3-3v-1l-5.12-5.12Zm-17.08-1.88c-5.96,0-10.8-4.93-10.8-11s4.84-11,10.8-11,10.79,4.93,10.79,11-4.84,11-10.79,11Z"
					/>
				</svg>
			</span>
			<input
				type="text"
				role="searchbox"
				name="search"
				bind:value
				id="search"
				placeholder="Search icons"
				autocomplete="off"
				class="w-full bg-transparent text-lg outline-none"
			/>
			<kbd>/</kbd>
		</label>
	</div>
	<article class="mx-auto flex flex-wrap justify-around py-6">
		{#if results.length > 0}
			{#each results as icon}
				<IconCard title={icon.name} icon={icon.code} />
			{/each}
		{:else}
			{#each icons as icon}
				<IconCard title={icon.name} icon={icon.code} />
			{/each}
		{/if}
	</article>
</main>
<ComingSoon />
