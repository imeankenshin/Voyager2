<script lang="ts">
	let className: string | undefined;
	export { className as class };
</script>

<div class="flex rounded-lg bg-gray-100 p-3 shadow dark:bg-gray-800 {className}">
	<slot />
</div>
