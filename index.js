'use strict'

const dotenv = require('dotenv')

const quiet = process.env.DOTENV_QUIET != null
  ? process.env.DOTENV_QUIET
  : process.env.DOTENV_CONFIG_QUIET

dotenv.config({ quiet: quiet != null ? quiet : true })

module.exports = dotenv
