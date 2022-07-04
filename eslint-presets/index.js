module.exports = {
  configs: {
    'comet': require('@danifoldi/eslint-plugin-eslint-presets/config/comet.js'),
    'comet-jest': require('@danifoldi/eslint-plugin-eslint-presets/config/comet-jest.js'),
    'jest': require('@danifoldi/eslint-plugin-eslint-presets/config/jest.js'),
    'node': require('@danifoldi/eslint-plugin-eslint-presets/config/node.js'),
    'node-cjs': require('@danifoldi/eslint-plugin-eslint-presets/config/node-cjs.js'),
    'nuxt': require('@danifoldi/eslint-plugin-eslint-presets/config/nuxt.js'),
    'nuxt-ts': require('@danifoldi/eslint-plugin-eslint-presets/config/nuxt-ts.js'),
    'nuxt-ts-vitest': require('@danifoldi/eslint-plugin-eslint-presets/config/nuxt-ts-vitest.js'),
    'paintbrush': require('@danifoldi/eslint-plugin-eslint-presets/config/paintbrush.js'),
    'semi': require('@danifoldi/eslint-plugin-eslint-presets/config/semi.js'),
    'standard': require('@danifoldi/eslint-plugin-eslint-presets/config/standard.js'),
    'ts': require('@danifoldi/eslint-plugin-eslint-presets/config/ts.js'),
    'ts-jest': require('@danifoldi/eslint-plugin-eslint-presets/config/ts-jest.js'),
    'unsorted': require('@danifoldi/eslint-plugin-eslint-presets/config/unsorted.js'),
    'unsorted-ts': require('@danifoldi/eslint-plugin-eslint-presets/config/unsorted-ts.js'),
    'vitest': require('@danifoldi/eslint-plugin-eslint-presets/config/vitest.js'),
    'vue': require('@danifoldi/eslint-plugin-eslint-presets/config/vue.js'),
    'vue-ts': require('@danifoldi/eslint-plugin-eslint-presets/config/vue-ts.js')
  },
  environments: {
    nuxt: require('./nuxt-environment')
  }
}
