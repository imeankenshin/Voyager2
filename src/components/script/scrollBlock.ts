export function scrollBlock(a: boolean) {
	if (typeof document !== 'undefined') {
		if (a) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}
}
