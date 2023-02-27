module.exports = {
  extends: [ './standard.js' ],
  plugins: [ 'vitest' ],
  rules: {
    'vitest/consistent-test-filename': 'warn',
    'vitest/consistent-test-it': 'warn',
    'vitest/expect-expect': 'warn',
    'vitest/max-nested-describe': 'warn',
    'vitest/no-conditional-expect': 'warn',
    'vitest/no-conditional-in-test': 'warn',
    'vitest/no-conditional-tests': 'warn',
    'vitest/no-disabled-tests': 'warn',
    'vitest/no-done-callback': 'warn',
    'vitest/no-restricted-vi-methods': 'warn',
    'vitest/no-focused-tests': 'warn',
    'vitest/no-identical-title': 'warn',
    'vitest/no-skipped-tests': 'warn',
    'vitest/prefer-lowercase-title': 'warn',
    'vitest/prefer-to-be': 'warn'
  }
}
