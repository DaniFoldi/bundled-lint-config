module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-plugin-eslint-presets/nuxt-ts-vitest.js' ],
  globals: {
    localePath: 'readonly',
    switchLocalePath: 'readonly',
    useTheme: 'readonly'
  }
}
