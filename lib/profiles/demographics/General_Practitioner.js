var fhir = require('fhir-schema-dstu2');
var registry = require('../../registry/index');

var schema = {
    title: 'NHS_GP General Practitioner profile',
    allOf: [
        fhir.schema.Practitioner
    ],
    required: ['identifier'],
    properties: {
        identifier: {
            type: 'array',
            minItems: 1,
            format: 'NHS_GP.General_Practitioner.identifier'
        },
        name: {
            type: 'array',
            minItems: 1
        }
    }
};

module.exports = schema;

