module.exports = {
  extends: [ 'stylelint-config-recommended-vue', '../standard/stylelint.config.cjs' ],
  overrides: [
    {
      extends: [ '../standard/stylelint.config.cjs' ],
      files: [ '**/*.css', '*.css' ]
    }
  ]
}
