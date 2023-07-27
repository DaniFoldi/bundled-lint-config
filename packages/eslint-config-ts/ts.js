module.exports = {
  extends: [
    './standard.js',
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
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [ '@typescript-eslint' ],
  rules: {
    '@typescript-eslint/func-call-spacing': [ 'error', 'never' ],
    '@typescript-eslint/member-delimiter-style': [
      'error', {
        multiline: { delimiter: 'none', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false }
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        args: 'after-used'
      }
    ],
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
    'func-call-spacing': 'off',
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
    ],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
}
