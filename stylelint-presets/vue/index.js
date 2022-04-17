module.exports = {
  extends: [ '@danifoldi/stylelint-presets/standard' ],
  overrides: [
    {
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-recommended'],
      files: ['*.vue', '**/*.vue']
    },
    {
      extends: [ '@danifoldi/stylelint-presets/standard' ],
      files: [ '**/*.css', '*.css' ]
    }
  ],
  rules: {
    'function-no-unknown': [ true, { ignoreFunctions: [ 'v-bind' ] }],
    'selector-pseudo-element-no-unknown': [ true, { ignorePseudoElements: [ 'v-deep' ] }],
    'selector-pseudo-class-no-unknown': [ true, { ignorePseudoClasses: [ 'deep', 'global' ] }]
  }
}
