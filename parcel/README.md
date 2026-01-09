# Parcel 

https://parceljs.org/getting-started/library/

## Build
`npx parcel build`

### Notes: 

While Parcel has a [React recipe](https://parceljs.org/recipes/react/) for apps, it does not have the same for a React library.

When watching files, there is no indication that anything was rebuilt as the "Built in XXms" is replaced rather than appended:  
```
➜  parcel git:(main) npm run watch

> parcel-react-component-library@0.0.0 watch
> parcel watch

✨ Built in 15ms
```
