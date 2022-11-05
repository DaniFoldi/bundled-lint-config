module.exports = {
  extends: [ './standard.js' ],
  plugins: [ 'vitest' ],
  rules: {
    'vitest/assertion-type': 'warn',
    'vitest/lower-case-title': 'warn',
    'vitest/max-nested-describe': 'warn',
    'vitest/no-conditional-in-tests': 'warn',
    'vitest/no-identical-title': 'warn',
    'vitest/no-skipped-tests': 'warn'
  }
}
