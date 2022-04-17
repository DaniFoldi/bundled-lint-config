module.exports = {
  extends: [
    './nuxt-ts-vitest.js'
  ],
  globals: {
    localePath: 'readonly',
    switchLocalePath: 'readonly',
    useTheme: 'readonly'
  }
}