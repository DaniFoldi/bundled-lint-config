module.exports = {
  extends: [ './standard.js' ],
  plugins: [ 'vitest' ],
  rules: {
    'vitest/consistent-test-it': 'warn',
    'vitest/expect-expect': 'warn',
    'vitest/lower-case-title': 'warn',
    'vitest/max-nested-describe': 'warn',
    'vitest/no-conditional-tests': 'warn',
    'vitest/no-focused-tests': 'warn',
    'vitest/no-identical-title': 'warn',
    'vitest/no-skipped-tests': 'warn'
  }
}
