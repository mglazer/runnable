module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'plugin:nestjs/recommended',
    // 'next',
    'prettier',
  ],
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', '*.generated.tsx', '**/generated/*.ts', 'CssBaseline.ts'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-var': 'warn',
    'unicorn/prefer-top-level-await': 'warn',
    'unicorn/prefer-export-from': 'warn',
    'unicorn/no-useless-undefined': 'warn',
    'unicorn/prefer-module': 'warn',
    'unicorn/no-null': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-useless-promise-resolve-reject': 'off',
    'import/namespace': 'off',
    'import/named': 'off',
    'import/default': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'unicorn/prevent-abbreviations': 'off',
    'no-restricted-imports': ['error'],
  },
};
