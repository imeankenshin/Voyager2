<script lang="ts">
	import Menu from './Menu.svelte';
	import Drawer from '../../components/Drawer/Drawer.svelte';
	let open: boolean = false;
	const list: { link: string; title: string }[] = [
		{
			link: '/',
			title: 'home'
		},
		{
			link: '/docs',
			title: 'docs'
		},
		{
			link: '/catalog',
			title: 'catalog'
		},
		{
			link: 'https:/components.advencure.design',
			title: 'components'
		}
	];
</script>

<header>
	<nav
		class="fixed top-0 left-0 z-50 grid w-full grid-cols-2 justify-between bg-gradient-to-b from-white to-transparent px-4 py-3 dark:from-slate-800 [&_*]:outline-none"
	>
		<a class="logo flex items-center" href="/">
			<img
				class="mr-2 h-10 translate-y-[2px] hover:animate-bounce"
				src="/image/Advenccre.svg"
				alt="Advenccre icon"
			/>
			<span class="font-marker text-2xl font-semibold hover:animate-pulse">Advencure</span>
		</a>
		<Menu {list} class="hidden items-center md:flex md:justify-end" />
		<div class="flex items-center justify-end md:hidden">
			<button
				type="button"
				class=" m-3 h-9 w-9 rounded text-center font-['SF_Pro'] text-2xl"
				on:click={() => (open = true)}>􀏛</button
			>
			<Drawer bind:open>
				<Menu {list} class="py-6 [&_*]:text-2xl [&>li]:mb-4" />
			</Drawer>
		</div>
	</nav>
</header>
