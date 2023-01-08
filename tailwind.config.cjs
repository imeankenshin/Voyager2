const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts,,svelte}'],
	important: false,
	theme: {
		extend: {
			fontFamily: {
				marker: 'PermanentMarker'
			},
			keyframes: {
				fadein: {
					from: { translate: '0 2.5rem', opacity: '0' },
					to: { transform: '0 0', opacity: '1' }
				},
				fadeinLeft: {
					from: { translate: '2.5rem 0', opacity: '0' },
					to: { transform: '0 0', opacity: '1' }
				},
				fadeinRight: {
					from: { translate: '-2.5rem 0', opacity: '0' },
					to: { transform: '0 0', opacity: '1' }
				}
			},
			animation: {
				fadein: 'fadein 1.5s ease',
				fadeinLeft: 'fadeinLeft 1.5s ease',
				fadeinRight: 'fadeinRight 1.5s ease'
			}
		}
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('scroll', '&::-webkit-scrollbar');
			addVariant('scroll-tb', '&::-webkit-scrollbar-thumb');
			addVariant('scroll-tb-active', '&::-webkit-scrollbar-thumb:active');
			addVariant('child', '&>*');
			addVariant('childAll', '&_*');
		})
	]
};
