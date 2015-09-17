var fhir = require('fhir-schema-dstu2');
var registry = require('../../registry/index');

var schema = {
    title: 'NHS_GP GP_Practice profile',
    allOf: [
        fhir.schema.Organization
    ],
    required: ['identifier'],
    properties: {
        identifier: {
            type: 'array',
            minItems: 1,
            format: 'NHS_GP.GP_Practice.identifier'
        },
        name: {
            type: 'array',
            minItems: 1
        }
    }
};

module.exports = schema;

