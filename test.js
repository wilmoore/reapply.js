'use strict'

/*!
 * imports.
 */

var path = require('path')
var test = require('tape-catch')

/*!
 * imports (local).
 */

var reapply = require('./')

/*!
 * tests.
 */

test('reapply/2', function (t) {
  t.equal(reapply([true], 'assert'), undefined, 'supports full application')
  t.end()
})

test('reapply/1', function (t) {
  t.assert(typeof reapply([]) === 'function', 'returns a function')
  t.assert(reapply([]).length === 1, 'returns a function w/ expected arity')
  t.end()
})

test('map', function (t) {
  var mapper = reapply(['%s world', 'hello'])
  var modules = ['format', 'format']

  t.deepEqual(modules.map(mapper), [ 'hello world', 'hello world' ])
  t.end()
})

test('prefix', function (t) {
  var fixtures = ['hello']

  var message = fixtures
  .map(respref([__dirname, 'test', 'fixture']))
  .map(reapply(['Wil']))
  .join('')

  t.equal(message, 'Hello Wil')
  t.end()
})

function respref (prefix) {
  return function (file) {
    return path.resolve.apply(null, prefix.concat(file))
  }
}
