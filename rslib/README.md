# Rslib

## Create a Library
```
➜  rsbuild git:(main) npm create rslib@latest
Need to install the following packages:
create-rslib@0.19.1
Ok to proceed? (y) y


> npx
> create-rslib


◆  Create Rslib Project
│
◇  Project name or path
│  rslib-component-library
│
◇  Select template
│  React
│
◇  Select language
│  TypeScript
│
◇  Select development tools (Use <space> to select, <enter> to continue)
│  Storybook, Vitest
│
◇  Select additional tools (Use <space> to select, <enter> to continue)
│  ESLint - linting, Prettier - formatting
│
◇  Next steps ────────────────────╮
│                                 │
│  1. cd rslib-component-library  │
│  2. git init (optional)         │
│  3. npm install                 │
│  4. npm run dev                 │
│                                 │
├─────────────────────────────────╯
│
└  All set, happy coding!
```

## Development
File changes are logged:
```
➜  ts-lib-starter git:(main) npm run dev

> ts-lib-template@0.0.0 dev
> rslib build --watch

  Rslib v0.11.2

start   build started...
ready   built in 0.06 s (esm)
ready   built in 0.05 s (cjs)
info    [tsc] Starting compilation in watch mode... (esm)
info    [tsc] Starting compilation in watch mode... (cjs)
info    [tsc] Found 0 errors. Watching for file changes. (esm)
info    [tsc] Found 0 errors. Watching for file changes. (cjs)

File (esm)       Size      
dist/index.mjs   0.09 kB


File (cjs)      Size     Gzip   
dist/index.js   1.2 kB   0.47 kB

start   building src/index.ts
ready   built in 0.006 s (esm)
ready   built in 0.008 s (cjs)
start   building src/index.ts
ready   built in 0.01 s (esm)
ready   built in 0.01 s (cjs)
```

Editing config files restarts the server as expected.
```
info    restart because rslib.config.ts is changed.

start   build started...
ready   built in 0.02 s (esm)
ready   built in 0.02 s (cjs)
info    [tsc] Starting compilation in watch mode... (esm)
info    [tsc] Starting compilation in watch mode... (cjs)
info    [tsc] Found 0 errors. Watching for file changes. (esm)
info    [tsc] Found 0 errors. Watching for file changes. (cjs)

File (esm)       Size      
dist/index.mjs   0.09 kB


File (cjs)      Size     Gzip   
dist/index.js   1.2 kB   0.47 kB
```

## Testing
Testing scripts and starter file were included automatically upon generating the project. (Not so for Vite.)

Vitest runs tests in the terminal
```
➜  rslib-component-library git:(main) ✗ npm run test        

> rslib-component-library@1.0.0 test
> vitest run


 RUN  v4.0.16 /Users/mnoble/dev/react-component-library/rslib/rslib-component-library

 ✓ tests/index.test.tsx (1 test) 17ms
   ✓ The button should increment its text 17ms

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  12:55:14
   Duration  600ms (transform 56ms, setup 72ms, import 89ms, tests 17ms, environment 334ms)
```

Watching tests for changes didn't work
```
➜  rslib-component-library git:(main) ✗ npm run test watch

> rslib-component-library@1.0.0 test
> vitest run watch


 RUN  v4.0.16 /Users/mnoble/dev/react-component-library/rslib/rslib-component-library

No test files found, exiting with code 1

filter: watch
include: **/*.{test,spec}.?(c|m)[jt]s?(x)
exclude:  **/node_modules/**, **/.git/**
```

# Notes
Project setup is similar to vite.

No index.html file.
Google AI: 
```
No Default Index: Rslib itself is primarily a tool for building JavaScript/TypeScript libraries (outputting formats like ESM, CJS, UMD), not a static site generator. By default, it uses src/index.js or src/index.ts as the build entry point, unlike tools like Vite which use index.html as the default entry.
```

Supports CSS Modules by default (supposedly, but importing from them is not working for me atm). Update: needed to add an allowlist to allow importing from Habanero.

Uses Storybook for dev server/visual feedback. No other dev server is available unless we use Rsbuild.

From the Rslib website:
```
Rslib is currently in the 0.x stage and we plan to release v1.0 after achieving the following key goals:

Stabilize the final configuration and API design
Optimize the quality of the build output
Support bundleless mode for Vue, Solid and more frameworks
```
