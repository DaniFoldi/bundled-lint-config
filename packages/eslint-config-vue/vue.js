module.exports = {
  env: { 'vue/setup-compiler-macros': true },
  extends: [
    './standard.js',
    'plugin:vue/vue3-recommended'
  ],
  overrides: [
    {
      files: [ '*.vue', '**/*.vue' ],
      rules: {
        'indent': 'off',
        'vue/sort-keys': [ 'warn', 'asc', { caseSensitive: true, minKeys: 5, natural: true }]
      }
    }
  ],
  parser: 'vue-eslint-parser',
  rules: {
    'vue/array-bracket-newline': [ 'warn', { multiline: true }],
    'vue/array-bracket-spacing': [ 'warn', 'always', { arraysInArrays: false, objectsInArrays: false }],
    'vue/arrow-spacing': 'warn',
    'vue/attributes-order': [ 'warn', { alphabetical: true }],
    'vue/block-lang': [ 'error', { script: { lang: 'ts' }, style: { lang: 'scss' } }],
    'vue/block-spacing': [ 'warn', 'always' ],
    'vue/block-tag-newline': [ 'warn', { maxEmptyLines: 0, multiline: 'always', singleline: 'always' }],
    'vue/brace-style': [ 'warn', '1tbs' ],
    'vue/comma-dangle': [ 'warn', 'never' ],
    'vue/comma-spacing': [ 'warn', { after: true, before: false  }],
    'vue/comment-directive': [ 'error', { reportUnusedDisableDirectives: false }],
    'vue/component-api-style': [ 'error', [ 'script-setup', 'composition' ]],
    'vue/component-name-in-template-casing': [ 'warn', 'PascalCase' ],
    'vue/component-tags-order': [ 'warn', { order: [ 'script[setup]', 'script:not([setup])', 'template', 'style[scoped]', 'style:not([scoped])' ] }],
    'vue/custom-event-name-casing': [ 'error', 'kebab-case' ],
    'vue/define-macros-order': [ 'warn', { order: [ 'defineEmits', 'defineProps' ] }],
    'vue/dot-notation': [ 'error', { allowKeywords: true }],
    'vue/eqeqeq': [ 'error', 'always' ],
    'vue/func-call-spacing': [ 'warn', 'never' ],
    'vue/html-button-has-type': 'error',
    'vue/html-comment-content-newline': [ 'warn', { multiline: 'ignore', singleline: 'never' }],
    'vue/html-comment-content-spacing': [ 'warn', 'always' ],
    'vue/html-comment-indent': [ 'warn', 2 ],
    'vue/key-spacing': [ 'warn', { afterColon: true, beforeColon: false, mode: 'strict' }],
    'vue/keyword-spacing': [ 'warn', { after: true, before: true  }],
    'vue/max-attributes-per-line': [ 'warn', { multiline: 1, singleline: 3 }],
    'vue/max-len': [
      'warn', {
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
    'vue/no-constant-condition': 'warn',
    'vue/no-empty-component-block': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-expose-after-await': 'error',
    'vue/no-extra-parens': [ 'warn', 'functions' ],
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-reserved-component-names': [ 'error', { disallowVue3BuiltInComponents: true }],
    'vue/no-sparse-arrays': 'error',
    'vue/no-static-inline-styles': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-useless-concat': 'warn',
    'vue/no-useless-mustaches': [ 'error', { ignoreStringEscape: true }],
    'vue/no-useless-v-bind': 'error',
    'vue/object-curly-newline': [
      'warn',
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
    'vue/prefer-prop-type-boolean-first': 'error',
    'vue/prefer-template': 'warn',
    'vue/prefer-true-attribute-shorthand': [ 'warn', 'always' ],
    'vue/require-emit-validator': 'error',
    'vue/script-indent': [ 'warn', 2, { baseIndent: 1, switchCase: 1 }],
    'vue/space-in-parens': [ 'warn', 'never' ],
    'vue/space-infix-ops': 'warn',
    'vue/static-class-names-order': 'warn',
    'vue/template-curly-spacing': [ 'warn', 'never' ],
    'vue/v-on-function-call': 'warn',
    'vue/valid-attribute-name': 'error'
  }
}
