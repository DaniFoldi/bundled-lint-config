module.exports = {
  extends: [ 'stylelint-config-recommended-vue', '@danifoldi/stylelint-presets/standard' ],
  overrides: [
    {
      extends: [ '@danifoldi/stylelint-presets/standard' ],
      files: [ '**/*.css', '*.css' ]
    }
  ],
  rules: {
    'function-no-unknown': [ true, { ignoreFunctions: [ 'v-bind' ] }],
    'selector-pseudo-element-no-unknown': [ true, { ignorePseudoElements: [ 'v-deep' ] }]
  }
}
