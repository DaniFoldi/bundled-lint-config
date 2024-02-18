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
  [ 'packages/stylelint-scss/scss.cjs', 'packages/stylelint-vue-scss/scss.cjs' ]
]

const packageJsonJobs = {
  'packages/bundled-stylelint-config': {
    version: '0.1.0',
    description: 'A preset for stylelint',
    keywords: [
      'stylelint preset',
      'stylelint config',
      'stylelint',
      'lint'
    ]
  },
  'packages/bundled-eslint-config': {
    type: 'module',
    version: '0.2.22',
    description: 'A preset for ESLint',
    keywords: [
      'eslint',
      'eslint preset',
      'preset',
      'typescript eslint preset',
      'typescript-eslint',
      'vue eslint preset',
      'astro eslint preset',
      'vitest eslint preset',
      'react eslint preset'
    ]
  },
  '{packages/*}': {
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
      if (name === 'bundled-eslint-config') {
        const packageJson = {
          ...JSON.parse(await readFile(join(destination, 'package.json'))),
          name: 'bundled-eslint-config',
          main: 'dist/index.js',
          ...job[1]
        }
        await writeFile(join(destination, 'package.json'), `${JSON.stringify(packageJson, null, 2)}\n`)
      } else {
        const packageJson = {
          ...JSON.parse(await readFile(join(destination, 'package.json'))),
          name: `@lint-my-life/${name}`,
          main: `${name.replace('eslint-config-', '').replace('stylelint-', '')}.js`,
          ...job[1]
        }

        await writeFile(join(destination, 'package.json'), `${JSON.stringify(packageJson, null, 2)}\n`)
      }

      continue
    }
  } catch {}

  for (const destination of await globby(job[0], globbyOptions)) {
    const packageJson = {
      ...JSON.parse(await readFile(join(destination, 'package.json'))),
      ...job[1]
    }
    await writeFile(join(destination, 'package.json'), `${JSON.stringify(packageJson, null, 2)}\n`)
  }
}
