const test = {
  only: (name: string, fn: () => Promise<void> | void) => fn()
}

test.only('focused', async () => {
  await Promise.resolve()
})
