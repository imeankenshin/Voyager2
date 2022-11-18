<script lang="ts">
	export let title: string = '';
</script>

<svelte:head>
	<meta
		property="og:title"
		content={title == ' ' ? { title } + ' - Advenccre' : 'Advenccre - The Awesome SVG icon Library'}
	/>
	<title
		>{title == ' ' ? { title } + ' - Advenccre' : 'Advenccre - The Awesome SVG icon Library'}</title
	>
</svelte:head>
