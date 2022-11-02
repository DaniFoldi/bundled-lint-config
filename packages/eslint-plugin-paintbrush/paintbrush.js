module.exports = {
  extends: [
    './vitest.js',
    './vue-ts.js',
    './nuxt.js'
  ],
  rules: {
    'vue/html-comment-content-spacing': [ 'warn', 'always', { exceptions: [ '!', '#' ] }]
  }
}
