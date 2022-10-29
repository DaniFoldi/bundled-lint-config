import { copyFile, readFile, writeFile } from 'node:fs/promises'
import { basename } from 'node:path'
import { globby } from 'globby'


const globbyOptions = { onlyFiles: false, markDirectories: true }

const copyJobs = [
  [ 'LICENSE', 'packages/*' ],
  [ 'README.md', 'packages/*' ],
  [ 'packages/stylelint-standard/standard.js', [ 'packages/stylelint-*', '!packages/stylelint-standard' ]],
  [ 'packages/stylelint-standard/better-order.js', [ 'packages/stylelint-*', '!packages/stylelint-standard' ]],
  [ 'packages/stylelint-vue-scss/vue-scss.js', 'packages/stylelint-paintbrush' ],
  [ 'packages/stylelint-vue/vue.js', 'packages/stylelint-vue-scss' ],
  [ 'packages/stylelint-vue/vue.js', 'packages/stylelint-paintbrush' ],
  [ 'packages/stylelint-scss/scss.js', 'packages/stylelint-vue-scss' ],
  [ 'packages/stylelint-scss/scss.js', 'packages/stylelint-paintbrush' ]
]

const versionJobs = {
  'packages/stylelint-*': '1.0.0',
  'packages/eslint-*': '1.0.0'
}

for (const job of copyJobs) {
  for (const destination of await globby(job[1], globbyOptions)) {
    await copyFile(job[0], destination.endsWith('/') ? destination + basename(job[0]) : destination)
  }
}

for (const job of Object.entries(versionJobs)) {
  for (const path of await globby(job[0], globbyOptions)) {
    const packageJson = JSON.parse(await readFile(`${path}/package.json`))
    packageJson.version = job[1]
    await writeFile(`${path}/package.json`, JSON.stringify(packageJson, null, 2))
  }
}
