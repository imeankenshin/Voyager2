<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="flex rounded-lg bg-gray-100 dark:bg-gray-700 p-3 shadow {className}">
	<slot />
</div>
