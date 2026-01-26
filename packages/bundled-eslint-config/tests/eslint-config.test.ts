import { describe, it, expect, vi } from 'vitest'
import { ESLint } from 'eslint'
import { cp, mkdtemp, rm } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { tmpdir } from 'node:os'
import { fileURLToPath } from 'node:url'


const __dirname = dirname(fileURLToPath(import.meta.url))
const fixturesRoot = join(__dirname, 'fixtures')

async function withFixture<T>(fixtureName: string, run: (eslint: ESLint, cwd: string) => Promise<T>): Promise<T> {
  const tempRoot = await mkdtemp(join(tmpdir(), 'bundled-eslint-config-'))
  const fixtureSource = join(fixturesRoot, fixtureName)
  const fixtureDir = join(tempRoot, fixtureName)
  await cp(fixtureSource, fixtureDir, { recursive: true })

  const originalCwd = process.cwd()
  process.chdir(fixtureDir)
  vi.resetModules()

  const { config } = await import('../src/index')

  const eslint = new ESLint({
    cwd: fixtureDir,
    overrideConfig: config(),
    overrideConfigFile: true
  })

  try {
    return await run(eslint, fixtureDir)
  } finally {
    process.chdir(originalCwd)
    await rm(tempRoot, { recursive: true, force: true })
  }
}

type LintMessage = Awaited<ReturnType<ESLint['lintFiles']>>[number]['messages'][number]

async function lintMessages(fixtureName: string, filePath: string): Promise<LintMessage[]> {
  return withFixture(fixtureName, async eslint => {
    const results = await eslint.lintFiles([ filePath ])

    return results.flatMap(result => result.messages)
  })
}

async function lintRules(fixtureName: string, filePath: string): Promise<string[]> {
  const messages = await lintMessages(fixtureName, filePath)

  return messages.map(message => message.ruleId).filter(Boolean) as string[]
}

function sortedRuleIds(ruleIds: string[], prefix?: string): string[] {
  const filtered = prefix ? ruleIds.filter(ruleId => ruleId.startsWith(prefix)) : ruleIds

  return [ ...filtered ].sort()
}

describe('bundled-eslint-config', () => {
  it('enables vitest rules only for test files', async () => {
    const testRules = await lintRules('vitest', 'tests/unit/sample.test.ts')
    const nonTestRules = await lintRules('vitest', 'src/not-a-test.ts')

    expect(sortedRuleIds(testRules, 'vitest/')).toMatchInlineSnapshot(`
      [
        "vitest/require-hook",
      ]
    `)
    expect(sortedRuleIds(nonTestRules, 'vitest/')).toMatchInlineSnapshot(`
      []
    `)
  })

  it('enables playwright rules only for e2e files', async () => {
    const e2eRules = await lintRules('playwright', 'e2e/focused.spec.ts')
    const testRules = await lintRules('playwright', 'tests/focused.spec.ts')

    expect(sortedRuleIds(e2eRules, 'playwright/')).toMatchInlineSnapshot(`
      [
        "playwright/expect-expect",
        "playwright/no-focused-test",
      ]
    `)
    expect(sortedRuleIds(testRules, 'playwright/')).toMatchInlineSnapshot(`
      []
    `)
  })

  it('applies react rules to jsx files', async () => {
    const rules = await lintRules('react', 'src/Component.jsx')
    expect(sortedRuleIds(rules, 'react/')).toMatchInlineSnapshot(`
      [
        "react/jsx-no-undef",
      ]
    `)
  })

  it('toggles react-native rules based on config files', async () => {
    const enabledRules = await lintRules('react-native-enabled', 'src/App.jsx')
    const disabledRules = await lintRules('react-native-disabled', 'src/App.jsx')

    expect(sortedRuleIds(enabledRules, 'react-native/')).toMatchInlineSnapshot(`
      [
        "react-native/no-inline-styles",
      ]
    `)
    expect(sortedRuleIds(disabledRules, 'react-native/')).toMatchInlineSnapshot(`
      []
    `)
  })

  it('applies vue rules to vue single file components', async () => {
    const rules = await lintRules('vue', 'src/Component.vue')
    expect(sortedRuleIds(rules, 'vue/')).toMatchInlineSnapshot(`
      [
        "vue/block-lang",
        "vue/script-indent",
      ]
    `)
  })

  it('applies astro rules to astro files', async () => {
    await withFixture('astro', async eslint => {
      const configForAstro = await eslint.calculateConfigForFile('src/component.astro')
      const astroRules = {
        'astro/no-set-html-directive': configForAstro.rules?.['astro/no-set-html-directive'],
        'astro/semi': configForAstro.rules?.['astro/semi']
      }

      expect(astroRules).toMatchInlineSnapshot(`
        {
          "astro/no-set-html-directive": [
            2,
          ],
          "astro/semi": [
            1,
            "never",
          ],
        }
      `)
    })
  })

  it('applies typescript rules to ts files', async () => {
    const rules = await lintRules('ts', 'src/sample.ts')
    expect(sortedRuleIds(rules, '@typescript-eslint/')).toMatchInlineSnapshot(`
      [
        "@typescript-eslint/no-explicit-any",
      ]
    `)
  })

  it('applies package-json rules to package.json files', async () => {
    const rules = await lintRules('package-json', 'package.json')
    expect(sortedRuleIds(rules, 'package-json/')).toMatchInlineSnapshot(`
      [
        "package-json/require-name",
        "package-json/require-version",
        "package-json/valid-package-definition",
        "package-json/valid-package-definition",
      ]
    `)
  })

  it('applies base js plugin rules to js files', async () => {
    const rules = await lintRules('js', 'src/sample.js')
    expect(sortedRuleIds(rules)).toMatchInlineSnapshot(`
      [
        "import/newline-after-import",
        "import/no-unresolved",
        "no-eval",
        "no-undef",
        "no-unreachable",
        "promise/catch-or-return",
        "promise/no-return-wrap",
        "security/detect-eval-with-expression",
        "unicorn/error-message",
        "unicorn/no-process-exit",
        "unicorn/no-useless-promise-resolve-reject",
        "unicorn/prefer-top-level-await",
      ]
    `)
  })

  it('applies node cjs overrides for commonjs files', async () => {
    const rules = await lintRules('node-cjs', 'scripts/config.cjs')
    expect(sortedRuleIds(rules)).toMatchInlineSnapshot(`
      [
        "import/newline-after-import",
        "no-undef",
      ]
    `)
  })

  it('applies node overrides for scripts folders', async () => {
    const rules = await lintRules('node', 'scripts/run.js')
    expect(sortedRuleIds(rules)).toMatchInlineSnapshot(`
      [
        "no-undef",
      ]
    `)
  })

  it('flags direct self-references in initializers and defaults', async () => {
    const messages = await lintMessages('custom-rule', 'src/self-assign.js')
    const snapshot = messages
      .filter(message => message.ruleId === 'bundled/no-self-assign')
      .map(message => ({
        ruleId: message.ruleId,
        message: message.message,
        line: message.line,
        column: message.column
      }))
      .sort((left, right) => left.line - right.line
        || (left.column - right.column)
        || left.message.localeCompare(right.message))

    expect(snapshot).toMatchInlineSnapshot(`
      [
        {
          "column": 15,
          "line": 1,
          "message": "Variable value is referenced within its own initializer.",
          "ruleId": "bundled/no-self-assign",
        },
        {
          "column": 28,
          "line": 3,
          "message": "Variable param is referenced within its own initializer.",
          "ruleId": "bundled/no-self-assign",
        },
        {
          "column": 11,
          "line": 8,
          "message": "Variable field is referenced within its own initializer.",
          "ruleId": "bundled/no-self-assign",
        },
      ]
    `)
  })

  it('ignores callback usages in initializers and defaults', async () => {
    const messages = await lintMessages('custom-rule', 'src/self-assign-ok.js')
    const snapshot = messages
      .filter(message => message.ruleId === 'bundled/no-self-assign')
      .map(message => ({
        ruleId: message.ruleId,
        message: message.message,
        line: message.line,
        column: message.column
      }))
      .sort((left, right) => left.line - right.line
        || (left.column - right.column)
        || left.message.localeCompare(right.message))

    expect(snapshot).toMatchInlineSnapshot(`
      []
    `)
  })
})
