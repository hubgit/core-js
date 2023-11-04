'use strict';
var $ = require('../internals/export');
var of = require('../internals/collection-of');

// `WeakSet.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
// dependency: es.weak-set.constructor
$({ target: 'WeakSet', stat: true, forced: true }, {
  of: of,
});
