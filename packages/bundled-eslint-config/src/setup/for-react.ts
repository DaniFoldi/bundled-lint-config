import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh'
import type { Globals, LanguageOptions, Plugins, Rules, Settings } from '../util'


export const reactSettings: Settings = {
  react: {
    version: 'detect'
  }
}

export const reactGlobals: Globals = {}

export const reactLanguageOptions: LanguageOptions = {
  globals: reactGlobals
}

export const reactPlugins: Plugins = {
  react: eslintPluginReact,
  'react-hooks': eslintPluginReactHooks,
  'react-refresh': eslintPluginReactRefresh
}

export const reactRules: Rules = {
  // 'import/no-unassigned-import': 'off',
  'react-refresh/only-export-components': 'warn',
  // 'react/display-name': 'error',
  'react/jsx-key': 'error',
  'react/jsx-no-comment-textnodes': 'error',
  'react/jsx-no-duplicate-props': 'error',
  'react/jsx-no-target-blank': 'error',
  'react/jsx-no-undef': 'error',
  'react/jsx-uses-react': 'off',
  'react/jsx-uses-vars': 'error',
  'react/no-children-prop': 'error',
  'react/no-danger-with-children': 'error',
  'react/no-deprecated': 'error',
  'react/no-direct-mutation-state': 'error',
  'react/no-find-dom-node': 'error',
  'react/no-is-mounted': 'error',
  'react/no-render-return-value': 'error',
  'react/no-string-refs': 'error',
  'react/no-unescaped-entities': 'error',
  'react/no-unknown-property': 'error',
  'react/no-unsafe': 'off',
  'react/prop-types': 'error',
  'react/react-in-jsx-scope': 'off',
  'react/require-render-return': 'error',
  'react-hooks/exhaustive-deps': 'error',
  'react-hooks/rules-of-hooks': 'warn',
  'unicorn/no-useless-undefined': 'off',
  'stylistic/no-extra-parens': 'off'
}
