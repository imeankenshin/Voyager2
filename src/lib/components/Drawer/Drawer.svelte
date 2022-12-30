<script lang="ts">
	export let open = false;
	export let id = 'sidebar';
	function outClick(node: any) {
		const handleClick = (event: Event) => {
			if (!node.contains(event.target) && open == true) {
				node.dispatchEvent(new CustomEvent('outclick'));
				open = !open;
			}
		};
		document.addEventListener('click', handleClick, true);
	}

	$: if (typeof document !== 'undefined') {
		if (open) {
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = '0.75rem';
		} else {
			document.body.style.overflow = 'auto';
			document.body.style.paddingRight = '0';
		}
	}
</script>

<div
	tabindex="-1"
	class="{open
		? 'bg-opacity-30'
		: 'bg-opacity-0'} pointer-events-none fixed top-0 z-40 flex h-full w-full select-none bg-black transition-all duration-300 md:hidden"
	on:keydown={() => (open = !open)}
/>
<nav
	{id}
	tabindex="-1"
	use:outClick
	class="{open
		? 'right-0 mr-3 duration-500'
		: '-right-72 duration-300'} fixed top-0 z-50 block h-full w-64 bg-white px-6 pb-4 transition-all dark:bg-slate-900 md:hidden"
>
	<slot><!-- optional fallback --></slot>
</nav>
