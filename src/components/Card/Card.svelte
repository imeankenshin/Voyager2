<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="flex rounded-lg border-2 border-solid border-gray-600 shadow-md p-3 {className}">
	<slot></slot>
</div>
