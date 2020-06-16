module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/test/config/jest-preprocess.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`, `__specs__`, `specs`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/test/config/loadershim.js`],
  rootDir: '../../',
  verbose: true,
}
