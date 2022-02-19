import colors from 'tailwindcss/colors.js';

export default {
  content: ['./src/**/*.{html,js,svelte}'],
  corePlugins: {
    container: false,
    animation: false,
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    ringOpacity: false,
  },
  theme: {
    screens: {
      lg: '1024px',
    },
    extend: {
      colors: {
        slate: colors.slate,
      },
    },
  },
  plugins: [],
};
