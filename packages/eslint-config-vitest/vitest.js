import vitest from 'eslint-plugin-vitest'
import { mainRuleset as tsMain } from './ts.js'


export function mainRuleset(rules = {}, plugins = {}) {
  return {
    ...tsMain(
      {
        'vitest/consistent-test-filename': 'warn',
        'vitest/consistent-test-it': 'warn',
        'vitest/expect-expect': 'warn',
        'vitest/max-nested-describe': 'warn',
        'vitest/no-conditional-tests': 'warn',
        'vitest/no-restricted-vi-methods': 'warn',
        'vitest/no-focused-tests': 'warn',
        'vitest/no-identical-title': 'warn',
        'vitest/no-skipped-tests': 'warn',
        'vitest/prefer-lowercase-title': 'warn',
        'vitest/prefer-to-be': 'warn',
        ...rules
      },
      { vitest, ...plugins }
    )
  }
}

export default [ mainRuleset() ]
