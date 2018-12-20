module.exports = {
  parser: 'typescript-eslint-parser',
  plugins: ['typescript'],

  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: 'airbnb-base',
};
