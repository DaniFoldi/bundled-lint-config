import eslintPluginStylisticPlus from '@stylistic/eslint-plugin-plus'
import eslintPluginStylisticTs from '@stylistic/eslint-plugin-ts'
import { parser, plugin } from 'typescript-eslint'
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
    projectService: true
  }
}

export const tsPlugins: Plugins = {
  // @ts-expect-error Configs types are broken
  '@typescript-eslint': plugin,
  '@stylistic/ts': eslintPluginStylisticTs,
  '@stylistic/plus': eslintPluginStylisticPlus
}

export const tsRules: Rules = {
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
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@stylistic/ts/member-delimiter-style': [
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
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/no-empty-object-type': [
    'error',
    {
      allowInterfaces: 'always'
    }
  ],
  '@typescript-eslint/no-unsafe-function-type': 'error',
  '@typescript-eslint/no-wrapper-object-types': 'error',
  '@typescript-eslint/no-require-imports': 'error',
  '@stylistic/js/space-before-blocks': 'off',
  '@stylistic/ts/space-before-blocks': 'warn',
  '@stylistic/js/space-before-function-paren': 'off',
  '@stylistic/ts/space-before-function-paren': [
    'error',
    {
      'anonymous': 'never',
      'asyncArrow': 'always',
      'named': 'never'
    }
  ],
  '@stylistic/js/space-infix-ops': 'off',
  '@stylistic/ts/space-infix-ops': [ 'warn', { int32Hint: false }],
  '@stylistic/ts/type-annotation-spacing': [
    'warn', {
      after: true, before: true,
      overrides: { colon: { after: true, before: false } }
    }
  ],
  '@stylistic/js/function-call-spacing': 'off',
  '@stylistic/ts/function-call-spacing': [
    'warn',
    'never'
  ],
  '@stylistic/js/semi': 'off',
  '@stylistic/ts/semi': [
    'warn',
    'never'
  ],
  '@stylistic/js/no-extra-semi': 'off',
  '@stylistic/ts/no-extra-semi': 'warn',
  '@stylistic/js/quotes': 'off',
  '@stylistic/ts/quotes': [ 'warn', 'single' ],
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
  'prefer-const': 'warn',
  'prefer-rest-params': 'error',
  'prefer-spread': 'warn',
  '@stylistic/plus/type-generic-spacing': 'warn',
  '@stylistic/plus/type-named-tuple-spacing': 'warn',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/no-unnecessary-template-expression': 'warn',
  '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
  '@typescript-eslint/prefer-find': 'warn'
}
