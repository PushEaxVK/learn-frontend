export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null, // вимикаємо базову перевірку
    'scss/at-rule-no-unknown': true, // включаємо SCSS-специфічну
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'declaration-block-trailing-semicolon': 'always',
    indentation: 2,
    'no-extra-semicolons': true,
    'string-quotes': 'single',
  },
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.html'],
};
