import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
// @ts-expect-error package types are borked
import * as parser from '@typescript-eslint/parser'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const tsSettings: Settings = {
  'import/parsers': {
    '@typescript-eslint/parser': [ '.ts', '.tsx' ],
    espree: [ '.js', '.cjs', '.mjs', '.jsx' ]
  },
  'import/external-module-folders': [ 'node_modules', 'node_modules/@types' ],
  'import/extensions': [
    '.cjs',
    '.js',
    '.jsx',
    '.mjs',
    '.ts',
    '.tsx'
  ]
}

export const tsGlobals: Globals = {}

export const tsLanguageOptions: LanguageOptions = {
  globals: tsGlobals,
  parser,
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: true
  }
}

export const tsPlugins: Plugins = {
  '@typescript-eslint': typescriptEslintPlugin
}

export const tsRules: Rules = {
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/ban-types': 'error',
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/func-call-spacing': [ 'error', 'never' ],
  '@typescript-eslint/member-delimiter-style': [
    'warn', {
      multiline: { delimiter: 'none', requireLast: true },
      singleline: { delimiter: 'semi', requireLast: false }
    }
  ],
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      ignoreRestSiblings: true,
      destructuredArrayIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      args: 'after-used'
    }
  ],
  '@typescript-eslint/prefer-for-of': 'warn',
  '@typescript-eslint/prefer-ts-expect-error': 'error',
  '@typescript-eslint/semi': [ 'warn', 'never' ],
  '@typescript-eslint/space-before-blocks': [ 'warn' ],
  '@typescript-eslint/space-infix-ops': [ 'warn', { int32Hint: false }],
  '@typescript-eslint/type-annotation-spacing': [
    'warn', {
      after: true, before: true,
      overrides: { colon: { after: true, before: false } }
    }
  ],
  'func-call-spacing': 'off',
  'semi': 'off',
  'space-before-blocks': 'off',
  'space-infix-ops': 'off',
  'constructor-super': 'off',
  'getter-return': 'off',
  'no-const-assign': 'off',
  'no-dupe-args': 'off',
  'no-dupe-class-members': 'off',
  'no-dupe-keys': 'off',
  'no-func-assign': 'off',
  'no-import-assign': 'off',
  'no-new-symbol': 'off',
  'no-obj-calls': 'off',
  'no-redeclare': 'off',
  'no-setter-return': 'off',
  'no-this-before-super': 'off',
  'no-undef': 'off',
  'no-unreachable': 'off',
  'no-unsafe-negation': 'off',
  'no-var': 'error',
  'prefer-const': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error'
}
