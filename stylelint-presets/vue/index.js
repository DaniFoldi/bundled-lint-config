module.exports = {
  extends: [ 'stylelint-config-recommended-vue', '@danifoldi/stylelint-presets/standard' ],
  overrides: [
    {
      extends: [ '@danifoldi/stylelint-presets/standard' ],
      files: [ '**/*.css', '*.css' ]
    }
  ]
}
