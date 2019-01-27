module.exports = {
  presets: [
    [
      '@emotion/babel-preset-css-prop',
      {
        autoLabel: false,
      },
    ],
    [
      '@babel/preset-env',
      {
        targets: {
          firefox: 60,
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
