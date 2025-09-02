import eslintPluginStylistic from '@stylistic/eslint-plugin'
import { parser, plugin } from 'typescript-eslint'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const tsSettings: Settings = {
  'import-x/parsers': {
    '@typescript-eslint/parser': [ '.ts', '.tsx' ],
    espree: [ '.js', '.cjs', '.mjs', '.jsx' ]
  },
  'import-x/resolver-next': [
    createTypeScriptImportResolver({
      alwaysTryTypes: true,
      project: 'tsconfig.json'
    })
  ],
  'import-x/external-module-folders': [ 'node_modules', 'node_modules/@types' ],
  'import-x/extensions': [
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
  '@typescript-eslint': plugin,
  stylistic: eslintPluginStylistic
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
  'stylistic/member-delimiter-style': [
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
  '@typescript-eslint/no-require-imports': 'off',
  'stylistic/space-before-blocks': 'warn',
  'stylistic/space-before-function-paren': [
    'warn',
    {
      'anonymous': 'never',
      'asyncArrow': 'always',
      'named': 'never'
    }
  ],
  'stylistic/space-infix-ops': [ 'warn', { int32Hint: false }],
  'stylistic/semi-spacing': 'warn',
  'stylistic/type-annotation-spacing': [
    'warn', {
      after: true, before: true,
      overrides: { colon: { after: true, before: false } }
    }
  ],
  'stylistic/function-call-spacing': [
    'warn',
    'never'
  ],
  'stylistic/semi': [
    'warn',
    'never'
  ],
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
  'stylistic/type-generic-spacing': 'warn',
  'stylistic/type-named-tuple-spacing': 'warn',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/no-unnecessary-template-expression': 'warn',
  '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
  '@typescript-eslint/prefer-find': 'warn',
  'jsdoc/require-param-type': 'off'
}
