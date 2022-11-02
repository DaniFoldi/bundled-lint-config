module.exports = {
  env: {
    'react-native/react-native': true
  },
  extends: [ './react.js' ],
  plugins: [ 'react', 'react-hooks', 'react-native' ],
  rules: {
    'import/no-unassigned-import': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-native/no-color-literals': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-raw-text': 'off',
    'react-native/no-single-element-style-arrays': 'warn',
    'react-native/no-unused-styles': 'warn',
    'react-native/sort-styles': 'off',
    'react-native/split-platform-components': 'error'
  }
}
