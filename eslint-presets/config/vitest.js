module.exports = {
  plugins: [ 'vitest' ],
  rules: {
    'vitest/no-skip-test': 'warn',
    'vitest/lower-case-title': 'warn',
    'vitest/assertion-type': 'warn',
    'vitest/max-nested-describe': 'warn',
    'vitest/no-idential-title': 'warn',
    'vitest/no-conditional-in-test': 'warn'
  }
}
