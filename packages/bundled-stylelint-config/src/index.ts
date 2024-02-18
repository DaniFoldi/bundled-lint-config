import type { Config } from 'stylelint'


export default <Config>{
  reportDescriptionlessDisables: true,
  reportNeedlessDisables: true,
  reportInvalidScopeDisables: true,
  extends: [ 'stylelint-config-idiomatic-order' ],
  plugins: [ '@stylistic/stylelint-plugin', 'stylelint-order', 'stylelint-high-performance-animation' ],
  overrides: [
    {
      customSyntax: 'postcss-scss',
      files: [ '*.scss' ],
      plugins: [ '@stylistic/stylelint-plugin', 'stylelint-order', 'stylelint-high-performance-animation', 'stylelint-scss' ],
      rules: {
        'annotation-no-unknown': [
          true,
          {
            ignoreAnnotations: [ 'default', 'global' ]
          }
        ],
        'at-rule-empty-line-before': [
          'always',
          {
            except: [ 'blockless-after-blockless', 'first-nested' ],
            ignore: [ 'after-comment' ],
            ignoreAtRules: [ 'else' ]
          }
        ],
        'at-rule-no-unknown': null,
        'block-closing-brace-newline-after': [ 'always', { ignoreAtRules: [ 'if', 'else' ] }],
        'comment-no-empty': null,
        'function-no-unknown': null,
        'import-notation': 'string',
        'no-invalid-position-at-import-rule': [
          true,
          {
            ignoreAtRules: [ 'use', 'forward' ]
          }
        ],
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        'scss/at-else-empty-line-before': 'never',
        'scss/at-else-if-parentheses-space-before': 'always',
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-function-parentheses-space-before': 'never',
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        'scss/at-if-no-null': true,
        'scss/at-import-no-partial-leading-underscore': true,
        'scss/at-import-partial-extension': 'never',
        'scss/at-mixin-argumentless-call-parentheses': 'never',
        'scss/at-mixin-parentheses-space-before': 'never',
        'scss/at-rule-conditional-no-parentheses': true,
        'scss/at-rule-no-unknown': true,
        'scss/at-use-no-unnamespaced': true,
        'scss/comment-no-empty': true,
        'scss/declaration-nested-properties-no-divided-groups': true,
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-empty-line-before': [
          'always',
          {
            except: [ 'after-dollar-variable', 'first-nested' ],
            ignore: [ 'after-comment', 'inside-single-line-block' ]
          }
        ],
        'scss/dollar-variable-first-in-block': [ true, { ignore: [ 'comments', 'imports' ] }],
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/dollar-variable-no-namespaced-assignment': true,
        'scss/double-slash-comment-empty-line-before': [
          'always',
          {
            except: [ 'first-nested' ],
            ignore: [ 'between-comments', 'stylelint-commands' ]
          }
        ],
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/function-quote-no-quoted-strings-inside': true,
        'scss/function-unquote-no-unquoted-strings-inside': true,
        'scss/no-duplicate-mixins': true,
        'scss/no-global-function-names': true,
        'scss/operator-no-newline-after': true,
        'scss/operator-no-newline-before': true,
        'scss/operator-no-unspaced': true
      }
    }
  ],
  rules: {
    'annotation-no-unknown': true,
    'at-rule-empty-line-before': [
      'always',
      {
        except: [ 'blockless-after-same-name-blockless', 'first-nested' ],
        ignore: [ 'after-comment' ],
        severity: 'warning'
      }
    ],
    '@stylistic/at-rule-name-case': 'lower',
    '@stylistic/at-rule-name-space-after': [ 'always-single-line', { severity: 'warning' }],
    'at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    '@stylistic/at-rule-semicolon-newline-after': 'always',
    '@stylistic/block-closing-brace-empty-line-before': [ 'never', { severity: 'warning' }],
    '@stylistic/block-closing-brace-newline-after': [ 'always', { severity: 'warning' }],
    '@stylistic/block-closing-brace-newline-before': [ 'always-multi-line', { severity: 'warning' }],
    '@stylistic/block-closing-brace-space-after': [ 'always-single-line', { severity: 'warning' }],
    '@stylistic/block-closing-brace-space-before': [ 'always-single-line', { severity: 'warning' }],
    'block-no-empty': [ true, { severity: 'warning' }],
    '@stylistic/block-opening-brace-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    '@stylistic/block-opening-brace-space-after': [ 'always-single-line', { severity: 'warning' }],
    '@stylistic/block-opening-brace-space-before': [ 'always', { severity: 'warning' }],
    'color-function-notation': [ 'modern', { severity: 'warning' }],
    '@stylistic/color-hex-case': [ 'lower', { severity: 'warning' }],
    'color-hex-length': [ 'short', { severity: 'warning' }],
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        except: [ 'first-nested' ],
        ignore: [ 'stylelint-commands' ],
        severity: 'warning'
      }
    ],
    'comment-no-empty': [ true, { severity: 'warning' }],
    'comment-whitespace-inside': [ 'always', { severity: 'warning' }],
    'custom-property-empty-line-before': [
      'always',
      {
        except: [ 'after-custom-property', 'first-nested' ],
        ignore: [ 'after-comment', 'inside-single-line-block' ],
        severity: 'warning'
      }
    ],
    'custom-property-no-missing-var-function': true,
    '@stylistic/declaration-bang-space-after': [ 'never', { severity: 'warning' }],
    '@stylistic/declaration-bang-space-before': [ 'always', { severity: 'warning' }],
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: [ 'consecutive-duplicates-with-different-values' ]
      }
    ],
    'declaration-block-no-redundant-longhand-properties': [ true, { severity: 'warning' }],
    'declaration-block-no-shorthand-property-overrides': true,
    '@stylistic/declaration-block-semicolon-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    '@stylistic/declaration-block-semicolon-newline-before': [ 'never-multi-line', { severity: 'warning' }],
    '@stylistic/declaration-block-semicolon-space-after': [ 'always-single-line', { severity: 'warning' }],
    '@stylistic/declaration-block-semicolon-space-before': [ 'never', { severity: 'warning' }],
    'declaration-block-single-line-max-declarations': [ 1, { severity: 'warning' }],
    '@stylistic/declaration-block-trailing-semicolon': [ 'always', { severity: 'warning' }],
    '@stylistic/declaration-colon-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    '@stylistic/declaration-colon-space-after': [ 'always', { severity: 'warning' }],
    '@stylistic/declaration-colon-space-before': [ 'never', { severity: 'warning' }],
    'declaration-empty-line-before': [
      'always',
      {
        except: [ 'after-declaration', 'first-nested' ],
        ignore: [ 'after-comment', 'inside-single-line-block' ],
        severity: 'warning'
      }
    ],
    'declaration-no-important': [ true, { severity: 'warning' }],
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': [ true, { severity: 'warning' }],
    'function-calc-no-unspaced-operator': true,
    '@stylistic/function-comma-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    '@stylistic/function-comma-newline-before': [ 'never-multi-line', { severity: 'warning' }],
    '@stylistic/function-comma-space-after': [ 'always-single-line', { severity: 'warning' }],
    '@stylistic/function-comma-space-before': [ 'never', { severity: 'warning' }],
    'function-linear-gradient-no-nonstandard-direction': true,
    '@stylistic/function-max-empty-lines': [ 0, { severity: 'warning' }],
    'function-name-case': [ 'lower', { severity: 'warning' }],
    'function-no-unknown': true,
    '@stylistic/function-parentheses-newline-inside': [ 'always-multi-line', { severity: 'warning' }],
    '@stylistic/function-parentheses-space-inside': [ 'never-single-line', { severity: 'warning' }],
    'function-url-quotes': [ 'always', { severity: 'warning' }],
    '@stylistic/function-whitespace-after': [ 'always', { severity: 'warning' }],
    'hue-degree-notation': [ 'angle', { severity: 'warning' }],
    'import-notation': [ 'url', { severity: 'warning' }],
    '@stylistic/indentation': [ 2, { baseIndentLevel: 1 }],
    'keyframe-block-no-duplicate-selectors': true,
    'keyframe-declaration-no-important': [ true, { severity: 'warning' }],
    'length-zero-no-unit': [ true, { severity: 'warning' }],
    '@stylistic/max-empty-lines': [ 2, { severity: 'warning' }],
    '@stylistic/max-line-length': [ 120, { severity: 'warning' }],
    'max-nesting-depth': 5,
    '@stylistic/media-feature-colon-space-after': [ 'always', { severity: 'warning' }],
    '@stylistic/media-feature-colon-space-before': [ 'never', { severity: 'warning' }],
    '@stylistic/media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    '@stylistic/media-feature-parentheses-space-inside': [ 'never', { severity: 'warning' }],
    '@stylistic/media-feature-range-operator-space-after': [ 'always', { severity: 'warning' }],
    '@stylistic/media-feature-range-operator-space-before': [ 'always', { severity: 'warning' }],
    'media-query-list-comma-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    'media-query-list-comma-newline-before': [ 'always-multi-line', { severity: 'warning' }],
    'media-query-list-comma-space-after': [ 'always-single-line', { severity: 'warning' }],
    'media-query-list-comma-space-before': [ 'never', { severity: 'warning' }],
    'named-grid-areas-no-invalid': true,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    '@stylistic/no-empty-first-line': [ true, { severity: 'warning' }],
    'no-empty-source': [ true, { severity: 'warning' }],
    '@stylistic/no-eol-whitespace': [ true, { severity: 'warning' }],
    '@stylistic/no-extra-semicolons': true,
    'no-invalid-double-slash-comments': [ true, { severity: 'warning' }],
    'no-invalid-position-at-import-rule': true,
    'no-irregular-whitespace': true,
    '@stylistic/no-missing-end-of-source-newline': true,
    '@stylistic/number-leading-zero': [ 'never', { severity: 'warning' }],
    'number-max-precision': [ 4, { severity: 'warning' }],
    '@stylistic/number-no-trailing-zeros': [ true, { severity: 'warning' }],
    'order/order': [ 'dollar-variables', 'custom-properties', 'at-rules', 'declarations', 'rules' ],
    'plugin/no-low-performance-animation-properties': [ true, { ignore: 'paint-properties' }],
    '@stylistic/property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        ignore: [ 'after-comment' ],
        severity: 'warning'
      }
    ],
    '@stylistic/selector-attribute-brackets-space-inside': [ 'never', { severity: 'warning' }],
    '@stylistic/selector-attribute-operator-space-after': [ 'never', { severity: 'warning' }],
    '@stylistic/selector-attribute-operator-space-before': [ 'never', { severity: 'warning' }],
    'selector-attribute-quotes': [ 'never', { severity: 'warning' }],
    '@stylistic/selector-combinator-space-after': [ 'always', { severity: 'warning' }],
    '@stylistic/selector-combinator-space-before': [ 'always', { severity: 'warning' }],
    '@stylistic/selector-descendant-combinator-no-non-space': [ true, { severity: 'warning' }],
    '@stylistic/selector-list-comma-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    '@stylistic/selector-list-comma-newline-before': [ 'never-multi-line', { severity: 'warning' }],
    '@stylistic/selector-list-comma-space-after': [ 'always-single-line', { severity: 'warning' }],
    '@stylistic/selector-list-comma-space-before': [ 'never', { severity: 'warning' }],
    '@stylistic/selector-max-empty-lines': [ 0, { severity: 'warning' }],
    'selector-no-vendor-prefix': true,
    'selector-not-notation': 'complex',
    '@stylistic/selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    '@stylistic/selector-pseudo-class-parentheses-space-inside': [ 'never', { severity: 'warning' }],
    '@stylistic/selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': [
      true,
      {
        ignore: [ 'custom-elements' ]
      }
    ],
    'shorthand-property-no-redundant-values': [ true, { severity: 'warning' }],
    'string-no-newline': [ true, { severity: 'warning' }],
    '@stylistic/string-quotes': [ 'single', { severity: 'warning' }],
    '@stylistic/unit-case': 'lower',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    '@stylistic/value-list-comma-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    '@stylistic/value-list-comma-newline-before': [ 'never-multi-line', { severity: 'warning' }],
    '@stylistic/value-list-comma-space-after': [ 'always-single-line', { severity: 'warning' }],
    '@stylistic/value-list-comma-space-before': [ 'never', { severity: 'warning' }],
    '@stylistic/value-list-max-empty-lines': [ 0, { severity: 'warning' }],
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: [ 'box' ]
      }
    ]
  }
}
