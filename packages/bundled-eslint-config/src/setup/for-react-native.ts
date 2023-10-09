import eslintPluginReactNative from 'eslint-plugin-react-native'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const reactNativeSettings: Settings = {}

export const reactNativeGlobals: Globals = {}

export const reactNativeLanguageOptions: LanguageOptions = {
  globals: reactNativeGlobals
}

export const reactNativePlugins: Plugins = {
  'react-native': eslintPluginReactNative
}

export const reactNativeRules: Rules = {
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
