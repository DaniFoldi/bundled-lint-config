module.exports = {
  extends: [
    'plugin:@danifoldi/eslint-presets/standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  overrides: [
    {
      files: [ '*.cjs' ],

      parserOptions: {
        sourceType: 'script'
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: [ '@typescript-eslint' ],
  rules: {
    '@typescript-eslint/member-delimiter-style': [
      'error', {
        multiline: { delimiter: 'none', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false }
      }
    ],
    '@typescript-eslint/no-unused-vars': [ 'warn' ],
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/semi': [ 'error', 'never' ],
    '@typescript-eslint/type-annotation-spacing': [
      'warn', {
        after: true, before: true,
        overrides: { colon: { after: true, before: false } }
      }
    ],
    'no-unused-vars': 'off',
    'semi': [ 'warn', 'never' ]
  }
}
