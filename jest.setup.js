require('intersection-observer')
require('raf').polyfill(global)
require('jest-styled-components')
const registerRequireContextHook = require('babel-plugin-require-context-hook/register')
registerRequireContextHook()

/**
 * this is in src/utils/polyfill
 */
const globalAny = global
globalAny.fetch = require('node-fetch')
