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
  },
  theme: {
    screens: {
      lg: '1024px',
    },
    colors: {
      indigo: colors.indigo,
      white: '#fff',
      gray: colors.blueGray,
    },
  },
};
