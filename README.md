# load-my-env

Load a `.env` file into `process.env` the moment you import the package. No `.config()` call.

Thin wrapper around [dotenv](https://github.com/motdotla/dotenv). Same behavior as `import 'dotenv/config'`, with a clearer name.

## Install

```bash
npm install load-my-env
```

## Usage

```js
import 'load-my-env'
// or
require('load-my-env')

console.log(process.env.MY_VAR)
```

### Preload

```bash
node -r load-my-env index.js
```

### Advanced

`load-my-env` re-exports dotenv, so you can still call `config`, `parse`, and `populate` if you need them:

```js
const { config, parse } = require('load-my-env')
```

## License

MIT
