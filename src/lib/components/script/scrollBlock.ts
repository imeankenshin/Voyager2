export function scrollBlock(a: boolean) {
	if (typeof document !== 'undefined') {
		const desktop: boolean = navigator.userAgent.match(/iPhone|Android.+desktop/) == null;
		const isHigherThanView: boolean = document.body.scrollHeight >= window.innerHeight;

		if (a) {
			document.body.style.overflow = 'hidden';
			if (isHigherThanView && desktop) {
				document.body.style.paddingRight = '0.75rem';
			}
		} else {
			document.body.style.overflow = 'auto';
			if (isHigherThanView && desktop) {
				document.body.style.paddingRight = '0';
			}
		}
	}
}
