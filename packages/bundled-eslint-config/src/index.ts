import { defu } from 'defu'
import gitignore from 'eslint-config-flat-gitignore'
import { defineFlatConfig, type FlatESLintConfig } from 'eslint-define-config'
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
import { processors as vueProcessors } from 'eslint-plugin-vue'
import { processors as astroProcessors } from 'eslint-plugin-astro'


const ignores = {
  ignores: [ '**/coverage/**', '**/dist/**', '**/*wasm-bindgen/**' ]
} satisfies FlatESLintConfig

const jsPreset = {
  files: [ '**/*.?(c|m)js?(x)' ],
  linterOptions,
  rules: jsRules,
  plugins: jsPlugins,
  languageOptions: jsLanguageOptions,
  settings: jsSettings
} satisfies FlatESLintConfig

const tsPreset = {
  files: [ '**/*.?(c|m)ts?(x)' ],
  linterOptions,
  rules: { ...jsRules, ...tsRules },
  plugins: { ...jsPlugins, ...tsPlugins },
  languageOptions: tsLanguageOptions,
  settings: { ...jsSettings, ...tsSettings }
} satisfies FlatESLintConfig

const astroPreset = {
  files: [ '**/*.astro' ],
  linterOptions,
  rules: { ...jsRules, ...tsRules, ...astroRules },
  plugins: { ...jsPlugins, ...tsPlugins, ...astroPlugins },
  languageOptions: astroLanguageOptions,
  settings: { ...jsSettings, ...tsSettings, ...astroSettings },
  processor: astroProcessors.astro
} satisfies FlatESLintConfig

const vuePreset = {
  files: [ '**/*.vue' ],
  linterOptions,
  rules: { ...jsRules, ...tsRules, ...vueRules },
  plugins: { ...jsPlugins, ...tsPlugins, ...vuePlugins },
  languageOptions: vueLanguageOptions,
  settings: { ...jsSettings, ...tsSettings, ...vueSettings },
  processor: vueProcessors.vue
} satisfies FlatESLintConfig

const workersPreset = {
  files: [ await hasFile('wrangler.toml') ? '**/*.?(m)@(j|t)s' : '**/*worker*/**/*.?(m)@(j|t)s' ],
  linterOptions,
  rules: workersRules,
  plugins: workersPlugins,
  languageOptions: workersLanguageOptions,
  settings: workersSettings
} satisfies FlatESLintConfig

const reactPreset = {
  files: [ '**/*.?(c|m)@(j|t)sx' ],
  linterOptions,
  rules: reactRules,
  plugins: reactPlugins,
  languageOptions: reactLanguageOptions,
  settings: reactSettings
} satisfies FlatESLintConfig

const reactNativePreset = {
  files: [ (await hasFile('app.json') || await hasFile('app.config.js')) ? '**/*.?(c|m)@(j|t)sx' : '**/*app*/**/*.?(c|m)@(j|t)sx' ],
  linterOptions,
  rules: reactNativeRules,
  plugins: reactNativePlugins,
  languageOptions: reactNativeLanguageOptions,
  settings: reactNativeSettings
} satisfies FlatESLintConfig

const nodePreset = {
  files: [ '**/scripts/**/*', '**/*.config.?(c|m)@(j|t)s' ],
  linterOptions,
  rules: nodeRules,
  plugins: nodePlugins,
  languageOptions: nodeLanguageOptions,
  settings: nodeSettings
} satisfies FlatESLintConfig

const vitestPreset = {
  files: [ '**/test?(s)/**/*', '**/*.test.?(c|m)@(j|t)s?(x)' ],
  linterOptions,
  rules: vitestRules,
  plugins: vitestPlugins,
  languageOptions: vitestLanguageOptions,
  settings: vitestSettings
} satisfies FlatESLintConfig

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
