<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="flex rounded-lg border-2 border-solid border-gray-400 shadow p-3 {className}">
	<slot></slot>
</div>
