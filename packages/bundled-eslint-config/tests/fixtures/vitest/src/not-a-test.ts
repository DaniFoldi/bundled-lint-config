export {}

const describe = (name: string, fn: () => void) => fn()
const it = (name: string, fn: () => void) => fn()

describe('not a test file', () => {
  it('still needs expect', () => {
    const value = 1
    value.toString()
  })
})
