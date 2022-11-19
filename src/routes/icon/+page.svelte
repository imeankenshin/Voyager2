<script lang="ts">
	import Card from '../../components/Card/Card.svelte';
	import Aco from '../../components/Acordion/Aco.svelte';
	import PageConfig from '../../components/PageConfig.svelte';
	import Dialog from '../../components/Dialog/Dialog.svelte';
</script>

<PageConfig title="icon" />
<main>
	<Card />
	<Aco title="text here" class="m-10 rounded-md bg-sky-200">
		<div class="p-3">
			<h3>Title here</h3>
			<p>foo foo foo foo</p>
		</div>
	</Aco>
	<Dialog open
		><h4>Are you sure you really want to delete this project?</h4>
		<p>you cannot fix this, ANYMORE!</p></Dialog
	>
</main>
