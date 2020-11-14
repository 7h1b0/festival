module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.tsx'],
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
  },
};
