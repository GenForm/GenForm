module.exports = {
  env: {
    browser: true,
    node: true,
    es2024: true
  },
  ignorePatterns: [
    '**/node_modules/',
    '**/*min.js',
    '**/spec/',
    '**/dist/',
    'GenForm-Exemples/React',
    'GenForm-Tests/Cypress'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-undef': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-vars': 'warn',
    'arrow-body-style': ['error', 'always'],
    'camelcase': ['error', { properties: 'always' }],
    'capitalized-comments': ['warn', 'always'],
    'max-lines-per-function': [
      'error',
      {
        max: 30,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'no-empty': 'error',
    'no-extra-boolean-cast': 'error',
    'no-global-assign': 'error',
    'no-implicit-globals': 'error',
    'no-shadow-restricted-names': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-catch': 'error',
    'no-useless-escape': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'yoda': ['error', 'never'],
    'line-comment-position': ['error', { position: 'above' }]
  }
}
