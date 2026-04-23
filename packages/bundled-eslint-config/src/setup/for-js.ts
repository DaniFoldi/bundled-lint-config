import globals from 'globals'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const jsSettings: Settings = {}

export const jsGlobals: Globals = {
  ...globals.es2025
}

export const jsLanguageOptions: LanguageOptions = {
  globals: jsGlobals,
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
}

export const jsPlugins: Plugins = {}

export const jsRules: Rules = {
  'constructor-super': 'error',
  'dot-notation': [
    'warn',
    {
      'allowKeywords': true
    }
  ],
  'eqeqeq': [
    'error',
    'always'
  ],
  'for-direction': 'error',
  'getter-return': 'error',
  'no-alert': 'error',
  'no-async-promise-executor': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-const-assign': 'error',
  'no-constant-condition': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-else-return': 'off',
  'no-empty': [
    'warn',
    {
      'allowEmptyCatch': true
    }
  ],
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-eval': 'error',
  'no-ex-assign': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-boolean-cast': 'warn',
  'no-object-constructor': 'error',
  'no-fallthrough': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-implied-eval': 'error',
  'no-import-assign': 'error',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-lone-blocks': 'warn',
  'no-lonely-if': 'warn',
  'no-loss-of-precision': 'error',
  'no-misleading-character-class': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-octal': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-self-assign': 'error',
  'no-setter-return': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'warn',
  'no-this-before-super': 'error',
  'no-undef': [
    'error',
    {
      'typeof': true
    }
  ],
  'no-unexpected-multiline': 'error',
  'no-unneeded-ternary': 'warn',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': 'error',
  'no-unused-labels': 'error',
  'no-unused-vars': 'warn',
  'no-useless-backreference': 'error',
  'no-useless-catch': 'error',
  'no-useless-concat': 'warn',
  'no-useless-escape': 'warn',
  'no-var': 'error',
  'no-with': 'error',
  'prefer-const': 'warn',
  'prefer-object-spread': 'warn',
  'prefer-spread': 'warn',
  'prefer-template': 'warn',
  'require-yield': 'error',
  'sort-imports': 'off',
  'sort-keys': 'off',
  'no-negated-condition': 'off',
  'no-nested-ternary': 'off',
  'use-isnan': 'error',
  'valid-typeof': [
    'error',
    {
      'requireStringLiterals': true
    }
  ]
}
