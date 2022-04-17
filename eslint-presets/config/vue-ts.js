module.exports = {
  extends: [
    './ts.js',
    './vue.js'
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    extraFileExtensions: [ '.vue' ],
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  parser: 'vue-eslint-parser',
  plugins: [ '@typescript-eslint' ],
}
