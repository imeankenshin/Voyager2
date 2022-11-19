<script lang="ts">
	import { scrollBlock } from '../func/scrollBlock';
	// import { clickOutside } from '../func/clickOutside';
	function clickOutside(node: HTMLElement) {
		const handleClick = (event: any) => {
			if (!node.contains(event.target)) {
				node.dispatchEvent(new CustomEvent('outclick'));
				open = !open;
			}
		};

		document.addEventListener('click', handleClick, true);
	}

	$: scrollBlock(open);
	type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
	enum sizes {
		xs = 10
	}
	export let size: size = 'auto';
	export let open: boolean = false;
</script>

<div
	class="{open
		? 'opacity-1'
		: ' opacity-0'} fixed top-0 left-0 flex h-full w-full place-items-center justify-center bg-black bg-opacity-40 transition-all"
>
	<div
		use:clickOutside
		class="{open
			? ' scale-100'
			: ' scale-90'} dialog_body w-fill m-8 flex h-60 w-full max-w-3xl flex-col overflow-hidden rounded-lg bg-white p-4 transition-all dark:bg-gray-700"
	>
		<slot />
	</div>
</div>

<style lang="scss">
	@keyframes in {
		from {
			transform: translateY(100vh);
		}
		to {
			transform: translateY(0);
		}
	}
	.dialog_body {
		animation: in 0.2s cubic-bezier(0.3, 0.9, 0.4, 1) 1;
	}
</style>
