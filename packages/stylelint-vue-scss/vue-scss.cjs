module.exports = {
  extends: [ './scss.js', './vue.js' ],
  overrides: [
    {
      extends: [ './scss.js' ],
      files: [ '**/*.scss', '*.scss' ]
    }
  ],
  rules: {
    'at-rule-no-unknown': null
  }
}
