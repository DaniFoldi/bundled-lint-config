module.exports = {
  env: {
    browser: true
  },
  extends: [
    './standard.js',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  plugins: [ 'react', 'react-hooks' ],
  rules: {
    'import/no-unassigned-import': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'unicorn/no-useless-undefined': 'off'
  }
}
