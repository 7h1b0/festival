module.exports = {
  presets: [
    ['@babel/preset-typescript', { jsxPragma: 'h' }],
    [
      '@babel/preset-env',
      {
        targets: { esmodules: true },
        bugfixes: true,
      },
    ],
  ],
  plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'h' }]],
};
