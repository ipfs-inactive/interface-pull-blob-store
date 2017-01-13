'use strict'

const readWrite = require('./read-write')
const exists = require('./exists')
const remove = require('./remove')

module.exports = (common) => {

  before((done) => {
    common.setup((err, _store) => {
      if (err) return done(err)
      store = _store
      done()
    })
  })

  after((done) => {
    common.teardown(store, done)
  })

  readWrite(store)
  exists(store)
  remove(store)
}
