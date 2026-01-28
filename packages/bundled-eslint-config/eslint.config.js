import { config } from 'bundled-eslint-config'


export default config({}, [
  {
    name: 'tests-fixtures-ignore',
    ignores: [ '**/tests/fixtures/**' ]
  }
])
