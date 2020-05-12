module.exports = {
  extends: [
    '../.eslintrc',
    '../rules/react/react',
    '../rules/react/react-a11y',
  ].map(require.resolve),
  rules: {}
};
