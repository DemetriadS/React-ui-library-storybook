module.exports = {
  preset: "vite-jest", // Use vite-jest preset
  testEnvironment: "jsdom", // Use jsdom for React testing
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Handle TypeScript files
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Map aliases (if you have any) like @/ to src/
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignore test files in node_modules or dist
};
