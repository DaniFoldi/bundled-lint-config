import { copyFile, readFile, writeFile } from 'node:fs/promises'
import { basename, dirname, join } from 'node:path'
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
  [ 'packages/stylelint-scss/scss.js', 'packages/stylelint-paintbrush/scss.js' ],
  [ 'packages/eslint-plugin-standard/standard.js', [ 'packages/eslint-plugin-*', '!packages/eslint-plugin-standard' ]],
  [ 'packages/eslint-plugin-ts/ts.js', 'packages/eslint-plugin-*-ts' ],
  [ 'packages/eslint-plugin-ts/ts.js', 'packages/eslint-plugin-comet/ts.js' ],
  [ 'packages/eslint-plugin-vue/vue.js', 'packages/eslint-plugin-vue/vue-ts.js' ],
  [ 'packages/eslint-plugin-unsorted/unsorted.js', 'packages/eslint-plugin-unsorted-ts/unsorted.js' ],
  [ 'packages/eslint-plugin-node/node.js', 'packages/eslint-plugin-node-cjs/node.js' ],
  [ 'packages/eslint-plugin-vitest/vitest.js', 'packages/eslint-plugin-paintbrush/vitest.js' ],
  [ 'packages/eslint-plugin-vue-ts/vue-ts.js', 'packages/eslint-plugin-paintbrush/vue-ts.js' ],
  [ 'packages/eslint-plugin-nuxt/nuxt.js', 'packages/eslint-plugin-paintbrush/nuxt.js' ],
  [ 'packages/eslint-plugin-react/react.js', 'packages/eslint-plugin-react-*' ],
  [ 'packages/eslint-plugin-react-native/react-native.js', 'packages/eslint-plugin-react-native-ts/react-native.js' ]
]
const esStyleLint = [ 'packages/eslint-*', 'packages/stylelint-*' ]

const packageJsonJobs = {
  'packages/stylelint-*': {
    version: '0.1.0',
    description: 'Plug-and-play presets for stylelint',
    keywords: [
      'stylelint preset',
      'stylelintconfig',
      'stylelint',
      'lint',
      'stylelint config'
    ]
  },
  'packages/eslint-*': {
    version: '0.1.0',
    description: 'Plug-and-play presets for eslint',
    keywords: [
      'eslint preset',
      'eslintconfig',
      'eslint',
      'lint',
      'eslint config'
    ]
  },
  [esStyleLint]: {
    author: 'DaniFoldi',
    license: 'MIT',
    bugs: {
      url: 'https://github.com/DaniFoldi/lint-my-life/issues'
    },
    homepage: 'https://github.com/DaniFoldi/lint-my-life#readme',
    repository: {
      type: 'git',
      url: 'git+https://github.com/DaniFoldi/lint-my-life.git'
    }
  }
}


for (const job of copyJobs) {
  const destinations = await globby(job[1], globbyOptions)
  for (const destination of destinations) {
    await copyFile(job[0], destination.endsWith('/') ? destination + basename(job[0]) : destination)
  }
  if (destinations.length === 0) {
    await copyFile(job[0], job[1])
  }
}

for (const job of Object.entries(packageJsonJobs)) {
  for (const destination of await globby(job[0], globbyOptions)) {
    const name = basename(dirname(destination)).replace('eslint-plugin-', '').replace('stylelint-', '')
    const packageJson = {
      ...JSON.parse(await readFile(join(destination, 'package.json'))),
      name: `@lint-my-life/${name}`,
      main: `${name}.js`,
      ...job[1]
    }
    await writeFile(join(destination, 'package.json'), `${JSON.stringify(packageJson, null, 2)}\n`)
  }
}
