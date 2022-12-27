<script lang="ts">
	import IconCard from './IconCard.svelte';
	let value = '';
	import { useKonami } from '../../../components/script/useKonami';
</script>

<main>
	<div role="search" class="flex justify-center py-24">
		<label for="search" class="flex px-4 py-3 w-full rounded-lg max-w-2xl items-center  outline outline-2 outline-gray-400 focus-within:outline-[3px] focus-within:outline-sky-400">
			<span class="h-7 w-7 dark:[&_*]:fill-white flex items-center mr-4">
				<svg id="q" data-name="glass-outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
					<path d="m36.88,32.88c-.56-.56-1.33-.88-2.12-.88h-.64l-3.43-3.43c1.83-2.37,2.9-5.35,2.9-8.57,0-7.73-6.17-14-13.79-14s-13.8,6.27-13.8,14,6.18,14,13.8,14c3.36,0,6.44-1.22,8.83-3.25l3.37,3.37v.64c0,.79.32,1.56.88,2.12l5.12,5.12h1c1.66,0,3-1.34,3-3v-1l-5.12-5.12Zm-17.08-1.88c-5.96,0-10.8-4.93-10.8-11s4.84-11,10.8-11,10.79,4.93,10.79,11-4.84,11-10.79,11Z"/>
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
				class="w-full outline-none bg-transparent text-lg"
			/>
			<kbd>/</kbd>
		</label>
	</div>
	<article class="py-6 px-2">
		<IconCard title="trashbox" />
	</article>
</main>
