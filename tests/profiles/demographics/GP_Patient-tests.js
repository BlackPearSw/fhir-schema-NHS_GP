var FHIR_DSTU2 = require('fhir-schema-dstu2');
var NHS_GP = require('../../../lib/index');
var profile = NHS_GP.profiles.demographics.GP_Patient;

var expect = require('chai').expect;

describe('GP Patient', function () {
    var data;
    var validator;

    before(function () {
        validator = new FHIR_DSTU2.Validator(profile, NHS_GP.formats);
    });

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
                    system: NHS_GP.registry.identifiers.NHSNumber.uri,
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
                    system: NHS_GP.registry.valueSets.MaritalStatus.uri,
                    code: NHS_GP.registry.valueSets.MaritalStatus.codes[0]
                }]
            },
            religion: {
                coding: [{
                    system: NHS_GP.registry.valueSets.ReligionGroup.uri,
                    code: NHS_GP.registry.valueSets.ReligionGroup.codes[0]
                }]
            },
            ethnicity: {
                coding: [{
                    system: NHS_GP.registry.valueSets.Ethnicity.uri,
                    code: NHS_GP.registry.valueSets.Ethnicity.codes[0]
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
        };
    });

    it('validates resource', function () {
        var result = validator.validate(data);

        if (!result.valid) {
            console.log(result);
        }

        expect(result.valid).to.be.true;
    });

    describe('identifier', function () {
        it('must be present', function () {
            delete data.identifier;

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });

        it('must include NHS Number', function () {
            data.identifier[0].system = 'urn:fhir.nhs.uk:id/NHSNumberXX';

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });

        it('must have a value', function () {
            delete data.identifier[0].value;

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });
    });

    describe('name', function () {
        it('must be present', function () {
            delete data.name;

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });

        it('must include at least one name', function () {
            data.name = [];

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });
    });

    describe('gender', function () {
        it('must be present', function () {
            delete data.gender;

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });
    });

    describe('birthDate', function () {
        it('must be present', function () {
            delete data.birthDate;

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });
    });

    describe('maritalStatus', function () {
        it('must use system ' + NHS_GP.registry.valueSets.MaritalStatus.uri, function () {
            data.maritalStatus.coding[0].system = NHS_GP.registry.valueSets.MaritalStatus.uri + 'xx';

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });

        it('must use value from system ' + NHS_GP.registry.valueSets.MaritalStatus.uri, function () {
            data.maritalStatus.coding[0].code = 'Married';

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });
    });

    describe('religion', function () {
        it('must use system ' + NHS_GP.registry.valueSets.ReligionGroup.uri, function () {
            data.religion.coding[0].system = NHS_GP.registry.valueSets.ReligionGroup.uri + 'xx';

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });

        it('must use value from system ' + NHS_GP.registry.valueSets.ReligionGroup.uri, function () {
            data.religion.coding[0].code = 'Jedi';

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });
    });

    describe('ethnicity', function () {
        it('must use system ' + NHS_GP.registry.valueSets.Ethnicity.uri, function () {
            data.ethnicity.coding[0].system = NHS_GP.registry.valueSets.Ethnicity.uri + 'xx';

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });

        it('must use value from system ' + NHS_GP.registry.valueSets.Ethnicity.uri, function () {
            data.ethnicity.coding[0].code = 'Jedi';

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });
    });

});