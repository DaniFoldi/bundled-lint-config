module.exports = {
  extends: [ '@danifoldi/stylelint-presets/scss', '@danifoldi/stylelint-presets/vue' ],
  overrides: [
    {
      extends: [ '@danifoldi/stylelint-presets/scss' ],
      files: [ '**/*.scss', '*.scss' ]
    }
  ],
  rules: {
    'at-rule-no-unknown': null
  }
}
