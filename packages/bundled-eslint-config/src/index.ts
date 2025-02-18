import { defu } from 'defu'
import gitignore from 'eslint-config-flat-gitignore'
import { astroRules, astroPlugins, astroLanguageOptions, astroSettings } from './setup/for-astro'
import { jsLanguageOptions, jsPlugins, jsRules, jsSettings } from './setup/for-js'
import { nodeRules, nodePlugins, nodeLanguageOptions, nodeSettings } from './setup/for-node'
import { reactLanguageOptions, reactPlugins, reactRules, reactSettings } from './setup/for-react'
import { reactNativeRules, reactNativePlugins, reactNativeLanguageOptions, reactNativeSettings } from './setup/for-react-native'
import { tsRules, tsPlugins, tsLanguageOptions, tsSettings } from './setup/for-ts'
import { vitestRules, vitestPlugins, vitestLanguageOptions, vitestSettings } from './setup/for-vitest'
import { vueLanguageOptions, vuePlugins, vueRules, vueSettings } from './setup/for-vue'
import { workersLanguageOptions, workersPlugins, workersRules, workersSettings } from './setup/for-workers'
import { linterOptions, enableMode, type EslintConfig } from './util'
import eslintPluginVue from 'eslint-plugin-vue'
import { processors as astroProcessors } from 'eslint-plugin-astro'
import globals from 'globals'
import { playwrightRules, playwrightPlugins, playwrightLanguageOptions, playwrightSettings } from './setup/for-playwright'


const enables = {
  astro: (await enableMode([ 'astro.config.mjs', 'astro.config.js', 'astro.config.ts' ], [ 'astro' ])),
  workers: (await enableMode([ 'wrangler.toml', 'wrangler.json' ], [ 'wrangler', '@cloudflare/workers-type' ])),
  reactNative: (await enableMode([ 'app.json', 'app.config.js', 'app.config.ts' ], [ 'expo' ])),
  node: (await enableMode([ 'wrangler.toml', 'wrangler.json' ], [ '@types/node', 'execa', 'ws' ]))
}

const ignores = {
  name: 'ignored',
  ignores: [ '**/coverage/**', '**/dist/**', '**/*wasm-bindgen/**', '**/public/**' ]
} satisfies EslintConfig

const jsPreset = {
  name: 'js',
  files: [ '**/*.?(c|m)js?(x)' ],
  linterOptions,
  rules: jsRules,
  plugins: jsPlugins,
  languageOptions: jsLanguageOptions,
  settings: jsSettings
} satisfies EslintConfig

const tsPreset = {
  name: 'ts',
  files: [ '**/*.?(c|m)ts?(x)' ],
  linterOptions,
  rules: { ...jsRules, ...tsRules },
  plugins: { ...jsPlugins, ...tsPlugins },
  languageOptions: tsLanguageOptions,
  settings: { ...jsSettings, ...tsSettings }
} satisfies EslintConfig

const astroPreset = {
  name: 'astro',
  files: [ '**/*.astro' ],
  linterOptions,
  rules: { ...jsRules, ...tsRules, ...astroRules },
  plugins: { ...jsPlugins, ...tsPlugins, ...astroPlugins },
  languageOptions: astroLanguageOptions,
  settings: { ...jsSettings, ...tsSettings, ...astroSettings },
  processor: astroProcessors['client-side-ts']
} satisfies EslintConfig

const vuePreset = {
  name: 'vue',
  files: [ '**/*.vue' ],
  linterOptions,
  rules: { ...jsRules, ...tsRules, ...vueRules },
  plugins: { ...jsPlugins, ...tsPlugins, ...vuePlugins },
  languageOptions: vueLanguageOptions,
  settings: { ...jsSettings, ...tsSettings, ...vueSettings },
  processor: eslintPluginVue.processors.vue
} satisfies EslintConfig

const workersPreset = {
  name: 'workers',
  files: [ enables.workers ? '**/*.?(m)@(j|t)s' : '___disabled' ],
  linterOptions,
  rules: workersRules,
  plugins: workersPlugins,
  languageOptions: workersLanguageOptions,
  settings: workersSettings
} satisfies EslintConfig

const reactPreset = {
  name: 'react',
  files: [ '**/*.?(c|m)@(j|t)sx' ],
  linterOptions,
  rules: reactRules,
  plugins: reactPlugins,
  languageOptions: reactLanguageOptions,
  settings: reactSettings
} satisfies EslintConfig

const reactNativePreset = {
  name: 'react-native',
  files: [ enables.reactNative ? '**/*.?(m)@(j|t)s' : '___disabled' ],
  linterOptions,
  rules: reactNativeRules,
  plugins: reactNativePlugins,
  languageOptions: reactNativeLanguageOptions,
  settings: reactNativeSettings
} satisfies EslintConfig

const nodePreset = {
  name: 'node',
  files: [ enables.node ? '**/*.?(m)@(j|t)s' : [ '**/scripts/**/*', '**/*.config.?(c|m)@(j|t)s' ] ],
  linterOptions,
  rules: nodeRules,
  plugins: nodePlugins,
  languageOptions: nodeLanguageOptions,
  settings: nodeSettings
} satisfies EslintConfig

const vitestPreset = {
  name: 'vitest',
  files: [ '**/test?(s)/**/*' ],
  ignores: [ '**/e2e/**/test?(s)/**/*' ],
  linterOptions,
  rules: vitestRules,
  plugins: vitestPlugins,
  languageOptions: vitestLanguageOptions,
  settings: vitestSettings
} satisfies EslintConfig

const playwrightPreset = {
  name: 'playwright',
  files: [ '**/e2e/**/*' ],
  ignores: [ '**/test?(s)/**/e2e/**/*' ],
  linterOptions,
  rules: playwrightRules,
  plugins: playwrightPlugins,
  languageOptions: playwrightLanguageOptions,
  settings: playwrightSettings
} satisfies EslintConfig

type Preset = 'js' | 'ts' | 'tsAstro' | 'astro' | 'astroClient' | 'vue' | 'workers' | 'react' | 'reactNative' | 'node' | 'vitest' | 'playwright'
type Overrides = Partial<Record<Preset, Partial<EslintConfig>>>

export function config(overrides: Overrides = {}, newItems: EslintConfig[] = []): EslintConfig[] {
  return [
    gitignore({ strict: false }),
    ignores,
    defu(overrides.js, jsPreset),
    defu(overrides.ts, tsPreset),
    enables.astro ? defu(overrides.tsAstro, {
      files: [ '**/*.?(m)@(j|t)s' ],
      settings: astroSettings,
      languageOptions: {
        globals: astroLanguageOptions.globals
      }
    }, tsPreset) : undefined,
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
  ].filter(Boolean)
}

export default config()
