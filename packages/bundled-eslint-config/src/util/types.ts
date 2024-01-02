import type { FlatESLintConfig, Rules as DefinedRules } from 'eslint-define-config'


export type Globals = Required<FlatESLintConfig>['languageOptions']['globals']
export type Plugins = Required<FlatESLintConfig>['plugins']
export type Settings = Required<FlatESLintConfig>['settings']
export type Rules = Partial<DefinedRules>

export { type LanguageOptions } from 'eslint-define-config'
