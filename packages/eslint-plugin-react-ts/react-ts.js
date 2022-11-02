module.exports = {
  extends: [
    './ts.js',
    './react.js'
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
