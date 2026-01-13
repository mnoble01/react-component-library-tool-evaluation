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

# Notes
Project setup is similar to vite.

No index.html file.
Google AI: 
```
No Default Index: Rslib itself is primarily a tool for building JavaScript/TypeScript libraries (outputting formats like ESM, CJS, UMD), not a static site generator. By default, it uses src/index.js or src/index.ts as the build entry point, unlike tools like Vite which use index.html as the default entry.
```

Supports CSS Modules by default (supposedly, but importing from them is not working for me atm).

Uses Storybook for dev server/visual feedback.

From the Rslib website:
```
Rslib is currently in the 0.x stage and we plan to release v1.0 after achieving the following key goals:

Stabilize the final configuration and API design
Optimize the quality of the build output
Support bundleless mode for Vue, Solid and more frameworks
```
