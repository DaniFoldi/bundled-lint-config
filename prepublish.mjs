import { copyFile, readFile, writeFile } from 'node:fs/promises'
import { basename } from 'node:path'
import { globby } from 'globby'


const globbyOptions = { onlyFiles: false, markDirectories: true }

const copyJobs = [
  [ 'LICENSE', 'packages/*' ],
  [ 'README.md', 'packages/*' ],
  [ 'packages/stylelint-standard/standard.js', [ 'packages/stylelint-*', '!packages/stylelint-standard' ]],
  [ 'packages/stylelint-standard/better-order.js', [ 'packages/stylelint-*', '!packages/stylelint-standard' ]],
  [ 'packages/stylelint-vue-scss/vue-scss.js', 'packages/stylelint-paintbrush/vue-scss.js' ],
  [ 'packages/stylelint-vue/vue.js', 'packages/stylelint-vue-scss/vue.js' ],
  [ 'packages/stylelint-vue/vue.js', 'packages/stylelint-paintbrush/vue.js' ],
  [ 'packages/stylelint-scss/scss.js', 'packages/stylelint-vue-scss/scss.js' ],
  [ 'packages/stylelint-scss/scss.js', 'packages/stylelint-paintbrush/scss.js' ]
]

const versionJobs = {
  'packages/stylelint-*': '1.0.0',
  'packages/eslint-*': '1.0.0'
}

for (const job of copyJobs) {
  const destinations = await globby(job[1], globbyOptions)
  for (const destination of destinations) {
    console.log(job, destination, destination + basename(job[0]))
    await copyFile(job[0], destination.endsWith('/') ? destination + basename(job[0]) : destination)
  }
  if (destinations.length === 0) {
    await copyFile(job[0], job[1])
  }
}

for (const job of Object.entries(versionJobs)) {
  for (const path of await globby(job[0], globbyOptions)) {
    const packageJson = JSON.parse(await readFile(`${path}/package.json`))
    packageJson.version = job[1]
    await writeFile(`${path}/package.json`, JSON.stringify(packageJson, null, 2))
  }
}
