module.exports = {
  extends: [
    './vitest.js',
    './nuxt.js',
    './vue-ts.js'
  ],
  rules: {
    'func-call-spacing': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'semi': [ 'warn', 'never' ],
    'space-before-blocks': 'off',
    'space-infix-ops': 'off',
    'vue/html-comment-content-spacing': [ 'warn', 'always', { exceptions: [ '!', '#' ] }]
  }
}
