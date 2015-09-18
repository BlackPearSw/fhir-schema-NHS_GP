var schema = {
    title: 'NHS_GP General Practitioner profile',
    allOf: [
        {$ref: 'http://cim.endeavourhealth.org/schema/fhir/dstu2/Practitioner'}
    ],
    required: ['identifier'],
    properties: {
        identifier: {
            allOf: [
                {
                    type: 'array',
                    minItems: 1,
                    items: {
                        required: ['value']
                    }
                },
                {
                    items: [
                        {
                            allOf: [
                                {$ref: 'http://cim.endeavourhealth.org/schema/fhir/dstu2/Identifier'},
                                {
                                    required: ['system'],
                                    properties: {
                                        system: {
                                            pattern: '^urn:fhir.nhs.uk/id/GeneralPractitionerPPDCode$'
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    additionalItems: {
                        $ref: 'http://cim.endeavourhealth.org/schema/fhir/dstu2/Identifier'
                    }
                }
            ]
        },
        name: {
            type: 'array',
            minItems: 1
        }
    }
};

module.exports = schema;

