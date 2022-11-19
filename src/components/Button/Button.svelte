<script lang="ts">
	export let disabled: boolean = false;
	export let label: string = 'button';
	let className: string = '';
	export { className as class };
</script>

<button {disabled} class={className}>
	{label}
</button>
