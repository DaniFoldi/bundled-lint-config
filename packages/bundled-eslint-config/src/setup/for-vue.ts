import { parser } from 'typescript-eslint'
// @ts-expect-error package has no types
import eslintPluginVue from 'eslint-plugin-vue'
import vueEslintParser from 'vue-eslint-parser'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const vueSettings: Settings = {}

export const vueGlobals: Globals = {}

export const vueLanguageOptions: LanguageOptions = {
  globals: vueGlobals,
  parser: vueEslintParser,
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    extraFileExtensions: [ '.vue' ],
    // @ts-expect-error types are borked
    parser,
    projectService: true,
    sourceType: 'module'
  }
}

export const vuePlugins: Plugins = {
  vue: eslintPluginVue
}

export const vueRules: Rules = {
  'vue/sort-keys': [ 'warn', 'asc', { caseSensitive: true, minKeys: 5, natural: true }],
  'vue/array-bracket-newline': [ 'warn', { multiline: true }],
  'vue/array-bracket-spacing': [ 'warn', 'always', { arraysInArrays: false, objectsInArrays: false }],
  'vue/arrow-spacing': 'warn',
  'vue/attributes-order': [ 'warn', { alphabetical: true }],
  'vue/block-lang': [ 'error', { script: { lang: 'ts' }, style: { lang: 'scss' } }],
  'vue/block-spacing': [ 'warn', 'always' ],
  'vue/block-tag-newline': [ 'warn', { maxEmptyLines: 0, multiline: 'always', singleline: 'always' }],
  'vue/brace-style': [ 'warn', '1tbs' ],
  'vue/comma-dangle': [ 'warn', 'never' ],
  'vue/comma-spacing': [ 'warn', { after: true, before: false }],
  'vue/comment-directive': [ 'error', { reportUnusedDisableDirectives: false }],
  'vue/component-api-style': [ 'error', [ 'script-setup', 'composition' ]],
  'vue/component-name-in-template-casing': [ 'warn', 'PascalCase' ],
  'vue/block-order': [ 'warn', { order: [ 'template', 'script[setup]', 'script:not([setup])', 'style:not([scoped])', 'style[scoped]' ] }],
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
  'vue/keyword-spacing': [ 'warn', { after: true, before: true }],
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
  'vue/require-explicit-slots': 'error',
  'vue/script-indent': [ 'warn', 2, { baseIndent: 1, switchCase: 1 }],
  'vue/space-in-parens': [ 'warn', 'never' ],
  'vue/space-infix-ops': 'warn',
  'vue/static-class-names-order': 'warn',
  'vue/template-curly-spacing': [ 'warn', 'never' ],
  'vue/v-on-handler-style': 'warn',
  'vue/valid-attribute-name': 'error',
  'vue/no-lone-template': 'warn',
  'vue/no-multiple-slot-args': 'warn',
  'vue/no-v-html': 'warn',
  'vue/this-in-template': 'warn',
  'vue/attribute-hyphenation': 'warn',
  'vue/component-definition-name-casing': 'warn',
  'vue/first-attribute-linebreak': 'warn',
  'vue/html-closing-bracket-newline': 'warn',
  'vue/html-closing-bracket-spacing': 'warn',
  'vue/html-end-tags': 'warn',
  'vue/html-indent': 'warn',
  'vue/html-quotes': 'warn',
  'vue/html-self-closing': 'warn',
  'vue/multiline-html-element-content-newline': 'warn',
  'vue/mustache-interpolation-spacing': 'warn',
  'vue/no-multi-spaces': 'warn',
  'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
  'vue/no-template-shadow': 'warn',
  'vue/one-component-per-file': 'warn',
  'vue/prop-name-casing': 'warn',
  'vue/require-default-prop': 'warn',
  'vue/require-explicit-emits': 'warn',
  'vue/require-prop-types': 'warn',
  'vue/singleline-html-element-content-newline': 'warn',
  'vue/v-bind-style': 'warn',
  'vue/v-on-event-hyphenation': 'warn',
  'vue/v-on-style': 'warn',
  'vue/v-slot-style': 'warn',
  'vue/no-arrow-functions-in-watch': 'error',
  'vue/no-async-in-computed-properties': 'error',
  'vue/no-computed-properties-in-data': 'error',
  'vue/no-deprecated-data-object-declaration': 'error',
  'vue/no-deprecated-destroyed-lifecycle': 'error',
  'vue/no-deprecated-dollar-listeners-api': 'error',
  'vue/no-deprecated-dollar-scopedslots-api': 'error',
  'vue/no-deprecated-events-api': 'error',
  'vue/no-deprecated-filter': 'error',
  'vue/no-deprecated-functional-template': 'error',
  'vue/no-deprecated-html-element-is': 'error',
  'vue/no-deprecated-inline-template': 'error',
  'vue/no-deprecated-props-default-this': 'error',
  'vue/no-deprecated-router-link-tag-prop': 'error',
  'vue/no-deprecated-scope-attribute': 'error',
  'vue/no-deprecated-slot-attribute': 'error',
  'vue/no-deprecated-slot-scope-attribute': 'error',
  'vue/no-deprecated-v-bind-sync': 'error',
  'vue/no-deprecated-v-is': 'error',
  'vue/no-deprecated-v-on-native-modifier': 'error',
  'vue/no-deprecated-v-on-number-modifiers': 'error',
  'vue/no-deprecated-vue-config-keycodes': 'error',
  'vue/no-dupe-keys': 'error',
  'vue/no-dupe-v-else-if': 'error',
  'vue/no-duplicate-attributes': 'error',
  'vue/no-export-in-script-setup': 'error',
  'vue/no-lifecycle-after-await': 'error',
  'vue/no-mutating-props': 'error',
  'vue/no-parsing-error': 'error',
  'vue/no-ref-as-operand': 'error',
  'vue/no-reserved-keys': 'error',
  'vue/no-reserved-props': 'error',
  'vue/no-setup-props-reactivity-loss': 'error',
  'vue/no-shared-component-data': 'error',
  'vue/no-side-effects-in-computed-properties': 'error',
  'vue/no-template-key': 'error',
  'vue/no-textarea-mustache': 'error',
  'vue/no-unused-components': 'error',
  'vue/no-unused-vars': 'error',
  'vue/no-use-computed-property-like-method': 'error',
  'vue/no-useless-template-attributes': 'error',
  'vue/no-v-for-template-key-on-child': 'error',
  'vue/no-v-text-v-html-on-component': 'error',
  'vue/no-watch-after-await': 'error',
  'vue/require-component-is': 'error',
  'vue/require-prop-type-constructor': 'error',
  'vue/require-render-return': 'error',
  'vue/require-slots-as-functions': 'error',
  'vue/require-toggle-inside-transition': 'error',
  'vue/require-v-for-key': 'error',
  'vue/require-valid-default-prop': 'error',
  'vue/return-in-computed-property': 'error',
  'vue/return-in-emits-validator': 'error',
  'vue/use-v-on-exact': 'error',
  'vue/valid-define-emits': 'error',
  'vue/valid-define-props': 'error',
  'vue/valid-next-tick': 'error',
  'vue/valid-template-root': 'error',
  'vue/valid-v-bind': 'error',
  'vue/valid-v-cloak': 'error',
  'vue/valid-v-else-if': 'error',
  'vue/valid-v-else': 'error',
  'vue/valid-v-for': 'error',
  'vue/valid-v-html': 'error',
  'vue/valid-v-if': 'error',
  'vue/valid-v-is': 'error',
  'vue/valid-v-memo': 'error',
  'vue/valid-v-model': 'error',
  'vue/valid-v-on': 'error',
  'vue/valid-v-once': 'error',
  'vue/valid-v-pre': 'error',
  'vue/valid-v-show': 'error',
  'vue/valid-v-slot': 'error',
  'vue/valid-v-text': 'error'
}
