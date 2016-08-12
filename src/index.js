'use strict'

const write = require('./write')
const read = require('./read')
const exists = require('./exists')
const remove = require('./remove')

module.exports = (common) => {
  write(common)
  read(common)
  exists(common)
  remove(common)
}
