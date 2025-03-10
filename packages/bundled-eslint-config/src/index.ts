import { defu, defuArrayFn } from 'defu'
import gitignore from 'eslint-config-flat-gitignore'
import { processors as astroProcessors } from 'eslint-plugin-astro'
import eslintPluginJsonSchemaValidator from 'eslint-plugin-json-schema-validator'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import { astroLanguageOptions, astroPlugins, astroRules, astroSettings } from './setup/for-astro'
import { jsLanguageOptions, jsPlugins, jsRules, jsSettings } from './setup/for-js'
import { nodeLanguageOptions, nodePlugins, nodeRules, nodeSettings } from './setup/for-node'
import { packageJsonLanguageOptions, packageJsonPlugins, packageJsonRules, packageJsonSettings } from './setup/for-package-json'
import { playwrightLanguageOptions, playwrightPlugins, playwrightRules, playwrightSettings } from './setup/for-playwright'
import { reactLanguageOptions, reactPlugins, reactRules, reactSettings } from './setup/for-react'
import { reactNativeLanguageOptions, reactNativePlugins, reactNativeRules, reactNativeSettings } from './setup/for-react-native'
import { tsLanguageOptions, tsPlugins, tsRules, tsSettings } from './setup/for-ts'
import { vitestLanguageOptions, vitestPlugins, vitestRules, vitestSettings } from './setup/for-vitest'
import { vueLanguageOptions, vuePlugins, vueRules, vueSettings } from './setup/for-vue'
import { workersLanguageOptions, workersPlugins, workersRules, workersSettings } from './setup/for-workers'
import { enableMode, linterOptions, type EslintConfig } from './util'


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
  files: [ enables.reactNative ? '**/*.?(m)@(j|t)sx' : '___disabled' ],
  linterOptions,
  rules: reactNativeRules,
  plugins: reactNativePlugins,
  languageOptions: reactNativeLanguageOptions,
  settings: reactNativeSettings
} satisfies EslintConfig

const nodePreset = {
  name: 'node',
  files: [ enables.node ? '**/*.?(c|m)@(j|t)s' : [ '**/scripts/**/*', '**/*.config.?(c|m)@(j|t)s' ] ].flat(),
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

const packageJsonPreset = {
  name: 'packageJson',
  files: [ '**/package.json' ],
  linterOptions,
  rules: packageJsonRules,
  plugins: packageJsonPlugins,
  languageOptions: packageJsonLanguageOptions,
  settings: packageJsonSettings
} satisfies EslintConfig

type Preset = 'js' | 'ts' | 'tsAstro' | 'astro' | 'astroClient' | 'vue' | 'workers' | 'react' | 'reactNative' | 'node' | 'nodeCjs' | 'vitest' | 'playwright' | 'packageJson'
type Overrides = Partial<Record<Preset, Partial<EslintConfig>>>

export function config(overrides: Overrides = {}, newItems: EslintConfig[] = []): EslintConfig[] {
  return [
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
    /* {
      files: ["** /*.json"],
      language: "json/json",
      plugins: {
        json,
        jsonc: eslintPluginJsonc
      },
      rules: {
        'jsonc/auto': 'error'
      },
    },
    {
      files: ["** /*.jsonc", ".vscode/*.json", "wrangler.json"],
      language: "json/jsonc",
      plugins: {
        json,
        jsonc: eslintPluginJsonc
      },
      rules: {
        'jsonc/auto': 'error'
      },
    },
    {
      files: ["** /*.json5"],
      language: "json/json5",
      plugins: {
        json,
        jsonc: eslintPluginJsonc
      },
      rules: {
        'jsonc/auto': 'error'
      },
    }, */
    defu(overrides.packageJson, packageJsonPreset),
    ...eslintPluginJsonSchemaValidator.configs['flat/recommended'],
    enables.astro ? defu(overrides.tsAstro, {
      files: [ '**/*.?(m)@(j|t)s' ],
      settings: enables.workers ? defuArrayFn(astroSettings, workersSettings) : astroSettings,
      languageOptions: {
        globals: {
          ...astroLanguageOptions.globals,
          ...enables.workers ? workersLanguageOptions.globals : {}
        }
      }
    }) : undefined,
    defu(overrides.nodeCjs, {
      name: 'nodecjs',
      files: [ enables.node ? '**/*.c@(j|t)s' : [ '**/scripts/**/*', '**/*.config.c@(j|t)s' ] ],
      linterOptions,
      rules: {
        ...nodeRules,
        'import/no-commonjs': 'off',
        'unicorn/prefer-module': 'off'
      } as const,
      plugins: nodePlugins,
      languageOptions: nodeLanguageOptions,
      settings: nodeSettings
    }),
    ...newItems
  ].filter(element => element !== undefined) as EslintConfig[]
}

export default config()
