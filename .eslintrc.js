module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  ignorePatterns: ['node_modules/', 'dist/', 'build/'],
  extends: [
    'airbnb', // or airbnb-base
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:prettier/recommended',
  ],
  rules: {
    'linebreak-style': ['error', require('os').EOL === '\r\n' ? 'windows' : 'unix'],
    'prettier/prettier': [ error, {  endOfLine: 'auto' } ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          //   '.jsx',
          '.ts',
          //   '.tsx',
        ],
      },
    },
  },
  root: true,
};
