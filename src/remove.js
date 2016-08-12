/* eslint-env mocha*/
'use strict'

const pull = require('pull-stream')
const expect = require('chai').expect
const series = require('run-series')

module.exports = (common) => {
  let store

  beforeEach((done) => {
    common.setup((err, _store) => {
      if (err) return done(err)
      store = _store
      done()
    })
  })

  afterEach((done) => {
    common.teardown(store, done)
  })

  describe('remove', () => {
    it('deletes an existing key', (done) => {
      series([
        (cb) => write('cool', 'hello', cb),
        (cb) => assertExists(true, cb),
        (cb) => store.remove('cool', cb),
        (cb) => assertExists(false, cb)
      ], done)

      function write (key, val, cb) {
        pull(
          pull.values([new Buffer(val)]),
          store.write(key, cb)
        )
      }

      function assertExists (val, cb) {
        store.exists('cool', (err, exists) => {
          expect(err).to.not.exist
          expect(exists).to.be.eql(val)
          cb()
        })
      }
    })

    it('does not fail for a non existing key', (done) => {
      store.remove('fail', (err) => {
        expect(err).to.not.exist
        done()
      })
    })
  })
}
