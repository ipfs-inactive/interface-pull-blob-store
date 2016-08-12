# interface-pull-blob-store

> A test suite and interface that can be used to implement streaming file ([blob](http://en.wikipedia.org/wiki/Binary_large_object)) storage modules for various storage backends and platforms. All streaming happens through the use of  [pull-stream](https://pull-stream.github.io/)s.

## Modules that use this

-

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
