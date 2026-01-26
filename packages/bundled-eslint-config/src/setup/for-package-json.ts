import eslintPluginPackageJson from 'eslint-plugin-package-json'
import * as jsoncParser from 'jsonc-eslint-parser'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const packageJsonSettings: Settings = {}

export const packageJsonGlobals: Globals = {}

export const packageJsonLanguageOptions: LanguageOptions = {
  globals: packageJsonGlobals,
  parser: jsoncParser
}

export const packageJsonPlugins: Plugins = {
  'package-json': eslintPluginPackageJson
}

export const packageJsonRules: Rules = {
  'package-json/no-empty-fields': 'error',
  'package-json/order-properties': 'error',
  'package-json/repository-shorthand': 'error',
  'package-json/require-name': 'error',
  'package-json/require-version': 'error',
  'package-json/sort-collections': 'error',
  'package-json/unique-dependencies': 'error',
  'package-json/valid-name': 'error',
  'package-json/valid-package-definition': 'error',
  'package-json/valid-repository-directory': 'error',
  'package-json/valid-version': 'error'
}
