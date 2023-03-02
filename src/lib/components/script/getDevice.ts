export const getDevice = () => {
	if (typeof navigator !== 'undefined') {
		let [Mac, Windows, Linux, Ios, Android]: boolean[] = [
			navigator.userAgent.indexOf('Mac') > 0,
			navigator.userAgent.indexOf('Windows') > 0,
			navigator.userAgent.indexOf('Linux') > 0,
			navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0,
			navigator.userAgent.indexOf('Android') > 0
		];
		if (Ios) {
			return 'Ios';
		} else if (Android) {
			return 'Android';
		} else if (Windows) {
			return 'Windows';
		} else if (Mac) {
			return 'Mac';
		} else if (Linux) {
			return 'Linux';
		} else {
			return undefined;
		}
	}
};
