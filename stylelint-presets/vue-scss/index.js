module.exports = {
  extends: [ '@danifoldi/stylelint-presets/scss/stylelint.config.js', '@danifoldi/stylelint-presets/vue/stylelint.config.js' ],
  overrides: [
    {
      extends: [ '@danifoldi/stylelint-presets/scss/stylelint.config.js' ],
      files: [ '**/*.scss', '*.scss' ]
    }
  ]
}
