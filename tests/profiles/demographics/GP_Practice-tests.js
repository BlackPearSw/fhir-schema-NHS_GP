var FHIR_DSTU2 = require('fhir-schema-dstu2');
var NHS_GP = require('../../../lib/index');
var profile = NHS_GP.profiles.demographics.GP_Practice;

var expect = require('chai').expect;

describe('GP Practice', function () {
    var data;
    var validator;

    before(function () {
        validator = new FHIR_DSTU2.Validator(profile, NHS_GP.formats);
    });

    beforeEach(function () {
        data = {
            resourceType: 'Organization',
            identifier: [
                {
                    use: 'usual',
                    system: NHS_GP.registry.identifiers.ODSCode.uri,
                    value: 'Q12345'
                }
            ],
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

        it('must include ODS Code', function () {
            data.identifier[0].system = 'urn:fhir.nhs.uk:id/NHSNumberXX';

            var result = validator.validate(data);

            expect(result.valid).to.be.false;
        });
    });
});