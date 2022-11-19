<script lang="ts">
	import PageConfig from '../components/PageConfig.svelte';
</script>

<PageConfig title="" />
<main class="dark:bg-black">
	<section>
		<div>
			<h1>
				冒険へ<wbr />
				出よう。
			</h1>
			<p>ああ</p>
		</div>
		<div class="image" />
	</section>
	<section>
		<div class="image bg-red-300">
			<p>gen</p>
		</div>
		<div>
			<h2>とてもシンプル</h2>
			<p>Advenccreは、AppleのSF Symbolsにインスパイアされています。</p>
		</div>
	</section>
	<section>
		<div>
			<h2>モダンなアイコン</h2>
			<p>典型的な形に飽き飽きしていませんか？ Advenccreは違います。</p>
		</div>
		<div class="image" />
	</section>
</main>

<style lang="scss">
	// main {
	// 	padding: 0 clamp(2rem, 5%, 5rem);
	// }
	section {
		display: grid;
		@apply grid-cols-none sm:grid-cols-[1fr_1fr];
		height: clamp(28rem, calc(100vh - 84px), 100rem);
		& > div {
			padding: 1.5rem;
		}
		& > .image {
			@apply hidden bg-red-300 sm:block;
		}
	}
</style>
