## This repository has been archived!

*This IPFS-related repository has been archived, and all issues are therefore frozen*. If you want to ask a question or open/continue a discussion related to this repo, please visit the [official IPFS forums](https://discuss.ipfs.io).

We archive repos for one or more of the following reasons:

- Code or content is unmaintained, and therefore might be broken
- Content is outdated, and therefore may mislead readers
- Code or content evolved into something else and/or has lived on in a different place
- The repository or project is not active in general

Please note that in order to keep the primary IPFS GitHub org tidy, most archived repos are moved into the [ipfs-inactive](https://github.com/ipfs-inactive) org.

If you feel this repo should **not** be archived (or portions of it should be moved to a non-archived repo), please [reach out](https://ipfs.io/help) and let us know. Archiving can always be reversed if needed.

---
   
# interface-pull-blob-store

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://ipfs.io/)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)
[![Coverage Status](https://coveralls.io/repos/github/ipfs/interface-pull-blob-store/badge.svg?branch=master)](https://coveralls.io/github/ipfs/interface-pull-blob-store?branch=master)
[![Travis CI](https://travis-ci.org/ipfs/interface-pull-blob-store.svg?branch=master)](https://travis-ci.org/ipfs/interface-pull-blob-store)
[![Circle CI](https://circleci.com/gh/ipfs/interface-pull-blob-store.svg?style=svg)](https://circleci.com/gh/ipfs/interface-pull-blob-store)
[![Dependency Status](https://david-dm.org/ipfs/interface-pull-blob-store.svg?style=flat-square)](https://david-dm.org/ipfs/interface-pull-blob-store) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> Test suite for pull-blob-stores

A test suite and interface that can be used to implement streaming file ([blob](https://en.wikipedia.org/wiki/Binary_large_object)) storage modules for various storage backends and platforms. All streaming happens through the use of  [pull-stream](https://pull-stream.github.io/)s.

## Lead Maintainer

[Alex Potsides](https://github.com/achingbrain)

### Modules that use this

- [fs-pull-blob-store](https://github.com/ipfs/js-fs-pull-blob-store)
- [idb-pull-blob-store](https://github.com/ipfs/js-idb-pull-blob-store)
- [level-pull-blob-store](https://github.com/ipfs/js-level-pull-blob-store)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
  - [store.write(key, cb)](#storewritekey-cb)
  - [store.read(key)](#storereadkey)
  - [store.exists(key, cb)](#storeexistskey-cb)
  - [store.remove(key, cb)](#storeremovekey-cb)
- [Contribute](#contribute)
- [License](#license)

## Install

TODO

## Usage

TODO

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

## Contribute

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/contributing.md)

If you would like to contribute code to this repository, please dive in! Check out [the issues](//github.com/ipfs/interface-pull-blob-store/issues). Clicking the banner above will lead you to the general [IPFS community contribute guidelines](https://github.com/ipfs/community/blob/master/contributing.md), if you would like to contribute in other ways.

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[MIT](LICENSE)
