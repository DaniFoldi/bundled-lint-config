module.exports = {
  env: {
    es2022: true
  },
  extends: [
    'plugin:import/recommended',
    'plugin:unicorn/recommended'
  ],
  ignorePatterns: [ 'package-lock.json', 'coverage/', 'dist/', 'node_modules/', 'public/', '.nuxt/', '.output/' ],
  overrides: [
    {
      env: { node: true },
      excludedFiles: [ '*.json' ],
      files: [ '**lint**' ],
      rules: {
        'quote-props': [ 'warn', 'consistent-as-needed' ]
      }
    },
    {
      files: [ '*.json' ],
      rules: {
        'quote-props': [ 'warn', 'consistent' ],
        'quotes': [ 'warn', 'double' ],
        'sort-keys': 'off'
      }
    },
    {
      env: { node: true },
      files: [ '**config**.cjs', '**config**.mjs', '**config**.js', '**config**.ts' ]
    },
    {
      files: [ '**lang/**' ],
      rules: {
        'unicorn/filename-case': 'off'
      }
    },
    {
      files: [ '*.cjs' ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  rules: {
    'array-bracket-newline': [ 'warn', { multiline: true }],
    'array-bracket-spacing': [ 'warn', 'always', { arraysInArrays: false, objectsInArrays: false }],
    'arrow-parens': [ 'warn', 'as-needed' ],
    'arrow-spacing': 'warn',
    'block-spacing': [ 'warn', 'always' ],
    'brace-style': [ 'error', '1tbs' ],
    'comma-dangle': [ 'warn', 'never' ],
    'comma-spacing': [ 'warn', { after: true, before: false  }],
    'constructor-super': 'error',
    'dot-notation': [ 'error', { allowKeywords: true }],
    'eol-last': [ 'error', 'always' ],
    'eqeqeq': [ 'error', 'always' ],
    'for-direction': 'error',
    'func-call-spacing': [ 'warn', 'never' ],
    'function-paren-newline': [ 'warn', 'multiline' ],
    'getter-return': 'error',
    'import/export': 'warn',
    'import/exports-last': 'warn',
    'import/first': 'error',
    'import/newline-after-import': [ 'warn', { count: 2 }],
    'import/no-absolute-path': [ 'error', { amd: false, commonjs: true, esmodule: true }],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unresolved': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [ 'warn', { groups: [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type' ] }],
    'indent': [ 'warn', 2, { SwitchCase: 1 }],
    'key-spacing': [ 'warn', { afterColon: true, beforeColon: false, mode: 'strict' }],
    'keyword-spacing': [ 'warn', { after: true, before: true  }],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-between-class-members': [ 'warn', 'always', { exceptAfterSingleLine: true }],
    'max-len': [
      'warn', {
        code: 120,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true
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
    'no-empty': [ 'warn', { allowEmptyCatch: true }],
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'warn',
    'no-extra-parens': [ 'warn', 'functions' ],
    'no-extra-semi': 'error',
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
    'no-multiple-empty-lines': [ 'warn', { max: 2, maxEOF: 0 }],
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
    'no-undef': [ 'error', { typeof: true }],
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
    'no-warning-comments': [ 'warn', { location: 'anywhere', terms: [ 'todo', 'fixme' ] }],
    'no-with': 'error',
    'object-curly-newline': [
      'warn',
      {
        ExportDeclaration: { multiline: true },
        ImportDeclaration: { multiline: true }
      }
    ],
    'object-curly-spacing': [ 'warn', 'always' ],
    'operator-linebreak': [ 'warn', 'before' ],
    'prefer-const': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'quotes': [ 'warn', 'single' ],
    'require-yield': 'error',
    'semi': [ 'warn', 'never' ],
    'sort-imports': 'off',
    'sort-keys': [ 'warn', 'asc', { caseSensitive: false, minKeys: 6, natural: true }],
    'space-before-function-paren': [ 'error', { anonymous: 'never', asyncArrow: 'always', named: 'never' }],
    'space-in-parens': [ 'warn', 'never' ],
    'space-infix-ops': 'warn',
    'spaced-comment': [ 'warn', 'always', { exceptions: [ '*' ] }],
    'template-curly-spacing': [ 'warn', 'never' ],
    'unicorn/filename-case': [ 'warn', { cases: { camelCase: true, kebabCase: true, pascalCase: true } }],
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
    'unicorn/numeric-separators-style': [ 'warn', { onlyIfContainsSeparator: true }],
    'unicorn/prevent-abbreviations': 'off',
    'use-isnan': 'error',
    'valid-typeof': [ 'error', { requireStringLiterals: true }]
  },
  settings: {
    'import/extensions': [
      '.cjs',
      '.js',
      '.mjs'
    ]
  }
}
