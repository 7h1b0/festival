module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'jsx-a11y', 'cypress'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:cypress/recommended',
  ],
  settings: {
    react: {
      version: '16.8',
    },
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
    'cypress/globals': true,
  },
  rules: {
    'react/no-unknown-property': 'off', // prevents error with class vs className
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
