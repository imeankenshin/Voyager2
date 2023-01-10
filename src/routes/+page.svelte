<script lang="ts">
	import PageDesc from './layout/PageDesc.svelte';
</script>

<PageDesc
	content={{
		title: 'The system svg icon library',
		desc: 'The system svg icon library.',
		type: 'website'
	}}
/>
<main class="[&>section]:h-[110vh] [&>section]:min-h-max">
	<section class="grid max-h-screen min-h-[28rem] place-items-center text-center">
		<div class="flex flex-col items-center" style:background-color="theme(colors.red.300)">
			<img
				src="/Voyager2.svg"
				alt="Voyager2 logo"
				class="relative mx-12 w-full max-w-3xl animate-fadein select-none"
			/>
			<p style:animation-duration="2.2s" class="animate-fadein text-lg delay-200">
				Time to start your develop journey.
			</p>
			<div
				class="mt-10 flex w-full flex-col items-center justify-around child:rounded-md child:text-lg child:font-medium sm:flex-row"
			>
				<a href="/catalog" class="flex items-center bg-slate-200 p-3 dark:bg-slate-600"
					><img src="/image/scope.svg" class="mr-3 h-10 w-10" alt="glass" />Search Icons</a
				>
				<a href="/docs" class="p-3 max-sm:mt-4">Read Details</a>
			</div>
		</div>
	</section>
	<section class="grid grid-cols-2">
		<div class="m-6 grid h-full content-center items-center">
			<h2 class="mb-4 animate-fadeinRight font-marker text-5xl">
				Variety, modern, simple, useful.
			</h2>
			<p>Here are the</p>
		</div>
	</section>
</main>
