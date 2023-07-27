import { mainRuleset as reactMain } from './react.js'
import { mainRuleset as tsMain } from './ts.js'

export default [
  {
    ...reactMain(),
    ...tsMain(reactMain().rules, reactMain().plugins),
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      jsxPragma: null
    }
  }
]
