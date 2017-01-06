'use strict'

var readWrite = require('./read-write')
var exists = require('./exists')
var remove = require('./remove')

module.exports = function (common) {
  common.setup(function (err, _store) {
    if (err) return console.log(err)
    readWrite(_store)
    exists(_store)
    remove(_store)
  })
}
