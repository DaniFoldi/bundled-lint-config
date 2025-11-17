import globals from 'globals'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const workersSettings: Settings = {
  'import-x/core-modules': [ 'cloudflare:email', 'cloudflare:sockets', 'cloudflare:test', 'cloudflare:workers', 'cloudflare:workflows' ]
}

export const workersGlobals: Globals = {
  ...globals['shared-node-browser']
}

export const workersLanguageOptions: LanguageOptions = {
  globals: workersGlobals
}

export const workersPlugins: Plugins = {}

export const workersRules: Rules = {
  'import/no-unassigned-import': 'off'
}
