import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess(),
  compilerOptions: {
    cssHash: ({ hash, css }) => {
      return `f${hash(css)}`;
    },
  },
};
