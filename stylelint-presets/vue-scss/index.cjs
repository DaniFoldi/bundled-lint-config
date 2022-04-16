module.exports = {
  extends: [ '../scss/stylelint.config.cjs', '../vue/stylelint.config.cjs' ],
  overrides: [
    {
      extends: [ '../scss/stylelint.config.cjs' ],
      files: [ '**/*.scss', '*.scss' ]
    }
  ]
}
