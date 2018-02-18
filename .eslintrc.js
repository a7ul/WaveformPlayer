module.exports = {
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
    node: true
  },
  plugins:['json'],
  extends: 'airbnb',
  rules: {
    'comma-dangle': ['error', 'never'],
    'object-curly-newline':['off'],
    'import/no-dynamic-require': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': ['off'],
    'import/no-unresolved': ['error', { caseSensitive: false }],
    'global-require': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prefer-stateless-function': ['off'],
    'react/forbid-prop-types':['off'],
    'arrow-parens': ['error', 'always'],
    'max-len': ["error", { "code": 160 }]
  }
};
