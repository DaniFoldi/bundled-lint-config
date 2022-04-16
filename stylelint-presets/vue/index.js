module.exports = {
  extends: [ 'stylelint-config-recommended-vue', '@danifoldi/stylelint-presets/standard/stylelint.config.js' ],
  overrides: [
    {
      extends: [ '@danifoldi/stylelint-presets/standard/stylelint.config.js' ],
      files: [ '**/*.css', '*.css' ]
    }
  ]
}
