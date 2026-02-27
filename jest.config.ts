export default {
  // Use the ESM preset for ts-jest so it correctly handles ESM modules.
  preset: "ts-jest",
  testEnvironment: "node",
  // extensionsToTreatAsEsm: [".ts"],
  // Allow transforming specific node_modules which ship ESM (like `uuid`
  // and the scoped package `@faker-js/faker`). Use a non-capturing group in
  // the negative lookahead to whitelist multiple packages (including scoped
  // names).
  transformIgnorePatterns: ["node_modules/(?!(?:@faker-js/faker|uuid)/)"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  transform: {
    // Transform .ts, .tsx, .js and .jsx files so packages like `uuid` can be
    // transformed when whitelisted above.
    "^.+\\.[tj]sx?$": [
      "ts-jest",
      {
        // useESM: true,
        // tsconfig: {
        //   module: "ESNext",
        // },
      },
    ],
  },
  testMatch: ["**/*.spec.ts", "**/*.test.ts"],
};
