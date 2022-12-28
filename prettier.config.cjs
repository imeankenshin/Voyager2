module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	plugins: [require('prettier-plugin-svelte'), require('prettier-plugin-tailwindcss')],
	pluginSearchDirs: ['.'],
	overrides: [{ files: '*.{astro,html,svelte,js,ts}', options: { parser: 'svelte' } }],
	tailwindConfig: './tailwind.config.cjs'
};
