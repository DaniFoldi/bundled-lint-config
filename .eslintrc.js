module.exports = {
  extends: [
    './eslint-presets/config/standard.js',
    './eslint-presets/config/node.js'
  ],
  rules: {
    'unicorn/prefer-module': 'off',
    'quote-props': [ 'warn', 'consistent-as-needed' ]
  }
}
