import globals from 'globals'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const nodeSettings: Settings = {}

export const nodeGlobals: Globals = {
  ...globals.node
}

export const nodeLanguageOptions: LanguageOptions = {
  globals: nodeGlobals
}

export const nodePlugins: Plugins = {}

export const nodeRules: Rules = {
  'unicorn/no-process-exit': 'off'
}
