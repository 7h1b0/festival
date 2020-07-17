module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  roots: ['<rootDir>/src/'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['**/*.{tsx,ts}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironmentOptions: {
    url: 'https://festival-converter.app/',
  },
  automock: false,
  clearMocks: true,
  errorOnDeprecated: true,
};
