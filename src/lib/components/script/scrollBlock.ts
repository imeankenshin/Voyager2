import { getDevice } from "./getDevice";

export function scrollBlock(a: boolean) {
	if (typeof document !== 'undefined') {
		const desktop = getDevice()?.match(/Ios|Android/) == null
		const isHigherThanView: boolean = document.body.scrollHeight >= window.innerHeight;
		if (a) {
			document.body.style.overflow = 'hidden';
			if (isHigherThanView && desktop) {
				document.body.style.paddingRight = '0';
			}
		} else {
			document.body.style.overflow = 'auto';
			if (isHigherThanView && desktop) {
				document.body.style.paddingRight = '0';
			}
		}
	}
}
