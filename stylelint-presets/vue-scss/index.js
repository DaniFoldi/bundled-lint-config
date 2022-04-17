module.exports = {
  extends: [ '@danifoldi/stylelint-presets/scss', '@danifoldi/stylelint-presets/vue' ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      extends: [
          'stylelint-config-recommended-scss',
          'stylelint-config-html'
      ]
    },
    {
      extends: [ '@danifoldi/stylelint-presets/scss' ],
      files: [ '**/*.scss', '*.scss' ]
    }
  ],
  rules: {
    'at-rule-no-unknown': null,
  }
}
