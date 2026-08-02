import { describe, it, expect } from 'vitest'
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
  it('does not lint plain js or ts files because js/ts presets are disabled', async () => {
    const jsRules = await lintRules('js', 'src/sample.js')
    const tsRules = await lintRules('ts', 'src/sample.ts')

    expect(sortedRuleIds(jsRules)).toMatchInlineSnapshot(`[]`)
    expect(sortedRuleIds(tsRules)).toMatchInlineSnapshot(`[]`)
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

  it('applies package-json rules to package.json files', async () => {
    const rules = await lintRules('package-json', 'package.json')
    expect(sortedRuleIds(rules, 'package-json/')).toMatchInlineSnapshot(`
      [
        "package-json/require-name",
        "package-json/require-version",
      ]
    `)
  })
})
