<script lang="ts">
	export let code: string;
	let copied = false;
	export let file: string;

	function successWriteTxt() {
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 3500);
	}
</script>

<div
	class="my-4 rounded-lg border-2 border-slate-300 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-800"
>
	<div
		class="mb-2 flex items-center justify-between border-b-2 border-slate-300 pb-2 dark:border-slate-600"
	>
		<code>{file}</code>
		<button
			on:click={async () => {
				await navigator.clipboard.writeText(code).then(successWriteTxt);
			}}
			class="inline-flex items-center"
		>
			<i class="v2-clipboard mr-0.5 text-xl" />
			<span>{copied ? 'Success!' : 'Copy'}</span>
		</button>
	</div>
	<code>
		{code}
	</code>
</div>
