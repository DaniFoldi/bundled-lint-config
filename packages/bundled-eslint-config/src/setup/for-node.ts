import globals from 'globals'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const nodeSettings: Settings = {}

export const nodeLanguageOptions: LanguageOptions = {}

export const nodeGlobals: Globals = {
  ...globals.node
}

export const nodePlugins: Plugins = {}

export const nodeRules: Rules = {}
