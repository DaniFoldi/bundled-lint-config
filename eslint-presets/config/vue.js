module.exports = {
  env: { 'vue/setup-compiler-macros': true },
  extends: [
    'plugin:@danifoldi/eslint-plugin-eslint-presets/standard.js',
    'plugin:vue/vue3-recommended'
  ],
  overrides: [
    {
      files: [ '*.vue', '**/*.vue' ],
      rules: {
        indent: 'off'
      }
    },
    {
      files: [ '*.json' ],
      rules: {
        'vue/sort-keys': 'off'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  rules: {
    // 'custom/no-future-comment': ['warn', { disallow: [ 'todo', 'fixme' ] }],
    'vue/array-bracket-newline': [ 'warn', { multiline: true }],
    'vue/array-bracket-spacing': [ 'warn', 'always', { arraysInArrays: false, objectsInArrays: false }],
    'vue/arrow-spacing': 'warn',
    'vue/attributes-order': [ 'warn', { alphabetical: true }],
    'vue/block-lang': [ 'error', { script: { lang: 'ts' }, style: { lang: 'scss' } }],
    'vue/block-spacing': [ 'warn', 'always' ],
    'vue/block-tag-newline': [ 'warn', {  maxEmptyLines: 0, multiline: 'always', singleline: 'always' }],
    'vue/brace-style': [ 'error', '1tbs' ],
    'vue/comma-dangle': [ 'warn', 'never' ],
    'vue/comma-spacing': [ 'warn', { after: true, before: false  }],
    'vue/comment-directive': [ 'error', { 'reportUnusedDisableDirectives': false }],
    'vue/component-api-style': [ 'error', [ 'script-setup', 'composition' ]],
    'vue/component-name-in-template-casing': [ 'error', 'PascalCase' ],
    'vue/custom-event-name-casing': [ 'error', 'kebab-case' ],
    'vue/dot-notation': [ 'error', { allowKeywords: true }],
    'vue/eqeqeq': [ 'error', 'always' ],
    'vue/func-call-spacing': [ 'error', 'never' ],
    'vue/html-button-has-type': 'error',
    'vue/html-comment-content-newline': [ 'warn', { multiline: 'ignore', singleline: 'never' }],
    'vue/html-comment-content-spacing': [ 'warn', 'always', { exceptions: [ '!' ] }],
    'vue/html-comment-indent': [ 'warn', 2 ],
    'vue/key-spacing': [ 'warn', { afterColon: true, beforeColon: false, mode: 'strict' }],
    'vue/keyword-spacing': [ 'warn', { after: true, before: true  }],
    'vue/max-attributes-per-line': [ 'warn', { multiline: 1, singleline: 3 }],
    'vue/max-len': [
      'error', {
        code: 120,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true
      }
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-child-content': 'error',
    'vue/no-constant-condition': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': [ 'error', 'functions' ],
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-reserved-component-names': [ 'error', { disallowVue3BuiltInComponents: true }],
    'vue/no-sparse-arrays': 'error',
    'vue/no-static-inline-styles': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-useless-concat': 'warn',
    'vue/no-useless-mustaches': [ 'error', { ignoreStringEscape: true }],
    'vue/no-useless-v-bind': 'error',
    'vue/object-curly-newline': [
      'error',
      {
        ExportDeclaration: { minProperties: 3, multiline: true },
        ImportDeclaration: 'never'
      }
    ],
    'vue/object-curly-spacing': [ 'warn', 'always' ],
    'vue/operator-linebreak': [ 'warn', 'before' ],
    'vue/order-in-components': 'warn',
    'vue/padding-line-between-blocks': [ 'warn', 'always' ],
    'vue/prefer-import-from-vue': 'error',
    'vue/prefer-template': 'warn',
    'vue/prefer-true-attribute-shorthand': [ 'warn', 'always' ],
    'vue/require-emit-validator': 'error',
    'vue/script-indent': [ 'warn', 2, { baseIndent: 1 }],
    'vue/sort-keys': [ 'warn', 'asc', { caseSensitive: true, natural: true }],
    'vue/space-in-parens': [ 'warn', 'never' ],
    'vue/space-infix-ops': 'warn',
    'vue/static-class-names-order': 'warn',
    'vue/template-curly-spacing': [ 'warn', 'never' ],
    'vue/v-on-function-call': 'warn'
  }
}
