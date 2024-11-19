import eslintPluginplaywright from 'eslint-plugin-playwright'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'
import globals from 'globals'


export const playwrightSettings: Settings = {}

export const playwrightGlobals: Globals = {
  ...globals['shared-node-browser']
}

export const playwrightLanguageOptions: LanguageOptions = {
  globals: playwrightGlobals
}

export const playwrightPlugins: Plugins = {
  playwright: eslintPluginplaywright
}

export const playwrightRules: Rules = {
  'no-empty-pattern': 'off',
  'playwright/expect-expect': 'warn',
  'playwright/max-nested-describe': 'warn',
  'playwright/missing-playwright-await': 'error',
  'playwright/no-conditional-expect': 'warn',
  'playwright/no-conditional-in-test': 'warn',
  'playwright/no-element-handle': 'warn',
  'playwright/no-eval': 'warn',
  'playwright/no-focused-test': 'error',
  'playwright/no-force-option': 'warn',
  'playwright/no-nested-step': 'warn',
  'playwright/no-networkidle': 'error',
  'playwright/no-page-pause': 'warn',
  'playwright/no-skipped-test': 'warn',
  'playwright/no-standalone-expect': 'error',
  'playwright/no-unsafe-references': 'error',
  'playwright/no-useless-await': 'warn',
  'playwright/no-useless-not': 'warn',
  'playwright/no-wait-for-selector': 'warn',
  'playwright/no-wait-for-timeout': 'warn',
  'playwright/prefer-web-first-assertions': 'error',
  'playwright/valid-describe-callback': 'error',
  'playwright/valid-expect': 'error',
  'playwright/valid-expect-in-promise': 'error',
  'playwright/valid-title': 'error',
}
