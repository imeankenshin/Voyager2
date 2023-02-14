import { sveltekit } from '@sveltejs/kit/vite';
import { UserConfig } from 'vite';

const config : UserConfig = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
