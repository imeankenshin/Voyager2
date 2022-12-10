export function clickOutside(node: HTMLElement, param: any) {
	const handleClick = (event: any) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent('outclick'));
		}
	};

	document.addEventListener('click', handleClick, true);
}
