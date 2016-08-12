/* eslint-env mocha*/
'use strict'

const expect = require('chai').expect
const pull = require('pull-stream')

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

  describe('write', () => {
    it('writes the content to disk', (done) => {
      pull(
        pull.values(['hello', 'world']),
        store.write('first', read)
      )

      function read (err) {
        expect(err).to.not.exist

        pull(
          store.read('first'),
          pull.collect((err, res) => {
            expect(err).to.not.exist
            expect(res).to.be.eql(['hello', 'world'])
            done()
          })
        )
      }
    })
  })
}
