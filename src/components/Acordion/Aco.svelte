<script lang="ts">
	export let title: string = '';
	let h: number = 0;
	let toggle: boolean = false;
	let className: string = '';
	export { className as class };
</script>

<div class="rounded-md bg-slate-100 dark:bg-slate-700 {className}">
	<button
		on:click={() => (toggle = !toggle)}
		class="flex w-full justify-between rounded-md px-3 py-2 active:bg-slate-200 dark:active:bg-slate-600"
		bind:clientHeight={h}
	>
		<p>{title}</p>
	</button>
	<div class="overflow-clip transition-all duration-200 {toggle ? 'h-48' : 'h-0'}">
		<slot />
	</div>
</div>
