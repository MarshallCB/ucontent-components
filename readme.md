# Steps to reproduce [issue](https://github.com/WebReflection/ucontent/issues/9)

1. Initialize /external-component and link to local package `external-component`
```bash
cd external-component && npm link && cd ..
```

2. Initialize /site, link to `external-component` package, start server
```bash
cd site && npm i && npm link external-component && npm run dev
```

### Results (remote ucontent module)

![Demo](https://github.com/MarshallCB/ucontent-components/blob/master/demo.png)

/external-component/index.js and /site/internal-component.js contain the same component code, yet only the internal component works as expected.

---

3. Return to the root directory. Clone ucontent source and link to npm
```bash
cd .. && git clone git@github.com:WebReflection/ucontent.git && cd ucontent && npm link && cd ..
```

4. Link /external-component and /site to local ucontent
```bash
cd external-component && npm link ucontent && cd ../site && npm link ucontent
```

5. Start server
```bash
npm run dev
```

### Results (local ucontent module)

![Demo](https://github.com/MarshallCB/ucontent-components/blob/master/demo2.png)
Both external component and internal component work now