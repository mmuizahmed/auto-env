# auto-env

Load a `.env` file into `process.env` the moment you import the package. No `.config()` call.

Thin wrapper around [dotenv](https://github.com/motdotla/dotenv). Same behavior as `import 'dotenv/config'`, with a shorter name.

## Install

```bash
npm install auto-env
```

## Usage

```js
import 'auto-env'
// or
require('auto-env')

console.log(process.env.MY_VAR)
```

### Preload

```bash
node -r auto-env index.js
```

### Advanced

`auto-env` re-exports dotenv, so you can still call `config`, `parse`, and `populate` if you need them:

```js
const { config, parse } = require('auto-env')
```

## License

MIT
