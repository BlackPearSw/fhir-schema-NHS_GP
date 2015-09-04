var FHIR_DSTU2 = require('fhir-schema-dstu2');
var registry = require('../registry');

module.exports = FHIR_DSTU2.assertions.assert([
    FHIR_DSTU2.assertions.array.hasOneMatch({system: registry.identifiers.NHSNumber.uri}, 'One identifier from system ' + registry.identifiers.NHSNumber.uri + ' must be provided')
]);