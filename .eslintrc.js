module.exports = {
  root: true,
  plugins: ['import', 'prettier'],
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.eslint.json'
    // sourceType: 'module',
    // ecmaVersion: 2020,
    // ecmaFeatures: {
    //   jsx: true
    // }
  },
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['off'],
    'import/extensions': ['error', 'ignorePackages', { '': 'never' }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'sibling',
            position: 'before'
          }
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
  // root: true,
  // parser: "@typescript-eslint/parser",
  // plugins: ["@typescript-eslint"],
  // extends: [
  //   "eslint:recommended",
  //   "plugin:@typescript-eslint/recommended",
  //   "plugin:react/recommended",
  //   "react"
  // ],
  // parserOptions: {
  //   sourceType: "module",
  //   ecmaVersion: 2020,
  //   ecmaFeatures: {
  //     jsx: true
  //   }
  // },
};
