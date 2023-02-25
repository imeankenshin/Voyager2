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
<main
	class="[&>section]:mb-36 [&>section]:h-screen [&>section]:min-h-max [&>section:last-child]:mb-12"
>
	<section class="grid place-items-center text-center">
		<div class="flex w-full flex-col items-center" style:background-color="theme(colors.red.300)">
			<div class="mx-12 grid w-full max-w-xl animate-fadein select-none dark:[&>*]:fill-white">
				<img src="/Voyager2.svg" alt="voyager2 logo" />
			</div>
			<p style:animation-duration="2.2s" class="animate-fadein text-lg delay-200">
				Time to start your develop journey.
			</p>

			<div
				class="mt-10 flex flex-col items-center justify-around child:rounded-md child:text-lg child:font-medium sm:flex-row"
			>
				<a href="/catalog" class="flex items-center bg-slate-200 p-3 dark:bg-slate-600 sm:mr-12"
					><img src="/image/scope.svg" class="mr-3 h-10 w-10" alt="glass" />Search Icons</a
				>
				<a href="/docs" class="p-3 max-sm:mt-4">Read Details</a>
			</div>
			<p class="flex items-center">
				<span class="v2-face mr-1 h-9 w-9 text-3xl" /> chat
			</p>
		</div>
	</section>
	<section class="grid items-center max-lg:grid-rows-3 lg:grid-cols-2">
		<div class="mx-6 grid h-full content-center items-center">
			<h2 class="mb-10 animate-fadeinRight text-6xl font-bold">Variety, modern, simple, useful.</h2>
			<p>
				Voyager2 has been made for more than 0.5 years.<br />
				I have studied and polishied for manytimes
			</p>
		</div>
		<div class="row-span-2 grid h-full place-items-center">
			<img src="/image/tredure.svg" class="w-full min-w-[12rem] max-w-xl" alt="tredure" />
		</div>
	</section>
</main>
