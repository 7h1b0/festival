module.exports = {
  presets: [
    ['@babel/preset-typescript', { jsxPragma: 'h' }],
    [
      '@babel/preset-env',
      {
        targets: {
          firefox: 68,
        },
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { pragma: 'h' }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
