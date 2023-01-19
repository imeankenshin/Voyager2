<script lang="ts">
	export let content: {
		desc: string;
		title: string;
		type: string;
	} = {
		desc: 'no description',
		title: 'title is undefinded',
		type: 'website'
	};
</script>

<svelte:head>
	<meta name="description" content={content.desc} />
	<meta name="og:title" content={`Voyager2 - ${content.title}`} />
	<meta name="og:type" content={content.type} />
	<!--* Below is about Twitter -->
	<meta name="twitter:title" content={`Voyager2 - ${content.title}`} />
	<meta name="twitter:description" content={'desc'} />
	<title>{`Voyager2 - ${content.title}`}</title>
</svelte:head>
