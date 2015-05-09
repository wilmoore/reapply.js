'use strict'

/*!
 * imports.
 */

var apply = require('apply-or')

/*!
 * exports.
 */

module.exports = reapply

/**
 * Curried wrapper.
 *
 * @param {String} parameters
 * parameters to pass to applied function.
 *
 * @return {Function|*}
 * result of partial or full function application.
 */

function reapply (parameters) {
  return (arguments.length > 1)
  ? reapplyer(parameters, arguments[1])
  : reapplyer.bind(null, parameters)
}

/**
 * Require a module and apply the export if it is a function.
 *
 * @param {String} parameters
 * parameters to pass to applied function.
 *
 * @param {String} moduleId
 * module id to pass to `require`.
 *
 * @return {*}
 * result of function application.
 */

function reapplyer (parameters, moduleId) {
  return apply(require(moduleId), parameters)
}
