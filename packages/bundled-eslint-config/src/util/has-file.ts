import { access } from 'node:fs/promises'
import { join } from 'node:path'
import { cwd } from 'node:process'


export async function hasFile(name: string): Promise<boolean> {
  return await access(join(cwd(), name)).then(() => true).catch(() => false)
}
