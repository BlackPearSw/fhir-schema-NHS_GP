var schema = {
    title: 'NHS_GP GP_Practice profile',
    allOf: [
        {$ref: 'Organization'}
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
                                {$ref: 'Identifier'},
                                {
                                    required: ['system'],
                                    properties: {
                                        system: {
                                            pattern: '^urn:fhir.nhs.uk/id/ODSCode$'
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    additionalItems: {
                        $ref: 'Identifier'
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

