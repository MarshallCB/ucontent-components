# Steps to reproduce

1. Initialize external-component directory and link to local package `external-component`
```bash
cd external-component && npm i && npm link && cd ..
```

2. Initialize site, link to `external-component` package, start server
```bash
cd site && npm i && npm link external-component && npm run dev
```

## Internal and External components render differently