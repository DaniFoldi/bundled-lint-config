import brettz9EslintPlugin from '@brettz9/eslint-plugin'
import eslintPluginStylisticJs from '@stylistic/eslint-plugin-js'
import eslintPluginStylisticPlus from '@stylistic/eslint-plugin-plus'
import eslintPluginCasePolice from 'eslint-plugin-case-police'
// @ ts-expect-error: No types
import eslintPluginImport from 'eslint-plugin-import-x'
import eslintPluginJsdoc from 'eslint-plugin-jsdoc'
// @ts-expect-error: No types
import eslintPluginPromise from 'eslint-plugin-promise'
// @ts-expect-error: No types
import eslintPluginSecurity from 'eslint-plugin-security'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const jsSettings: Settings = {
  'import-x/extensions': [
    '.cjs',
    '.js',
    '.jsx',
    '.mjs'
  ],
  'import-x/external-module-folders': [ 'node_modules', 'node_modules/@types' ],
  'import-x/parsers': {
    espree: [ '.js', '.cjs', '.mjs', '.jsx' ],
    '@typescript-eslint/parser': [ '.ts', '.tsx' ]
  },
  'import-x/resolver': {
    typescript: true,
    'node': {
      'extensions': [
        '.cjs',
        '.js',
        '.jsx',
        '.mjs',
        '.ts',
        '.tsx'
      ]
    }
  }
}

export const jsGlobals: Globals = {
  ...globals.es2021
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

export const jsPlugins: Plugins = {
  '@brettz9': brettz9EslintPlugin,
  // @ts-expect-error weird types
  'case-police': eslintPluginCasePolice,
  // @ts-expect-error weird types
  import: eslintPluginImport,
  jsdoc: eslintPluginJsdoc,
  promise: eslintPluginPromise,
  security: eslintPluginSecurity,
  unicorn: eslintPluginUnicorn,
  '@stylistic/js': eslintPluginStylisticJs,
  '@stylistic/plus': eslintPluginStylisticPlus
}

export const jsRules: Rules = {
  '@brettz9/arrow-parens': 'off',
  '@brettz9/block-scoped-var': 'off',
  '@brettz9/no-instanceof-wrapper': 'error',
  '@brettz9/no-literal-call': 'error',
  '@brettz9/no-this-in-static': 'error',
  '@brettz9/no-use-ignored-vars': 'warn',
  '@brettz9/no-useless-rest-spread': 'warn',
  '@brettz9/prefer-for-of': 'off',
  'case-police/string-check': 'warn',
  'jsdoc/check-alignment': 'warn',
  'jsdoc/check-examples': 'off',
  'jsdoc/check-indentation': 'warn',
  'jsdoc/check-line-alignment': 'warn',
  'jsdoc/check-param-names': 'warn',
  'jsdoc/check-property-names': 'warn',
  'jsdoc/check-syntax': 'off',
  'jsdoc/check-tag-names': [ 'warn', { definedTags: [ 'tag' ] }],
  'jsdoc/check-types': 'warn',
  'jsdoc/check-values': 'warn',
  'jsdoc/empty-tags': 'warn',
  'jsdoc/implements-on-classes': 'warn',
  'jsdoc/imports-as-dependencies': 'off',
  'jsdoc/informative-docs': 'off',
  'jsdoc/match-description': 'off',
  'jsdoc/match-name': 'off',
  'jsdoc/multiline-blocks': 'warn',
  'jsdoc/no-bad-blocks': 'off',
  'jsdoc/no-blank-block-descriptions': 'off',
  'jsdoc/no-blank-blocks': 'off',
  'jsdoc/no-defaults': 'warn',
  'jsdoc/no-missing-syntax': 'off',
  'jsdoc/no-multi-asterisks': 'warn',
  'jsdoc/no-restricted-syntax': 'off',
  'jsdoc/no-types': 'off',
  'jsdoc/no-undefined-types': 'warn',
  'jsdoc/require-asterisk-prefix': 'off',
  'jsdoc/require-description': 'off',
  'jsdoc/require-description-complete-sentence': 'off',
  'jsdoc/require-example': 'off',
  'jsdoc/require-file-overview': 'off',
  'jsdoc/require-hyphen-before-param-description': 'off',
  'jsdoc/require-jsdoc': 'off',
  'jsdoc/require-param': 'off',
  'jsdoc/require-param-description': 'warn',
  'jsdoc/require-param-name': 'warn',
  'jsdoc/require-param-type': 'warn',
  'jsdoc/require-property': 'warn',
  'jsdoc/require-property-description': 'warn',
  'jsdoc/require-property-name': 'warn',
  'jsdoc/require-property-type': 'warn',
  'jsdoc/require-returns': 'off',
  'jsdoc/require-returns-check': 'warn',
  'jsdoc/require-returns-description': 'warn',
  'jsdoc/require-returns-type': 'warn',
  'jsdoc/require-throws': 'off',
  'jsdoc/require-yields': 'warn',
  'jsdoc/require-yields-check': 'warn',
  'jsdoc/sort-tags': 'off',
  'jsdoc/tag-lines': 'warn',
  'jsdoc/text-escaping': 'off',
  'jsdoc/valid-types': 'warn',
  'promise/param-names': 'warn',
  'promise/no-return-wrap': 'warn',
  'promise/always-return': 'warn',
  'promise/catch-or-return': 'warn',
  'promise/prefer-await-to-callbacks': 'warn',
  'promise/prefer-await-to-then': 'warn',
  'promise/no-native': 'off',
  'promise/avoid-new': 'warn',
  'promise/no-new-statics': 'warn',
  'promise/no-return-in-finally': 'warn',
  'promise/valid-params': 'warn',
  // 'promise/no-multiple-resolved': 'warn',
  'security/detect-unsafe-regex': 'error',
  'security/detect-non-literal-regexp': 'error',
  'security/detect-non-literal-require': 'off',
  'security/detect-non-literal-fs-filename': 'off',
  'security/detect-eval-with-expression': 'error',
  'security/detect-pseudoRandomBytes': 'error',
  'security/detect-possible-timing-attacks': 'error',
  'security/detect-no-csrf-before-method-override': 'error',
  'security/detect-buffer-noassert': 'error',
  'security/detect-child-process': 'error',
  'security/detect-disable-mustache-escape': 'error',
  'security/detect-object-injection': 'off',
  'security/detect-new-buffer': 'error',
  'security/detect-bidi-characters': 'error',
  '@stylistic/js/array-bracket-newline': [
    'warn',
    {
      'multiline': true
    }
  ],
  '@stylistic/js/array-bracket-spacing': [
    'warn',
    'always',
    {
      'arraysInArrays': false,
      'objectsInArrays': false
    }
  ],
  '@stylistic/js/arrow-parens': [
    'warn',
    'as-needed'
  ],
  '@stylistic/js/arrow-spacing': 'warn',
  '@stylistic/js/block-spacing': [
    'warn',
    'always'
  ],
  '@stylistic/js/brace-style': [
    'warn',
    '1tbs'
  ],
  '@stylistic/js/comma-dangle': [
    'warn',
    'never'
  ],
  '@stylistic/js/comma-spacing': [
    'warn',
    {
      'after': true,
      'before': false
    }
  ],
  '@stylistic/js/comma-style': [
    'warn',
    'last'
  ],
  'constructor-super': 'error',
  '@stylistic/js/dot-location': [
    'warn',
    'property'
  ],
  'dot-notation': [
    'error',
    {
      'allowKeywords': true
    }
  ],
  '@stylistic/js/eol-last': [
    'warn',
    'always'
  ],
  'eqeqeq': [
    'error',
    'always'
  ],
  'for-direction': 'error',
  '@stylistic/js/function-call-spacing': [
    'warn',
    'never'
  ],
  '@stylistic/js/function-paren-newline': [
    'warn',
    'multiline'
  ],
  'getter-return': 'error',
  'import/no-unresolved': 'error',
  'import/named': 'off',
  'import/namespace': 'error',
  'import/default': 'error',
  'import/no-named-as-default': 'warn',
  'import/no-named-as-default-member': 'warn',
  'import/no-mutable-exports': 'warn',
  'import/consistent-type-specifier-style': 'off',
  'import/no-extraneous-dependencies': 'warn',
  'import/no-amd': 'warn',
  'import/no-commonjs': 'warn',
  'import/no-import-module-exports': 'warn',
  'import/unambiguous': 'off',
  'import/no-cycle': 'warn',
  'import/no-dynamic-require': 'warn',
  'import/no-relative-packages': 'warn',
  'import/no-relative-parent-imports': 'off',
  'import/no-self-import': 'warn',
  'import/no-useless-path-segments': 'warn',
  'import/export': 'warn',
  'import/exports-last': 'off',
  'import/first': 'error',
  'import/newline-after-import': [
    'warn',
    {
      'count': 2
    }
  ],
  'import/no-absolute-path': [
    'error',
    {
      'amd': false,
      'commonjs': true,
      'esmodule': true
    }
  ],
  // 'import/no-duplicates': [ 'warn', { 'prefer-inline': true }],
  'import/no-deprecated': 'warn',
  'import/no-named-default': 'error',
  'import/no-unassigned-import': 'off',
  'import/no-webpack-loader-syntax': 'error',
  'import/order': 'off',
  '@stylistic/js/indent': [
    'warn',
    2,
    {
      'SwitchCase': 1
    }
  ],
  '@stylistic/js/key-spacing': [
    'warn',
    {
      'afterColon': true,
      'beforeColon': false,
      'mode': 'strict'
    }
  ],
  '@stylistic/js/keyword-spacing': [
    'warn',
    {
      'after': true,
      'before': true
    }
  ],
  '@stylistic/js/linebreak-style': [
    'error',
    'unix'
  ],
  '@stylistic/js/lines-between-class-members': [
    'warn',
    'always',
    {
      'exceptAfterSingleLine': true
    }
  ],
  '@stylistic/js/max-len': [
    'warn',
    {
      'code': 120,
      'comments': 180,
      'ignoreRegExpLiterals': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreTrailingComments': true,
      'ignoreUrls': true
    }
  ],
  '@stylistic/js/max-statements-per-line': 'warn',
  '@stylistic/js/new-parens': 'warn',
  'no-alert': 'error',
  'no-async-promise-executor': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  '@stylistic/js/no-confusing-arrow': 'off',
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
  '@stylistic/js/no-extra-parens': [
    'warn',
    'functions'
  ],
  '@stylistic/js/no-extra-semi': 'warn',
  'no-object-constructor': 'error',
  'no-fallthrough': 'error',
  '@stylistic/js/no-floating-decimal': 'warn',
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
  '@stylistic/js/no-mixed-operators': [
    'warn', {
      'groups': [
        [ '&', '|', '^', '~', '<<', '>>', '>>>' ],
        [ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
        [ '&&', '||' ],
        [ 'in', 'instanceof' ]
      ]
    }
  ],
  '@stylistic/js/no-mixed-spaces-and-tabs': 'warn',
  '@stylistic/js/no-multi-spaces': 'warn',
  '@stylistic/js/no-multiple-empty-lines': [
    'warn',
    {
      'max': 2,
      'maxEOF': 0
    }
  ],
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
  '@stylistic/js/no-tabs': 'warn',
  'no-template-curly-in-string': 'warn',
  'no-this-before-super': 'error',
  '@stylistic/js/no-trailing-spaces': 'warn',
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
  '@stylistic/js/no-whitespace-before-property': 'warn',
  '@stylistic/js/object-curly-newline': [
    'warn',
    {
      'ExportDeclaration': {
        'multiline': true
      },
      'ImportDeclaration': {
        'multiline': true
      }
    }
  ],
  '@stylistic/js/object-curly-spacing': [
    'warn',
    'always'
  ],
  '@stylistic/js/operator-linebreak': [
    'warn',
    'before'
  ],
  '@stylistic/js/padding-line-between-statements': [
    'warn',
    { blankLine: 'always', prev: '*', next: 'return' },
    { blankLine: 'always', prev: '*', next: 'function' },
    { blankLine: 'always', prev: '*', next: 'iife' },
    { blankLine: 'always', prev: '*', next: 'class' },
    { blankLine: 'always', prev: '*', next: 'do' },
    { blankLine: 'always', prev: '*', next: 'for' },
    { blankLine: 'always', prev: '*', next: 'throw' },
    { blankLine: 'always', prev: '*', next: 'try' },
    { blankLine: 'always', prev: '*', next: 'while' },
    { blankLine: 'always', prev: '*', next: 'switch' },

    { blankLine: 'always', prev: '*', next: 'const' },
    { blankLine: 'any', prev: 'const', next: 'const' },
    { blankLine: 'any', prev: 'let', next: 'const' },
    { blankLine: 'always', prev: '*', next: 'let' },
    { blankLine: 'any', prev: 'let', next: 'let' },
    { blankLine: 'any', prev: 'const', next: 'let' },

    { blankLine: 'always', prev: '*', next: 'export' },
    { blankLine: 'any', prev: 'export', next: 'export' },
    { blankLine: 'always', prev: 'block-like', next: '*' },
    { blankLine: 'always', prev: 'multiline-block-like', next: '*' }
  ],
  'prefer-const': 'warn',
  'prefer-object-spread': 'warn',
  'prefer-spread': 'warn',
  'prefer-template': 'warn',
  '@stylistic/js/quotes': [ 'warn', 'single' ],
  'require-yield': 'error',
  '@stylistic/js/rest-spread-spacing': 'warn',
  '@stylistic/js/semi': [
    'warn',
    'never'
  ],
  'sort-imports': 'off',
  'sort-keys': 'off',
  '@stylistic/js/space-before-blocks': 'warn',
  '@stylistic/js/space-before-function-paren': [
    'warn',
    {
      'anonymous': 'never',
      'asyncArrow': 'always',
      'named': 'never'
    }
  ],
  '@stylistic/js/space-in-parens': [
    'warn',
    'never'
  ],
  '@stylistic/js/space-infix-ops': [ 'warn', { int32Hint: false }],
  '@stylistic/js/spaced-comment': [
    'warn',
    'always',
    {
      'line': {
        'markers': [ '/' ]
      },
      'block': {
        'markers': [ '!', '*' ],
        'balanced': true
      }
    }
  ],
  '@stylistic/js/template-curly-spacing': [
    'warn',
    'never'
  ],
  '@stylistic/js/template-tag-spacing': 'warn',
  'unicorn/filename-case': [
    'warn',
    {
      'cases': {
        'camelCase': true,
        'kebabCase': true,
        'pascalCase': true
      }
    }
  ],
  'unicorn/no-array-callback-reference': 'off',
  'unicorn/no-array-for-each': 'off',
  'unicorn/no-array-method-this-argument': 'off',
  'unicorn/no-array-reduce': 'off',
  'unicorn/no-accessor-recursion': 'error',
  'unicorn/consistent-assert': 'warn',
  'no-negated-condition': 'off',
  'no-nested-ternary': 'off',
  'unicorn/no-negation-in-equality-check': 'warn',
  'unicorn/no-null': 'off',
  'unicorn/no-typeof-undefined': 'warn',
  'unicorn/numeric-separators-style': [
    'warn',
    {
      'onlyIfContainsSeparator': true
    }
  ],
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/better-regex': 'warn',
  'unicorn/catch-error-name': 'warn',
  'unicorn/consistent-destructuring': 'warn',
  'unicorn/consistent-function-scoping': 'warn',
  'unicorn/custom-error-definition': 'off',
  'unicorn/empty-brace-spaces': 'warn',
  'unicorn/error-message': 'error',
  'unicorn/escape-case': 'error',
  'unicorn/expiring-todo-comments': 'off',
  'unicorn/explicit-length-check': 'warn',
  'unicorn/import-style': 'off',
  'unicorn/new-for-builtins': 'error',
  'unicorn/no-abusive-eslint-disable': 'error',
  'unicorn/prefer-math-min-max': 'warn',
  'unicorn/prefer-global-this': 'warn',
  'unicorn/no-array-push-push': 'error',
  'unicorn/no-console-spaces': 'error',
  'unicorn/no-document-cookie': 'error',
  'unicorn/no-empty-file': 'error',
  'unicorn/no-for-loop': 'error',
  'unicorn/no-hex-escape': 'error',
  'unicorn/no-instanceof-builtins': 'error',
  'unicorn/no-invalid-remove-event-listener': 'error',
  'unicorn/no-keyword-prefix': 'off',
  'unicorn/no-lonely-if': 'error',
  'unicorn/no-negated-condition': 'off',
  'unicorn/no-nested-ternary': 'off',
  'unicorn/no-new-array': 'error',
  'unicorn/no-new-buffer': 'error',
  'unicorn/no-object-as-default-parameter': 'error',
  'unicorn/no-process-exit': 'error',
  'unicorn/no-static-only-class': 'error',
  'unicorn/no-thenable': 'error',
  'unicorn/no-this-assignment': 'error',
  'unicorn/no-unnecessary-await': 'error',
  'unicorn/no-unreadable-array-destructuring': 'error',
  'unicorn/no-unreadable-iife': 'error',
  'unicorn/no-unused-properties': 'off',
  'unicorn/no-useless-fallback-in-spread': 'warn',
  'unicorn/no-useless-length-check': 'warn',
  'unicorn/no-useless-promise-resolve-reject': 'warn',
  'unicorn/no-useless-spread': 'warn',
  'unicorn/no-useless-switch-case': 'warn',
  'unicorn/no-useless-undefined': 'warn',
  'unicorn/no-zero-fractions': 'error',
  'unicorn/number-literal-case': 'error',
  'unicorn/prefer-add-event-listener': 'warn',
  'unicorn/prefer-array-find': 'warn',
  'unicorn/prefer-array-flat': 'warn',
  'unicorn/prefer-array-flat-map': 'warn',
  'unicorn/prefer-array-index-of': 'warn',
  'unicorn/prefer-array-some': 'warn',
  'unicorn/prefer-at': 'warn',
  'unicorn/prefer-blob-reading-methods': 'warn',
  'unicorn/prefer-code-point': 'warn',
  'unicorn/prefer-date-now': 'warn',
  'unicorn/prefer-default-parameters': 'warn',
  'unicorn/prefer-dom-node-append': 'warn',
  'unicorn/prefer-dom-node-dataset': 'warn',
  'unicorn/prefer-dom-node-remove': 'warn',
  'unicorn/prefer-dom-node-text-content': 'warn',
  'unicorn/prefer-event-target': 'warn',
  'unicorn/prefer-export-from': 'warn',
  'unicorn/prefer-includes': 'warn',
  'unicorn/prefer-json-parse-buffer': 'off',
  'unicorn/prefer-keyboard-event-key': 'warn',
  'unicorn/prefer-logical-operator-over-ternary': 'warn',
  'unicorn/prefer-math-trunc': 'warn',
  'unicorn/prefer-modern-dom-apis': 'warn',
  'unicorn/prefer-modern-math-apis': 'warn',
  'unicorn/prefer-module': 'warn',
  'unicorn/prefer-native-coercion-functions': 'warn',
  'unicorn/prefer-negative-index': 'warn',
  'unicorn/prefer-node-protocol': 'warn',
  'unicorn/prefer-number-properties': 'warn',
  'unicorn/prefer-object-from-entries': 'warn',
  'unicorn/prefer-optional-catch-binding': 'warn',
  'unicorn/prefer-prototype-methods': 'warn',
  'unicorn/prefer-query-selector': 'warn',
  'unicorn/prefer-reflect-apply': 'warn',
  'unicorn/prefer-regexp-test': 'warn',
  'unicorn/prefer-set-has': 'warn',
  'unicorn/prefer-set-size': 'warn',
  'unicorn/prefer-spread': 'warn',
  'unicorn/prefer-string-replace-all': 'warn',
  'unicorn/prefer-string-slice': 'warn',
  'unicorn/prefer-string-starts-ends-with': 'warn',
  'unicorn/prefer-string-trim-start-end': 'warn',
  'unicorn/prefer-switch': 'warn',
  'unicorn/prefer-ternary': 'warn',
  'unicorn/prefer-top-level-await': 'warn',
  'unicorn/prefer-type-error': 'off',
  'unicorn/relative-url-style': 'error',
  'unicorn/require-array-join-separator': 'error',
  'unicorn/require-number-to-fixed-digits-argument': 'error',
  'unicorn/string-content': 'off',
  'unicorn/template-indent': 'warn',
  'unicorn/text-encoding-identifier-case': 'warn',
  'unicorn/throw-new-error': 'error',
  'use-isnan': 'error',
  'valid-typeof': [
    'error',
    {
      'requireStringLiterals': true
    }
  ]
}
