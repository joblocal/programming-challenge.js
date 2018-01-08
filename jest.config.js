module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/**/*.(test|spec).js',
  ],
  moduleNameMapper: {
    '^src/(.*/[A-Z].+)$': '<rootDir>/src/$1.vue',
    '^src/(.+)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.*\\.vue$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  setupFiles: [
    '<rootDir>/test/setup.js',
  ],
};
