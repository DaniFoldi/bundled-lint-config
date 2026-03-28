import { defineConfig } from 'tsdown'


export default defineConfig({
  dts: true,
  entry: './src/index.ts',
  platform: 'node',
  sourcemap: true,
  target: 'node20'
})
