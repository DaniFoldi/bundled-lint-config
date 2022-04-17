module.exports = {
  extends: [ '@danifoldi/stylelint-presets/scss', '@danifoldi/stylelint-presets/vue' ],
  overrides: [
    {
      customSyntax: 'postcss-html',
      extends: [ 'stylelint-config-recommended-scss' ],
      files: [ '*.vue', '**/*.vue' ],
      rules: {
        'function-no-unknown': [ true, { ignoreFunctions: [ 'v-bind' ] }],
        'selector-pseudo-class-no-unknown': [ true, { ignorePseudoClasses: [ 'deep', 'global' ] }],
        'selector-pseudo-element-no-unknown': [ true, { ignorePseudoElements: [ 'v-deep', 'v-global', 'v-slotted' ] }]
      }
    },
    {
      extends: [ '@danifoldi/stylelint-presets/scss' ],
      files: [ '**/*.scss', '*.scss' ]
    }
  ],
  rules: {
    'at-rule-no-unknown': null
  }
}
