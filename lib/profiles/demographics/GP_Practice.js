var FHIR_DSTU2 = require('fhir-schema-dstu2');
var registry = require('../../registry/index');

var _ = require('lodash');

var schema = FHIR_DSTU2.resources.Organization();
schema.title = 'NHS_GP-GP Practice Profile';
schema.required = _.union(schema.required, ['identifier']);
schema.properties.identifier.minItems = 1;
schema.properties.identifier.format = 'NHS_GP.GP_Practice.identifier';
schema.properties.name.minItems = 1;

module.exports = schema;

