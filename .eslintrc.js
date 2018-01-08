module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },

  extends: "airbnb-base",

  env: {
    browser: true,
    jest: true,
    es6: true
  },

  plugins: [
    "import",
    "html",
  ],

  // check if imports actually resolve
  settings: {
    'import/resolver': 'webpack',
  },

  // add your custom rules here
  rules: {
    // don't require .js, .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never',
    }],

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
