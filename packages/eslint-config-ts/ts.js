import { cjsRuleset as cjsStandard, mainRuleset as mainStandard } from './standard.js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import globals from 'globals'


export function mainRuleset(rules = {}, plugins = {}) {
  return {
    ...mainStandard({
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
        'error', {
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
      '@typescript-eslint/semi': [ 'error', 'never' ],
      '@typescript-eslint/space-before-blocks': [ 'warn' ],
      '@typescript-eslint/space-infix-ops': [ 'warn', { int32Hint: false }],
      '@typescript-eslint/type-annotation-spacing': [
        'warn', {
          after: true, before: true,
          overrides: { colon: { after: true, before: false } }
        }
      ],
      'func-call-spacing': 'off',
      'semi': [ 'warn', 'never' ],
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
      'prefer-spread': 'error',
      ...rules
    }, {
      '@typescript-eslint': typescriptEslint,
      ...plugins
    }),
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  }
}

export function cjsRuleset(rules = {}, plugins = {}) {
  return {
    ...cjsStandard(),
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      ...rules
    },
    plugins
  }
}

export default [
  mainRuleset(),
  cjsRuleset()
]
