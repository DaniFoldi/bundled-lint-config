import { defu, defuArrayFn } from 'defu'
import gitignore from 'eslint-config-flat-gitignore'
import { processors as astroProcessors } from 'eslint-plugin-astro'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import { astroGlobals, astroLanguageOptions, astroPlugins, astroRules, astroSettings } from './setup/for-astro'
import { jsLanguageOptions, jsPlugins, jsRules, jsSettings } from './setup/for-js'
import { packageJsonLanguageOptions, packageJsonPlugins, packageJsonRules, packageJsonSettings } from './setup/for-package-json'
import { tsLanguageOptions, tsPlugins, tsRules, tsSettings } from './setup/for-ts'
import { vueLanguageOptions, vuePlugins, vueRules, vueSettings } from './setup/for-vue'
import { workersGlobals, workersLanguageOptions, workersPlugins, workersRules, workersSettings } from './setup/for-workers'
import { enableMode, linterOptions, type EslintConfig } from './util'


const enables = {
  astro: (await enableMode([ 'astro.config.mjs', 'astro.config.js', 'astro.config.ts' ], [ 'astro' ])),
  workers: (await enableMode([ 'wrangler.toml', 'wrangler.json', 'wrangler.jsonc' ], [ 'wrangler', '@cloudflare/workers-type' ]))
}

const ignores = {
  name: 'ignored',
  ignores: [ '**/coverage/**', '**/dist/**', '**/*wasm-bindgen/**', '**/public/**', '**/.expo/**' ]
} satisfies EslintConfig

const jsPreset = {
  name: 'js',
  files: [],
  linterOptions,
  rules: jsRules,
  plugins: jsPlugins,
  languageOptions: jsLanguageOptions,
  settings: jsSettings
} satisfies EslintConfig

const tsPreset = {
  name: 'ts',
  files: [],
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

const packageJsonPreset = {
  name: 'packageJson',
  files: [ '**/package.json' ],
  linterOptions,
  rules: packageJsonRules,
  plugins: packageJsonPlugins,
  languageOptions: packageJsonLanguageOptions,
  settings: packageJsonSettings
} satisfies EslintConfig

type Preset = 'js' | 'ts' | 'tsAstro' | 'astro' | 'astroClient' | 'vue' | 'packageJson'
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
    enables.astro ? defu(overrides.tsAstro, {
      files: [ '**/*.?(m)@(j|t)s' ],
      settings: enables.workers ? defuArrayFn(astroSettings, workersSettings) : astroSettings,
      languageOptions: {
        globals: {
          ...astroGlobals!,
          ...enables.workers ? workersGlobals! : {}
        }
      }
    }) : undefined,
    ...newItems
  ].filter(element => element !== undefined) as EslintConfig[]
}

export default config()
