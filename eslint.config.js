import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
    },
    ...js.configs.recommended,
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-console': 'off',
    },
  },

  // { files: ['**/*.{js,mjs,cjs}'] },
  // {
  //   files: ['**/*.{js,mjs,cjs}'],
  //   languageOptions: { globals: globals.browser },
  // },
  // {
  //   files: ['**/*.{js,mjs,cjs}'],
  //   plugins: { js },
  //   extends: ['js/recommended'],
  // },
]);
