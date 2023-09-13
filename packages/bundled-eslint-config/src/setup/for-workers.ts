
import globals from 'globals'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const workersSettings: Settings = {}

export const workersLanguageOptions: LanguageOptions = {}

export const workersGlobals: Globals = {
  ...globals['shared-node-browser']
}

export const workersPlugins: Plugins = {}

export const workersRules: Rules = {
  'import/no-unassigned-import': 'off'
}
