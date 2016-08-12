# interface-pull-blob-store

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://ipfs.io/)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)
[![Coverage Status](https://coveralls.io/repos/github/ipfs/interface-pull-blob-store/badge.svg?branch=master)](https://coveralls.io/github/ipfs/interface-pull-blob-store?branch=master)
[![Travis CI](https://travis-ci.org/ipfs/interface-pull-blob-store.svg?branch=master)](https://travis-ci.org/ipfs/interface-pull-blob-store)
[![Circle CI](https://circleci.com/gh/ipfs/interface-pull-blob-store.svg?style=svg)](https://circleci.com/gh/ipfs/interface-pull-blob-store)
[![Dependency Status](https://david-dm.org/ipfs/interface-pull-blob-store.svg?style=flat-square)](https://david-dm.org/ipfs/interface-pull-blob-store) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> A test suite and interface that can be used to implement streaming file ([blob](http://en.wikipedia.org/wiki/Binary_large_object)) storage modules for various storage backends and platforms. All streaming happens through the use of  [pull-stream](https://pull-stream.github.io/)s.

## Modules that use this

- [fs-pull-blob-store](https://github.com/ipfs/js-fs-pull-blob-store)

## API

A valid blob store should implement the following APIs. There is a reference in-memory implementation available at `src/index.js` in this repo.

### store.write(key, cb)

This method should return a sink, which when written to writes the data to the blob store.

### store.read(key)

This method should return a source that emits blob data from the underlying blob store or emits an error if the blob does not exist or if there was some other error during the read.

### store.exists(key, cb)

This checks if a blob exists in the store.

### store.remove(key, cb)

This method should remove a blob from the store.
