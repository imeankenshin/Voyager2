<script>
	import PageDesc from '../layout/PageDesc.svelte';
</script>

<PageDesc
	content={{
		title: 'Documentation',
		desc: 'This page is a documentation of Advenccre.',
		type: 'article'
	}}
/>

<article>
	<h1 id="title">Document</h1>
	<section>
		<p>
			Welcome to Voyager2's Documentation! In this page, I will tell you how to use Voyager2's svg
			icons, and how I designed them. こんにちは
		</p>
	</section>
	<section>
		<h2 id="feature">Feature</h2>
		<ul class="m-8 flex flex-wrap justify-around">
			<li>
				<div class="card">
					<h3>How to use</h3>
				</div>
			</li>
			<li>
				<div class="card">
					<h3>Design system</h3>
				</div>
			</li>
			<li>
				<div class="card">
					<h3>History</h3>
				</div>
			</li>
			<li>
				<div class="card">
					<h3>subtitle</h3>
				</div>
			</li>
		</ul>
	</section>
</article>

<style lang="postcss">
	h1 {
		@apply mb-6 border-b-2 border-gray-400/60 pb-6 text-5xl font-bold;
	}
	h2 {
		@apply my-6 border-b-2 border-gray-400/60 pb-3 text-4xl font-semibold;
	}
	h3 {
		@apply text-2xl font-medium;
	}
	p {
		@apply my-2 max-w-3xl;
	}
	.card {
		@apply m-4 h-48 w-72 rounded-lg p-6 text-center shadow-lg dark:border-gray-500 dark:bg-slate-900;
	}
</style>
