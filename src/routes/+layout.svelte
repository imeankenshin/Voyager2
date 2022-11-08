<script lang="ts">
	import Head from '../components/Head.svelte';
	function outClick(node: Node) {
		const handleClick = (event: any) => {
			if (!node.contains(event.target) && open == true) {
				node.dispatchEvent(new CustomEvent('outclick'));
				open = !open;
			}
		};

		document.addEventListener('click', handleClick, true);
	}

	let open: boolean = false;
	const menu_list: { href: string; title: string }[] = [
		{ href: '/', title: 'home' },
		{ href: '/icon', title: 'icon' },
		{ href: '', title: 'components' }
	];
	$: if (typeof document !== 'undefined') {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}
</script>

<Head />
<header class="sticky left-0 top-0">
	<div
		class="z-40 flex w-full justify-between border-b-4 border-solid border-zinc-500 bg-white px-6 py-4"
	>
		<img src="/src/components/Advenccre.svg" alt="" width="48" />
		<ul class="hidden items-center md:flex">
			{#each menu_list as menu}
				<li class="mx-4">
					<a class="text-xl" href={menu.href}>{menu.title}</a>
				</li>
			{/each}
		</ul>
		<button class="md:hidden" on:click={() => (open = !open)}>Toggle</button>
	</div>

	<nav
		use:outClick
		class="{open
			? 'right-0'
			: '-right-72'} fixed top-0 z-50 block h-full w-72 bg-white px-6 pb-4 transition-all duration-200 dark:bg-slate-900 md:hidden"
	>
		<ul>
			{#each menu_list as menu}
				<li class="my-6 rounded-lg bg-slate-200 px-4 py-2 text-right">
					<a class="text-xl" href={menu.href}>{menu.title}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div
		class="{open
			? 'bg-[#0006]'
			: 'bg-transparent '} pointer-events-none fixed top-0 z-40 h-full w-full select-none transition-all duration-300 md:hidden"
		on:keydown={() => (open = !open)}
	/>
</header>
<slot><!-- optional fallback --></slot>
