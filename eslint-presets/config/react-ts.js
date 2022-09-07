module.exports = {
  extends: [
    'plugin:@danifoldi/eslint-presets/ts',
    'plugin:@danifoldi/eslint-presets/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    jsxPragma: null
  },
  plugins: [ '@typescript-eslint', 'react', 'react-hooks' ]
}
