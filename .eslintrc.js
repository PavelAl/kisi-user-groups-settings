module.exports = {
  root: true,
  plugins: ['import', 'prettier', 'react'],
  extends: ['airbnb-typescript/base', 'plugin:storybook/recommended'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['off'],
    'react/jsx-newline': [
      'error',
      {
        prevent: false,
      },
    ],
    'import/extensions': ['error', 'never'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'sibling',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
