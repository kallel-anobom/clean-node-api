module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  roots: ['<rootDir>/src'],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  transform: {
    '.*\\.ts$': 'ts-jest'
  }
}
