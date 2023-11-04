'use strict';
var $ = require('../internals/export');
var of = require('../internals/collection-of');

// `Set.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
// dependency: es.set.constructor
$({ target: 'Set', stat: true, forced: true }, {
  of: of,
});
