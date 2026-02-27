# Node.js + TypeScript + ESM + Jest Boilerplate

This repository demonstrates a working configuration for a Node.js project using TypeScript, ECMAScript Modules (ESM), and Jest for testing.

It specifically addresses common challenges when testing ESM-native dependencies (like `uuid`) with `ts-jest`.

## Features

- **Native ESM**: The project is configured as `"type": "module"`.
- **TypeScript**: configured with `ESNext` target and module resolution.
- **Jest**: configured to handle ESM imports and transform ESM-only `node_modules`.
- **TSX**: Used for running the development script (`npm run dev`).

## Prerequisites

- Node.js (v18+ recommended)
- npm

## Installation

```bash
npm install
```

## Scripts

- **Run Tests**:
  ```bash
  npm test
  ```
- **Run Development**:
  ```bash
  npm run dev
  ```

## Key Configuration Details

### 1. `package.json`

The project is defined as an ESM module:

```json
{
  "type": "module"
}
```

### 2. `tsconfig.json`

Compiler options are set to support modern ESM:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "esModuleInterop": true
    // ...
  }
}
```

### 3. `jest.config.ts`

This is the most critical part of the setup. Jest typically runs in a CommonJS environment, so we need to configure it to handle ESM code and dependencies.

- **`preset: "ts-jest"`**: Uses ts-jest for transforming TypeScript.
- **`moduleNameMapper`**: Maps `.js` extensions in imports (required for ESM) to the correct files during testing.
  ```ts
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  }
  ```
- **`transformIgnorePatterns`**: By default, Jest ignores `node_modules`. We must explicitly whitelist ESM-only packages (like `uuid`) so they are transformed by `ts-jest`.
  ```ts
  transformIgnorePatterns: ["node_modules/(?!(?:@faker-js/faker|uuid)/)"]
  ```

## Troubleshooting

If you encounter `SyntaxError: Unexpected token 'export'` from a dependency in `node_modules`:
1. Open `jest.config.ts`.
2. Add the package name to the `transformIgnorePatterns` regex.
   Example: To add `node-fetch`, change `uuid` to `uuid|node-fetch`.
