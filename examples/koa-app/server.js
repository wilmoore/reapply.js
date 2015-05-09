'use strict'

/*!
 * imports.
 */

var app = require('koa')()
var path = require('path')
var reapply = require('../../')

/*!
 * routes.
 */

var routes = ['./hello']

/*!
 * map routes.
 */

routes
.map(function (id) { return path.resolve(__dirname, id) })
.forEach(reapply([app]))

/*!
 * listener.
 */

app.listen(1337, '127.0.0.1', function () {
  console.log('Server running at http://127.0.0.1:1337')
})
