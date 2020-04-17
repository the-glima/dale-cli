module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/commands/*.ts",
    "src/config/**/*.ts",
    "src/utils/**/*.ts"
  ],
  coverageDirectory: 'test/static/coverage',
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  verbose: true
}
