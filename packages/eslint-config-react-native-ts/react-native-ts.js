import { mainRuleset as reactNativeMain } from './react-native.js'
import { mainRuleset as tsMain } from './ts.js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactNative from 'eslint-plugin-react-native'

export default [
  {
    ...reactNativeMain(),
    ...tsMain({}, {
      react, reactHooks, reactNative, reactRefresh
    }),
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      jsxPragma: null
    }
  }
]
