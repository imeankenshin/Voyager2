<script lang="ts">
	import { scrollBlock } from '../script/scrollBlock';
	// import { clickOutside } from '../func/clickOutside';
	export let open: boolean = false;
	let className: string = '';
	export let closeHandler: (() => void) | undefined = undefined;
	export { className as class };

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
		class="{className}{open
			? ' scale-100'
			: ' scale-90 pointer-events-none'} dialog_body w-fill m-8 flex w-full max-w-3xl flex-col overflow-hidden rounded-lg bg-white p-4 transition-all dark:bg-gray-700"
	>
		<slot />
	</div>
</div>
