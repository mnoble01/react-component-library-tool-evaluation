# Parcel 

https://parceljs.org/getting-started/library/

## Local Dev
`npm run watch`

## Build
`npx parcel build`


### Notes: 

While Parcel has a [React recipe](https://parceljs.org/recipes/react/) for apps, it does not have the same for a React library.

When watching files with `npm run watch`, there is no indication that anything was rebuilt as the "Built in XXms" is replaced rather than appended:  
```
➜  parcel git:(main) npm run watch

> parcel-react-component-library@0.0.0 watch
> parcel watch

✨ Built in 15ms
```

Generated `dist` file is hard to read:
```
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "libraryName", () => $aafb17210421ec67$export$71f8208cb849118a);
const $aafb17210421ec67$export$71f8208cb849118a = 'parcel-react-component-library';


//# sourceMappingURL=main.js.map
```
