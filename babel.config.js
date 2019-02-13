module.exports = api => {
  api.cache(true);
  return {
    presets: [
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          targets: {
            firefox: 60,
          },
        },
      ],
      [
        '@emotion/babel-preset-css-prop',
        {
          autoLabel: false,
        },
      ],
    ],
    plugins: ['@babel/plugin-proposal-class-properties'],
  };
};
