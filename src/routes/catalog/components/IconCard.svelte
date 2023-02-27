<script lang="ts">
	export let title: string;
</script>

<div class="icon-card">
	<div
		class="-mx-3 -mt-3 grid h-36 place-items-center rounded-t-lg bg-gray-300 text-6xl text-black"
	>
		<span class="v2-{title}" />
	</div>
	<p class="my-2 text-xl font-medium text-white">{title}</p>
</div>

<style lang="postcss">
	.icon-card {
		@apply m-4 flex w-10 flex-col rounded-lg bg-red-500 p-3 transition-all duration-300 hover:-translate-y-2 sm:w-full;
		box-shadow: 0 6px 0 theme(colors.red.700);
	}
</style>
