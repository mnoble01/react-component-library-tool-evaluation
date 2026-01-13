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


## Dev

Has index.html file for a landing page. Rslib doesn't have this out of the box. I think we need Rsbuild or other dev server for this.

Has CSS Modules by default. Supposedly so does Rslib (needed to add env.d.ts for rslib to work with CSS Modules).

### Storybook
Does not have Storybook setup by default (Rslib does).

Setup was very easy, though, using a Storybook-provided recipe.

```
➜  vite-component-library git:(main) npx storybook@latest init                      

┌  Initializing Storybook
│
●  Adding Storybook version 10.1.11 to your project
│
◇  Framework detected: react-vite
│
◇  What configuration should we install?
│  Minimal: Just the essentials for component development.
│
◆  Storybook configuration generated
│
│  - Configuring ESLint plugin
│  - Configuring main.ts
│  - Configuring preview.ts
│  - Adding Storybook command to package.json
│  - Copying framework templates
│
◆  Dependencies added to package.json
│
│  Adding devDependencies:
│  - storybook@^10.1.11
│  - @storybook/react-vite@^10.1.11
│  - eslint-plugin-storybook@^10.1.11
│
◇  Dependencies installed
│
◇  Storybook was successfully installed in your project!
│
│  To run Storybook manually, run npm run storybook. CTRL+C to stop.
│
│  Wanna know more about Storybook? Check out https://storybook.js.org/
│  Having trouble or want to chat? Join us at https://discord.gg/storybook/
│
└ 
```

## Testing
No testing scripts or files were included by default during project setup. (Rslib generated these by default.)

```
➜  vite-component-library git:(main) ✗ npm install -D vitest @testing-library/react @testing-library/jest-dom
```

```
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  __tests__/Button.test.tsx > Button > renders button with correct type and class name
Error: Invalid Chai property: toBeVisible
 ❯ __tests__/Button.test.tsx:12:18
     10|     
     11|     const button = screen.getByText('primary count is 0');
     12|     expect(button).toBeVisible();
       |                  ^
     13|     // expect(button).toBeInTheDocument();
     14|     // expect(button).toHaveClass('custom-button');

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed (1)
      Tests  1 failed (1)
   Start at  14:36:31
   Duration  483ms (transform 11ms, setup 0ms, import 97ms, tests 17ms, environment 283ms)

 FAIL  Tests failed. Watching for file changes...
       press h to show help, press q to quit
```
