var FHIR_DSTU2 = require('fhir-schema-dstu2');
var _ = require('lodash');
var requireDirectory = require('require-directory');

var base = _.cloneDeep(FHIR_DSTU2.formats);
module.exports = _.merge(base, requireDirectory(module));
