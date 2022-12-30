<script lang="ts">
	import Card from '../../../lib/components/Card/Card.svelte';
	export let icon: string | undefined | null = '';
	export let title: string = '';
	import Chip from '$lib/components/Chip/Chip.svelte';
</script>

<Card
	class="m-2 w-32 min-w-[10rem] max-w-[14rem] flex-col transition-all duration-300 hover:-translate-y-2 sm:w-full"
>
	<div class="-mx-3 -mt-3 h-36 rounded-t-lg bg-gray-400">
		{icon}
	</div>
	<p class="my-2 text-xl font-medium">{title}</p>
	<div class="hidden pb-3 sm:block">
		<Chip label="system" />
		<Chip label="trash" />
	</div>
</Card>
