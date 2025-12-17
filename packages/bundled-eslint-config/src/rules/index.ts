import type { ESLint } from 'eslint'
import { rule as noSelfAssignRule } from './no-self-assign'


const bundledEslintPlugin = {
  rules: {
    'no-self-assign': noSelfAssignRule
  }
} satisfies ESLint.Plugin

export default bundledEslintPlugin
