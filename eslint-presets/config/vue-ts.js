module.exports = {
  extends: [
    'plugin:@danifoldi/eslint-presets/ts',
    'plugin:@danifoldi/eslint-presets/vue'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    extraFileExtensions: [ '.vue' ],
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [ '@typescript-eslint' ]
}
