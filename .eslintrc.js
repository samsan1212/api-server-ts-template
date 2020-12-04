module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {}
};
