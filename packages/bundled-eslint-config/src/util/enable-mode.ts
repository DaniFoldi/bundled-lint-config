// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore shush
import { access, readFile } from 'node:fs/promises'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore shush
import { join } from 'node:path'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore shush
import { cwd } from 'node:process'
import { findUp } from 'find-up'


export async function enableMode(configFiles: string[], dependencies?: string[]): Promise<boolean> {

  const hasConfigFile = await Promise.all(configFiles.map(file => access(join(cwd(), file))
    .then(() => true)
    .catch(() => false)))

  if (hasConfigFile.some(Boolean)) {
    return true
  }

  const packageJson = await findUp('package.json', { cwd: cwd() })
  if (typeof packageJson === 'string') {
    const json = JSON.parse(await readFile(packageJson, 'utf8')) as { dependencies?: Record<string, string>, devDependencies?: Record<string, string> }

    return dependencies?.some(dependency =>
      json.dependencies?.[dependency] !== undefined || json.devDependencies?.[dependency] !== undefined) ?? false
  }

  return false
}
