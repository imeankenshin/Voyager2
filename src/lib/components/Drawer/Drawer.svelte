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
		} else {
			document.body.style.overflow = 'auto';
		}
	}
</script>

<nav
	{id}
	tabindex="-1"
	use:outClick
	class="{open
		? 'right-0 duration-500'
		: '-right-72 duration-300'} fixed top-0 z-50 block h-full w-64 border-l-2 bg-white px-6 pb-4 transition-all dark:bg-slate-900 md:hidden"
>
	<slot><!-- optional fallback --></slot>
</nav>
<div
	class="{open
		? 'bg-[#0006]'
		: 'bg-transparent '} pointer-events-none fixed top-0 z-40 h-full w-full select-none transition-all duration-300 md:hidden"
	on:keydown={() => (open = !open)}
/>
