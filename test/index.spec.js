'use strict'

const MemoryBlobStore = require('../src')
const testSuite = require('../src/tests')

testSuite({
  setup (cb) {
    cb(null, new MemoryBlobStore())
  },
  teardown (store, cb) {
    cb()
  }
})
