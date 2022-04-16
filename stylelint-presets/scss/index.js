module.exports = {
  customSyntax: 'postcss-scss',
  extends: [ 'stylelint-config-recommended-scss', '@danifoldi/stylelint-presets/standard/stylelint.config.js' ],
  plugins: [ 'stylelint-order', 'stylelint-high-performance-animation', 'stylelint-scss', '@danifoldi/stylelint-presets/standard/no-future-comment.js' ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/at-use-no-unnamespaced': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-first-in-block': [ true, { ignore: [ 'comments', 'imports' ] }],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-no-namespaced-assignment': true,
    'scss/no-global-function-names': true
  }
}
