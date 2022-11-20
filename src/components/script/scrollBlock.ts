export function scrollBlock(a: boolean) {
	if (typeof document !== 'undefined') {
		if (a) {
			document.body.style.overflow = 'hidden';
			if (document.body.scrollHeight >= window.innerHeight) {
				document.body.style.paddingRight = '0.75rem';
			}
		} else {
			document.body.style.overflow = 'auto';
			if (document.body.scrollHeight >= document.body.offsetHeight) {
				document.body.style.paddingRight = '0';
			}
		}
	}
}
