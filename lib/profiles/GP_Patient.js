var schema = {
    title: 'NHS_GP GP_Patient profile',
    allOf: [
        {$ref: 'Patient'}
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
                                            pattern: '^urn:fhir.nhs.uk:id/NHSNumber$'
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
        },
        maritalStatus: {
            allOf: [
                {$ref: 'CodeableConcept'},
                {
                    properties: {
                        coding: {
                            items: [
                                {
                                    allOf: [
                                        {
                                            required: ['system', 'code'],
                                            properties: {
                                                system: {
                                                    pattern: '^urn:fhir.nhs.uk:vs/MaritalStatus$'
                                                },
                                                code: {
                                                    enum: ['S', 'M', 'D', 'W', 'P', 'N']
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            ]
        },
        religion: {
            allOf: [
                {$ref: 'CodeableConcept'},
                {
                    properties: {
                        coding: {
                            items: [
                                {
                                    allOf: [
                                        {
                                            required: ['system', 'code'],
                                            properties: {
                                                system: {
                                                    pattern: '^urn:fhir.nhs.uk:vs/ReligionGroup$'
                                                },
                                                code: {
                                                    enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            ]
        },
        ethnicity: {
            allOf: [
                {$ref: 'CodeableConcept'},
                {
                    properties: {
                        coding: {
                            items: [
                                {
                                    allOf: [
                                        {
                                            required: ['system', 'code'],
                                            properties: {
                                                system: {
                                                    pattern: '^urn:fhir.nhs.uk:vs/Ethnicity$'
                                                },
                                                code: {
                                                    enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'Z']
                                                }
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                }
            ]
        },
        organDonor: {$ref: 'boolean'},
        residentialStatus: {$ref: 'CodeableConcept'},
        treatmentCategory: {$ref: 'CodeableConcept'}
    }
};

module.exports = schema;