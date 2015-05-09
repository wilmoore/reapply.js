'use strict'

/*!
 * imports.
 */

var prep = require('string-prepend')
var test = require('tape-catch')

/*!
 * imports (local).
 */

var reapply = require('./')

/*!
 * test fixutres.
 */

var fixtures = ['hello']
var getFixture = prep('./test/fixture/')

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
  t.plan(1)
  var mapper = reapply(['There'])
  var modules = [getFixture('hello')]
  t.deepEqual(modules.map(mapper), [ 'Hello There' ])
})

test('prefix', function (t) {
  var message = fixtures
  .map(getFixture)
  .map(reapply(['There']))
  .join('')

  t.equal(message, 'Hello There')
  t.end()
})
