var fhir = require('fhir-schema-dstu2');
var registry = require('../../registry/index');

var schema = {
    title: 'NHS_GP GP_Patient profile',
    allOf: [
        fhir.schema.Patient
    ],
    not: {
        oneOf: [
            {required: ['photo']},
            {required: ['animal']},
            {required: ['managingOrganization']},
            {required: ['link']},
            {required: ['active']}
        ]
    },
    required: ['identifier', 'name', 'gender', 'birthDate'],
    properties: {
        identifier: {
            type: 'array',
            minItems: 1,
            items: {
                required: ['value']
            },
            format: 'NHS_GP.GP_Patient.identifier'
        },
        name: {
            type: 'array',
            minItems: 1
        },
        maritalStatus: fhir.elements.CodeableConcept({
            binding: {
                system: registry.valueSets.MaritalStatus.uri,
                codes: registry.valueSets.MaritalStatus.codes
            }
        }),
        religion: fhir.elements.CodeableConcept({
            binding: {
                system: registry.valueSets.ReligionGroup.uri,
                codes: registry.valueSets.ReligionGroup.codes
            }
        }),
        ethnicity: fhir.elements.CodeableConcept({
            binding: {
                system: registry.valueSets.Ethnicity.uri,
                codes: registry.valueSets.Ethnicity.codes
            }
        }),
        organDonor: fhir.elements.boolean,
        residentialStatus: fhir.elements.CodeableConcept(),
        treatmentCategory: fhir.elements.CodeableConcept()
    }
};

module.exports = schema;