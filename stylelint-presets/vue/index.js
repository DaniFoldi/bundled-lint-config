module.exports = {
  extends: [ '@danifoldi/stylelint-presets/standard' ],
  overrides: [
    {
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-recommended'],
      files: ['*.vue', '**/*.vue'],
      rules: {
        'function-no-unknown': [ true, { ignoreFunctions: [ 'v-bind' ] }],
        'selector-pseudo-element-no-unknown': [ true, { ignorePseudoElements: [ "v-deep", "v-global", "v-slotted" ] }],
        'selector-pseudo-class-no-unknown': [ true, { ignorePseudoClasses: [ 'deep', 'global' ] }]
      }
    },
    {
      extends: [ '@danifoldi/stylelint-presets/standard' ],
      files: [ '**/*.css', '*.css' ]
    }
  ]
}
