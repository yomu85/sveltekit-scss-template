import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: sveltePreprocess({
		scss: {
			// prependData: 외부에 있는 scss을 불러올 수 있는 옵션
			prependData: `@import './src/scss/styles.scss';`,
		},
	})
};

export default config;
