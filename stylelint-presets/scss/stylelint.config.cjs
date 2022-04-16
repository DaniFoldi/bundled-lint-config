module.exports = {
  customSyntax: 'postcss-scss',
  extends: [ 'stylelint-config-recommended-scss', '../standard/stylelint.config.cjs' ],
  files: [ '**/*.scss', '*.scss' ],
  plugins: [ 'stylelint-order', 'stylelint-high-performance-animation', 'stylelint-scss', './no-future-comment.cjs' ],
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
