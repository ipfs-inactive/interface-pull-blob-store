'use strict'

const MemoryBlobStore = require('../src/reference')
const testSuite = require('../src')

testSuite({
  setup (cb) {
    cb(null, new MemoryBlobStore())
  },
  teardown (store, cb) {
    cb()
  }
})
