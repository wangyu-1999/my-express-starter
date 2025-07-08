// eslint.config.js
import globals from 'globals';
import js from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {},
  },

  // This must be the last item.
  prettierRecommended,
];
