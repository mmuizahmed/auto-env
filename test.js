'use strict'

const fs = require('fs')
const path = require('path')
const assert = require('assert')
const { spawnSync } = require('child_process')
const os = require('os')

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'auto-env-'))
fs.writeFileSync(path.join(dir, '.env'), 'AUTO_ENV_TEST=loaded\n')

const script = `
  process.chdir(${JSON.stringify(dir)})
  require(${JSON.stringify(require.resolve('./index.js'))})
  if (process.env.AUTO_ENV_TEST !== 'loaded') process.exit(1)
`
const result = spawnSync(process.execPath, ['-e', script], { encoding: 'utf8' })
assert.strictEqual(result.status, 0, result.stderr || result.stdout)
console.log('ok')
