import missing from './missing.js'

Promise.resolve(1).then(value => {
  return Promise.resolve(value)
})

const sourceCode = '1'
eval(sourceCode)

throw new Error()

process.exit(1)

void missing
