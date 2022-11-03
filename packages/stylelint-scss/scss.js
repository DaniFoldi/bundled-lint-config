module.exports = {
  customSyntax: 'postcss-scss',
  extends: [ './standard.js' ],
  plugins: [ 'stylelint-order', 'stylelint-high-performance-animation', 'stylelint-scss' ],
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
