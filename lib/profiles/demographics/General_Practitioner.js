var FHIR_DSTU2 = require('fhir-schema-dstu2');
var registry = require('../../registry/index');

var _ = require('lodash');

var schema = FHIR_DSTU2.resources.Practitioner();
schema.title = 'NHS_GP-General Practitioner Profile';
schema.required = _.union(schema.required, ['identifier']);
schema.properties.identifier.minItems = 1;
schema.properties.identifier.format = 'NHS_GP.General_Practitioner.identifier';
schema.properties.name.minItems = 1;

module.exports = schema;

