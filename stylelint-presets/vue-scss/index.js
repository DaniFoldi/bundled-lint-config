module.exports = {
  extends: [ '@danifoldi/stylelint-presets/scss', '@danifoldi/stylelint-presets/vue' ],
  overrides: [
    {
      customSyntax: 'postcss-html',
      files: ['*.vue', '**/*.vue'],
      extends: [
        'stylelint-config-recommended-scss',
      ],
      rules: {
        'function-no-unknown': [ true, { ignoreFunctions: [ 'v-bind' ] }],
        'selector-pseudo-element-no-unknown': [ true, { ignorePseudoElements: [ 'v-deep' ] }],
        'selector-pseudo-class-no-unknown': [ true, { ignorePseudoClasses: [ 'deep', 'global' ] }]
      }
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
