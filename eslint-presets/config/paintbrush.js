module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/nuxt-ts-vitest' ],
  rules: {
    'vue/html-comment-content-spacing': [ 'warn', 'always', { exceptions: [ '!', '#' ] }]
  }
}
