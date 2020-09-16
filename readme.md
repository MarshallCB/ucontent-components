# Steps to reproduce [issue](https://github.com/WebReflection/ucontent/issues/9)

1. Initialize external-component directory and link to local package `external-component`
```bash
cd external-component && npm i && npm link && cd ..
```

2. Initialize site, link to `external-component` package, start server
```bash
cd site && npm i && npm link external-component && npm run dev
```

## Summary

`external-component/index.js` and `site/internal-component.js` contain the same component code, yet only the internal component works as expected.

![Demo](https://github.com/MarshallCB/ucontent-components/blob/master/demo.png)