module.exports = {
  root: true,
  extends: ['preact'],
  plugins: ['cypress'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
    'cypress/globals': true,
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },

        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'none',
            ignoreRestSiblings: true,
          },
        ],
      },
    },
  ],

  rules: {
    'react/jsx-no-bind': 'off',
    'jest/expect-expect': 'off',
  },
};
