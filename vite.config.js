import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'~': path.resolve('src')
		}
	},
	css: {
		postcss: {
			plugins: [
				autoprefixer()
			],
		}
	}
});
