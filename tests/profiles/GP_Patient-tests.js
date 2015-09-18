var fhir = require('fhir-schema-dstu2');
var NHS_GP = require('../../lib/index');

var expect = require('chai').expect;

describe('GP Patient', function () {
    var data;
    var schema = NHS_GP.profiles.GP_Patient;

    beforeEach(function () {
        data = {
            id: '123456789',
            meta: {
                versionId: '1',
                lastUpdated: '2015-05-26T11:15:31Z'
            },
            resourceType: 'Patient',
            identifier: [
                {
                    use: 'usual',
                    system: 'urn:fhir.nhs.uk:id/NHSNumber',
                    value: '4123456789'
                }
            ],
            name: [
                {
                    text: 'John J. Doe',
                    family: ['Doe'],
                    given: ['John', 'Joe']
                }
            ],
            gender: 'male',
            birthDate: '1980-04-12',
            maritalStatus: {
                coding: [{
                    system: 'urn:fhir.nhs.uk:vs/MaritalStatus',
                    code: 'M'
                }]
            },
            religion: {
                coding: [{
                    system: 'urn:fhir.nhs.uk:vs/ReligionGroup',
                    code: 'C'
                }]
            },
            ethnicity: {
                coding: [{
                    system: 'urn:fhir.nhs.uk:vs/Ethnicity',
                    code: 'A'
                }]
            },
            organDonor: true,
            residentialStatus: {
                text: 'Lives at home with parents'
            },
            treatmentCategory: {
                coding: [{
                    code: 'GP-PMS'
                }]
            }
        }
    });

    it('validates resource', function () {
        var result = fhir.validator.validate(data, schema);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    describe('identifier', function () {
        it('must be present', function () {
            delete data.identifier;

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must include NHS Number', function () {
            data.identifier[0].system = 'urn:fhir.nhs.uk:id/NHSNumberXX';

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must have a value', function () {
            delete data.identifier[0].value;

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must allow additional identifiers', function () {
            data.identifier.push({
                system: 'http://health.org/id',
                value: '123'
            });

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.true;
        });
    });

    describe('name', function () {
        it('must be present', function () {
            delete data.name;

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must include at least one name', function () {
            data.name = [];

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });

    describe('gender', function () {
        it('must be present', function () {
            delete data.gender;

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });

    describe('birthDate', function () {
        it('must be present', function () {
            delete data.birthDate;

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });

    describe('maritalStatus', function () {
        it('must use system urn:fhir.nhs.uk:vs/MaritalStatus', function () {
            data.maritalStatus.coding[0].system = 'urn:fhir.nhs.uk:vs/MaritalStatusxx';

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must use value from system urn:fhir.nhs.uk:vs/MaritalStatus', function () {
            data.maritalStatus.coding[0].code = 'Married';

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must allow additional codes', function () {
            data.maritalStatus.coding.push({
                system: 'http://health.org/maritalstatus',
                code: 'Married'
            });

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.true;
        });
    });

    describe('religion', function () {
        it('must use system urn:fhir.nhs.uk:vs/ReligionGroup', function () {
            data.religion.coding[0].system = 'urn:fhir.nhs.uk:vs/ReligionGroupxx';

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must use value from system urn:fhir.nhs.uk:vs/ReligionGroup', function () {
            data.religion.coding[0].code = 'Jedi';

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });

    describe('ethnicity', function () {
        it('must use system urn:fhir.nhs.uk:vs/Ethnicity', function () {
            data.ethnicity.coding[0].system = 'urn:fhir.nhs.uk:vs/Ethnicityxx';

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });

        it('must use value from system urn:fhir.nhs.uk:vs/Ethnicity', function () {
            data.ethnicity.coding[0].code = 'Jedi';

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });

    it('must not have photo', function () {
        data.photo = [];

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('must not have animal', function () {
        data.animal = {
            species: {}
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('must not have managingOrganization', function () {
        data.managingOrganization = {
            display: 'Health org'
        };

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('must not have link', function () {
        data.link = [];

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('must not have active', function () {
        data.active = true;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

});