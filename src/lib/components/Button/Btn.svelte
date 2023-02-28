<script lang="ts">
	export let label: string | undefined = undefined;
	export let onClick: (
		event: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) => void;
</script>

<button
	class="rounded-md bg-violet-500 p-3 active:scale-95"
	on:click={(e) => {
		onClick(e);
	}}>{label}</button
>
