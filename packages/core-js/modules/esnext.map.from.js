'use strict';
var $ = require('../internals/export');
var from = require('../internals/collection-from');

// `Map.from` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
// dependency: es.map.constructor
$({ target: 'Map', stat: true, forced: true }, {
  from: from,
});
