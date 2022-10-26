module.exports = {
  env: {
    browser: true
  },
  extends: [
    'plugin:@danifoldi/eslint-presets/standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  plugins: [ 'react', 'react-hooks' ],
  rules: {
    'import/no-unassigned-import': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error'
  }
}
