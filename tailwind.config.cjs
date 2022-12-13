const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				marker: "PermanentMarker"
			},
			keyframes : {
				fadein: {
					"from" :{ translate: "0 4rem", opacity: "0" },
					"to": { transform: "0 0", opacity: "1" }
				}
			},
			animation : {
				fadein: "fadein 150ms ease"
			}
		},
	},
	plugins: [plugin(function({ addVariant }) {
      addVariant('scroll', '&::-webkit-scrollbar')
			addVariant('scroll-tb','&::-webkit-scrollbar-thumb')
			addVariant('scroll-tb-active','&::-webkit-scrollbar-thumb:active')
    })],
}
