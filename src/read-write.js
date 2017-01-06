/* eslint-env mocha */
'use strict'

var expect = require('chai').expect
var pull = require('pull-stream')

module.exports = function (store) {
  describe('read-write', function () {
    it('writes the content to disk', function (done) {
      pull(pull.values([new Buffer('hello'), new Buffer('world')]), store.write('first', read))

      function read (err) {
        expect(err).to.not.exist
        pull(store.read('first'), pull.collect(function (err, res) {
          expect(err).to.not.exist
          expect(Buffer.concat(res)).to.have.length(10)
          done()
        }))
      }
    })

    it('errors when reading missing key', function (done) {
      pull(store.read('missing'), pull.onEnd(function (err) {
        expect(err).to.exist
        done()
      }))
    })

    describe('parameters', function () {
      it('write - missing key - cb errors', function (done) {
        store.write(null, function (err) {
          expect(err).to.exist
          done()
        })
      })

      it('read - missing key - pull error', function (done) {
        pull(store.read(), pull.onEnd(function (err) {
          expect(err).to.exist
          done()
        }))
      })

      it('cb is optional', function (done) {
        pull(pull.values([new Buffer('woot')]), store.write('hi'))

        // give it some time to finish the write
        setTimeout(validateWrite, 200)
        function validateWrite () {
          pull(store.read('hi'), pull.collect(function (err, data) {
            expect(err).to.not.exist
            expect(data).to.be.eql([new Buffer('woot')])
            done()
          }))
        }
      })
    })
  })
}
