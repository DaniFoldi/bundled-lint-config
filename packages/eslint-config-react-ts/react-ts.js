module.exports = {
  extends: [
    './react.js',
    './ts.js'
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
