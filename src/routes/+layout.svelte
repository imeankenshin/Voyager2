<script lang="ts">
	import Head from '../components/Head.svelte';
	import { scrollBlock } from '../components/script/scrollBlock';
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
		{ href: '/', title: 'components' },
		{ href: '/docs', title: 'docs' }
	];
	$: scrollBlock(open);
	if (typeof window !== 'undefined') {
		window.addEventListener('keydown', (event: KeyboardEvent) => {
			if (open && event.key == 'Escape') {
				open = false;
			}
		});
	}
</script>

<Head />
<header class="sticky left-0 top-0" role="navigation">
	<div
		class="w-fill z-40 flex justify-between border-b-4 border-solid border-zinc-500 bg-white px-6 py-4 dark:bg-slate-800"
	>
		<a href="/">
			<div class="flex items-center">
				<img src="/src/components/Advenccre.svg" alt="" width="48" height="48" />
				<p class="ml-2 text-xl font-bold">Advenccre</p>
			</div>
		</a>
		<div class="hidden items-center md:flex" role="listbox" aria-label="urls">
			{#each menu_list as menu, i}
				<a
					class="mx-3 text-xl"
					tabindex={i == 0 ? 0 : -1}
					href={menu.href}
					role="option"
					aria-selected={i == 0 ? true : false}
				>
					{menu.title}
				</a>
			{/each}
		</div>
		<button class="md:hidden" type="button" on:click={() => (open = !open)}>Toggle</button>
	</div>

	<nav
		use:outClick
		class="{open
			? 'right-0 duration-500'
			: '-right-72 duration-300 select-none'} fixed top-0 z-50 block h-full w-72 border-l-4 border-gray-300 bg-white px-6 pb-4 transition-all dark:bg-slate-900 md:hidden"
	>
		<ul>
			{#each menu_list as menu, i}
				<li
					class="{open
						? 'duration-[0.3s] '
						: 'translate-x-96 duration-300'} relative my-6 rounded-lg bg-slate-200 px-4 py-2 text-right transition-all"
					style:transition-delay="{open ? 76 * i : 0}ms"
				>
					<a class="text-xl" href={menu.href} on:click={() => (open = !open)}>{menu.title}</a>
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

<style>
</style>
