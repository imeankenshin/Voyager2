<script lang="ts">
	export let title: string;
</script>

<div class="icon-card">
	<div class="grid h-36 place-items-center rounded-t-lg bg-gray-100 text-6xl text-black">
		<span class="v2-{title}" />
	</div>
	<p class="m-3 text-lg font-medium  text-white md:text-xl">{title}</p>
</div>

<style lang="postcss">
	.icon-card {
		@apply m-4 flex flex-col rounded-lg bg-red-500 transition-all duration-300 hover:-translate-y-2 max-md:m-3;
		box-shadow: 0 6px 0 theme(colors.red.700);
	}
</style>
