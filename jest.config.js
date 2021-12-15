/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  clearMocks: true,
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.[jt]s', '**/?(*.)+(spec|test).[tj]s'],
  testPathIgnorePatterns: ['/node_modules/', '/.dist/'],
  //setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'],
  collectCoverageFrom: [
    'src/**/*.{ts}',
    '!**/*.d.ts', //  Exclude all type declaration files
    '!**/node_modules/**', //  Exclude all files in node_modules
    '!**/dist/**', //  Exclude all files in the dist folder
  ],
};

module.exports = config;
