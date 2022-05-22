const fs = require('fs')
const path = require('path')


let cache

if (!cache) {
  try {
    cache = {
      globals: {
        ...Object.fromEntries([
          ...new Set([
            ...[ 'auto-imports.d.ts', 'nitro.d.ts' ]
              .map(file => path.join(process.cwd(), '.nuxt', 'types', file))
              .map(path => fs.readFileSync(path, 'utf8'))
              .map(buffer => buffer.toString())
              .join('\n')
              .matchAll(/declare global \{(?<globals>.*?)\}\s/gisu)
          ]
            .map(match => match.groups?.globals)
            .join('\n')
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map(line => [ ...line.matchAll(/const (\w+):/gisu) ])
            .map(match => match[0][1]))
            .values()
        ]
          .map(element => [ element, false ]))
      }
    }
  } catch (error) {
    console.error('Failed to load nuxt auto-imports', error)
    cache = { globals: {} }
  }
}

module.exports = cache
