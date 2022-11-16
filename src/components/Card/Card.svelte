<script lang="ts">
	export let title: string = 'undefined';
	let className: string = '';
	export { className as class };
</script>

<div class="flex rounded-3xl border-4 border-solid border-gray-400 bg-white p-3 {className}">
	<h3>{title}</h3>
</div>
