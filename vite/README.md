# Vite

## Create a Library

```
➜  vite git:(master) ✗ npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  vite-component-library
│
◇  Target directory "vite-component-library" is not empty. Please choose how to proceed:
│  Remove existing files and continue
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /Users/mnoble/dev/react-component-library/vite/vite-component-library...
│
◇  Installing dependencies with npm...

added 175 packages, and audited 176 packages in 5s

45 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> vite-component-library@0.0.0 dev
> vite


  VITE v7.3.1  ready in 280 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Build
`npm run dev`

# Notes

`vite-component-library` was created without Rolldown.

`vite-component-library-rolldown` was created with experimental Rolldown option.

## Setup
When running `npm run dev`, the server is automatically restarted when configuration files are changed. I don't think this was true of Ember, where we have to restart the server after making server config changes.
```
10:41:26 AM [vite] vite.config.ts changed, restarting server...
10:41:26 AM [vite] server restarted.
```

When running `npm run dev`, file changes & subsequent file changes are all logged so you can follow along. From what I can tell, Parcel does not do this and it's harder to know when a file has changed.
```
10:42:40 AM [vite] server restarted.
10:44:27 AM [vite] (client) hmr update /src/App.tsx
10:44:35 AM [vite] (client) hmr update /src/App.tsx (x2)
10:44:37 AM [vite] (client) hmr update /src/App.tsx (x3)
```

Generated `dist` file:
```
const LibraryName = "react-component-library-rolldown";
export { LibraryName };
./dist/vite-component-library-rolldown.js (END)
```
Compare to a Parcel generated file:
```
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "libraryName", () => $aafb17210421ec67$export$71f8208cb849118a);
const $aafb17210421ec67$export$71f8208cb849118a = 'parcel-react-component-library';


//# sourceMappingURL=main.js.map
```

Does not have Storybook setup by default (Rslib does).

## Dev

Has index.html file for a landing page. Rslib doesn't have this out of the box. I think we need Rsbuild or other dev server for this.

Has CSS Modules by default. Supposedly so does Rslib (needed to add env.d.ts for rslib to work with CSS Modules).

## Testing
No testing scripts or files were included by default during project setup. (Rslib generated these by default.)
