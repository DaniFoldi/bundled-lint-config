import { execSync } from 'node:child_process'
import { globby } from 'globby'


for (const dir of await (globby('packages/*', { onlyFiles: false, markDirectories: true }))) {
  execSync('npm i', { cwd: dir })
  execSync('npm update --save', { cwd: dir })
}
