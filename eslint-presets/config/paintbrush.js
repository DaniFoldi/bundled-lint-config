module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/nuxt-ts-vitest' ],
  globals: {
    localePath: 'readonly',
    switchLocalePath: 'readonly',
    useThemeManager: 'readonly'
  }
}
