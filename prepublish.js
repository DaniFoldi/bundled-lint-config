import { copyFile, readFile, stat, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { globby } from 'globby'


const globbyOptions = { onlyFiles: false, markDirectories: true }

const copyJobs = [
  [ 'LICENSE', 'packages/*' ],
  [ 'README.md', 'packages/*' ],
  [ 'packages/stylelint-standard/standard.cjs', [ 'packages/stylelint-*', '!packages/stylelint-standard' ]],
  [ 'packages/stylelint-standard/better-order.cjs', [ 'packages/stylelint-*', '!packages/stylelint-standard' ]],
  [ 'packages/stylelint-vue/vue.cjs', 'packages/stylelint-vue-scss/vue.cjs' ],
  [ 'packages/stylelint-scss/scss.cjs', 'packages/stylelint-vue-scss/scss.cjs' ],
  [ 'packages/eslint-config-standard/standard.js', [ 'packages/eslint-config-*', '!packages/eslint-config-standard' ]],
  [ 'packages/eslint-config-vitest/vitest.js', 'packages/eslint-config-astro/vitest.js' ],
  [ 'packages/eslint-config-vitest/vitest.js', 'packages/eslint-config-comet/vitest.js' ],
  [ 'packages/eslint-config-ts/ts.js', 'packages/eslint-config-*-ts'],
  [ 'packages/eslint-config-ts/ts.js', 'packages/eslint-config-vitest/ts.js' ],
  [ 'packages/eslint-config-ts/ts.js', 'packages/eslint-config-comet/ts.js', ],
  [ 'packages/eslint-config-ts/ts.js', 'packages/eslint-config-astro/ts.js' ],
  [ 'packages/eslint-config-vue/vue.js', 'packages/eslint-config-vue-ts/vue.js' ],
  [ 'packages/eslint-config-react/react.js', 'packages/eslint-config-react-*' ],
  [ 'packages/eslint-config-react-native/react-native.js', 'packages/eslint-config-react-native-ts/react-native.js' ]
]

const packageJsonJobs = {
  'packages/stylelint-*': {
    version: '0.2.0',
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
    version: '0.4.2',
    description: 'Plug-and-play presets for eslint',
    keywords: [
      'eslint preset',
      'eslintconfig',
      'eslint',
      'lint',
      'eslint config'
    ],
    type: 'module'
  },
  'packages/eslint-config-astro': {
    version: '0.4.3',
  },
  '{packages/eslint-*,packages/stylelint-*}': {
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
  try {
    if (await stat(job[0])) {
      const destination = job[0]
      const name = basename(destination)
      const packageJson = {
        ...JSON.parse(await readFile(join(destination, 'package.json'))),
        name: `@lint-my-life/${name}`,
        main: `${name.replace('eslint-config-', '').replace('stylelint-', '')}.js`,
        ...job[1]
      }
      await writeFile(join(destination, 'package.json'), `${JSON.stringify(packageJson, null, 2)}\n`)
      continue
    }
  } catch {}

  for (const destination of await globby(job[0], globbyOptions)) {
    const name = basename(destination)
    const packageJson = {
      ...JSON.parse(await readFile(join(destination, 'package.json'))),
      name: `@lint-my-life/${name}`,
      main: `${name.replace('eslint-config-', '').replace('stylelint-', '')}.js`,
      ...job[1]
    }
    await writeFile(join(destination, 'package.json'), `${JSON.stringify(packageJson, null, 2)}\n`)
  }
}
