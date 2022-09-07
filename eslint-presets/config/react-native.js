module.exports = {
  env: {
    'react-native/react-native': true
  },
  extends: [
    'plugin:@danifoldi/eslint-presets/react'
  ],
  plugins: [ 'react', 'react-hooks', 'react-native' ],
  rules: {
    'react-native/no-unused-styles': 'warn',
    'react-native/sort-styles': 'off',
    'react-native/split-platform-components': 'error',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': 'off',
    'react-native/no-single-element-style-arrays': 'warn'
  }
}
