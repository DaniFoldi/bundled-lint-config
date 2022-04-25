module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/standard' ],
  plugins: [ 'vitest' ],
  rules: {
    'vitest/assertion-type': 'warn',
    'vitest/lower-case-title': 'warn',
    'vitest/max-nested-describe': 'warn',
    'vitest/no-conditional-in-test': 'warn',
    'vitest/no-idential-title': 'warn',
    'vitest/no-skip-test': 'warn'
  }
}
