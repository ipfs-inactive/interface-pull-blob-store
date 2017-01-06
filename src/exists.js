/* eslint-env mocha */
'use strict'

var pull = require('pull-stream')
var expect = require('chai').expect

module.exports = function (store) {
  describe('exists', function () {
    it('returns true for existing key', function (done) {
      pull(pull.values([new Buffer('hello')]), store.write('cool', function (err) {
        expect(err).to.not.exist

        store.exists('cool', function (err, exists) {
          expect(err).to.not.exist
          expect(exists).to.be.eql(true)
          done()
        })
      }))
    })

    it('returns false for a non existing key', function (done) {
      store.exists('fail', function (err, exists) {
        expect(err).to.not.exist
        expect(exists).to.be.eql(false)
        done()
      })
    })

    it('missing key - cb error', function (done) {
      store.exists(null, function (err) {
        expect(err).to.exist
        done()
      })
    })

    it('missing cb - no error', function () {
      expect(function () {
        return store.exists()
      }).to.not.throw()
    })
  })
}
