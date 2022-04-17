module.exports = {
  //rules: {
  //  'custom/no-future-comment': require('./rules/vue-no-future-comment.js')
  //},
  configs: {
    'jest': require('./config/jest.js'),
    'nuxt-ts-vitest': require('./config/nuxt-ts-vitest.js'),
    'nuxt-ts': require('./config/nuxt-ts.js'),
    'nuxt': require('./config/nuxt.js'),
    'paintbrush': require('./config/paintbrush.js'),
    'semi': require('./config/semi.js'),
    'standard': require('./config/standard.js'),
    'ts': require('./config/ts.js'),
    'vitest': require('./config/vitest.js'),
    'vue-ts': require('./config/vue-ts.js'),
    'vue': require('./config/vue.js')
  }
}