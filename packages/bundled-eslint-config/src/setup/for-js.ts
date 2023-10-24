import brettz9EslintPlugin from '@brettz9/eslint-plugin'
import eslintPluginCasePolice from 'eslint-plugin-case-police'
import * as eslintPluginImport from 'eslint-plugin-i'
import eslintPluginJsdoc from 'eslint-plugin-jsdoc'
import eslintPluginPromise from 'eslint-plugin-promise'
import eslintPluginSecurity from 'eslint-plugin-security'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const jsSettings: Settings = {
  'import/parsers': {
    espree: [ '.js', '.cjs', '.mjs', '.jsx' ]
  },
  'import/resolver': {
    typescript: true
  },
  'import/extensions': [
    '.cjs',
    '.js',
    '.jsx',
    '.mjs'
  ]
  /*
  'import/external-module-folders': [ 'node_modules', 'node_modules/@types' ],
  'import/parsers': {
    '@typescript-eslint/parser': [ '.ts', '.tsx' ]
  },
  'import/resolver': {
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
  */
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
  'case-police': eslintPluginCasePolice,
  import: eslintPluginImport,
  jsdoc: eslintPluginJsdoc,
  promise: eslintPluginPromise,
  security: eslintPluginSecurity,
  unicorn: eslintPluginUnicorn
}

// Github

export const jsRules: Rules = {
  '@brettz9/arrow-parens': 'off',
  '@brettz9/block-scoped-var': 'off',
  '@brettz9/no-instanceof-array': 'error',
  '@brettz9/no-instanceof-wrapper': 'error',
  '@brettz9/no-literal-call': 'error',
  '@brettz9/no-this-in-static': 'error',
  '@brettz9/no-use-ignored-vars': 'warn',
  '@brettz9/no-useless-rest-spread': 'warn',
  '@brettz9/prefer-for-of': 'warn',
  'case-police/string-check': 'warn',
  'jsdoc/check-access': 'warn',
  'jsdoc/check-alignment': 'warn',
  'jsdoc/check-examples': 'off',
  'jsdoc/check-indentation': 'warn',
  'jsdoc/check-line-alignment': 'warn',
  'jsdoc/check-param-names': 'warn',
  'jsdoc/check-property-names': 'warn',
  'jsdoc/check-syntax': 'off',
  'jsdoc/check-tag-names': 'warn',
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
  'jsdoc/require-param': 'warn',
  'jsdoc/require-param-description': 'warn',
  'jsdoc/require-param-name': 'warn',
  'jsdoc/require-param-type': 'warn',
  'jsdoc/require-property': 'warn',
  'jsdoc/require-property-description': 'warn',
  'jsdoc/require-property-name': 'warn',
  'jsdoc/require-property-type': 'warn',
  'jsdoc/require-returns': 'warn',
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
  'promise/no-multiple-resolved': 'warn',
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
  'array-bracket-newline': [
    'warn',
    {
      'multiline': true
    }
  ],
  'array-bracket-spacing': [
    'warn',
    'always',
    {
      'arraysInArrays': false,
      'objectsInArrays': false
    }
  ],
  'arrow-parens': [
    'warn',
    'as-needed'
  ],
  'arrow-spacing': 'warn',
  'block-spacing': [
    'warn',
    'always'
  ],
  'brace-style': [
    'error',
    '1tbs'
  ],
  'comma-dangle': [
    'warn',
    'never'
  ],
  'comma-spacing': [
    'warn',
    {
      'after': true,
      'before': false
    }
  ],
  'comma-style': [
    'warn',
    'last'
  ],
  'constructor-super': 'error',
  'dot-notation': [
    'error',
    {
      'allowKeywords': true
    }
  ],
  'eol-last': [
    'error',
    'always'
  ],
  'eqeqeq': [
    'error',
    'always'
  ],
  'for-direction': 'error',
  'func-call-spacing': [
    'warn',
    'never'
  ],
  'function-paren-newline': [
    'warn',
    'multiline'
  ],
  'getter-return': 'error',
  'import/no-unresolved': 'error',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/default': 'error',
  'import/no-named-as-default': 'warn',
  'import/no-named-as-default-member': 'warn',
  'import/no-mutable-exports': 'warn',
  'import/consistent-type-specifier-style': [ 'warn', 'prefer-top-level' ],
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
  'import/no-duplicates': 'warn',
  'import/no-deprecated': 'warn',
  'import/no-named-default': 'error',
  'import/no-unassigned-import': 'off',
  'import/no-webpack-loader-syntax': 'error',
  'import/order': [
    'warn',
    {
      'groups': [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
        'type'
      ],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      },
      warnOnUnassignedImports: true
    }
  ],
  'indent': [
    'warn',
    2,
    {
      'SwitchCase': 1
    }
  ],
  'key-spacing': [
    'warn',
    {
      'afterColon': true,
      'beforeColon': false,
      'mode': 'strict'
    }
  ],
  'keyword-spacing': [
    'warn',
    {
      'after': true,
      'before': true
    }
  ],
  'linebreak-style': [
    'error',
    'unix'
  ],
  'lines-between-class-members': [
    'warn',
    'always',
    {
      'exceptAfterSingleLine': true
    }
  ],
  'max-len': [
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
  'no-else-return': 'warn',
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
  'no-extra-parens': [
    'warn',
    'functions'
  ],
  'no-extra-semi': 'error',
  'no-object-constructor': 'error',
  'no-fallthrough': 'error',
  'no-floating-decimal': 'error',
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
  'no-mixed-spaces-and-tabs': 'error',
  'no-multiple-empty-lines': [
    'warn',
    {
      'max': 2,
      'maxEOF': 0
    }
  ],
  'no-new-symbol': 'error',
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
  'no-tabs': 'error',
  'no-template-curly-in-string': 'warn',
  'no-this-before-super': 'error',
  'no-trailing-spaces': 'warn',
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
  'object-curly-newline': [
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
  'object-curly-spacing': [
    'warn',
    'always'
  ],
  'operator-linebreak': [
    'warn',
    'before'
  ],
  'prefer-const': 'warn',
  'prefer-object-spread': 'warn',
  'prefer-spread': 'warn',
  'prefer-template': 'warn',
  'quotes': [
    'warn',
    'single'
  ],
  'require-yield': 'error',
  'rest-spread-spacing': 'warn',
  'semi': [
    'warn',
    'never'
  ],
  'sort-imports': 'off',
  'sort-keys': 'off',
  'space-before-function-paren': [
    'error',
    {
      'anonymous': 'never',
      'asyncArrow': 'always',
      'named': 'never'
    }
  ],
  'space-in-parens': [
    'warn',
    'never'
  ],
  'space-infix-ops': 'warn',
  'spaced-comment': [
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
  'template-curly-spacing': [
    'warn',
    'never'
  ],
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
  'no-negated-condition': 'warn',
  'no-nested-ternary': 'off',
  'unicorn/no-null': 'off',
  'unicorn/no-typeof-undefined': 'warn',
  'unicorn/numeric-separators-style': [
    'warn',
    {
      'onlyIfContainsSeparator': true
    }
  ],
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/switch-case-braces': [
    'warn',
    'avoid'
  ],
  'unicorn/better-regex': 'warn',
  'unicorn/catch-error-name': 'warn',
  'unicorn/consistent-destructuring': 'warn',
  'unicorn/consistent-function-scoping': 'warn',
  'unicorn/custom-error-definition': 'off',
  'unicorn/empty-brace-spaces': 'warn',
  'unicorn/error-message': 'error',
  'unicorn/escape-case': 'error',
  'unicorn/expiring-todo-comments': 'warn',
  'unicorn/explicit-length-check': 'warn',
  'unicorn/import-style': 'error',
  'unicorn/new-for-builtins': 'error',
  'unicorn/no-abusive-eslint-disable': 'error',
  'unicorn/no-array-push-push': 'error',
  'unicorn/no-console-spaces': 'error',
  'unicorn/no-document-cookie': 'error',
  'unicorn/no-empty-file': 'error',
  'unicorn/no-for-loop': 'error',
  'unicorn/no-hex-escape': 'error',
  'unicorn/no-instanceof-array': 'error',
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
