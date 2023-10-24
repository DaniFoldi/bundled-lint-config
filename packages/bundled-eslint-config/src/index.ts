import { defu } from 'defu'
import gitignore from 'eslint-config-flat-gitignore'
import { defineFlatConfig } from 'eslint-define-config'
import { astroRules, astroPlugins, astroLanguageOptions, astroSettings } from './setup/for-astro'
import { jsLanguageOptions, jsPlugins, jsRules, jsSettings } from './setup/for-js'
import { nodeRules, nodePlugins, nodeLanguageOptions, nodeSettings } from './setup/for-node'
import { reactLanguageOptions, reactPlugins, reactRules, reactSettings } from './setup/for-react'
import { reactNativeRules, reactNativePlugins, reactNativeLanguageOptions, reactNativeSettings } from './setup/for-react-native'
import { tsRules, tsPlugins, tsLanguageOptions, tsSettings } from './setup/for-ts'
import { vitestRules, vitestPlugins, vitestLanguageOptions, vitestSettings } from './setup/for-vitest'
import { vueLanguageOptions, vuePlugins, vueRules, vueSettings } from './setup/for-vue'
import { workersLanguageOptions, workersPlugins, workersRules, workersSettings } from './setup/for-workers'
import { linterOptions, hasFile } from './util'
import type { FlatESLintConfig, FlatESLintConfigItem } from 'eslint-define-config'


const ignores = {
  ignores: [ '**/coverage/**', '**/dist/**' ]
} satisfies FlatESLintConfigItem

const jsPreset = {
  files: [ '**/*.{?(c|m)@(j|t)s?(x),vue,astro}' ],
  linterOptions,
  rules: jsRules,
  plugins: jsPlugins,
  languageOptions: jsLanguageOptions,
  settings: jsSettings
} satisfies FlatESLintConfigItem

const tsPreset = {
  files: [ '**/*.{?(c|m)@(j|t)s?(x),vue,astro}' ],
  ignores: [ '**/*.?(c|m)js?(x)' ],
  linterOptions,
  rules: tsRules,
  plugins: tsPlugins,
  languageOptions: tsLanguageOptions,
  settings: tsSettings
} satisfies FlatESLintConfigItem

const astroPreset = {
  files: [ '**/*.astro' ],
  linterOptions,
  rules: astroRules,
  plugins: astroPlugins,
  languageOptions: astroLanguageOptions,
  settings: astroSettings
} satisfies FlatESLintConfigItem

const vuePreset = {
  files: [ '**/*.vue' ],
  linterOptions,
  rules: vueRules,
  plugins: vuePlugins,
  languageOptions: vueLanguageOptions,
  settings: vueSettings
} satisfies FlatESLintConfigItem

const workersPreset = {
  files: [ await hasFile('wrangler.toml') ? '**/*.?(m)@(j|t)s' : '**/*worker*/**/*.?(m)@(j|t)s' ],
  linterOptions,
  rules: workersRules,
  plugins: workersPlugins,
  languageOptions: workersLanguageOptions,
  settings: workersSettings
} satisfies FlatESLintConfigItem

const reactPreset = {
  files: [ '**/*.?(c|m)@(j|t)sx' ],
  linterOptions,
  rules: reactRules,
  plugins: reactPlugins,
  languageOptions: reactLanguageOptions,
  settings: reactSettings
} satisfies FlatESLintConfigItem

const reactNativePreset = {
  files: [ await hasFile('app.json') ? '**/*.?(c|m)@(j|t)sx' : '**/*app*/**/*.?(c|m)@(j|t)sx' ],
  linterOptions,
  rules: reactNativeRules,
  plugins: reactNativePlugins,
  languageOptions: reactNativeLanguageOptions,
  settings: reactNativeSettings
} satisfies FlatESLintConfigItem

const nodePreset = {
  files: [ '**/scripts/**/*', '**/*.config.?(c|m)@(j|t)s' ],
  linterOptions,
  rules: nodeRules,
  plugins: nodePlugins,
  languageOptions: nodeLanguageOptions,
  settings: nodeSettings
} satisfies FlatESLintConfigItem

const vitestPreset = {
  files: [ '**/test?(s)/**/*', '**/*.test.?(c|m)@(j|t)s?(x)' ],
  linterOptions,
  rules: vitestRules,
  plugins: vitestPlugins,
  languageOptions: vitestLanguageOptions,
  settings: vitestSettings
} satisfies FlatESLintConfigItem

type Preset = 'js' | 'ts' | 'astro' | 'vue' | 'workers' | 'react' | 'reactNative' | 'node' | 'vitest'
type Overrides = Partial<Record<Preset, Partial<FlatESLintConfig>>>

export function config(overrides: Overrides = {}, newItems: FlatESLintConfig[] = []): FlatESLintConfig[] {
  return defineFlatConfig([
    gitignore({ strict: false }),
    ignores,
    defu(overrides.js, jsPreset),
    defu(overrides.ts, tsPreset),
    defu(overrides.astro, astroPreset),
    defu(overrides.vue, vuePreset),
    defu(overrides.workers, workersPreset),
    defu(overrides.react, reactPreset),
    defu(overrides.reactNative, reactNativePreset),
    defu(overrides.node, nodePreset),
    defu(overrides.vitest, vitestPreset),
    ...newItems
  ])
}

export default config()
