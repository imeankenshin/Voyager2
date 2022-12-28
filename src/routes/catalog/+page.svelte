<script>
	import Main from './components/Main.svelte';
	import ComingSoon from '../layout/ComingSoon.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		const searchInput = document.getElementById('search');
		window.addEventListener('keyup', (e) => {
			const searchCommnad_Sharp = e.key == '/' && searchInput;
			if (searchCommnad_Sharp) {
				searchInput.focus();
			}
		});
		window.addEventListener('keydown', (e) => {
			const searchCommand_Cmd_K = e.key == 'k' && e.metaKey && searchInput;
			if (searchCommand_Cmd_K) {
				searchInput.focus();
			}
		});
	});
</script>

<Main />
<ComingSoon />
