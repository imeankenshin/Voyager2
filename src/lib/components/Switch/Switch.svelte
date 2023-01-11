<script lang="ts">
	export let props = {
		name: '',
		readOnly: false,
		disabled: false,
		required: false
	};
	export let id: string | undefined | null = '';
	export let checked: boolean = false;
	export let label: string | null = '';
</script>

<label class="flex cursor-pointer items-start justify-between">
	{#if label !== null && label?.length > 0}
		<span class="mt-auto mr-8 text-base">{label}</span>
	{/if}
	<input
		type="checkbox"
		required={props.required}
		name={props.name}
		bind:checked
		readOnly={props.readOnly}
		disabled={props.disabled}
		{id}
		class="peer absolute h-0 w-0"
	/>
	<span
		class="group flex h-7 w-10 items-center justify-center rounded-lg bg-gray-400 p-1 peer-checked:bg-purple-500"
	>
		<span
			class="peer-checked:group-[]:before:borde grid h-5 w-5 -translate-x-1.5 place-items-center rounded-md bg-white transition-all duration-200 before:w-2.5
			before:rounded-full before:border-[1px] before:border-gray-400 peer-checked:group-[]:translate-x-1.5 peer-checked:group-[]:before:h-2.5 peer-checked:group-[]:before:border-2
		peer-checked:group-[]:before:border-purple-500"
		/>
	</span>
</label>
