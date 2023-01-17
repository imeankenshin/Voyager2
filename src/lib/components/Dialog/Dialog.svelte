<script lang="ts">
	import { scrollBlock } from '../script/scrollBlock';
	import { onMount } from 'svelte';
	// import { clickOutside } from '../func/clickOutside';

	export let open: boolean = false;
	let className: string = '';
	export let closeHandler: (() => void) | undefined = undefined;
	export let id: string | undefined | null = undefined;
	export { className as class };
	function clickOutside(node: Node) {
		const handleClick = (event: any) => {
			if (!node.contains(event.target) && open) {
				node.dispatchEvent(new CustomEvent('outclick'));
				open != open;
				if (closeHandler !== undefined) {
					closeHandler();
				}
			}
		};
		document.addEventListener('click', handleClick, true);
	}

	$: scrollBlock(open);

	onMount(() => {
		window.addEventListener('keydown', (event) => {
			if (open && event.key == 'Escape') {
				open = !open;
				if (closeHandler !== undefined) {
					closeHandler();
				}
			} else if (event.key == 'a') {
				open = !open;
			}
		});
	});
</script>

<div
	role="presentation"
	tabindex="-1"
	{id}
	class="{!open &&
		' animate-dissapier pointer-events-none opacity-0'} fixed top-0 left-0 z-50 grid h-full w-full
		place-items-center bg-black bg-opacity-40 transition-all duration-200"
>
	<div
		role="dialog"
		use:clickOutside
		class="{className} {!open &&
			'pointer-events-none scale-90'} m-8 flex flex-col overflow-hidden rounded-lg bg-white p-5
			transition-all duration-200 dark:bg-gray-700"
	>
		<slot />
	</div>
</div>
