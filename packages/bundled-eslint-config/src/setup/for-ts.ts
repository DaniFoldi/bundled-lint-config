import { parser, plugin } from 'typescript-eslint'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const tsSettings: Settings = {}

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
  '@typescript-eslint': plugin
}

export const tsRules: Rules = {
  '@typescript-eslint/no-deprecated': 'warn',
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  '@typescript-eslint/no-misused-spread': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
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
  '@typescript-eslint/no-require-imports': 'off',
  'constructor-super': 'off',
  'getter-return': 'off',
  'no-const-assign': 'off',
  'no-dupe-args': 'off',
  'no-dupe-class-members': 'off',
  'no-dupe-keys': 'off',
  'no-func-assign': 'off',
  'no-import-assign': 'off',
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
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/no-unnecessary-template-expression': 'warn',
  '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
  '@typescript-eslint/prefer-find': 'warn'
}
