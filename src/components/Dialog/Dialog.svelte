<script lang="ts">
	import { scrollBlock } from '../script/scrollBlock';
	// import { clickOutside } from '../func/clickOutside';
	export let open: boolean = false;
	export let closeHandler: (() => void) | undefined = undefined;

	function clickOutside(node: Node) {
		const handleClick = (event: any) => {
			if (!node.contains(event.target) && open) {
				node.dispatchEvent(new CustomEvent('outclick'));
				if (closeHandler !== undefined) {
					closeHandler();
				}
			}
		};

		document.addEventListener('click', handleClick, true);
	}

	$: scrollBlock(open);

	if (typeof window !== 'undefined') {
		window.addEventListener('keydown', (event) => {
			if (open && event.key == 'Escape') {
				if (closeHandler !== undefined) {
					closeHandler();
				}
			}
		});
	}
</script>

<div
	class="{open
		? 'opacity-1 animate-show'
		: ' opacity-0 animate-dissapier pointer-events-none'} fixed top-0 left-0 flex h-full w-full place-items-center justify-center bg-black bg-opacity-40 transition-all"
>
	<div
		use:clickOutside
		class="{open
			? ' scale-100'
			: ' scale-90 pointer-events-none'} dialog_body w-fill m-8 flex h-60 w-full max-w-3xl flex-col overflow-hidden rounded-lg bg-white p-4 transition-all dark:bg-gray-700"
	>
		<slot />
	</div>
</div>

<style lang="scss">
	// @keyframes in {
	// 	from {
	// 		display: none;
	// 	}
	// 	to {
	// 		display: block;
	// 	}
	// }
	// .dialog_body {
	// 	animation: in 150ms cubic-bezier(0.3, 0.9, 0.4, 1) 1;
	// }
</style>
