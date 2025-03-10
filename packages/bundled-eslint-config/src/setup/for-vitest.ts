import eslintPluginVitest from '@vitest/eslint-plugin'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const vitestSettings: Settings = {}

export const vitestGlobals: Globals = {}

export const vitestLanguageOptions: LanguageOptions = {
  globals: vitestGlobals
}

export const vitestPlugins: Plugins = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore sometimes causes issues
  vitest: eslintPluginVitest
}

export const vitestRules: Rules = {
  'vitest/consistent-test-it': [ 'warn', { fn: 'it', withinDescribe: 'it' }],
  'vitest/expect-expect': 'warn',
  'vitest/max-expects': 'warn',
  'vitest/max-nested-describe': 'warn',
  'vitest/no-alias-methods': 'warn',
  'vitest/no-commented-out-tests': 'warn',
  'vitest/no-conditional-expect': 'error',
  'vitest/no-conditional-in-test': 'error',
  'vitest/no-conditional-tests': 'error',
  'vitest/no-disabled-tests': 'warn',
  'vitest/no-duplicate-hooks': 'off',
  'vitest/no-focused-tests': 'error',
  'vitest/no-hooks': 'off',
  'vitest/no-identical-title': 'warn',
  'vitest/no-interpolation-in-snapshots': 'warn',
  'vitest/no-large-snapshots': 'off',
  'vitest/no-mocks-import': 'warn',
  'vitest/no-restricted-matchers': 'warn',
  'vitest/no-restricted-vi-methods': 'warn',
  'vitest/no-standalone-expect': 'error',
  'vitest/no-test-prefixes': 'warn',
  'vitest/no-test-return-statement': 'warn',
  'vitest/prefer-called-with': 'warn',
  'vitest/prefer-comparison-matcher': 'warn',
  'vitest/prefer-each': 'warn',
  'vitest/prefer-equality-matcher': 'warn',
  'vitest/prefer-expect-resolves': 'warn',
  'vitest/prefer-hooks-in-order': 'warn',
  'vitest/prefer-hooks-on-top': 'warn',
  'vitest/prefer-lowercase-title': 'warn',
  'vitest/prefer-mock-promise-shorthand': 'warn',
  'vitest/prefer-snapshot-hint': 'warn',
  'vitest/prefer-spy-on': 'warn',
  'vitest/prefer-strict-equal': 'warn',
  'vitest/prefer-to-be': 'warn',
  'vitest/prefer-to-be-falsy': 'warn',
  'vitest/prefer-to-be-object': 'warn',
  'vitest/prefer-to-be-truthy': 'warn',
  'vitest/prefer-to-contain': 'warn',
  'vitest/prefer-to-have-length': 'warn',
  'vitest/prefer-todo': 'warn',
  'vitest/require-hook': 'warn',
  'vitest/require-to-throw-message': 'warn',
  'vitest/require-top-level-describe': 'off',
  'vitest/valid-expect': 'error',
  'vitest/valid-title': 'error'
}
