module.exports = {
  'root': true,

  'extends': 'eslint:recommended',

  'env': {
    'es6': true,
    'node': true,
    'browser': true,
    'mocha': true
  },
  
  'globals': {
    expect: true
  },

  'ecmaFeatures': {
    'modules': true
  },

  'rules': {
    'array-bracket-spacing': [2, 'never'],
    'arrow-parens': 2,
    'arrow-spacing': [2, {'before': true, 'after': true}],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs'],
    'callback-return': [2, ['callback', 'cb', 'fn', 'next']],
    'comma-spacing': [2, {'before': false, 'after': true}],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'eol-last': 2,
    'eqeqeq': 2,
    'generator-star-spacing': [2, {'before': true, 'after': false}],
    'indent': [2, 2, {'SwitchCase': 1}],
    'linebreak-style': [2, 'unix'],
    'no-class-assign': 2,
    'no-console': 0,
    'no-const-assign': 2,
    'no-extra-semi': 2,
    'no-inner-declarations': [2, 'both'],
    'no-multi-spaces': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-useless-call': 2,
    'no-var': 2,
    'object-curly-spacing': [2, 'never'],
    'one-var': [2, 'never'],
    'operator-linebreak': [2, 'after'],
    'prefer-spread': 2,
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'space-after-keywords': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-before-keywords': [2, 'always'],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-return-throw-case': 2,
    'space-unary-ops': [2, {'words': true, 'nonwords': false}],
    'wrap-iife': [2, 'inside']
  }
};
