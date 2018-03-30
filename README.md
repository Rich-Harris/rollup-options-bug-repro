# [!] You must specify an --output (-o) option when creating a file with a sourcemap

```bash
yarn
yarn build
```

Change `input: 'src/main.js'` to `input: ['src/main.js']` to fix it.