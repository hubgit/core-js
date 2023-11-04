'use strict';
var $ = require('../internals/export');
var from = require('../internals/collection-from');

// `WeakSet.from` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
// dependency: es.weak-set.constructor
$({ target: 'WeakSet', stat: true, forced: true }, {
  from: from,
});
