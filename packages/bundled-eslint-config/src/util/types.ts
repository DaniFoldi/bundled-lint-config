import type { FlatESLintConfigItem } from 'eslint-define-config'


export type Globals = Required<FlatESLintConfigItem>['languageOptions']['globals']
export type Plugins = Required<FlatESLintConfigItem>['plugins']
export type Settings = Required<FlatESLintConfigItem>['settings']
export type { LanguageOptions, Rules } from 'eslint-define-config'
