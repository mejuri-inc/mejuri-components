import 'regenerator-runtime/runtime.js'

global.console = {
  log: function () {}, // console.log are ignored in tests
  warn: function () {}, // console.warn are ignored in tests

  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  error: console.error,
  info: console.info,
  debug: console.debug
}
