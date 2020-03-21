module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/src/'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>/src/'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  automock: false,
  clearMocks: true,
  errorOnDeprecated: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
