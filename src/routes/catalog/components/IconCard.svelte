<script lang="ts">
	export let title: string;
	let copied = false;
	let showCode = false;
	const code = `<i class="v2-${title}"></i>`;

	function successWriteTxt() {
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 3500);
	}
</script>

<div
	class="m-4 flex flex-col rounded-lg bg-red-500 shadow transition-all duration-300 hover:-translate-y-2 max-md:m-3"
>
	<div class="flex h-36 flex-col rounded-t-lg bg-gray-100 text-6xl text-black">
		<button
			title={code}
			class="absolute m-3 inline-flex h-fit w-fit justify-center text-base"
			on:click={async () => {
				await navigator.clipboard.writeText(code).then(successWriteTxt);
			}}
		>
			<i class="v2-clipboard text-xl" />{copied ? ' success!' : 'copy'}
		</button>
		{#if showCode}
			<div class="grid h-full w-full place-items-center">
				<p class="text-base">{code}</p>
			</div>
		{:else}
			<span class="v2-{title} grid h-full w-full place-items-center" />
		{/if}
	</div>
	<p class="m-3 text-lg font-medium  text-white md:text-xl">{title}</p>
</div>

<style lang="postcss">
	.shadow {
		box-shadow: 0 6px 0 theme(colors.red.700);
	}
</style>
