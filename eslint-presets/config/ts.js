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
    '@typescript-eslint/member-ordering': [
      'warn', {
        interfaces: { order: 'alphabetically' }
      }
    ],
    '@typescript-eslint/no-unused-vars': [ 'warn' ],
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/semi': [ 'error', 'never' ],
    '@typescript-eslint/space-before-blocks': [ 'warn' ],
    '@typescript-eslint/space-infix-ops': [ 'warn', { int32Hint: false }],
    '@typescript-eslint/type-annotation-spacing': [
      'warn', {
        after: true, before: true,
        overrides: { colon: { after: true, before: false } }
      }
    ],
    'no-unused-vars': 'off',
    'semi': [ 'warn', 'never' ],
    'space-before-blocks': 'off',
    'space-infix-ops': 'off'
  },
  settings: {
    'import/extensions': [
      '.cjs',
      '.js',
      '.mjs',
      '.ts'
    ]
  }
}
