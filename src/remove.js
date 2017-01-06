/* eslint-env mocha */
'use strict'

var pull = require('pull-stream')
var expect = require('chai').expect
var series = require('run-series')

module.exports = function (store) {
  describe('remove', function () {
    it('deletes an existing key', function (done) {
      series([function (cb) {
        return write('remove', 'hello', cb)
      }, function (cb) {
        return assertExists(true, cb)
      }, function (cb) {
        return store.remove('remove', cb)
      }, function (cb) {
        return assertExists(false, cb)
      }], done)

      function write (key, val, cb) {
        pull(pull.values([new Buffer(val)]), store.write(key, cb))
      }

      function assertExists (val, cb) {
        store.exists('remove', function (err, exists) {
          expect(err).to.not.exist
          expect(exists).to.be.eql(val)
          cb()
        })
      }
    })

    it('does not fail for a non existing key', function (done) {
      store.remove('fail', function (err) {
        expect(err).to.not.exist
        done()
      })
    })

    it('missing key - cb error', function (done) {
      store.remove(null, function (err) {
        expect(err).to.exist
        done()
      })
    })

    it('missing cb - no error', function () {
      expect(function () {
        return store.remove()
      }).to.not.throw()
    })
  })
}
