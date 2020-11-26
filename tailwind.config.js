const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['./src/**/*.tsx'],
  },
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
        gray: colors.blueGray,
      },
    },
  },
};
