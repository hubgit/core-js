'use strict';
var $ = require('../internals/export');
var of = require('../internals/collection-of');

// `WeakMap.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
// dependency: es.weak-map.constructor
$({ target: 'WeakMap', stat: true, forced: true }, {
  of: of,
});
