'use strict';
require('../../modules/es.set.constructor');
require('../../modules/esnext.set.intersection.v2');
var entryUnbind = require('../../internals/entry-unbind');

module.exports = entryUnbind('Set', 'intersection');
