import type { Linter } from 'eslint'


export type Globals = Required<Linter.Config>['languageOptions']['globals']
export type Plugins = Required<Linter.Config>['plugins']
export type Settings = Required<Linter.Config>['settings']
export type Rules = Partial<Linter.RulesRecord>
export type LanguageOptions = Required<Linter.Config>['languageOptions']
export type LinterOptions = Required<Linter.Config>['linterOptions']
export type EslintConfig = Linter.Config
