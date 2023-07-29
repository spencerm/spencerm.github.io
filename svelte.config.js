// svelte.config.js
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** 
 * This will add autocompletion if you're working with SvelteKit
 * 
 * @type {import('@sveltejs/kit').Config} 
 */
const config = {
  preprocess: preprocess({
    // ...svelte-preprocess options
  }),
  kit: {
    alias: {
        'components': 'src/components',
    },
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false
  })
}
};

export default config;