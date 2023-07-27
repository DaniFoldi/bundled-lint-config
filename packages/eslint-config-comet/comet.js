import { mainRuleset as vitestMain } from './vitest.js'

export function mainRuleset(rules = {}) {
  return {
    ...vitestMain({
      'import/no-unassigned-import': 'off',
      ...rules
    })
  }
}

export default [ mainRuleset ]
