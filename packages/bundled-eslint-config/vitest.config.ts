import { defineConfig } from 'vitest/config'


export default defineConfig({
  test: {
    include: [ 'tests/eslint-config.test.ts' ],
    exclude: [ 'tests/fixtures/**' ],
    testTimeout: 30000
  }
})
