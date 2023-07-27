import { mainRuleset as tsMain } from './ts.js'
import { mainRuleset as vueMain } from './vue.js'
import parser from '@typescript-eslint/parser'
import typescriptEslint from '@typescript-eslint/plugin'

export default [
  {
    ...tsMain(),
    ...vueMain(),
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 'latest',
      extraFileExtensions: [ '.vue' ],
      parser: parser,
      sourceType: 'module'
    },
    plugins: { typescriptEslint }
  }
]
