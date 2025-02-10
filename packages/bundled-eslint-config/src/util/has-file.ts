// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { access } from 'node:fs/promises'
// @ts-nocheck
import { join } from 'node:path'
// @ts-nocheck
import { cwd } from 'node:process'


export async function hasFile(name: string): Promise<boolean> {
  return await access(join(cwd(), name)).then(() => true).catch(() => false)
}
