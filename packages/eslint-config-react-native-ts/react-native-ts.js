module.exports = {
  extends: [
    './react-native.js',
    './ts.js'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    jsxPragma: null
  },
  plugins: [ '@typescript-eslint', 'react', 'react-hooks', 'react-native' ]
}
