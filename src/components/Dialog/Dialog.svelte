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
	class="fixed top-0 left-0 {open
		? 'flex'
		: 'hidden'} h-full w-full place-items-center justify-center bg-black bg-opacity-40"
>
	<div
		use:clickOutside
		class="dialog_body w-fill m-8 flex h-60 w-full max-w-3xl flex-col overflow-hidden rounded-lg bg-white p-4 dark:bg-gray-700"
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
	@keyframes expantion {
		0% {
			white-space: nowrap;
			color: transparent;
			width: 3rem;
		}
		50% {
			width: 3rem;
			color: transparent;
		}
		99% {
			white-space: nowrap;
		}
		100% {
			white-space: inherit;
			width: 100%;
		}
	}
	.dialog_body {
		animation: in 0.2s cubic-bezier(0, 1, 0.5, 1) 1, expantion 0.4s cubic-bezier(1, 0, 0.58, 1) 1;
	}
</style>
