const describe = (name: string, fn: () => void) => fn()
const it = (name: string, fn: () => void) => fn()

describe('sample', () => {
  it('needs expect', () => {
    const value = 1
    value.toString()
  })
})
