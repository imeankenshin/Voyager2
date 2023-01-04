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
		<div class="flex flex-col items-center">
			<img src="/image/Advenccre.svg" alt="bandana" class=" w-4/5 max-w-[18rem] select-none" />
			<h1
				class="mb-4 -mt-6 animate-fadein font-marker text-5xl font-semibold sm:-mt-16 sm:text-8xl"
			>
				Advencure
			</h1>
			<p style:animation-duration="1.8s" class="animate-fadein text-lg delay-200">
				Time to start your develop journey.
			</p>
			<div
				class="mt-10 flex w-full flex-col items-center justify-around sm:flex-row [&>*]:rounded-md [&>*]:p-3 [&>*]:text-lg [&>*]:font-medium"
			>
				<a href="/catalog" class="flex items-center bg-slate-200 pr-5 dark:bg-slate-600"
					><img src="/image/scope.svg" class="mr-3 h-10 w-10" alt="glass" />Search Icons</a
				>
				<a href="/usage" class="max-sm:mt-4">Read Details</a>
			</div>
		</div>
	</section>
	<section class="grid grid-cols-2">
		<div class="m-6 grid h-full content-center items-center">
			<h2 class="mb-4 animate-fadeinRight font-marker text-5xl">Everything that frontend need.</h2>
			<p>hello</p>
		</div>
	</section>
</main>
