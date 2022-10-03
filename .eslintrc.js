module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['react-app', 'react-app/jest', 'eslint:recommended'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
  },
};
