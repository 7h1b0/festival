module.exports = {
  roots: ["<rootDir>/src/"],
  moduleDirectories: ["node_modules"],
  modulePaths: ["<rootDir>/src/"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  automock: false,
  clearMocks: true,
  errorOnDeprecated: true,
};
