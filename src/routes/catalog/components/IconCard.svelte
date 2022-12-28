<script lang="ts">
	import Card from '../../../lib/components/Card/Card.svelte';
	export let icon: string | undefined | null = '';
	export let title: string = '';
</script>

<Card class="m-2 h-60 w-60 flex-col transition-all duration-300 hover:-translate-y-2">
	<div class="aspect-[4/3] w-full rounded-md bg-gray-400">
		{icon}
	</div>
	<p class="my-2 text-xl font-medium">{title}</p>
</Card>
