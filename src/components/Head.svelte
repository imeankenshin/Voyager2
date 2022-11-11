<script lang="ts">
	export let title: string = '';
</script>

<svelte:head>
	<link rel="stylesheet" href="/src/components/app.scss" />
	<link rel="icon" href="/lib/img/1x/App.png" sizes="48*48" type="image/png" />
	<link rel="icon" href="/lib/img/2x/App@2x.png" sizes="94*94" type="image/png" />
	<link rel="icon" href="/lib/img/3x/App@3x.png" sizes="144*144" type="image/png" />
	<link rel="apple-touch-icon-precomposed" href="../img/3x/App_og@3x.png" type="image/png" />
	<title
		>{title == '' ? { title } + ' - Advenccre' : 'Advenccre - The Awesome SVG icon Library'}</title
	>
</svelte:head>
