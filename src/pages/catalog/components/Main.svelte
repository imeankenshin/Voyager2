<script lang="ts">
	import IconCard from './IconCard.svelte';
	let value = '';
	import { useKonami } from '../../../components/script/useKonami';
</script>

<main>
	<div class="flex justify-center py-24">
		<label for="search" class="flex w-full max-w-2xl items-center">
			<span class="absolute h-7 w-7 translate-x-4 text-center font-['SF_Pro'] text-lg">􀊫</span>
			<input
				type="text"
				name="icon-search"
				bind:value
				id="search"
				placeholder="Search icons"
				autocomplete="off"
				class="w-full rounded-lg bg-transparent px-4 py-3 pl-14 text-lg outline outline-2 outline-gray-400 focus:outline-[3px] focus:outline-sky-400"
			/>
		</label>
	</div>
	<div class="py-6 px-2">
		<IconCard title="trashbox" />
	</div>
</main>
