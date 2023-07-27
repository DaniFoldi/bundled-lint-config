module.exports = {
  extends: [ './standard.js' ],
  overrides: [
    {
      customSyntax: 'postcss-html',
      extends: [ './standard.js' ],
      files: [ '*.vue', '**/*.vue' ],
      rules: {
        'function-no-unknown': [ true, { ignoreFunctions: [ 'v-bind' ] }],
        'selector-pseudo-class-no-unknown': [ true, { ignorePseudoClasses: [ 'deep', 'global' ] }],
        'selector-pseudo-element-no-unknown': [ true, { ignorePseudoElements: [ 'v-deep', 'v-global', 'v-slotted' ] }]
      }
    }
  ]
}
