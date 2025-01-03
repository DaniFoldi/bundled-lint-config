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
import eslintPluginVue from 'eslint-plugin-vue'
import { processors as astroProcessors } from 'eslint-plugin-astro'
import globals from 'globals'
import { playwrightRules, playwrightPlugins, playwrightLanguageOptions, playwrightSettings } from './setup/for-playwright'


const ignores = {
  // @ts-expect-error define-config types are old
  name: 'ignored',
  ignores: [ '**/coverage/**', '**/dist/**', '**/*wasm-bindgen/**', '**/public/**' ]
} satisfies FlatESLintConfig

const jsPreset = {
  // @ts-expect-error define-config types are old
  name: 'js',
  files: [ '**/*.?(c|m)js?(x)' ],
  linterOptions,
  rules: jsRules,
  plugins: jsPlugins,
  languageOptions: jsLanguageOptions,
  settings: jsSettings
} satisfies FlatESLintConfig

const tsPreset = {
  // @ts-expect-error define-config types are old
  name: 'ts',
  files: [ '**/*.?(c|m)ts?(x)' ],
  linterOptions,
  rules: { ...jsRules, ...tsRules },
  plugins: { ...jsPlugins, ...tsPlugins },
  languageOptions: tsLanguageOptions,
  settings: { ...jsSettings, ...tsSettings }
} satisfies FlatESLintConfig

const astroPreset = {
  // @ts-expect-error define-config types are old
  name: 'astro',
  files: [ '**/*.astro' ],
  linterOptions,
  rules: { ...jsRules, ...tsRules, ...astroRules },
  plugins: { ...jsPlugins, ...tsPlugins, ...astroPlugins },
  languageOptions: astroLanguageOptions,
  settings: { ...jsSettings, ...tsSettings, ...astroSettings },
  processor: astroProcessors['client-side-ts']
} satisfies FlatESLintConfig

const vuePreset = {
  // @ts-expect-error define-config types are old
  name: 'vue',
  files: [ '**/*.vue' ],
  linterOptions,
  rules: { ...jsRules, ...tsRules, ...vueRules },
  plugins: { ...jsPlugins, ...tsPlugins, ...vuePlugins },
  languageOptions: vueLanguageOptions,
  settings: { ...jsSettings, ...tsSettings, ...vueSettings },
  processor: eslintPluginVue.processors.vue
} satisfies FlatESLintConfig

const workersPreset = {
  // @ts-expect-error define-config types are old
  name: 'workers',
  files: [ (await hasFile('wrangler.toml') || await hasFile('wrangler.json')) ? '**/*.?(m)@(j|t)s' : '**/*worker*/**/*.?(m)@(j|t)s' ],
  linterOptions,
  rules: workersRules,
  plugins: workersPlugins,
  languageOptions: workersLanguageOptions,
  settings: workersSettings
} satisfies FlatESLintConfig

const reactPreset = {
  // @ts-expect-error define-config types are old
  name: 'react',
  files: [ '**/*.?(c|m)@(j|t)sx' ],
  linterOptions,
  rules: reactRules,
  plugins: reactPlugins,
  languageOptions: reactLanguageOptions,
  settings: reactSettings
} satisfies FlatESLintConfig

const reactNativePreset = {
  // @ts-expect-error define-config types are old
  name: 'react-native',
  files: [ (await hasFile('app.json') || await hasFile('app.config.js')) ? '**/*.?(c|m)@(j|t)sx' : '**/*app*/**/*.?(c|m)@(j|t)sx' ],
  linterOptions,
  rules: reactNativeRules,
  plugins: reactNativePlugins,
  languageOptions: reactNativeLanguageOptions,
  settings: reactNativeSettings
} satisfies FlatESLintConfig

const nodePreset = {
  // @ts-expect-error define-config types are old
  name: 'node',
  files: [ '**/scripts/**/*', '**/*.config.?(c|m)@(j|t)s' ],
  linterOptions,
  rules: nodeRules,
  plugins: nodePlugins,
  languageOptions: nodeLanguageOptions,
  settings: nodeSettings
} satisfies FlatESLintConfig

const vitestPreset = {
  // @ts-expect-error define-config types are old
  name: 'vitest',
  files: [ '**/test?(s)/**/*' ],
  linterOptions,
  rules: vitestRules,
  plugins: vitestPlugins,
  languageOptions: vitestLanguageOptions,
  settings: vitestSettings
} satisfies FlatESLintConfig

const playwrightPreset = {
  // @ts-expect-error define-config types are old
  name: 'playwright',
  files: [ '**/e2e/**/*' ],
  linterOptions,
  rules: playwrightRules,
  plugins: playwrightPlugins,
  languageOptions: playwrightLanguageOptions,
  settings: playwrightSettings
} satisfies FlatESLintConfig

type Preset = 'js' | 'ts' | 'astro' | 'astroClient' | 'vue' | 'workers' | 'react' | 'reactNative' | 'node' | 'vitest' | 'playwright'
type Overrides = Partial<Record<Preset, Partial<FlatESLintConfig>>>

export function config(overrides: Overrides = {}, newItems: FlatESLintConfig[] = []): FlatESLintConfig[] {
  return defineFlatConfig([
    gitignore({ strict: false }),
    ignores,
    defu(overrides.js, jsPreset),
    defu(overrides.ts, tsPreset),
    defu(overrides.astro, astroPreset),
    defu(overrides.astroClient, {
      files: [ '**/*.astro/*.ts', '*.astro/*.ts' ],
      languageOptions: {
        globals: globals.browser
      }
    }, tsPreset),
    defu(overrides.vue, vuePreset),
    defu(overrides.workers, workersPreset),
    defu(overrides.react, reactPreset),
    defu(overrides.reactNative, reactNativePreset),
    defu(overrides.node, nodePreset),
    defu(overrides.vitest, vitestPreset),
    defu(overrides.playwright, playwrightPreset),
    ...newItems
  ])
}

export default config()
