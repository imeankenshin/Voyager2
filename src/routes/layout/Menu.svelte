<script lang="ts">
	export let list: { link: string; title: string }[] = [];
	let className: string = '';
	export { className as class };
</script>

<ul role="menubar" class={className + ' '}>
	{#each list as i}
		<li role="menuitem">
			<a
				href={i.link}
				class="mx-3 text-lg font-medium transition-all hover:text-red-500 focus:text-red-500"
				>{i.title}</a
			>
		</li>
	{/each}
</ul>
