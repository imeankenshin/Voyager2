<script lang="ts">
	export let title: string = '';
	let h: number = 0;
	let toggle: boolean = false;
	let className: string = '';
	export { className as class };
</script>

<div class="advenccer-components-AcoBody block">
	<div class={className}>
		<button
			on:click={() => (toggle = !toggle)}
			type="buttonj"
			class="outline-white-500 flex w-full justify-between px-3 py-2 outline-2 focus-visible:outline-4"
		>
			<p>{title}</p>
		</button>
		<div
			bind:clientHeight={h}
			class="overflow-clip transition-all duration-200 {toggle ? 'h-48' : 'h-0'}"
		>
			<slot />
		</div>
	</div>
</div>
