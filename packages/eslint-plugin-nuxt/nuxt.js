module.exports = {
  extends: [
    'plugin:nuxt/recommended',
    './vue.js'
  ],
  overrides: [
    {
      files: [ 'components/*.vue', 'components/**/*.vue' ],
      rules: {
        'unicorn/filename-case': [ 'warn', { cases: { pascalCase: true } }]
      }
    }
  ]
}
