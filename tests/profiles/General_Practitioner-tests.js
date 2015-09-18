var fhir = require('fhir-schema-dstu2');
var NHS_GP = require('../../lib/index');

var expect = require('chai').expect;

describe('General Practitioner', function () {
    var data;
    var schema = NHS_GP.profiles.General_Practitioner;

    beforeEach(function () {
        data = {
            resourceType: 'Practitioner',
            identifier: [
                {
                    use: 'usual',
                    system: 'urn:fhir.nhs.uk/id/GeneralPractitionerPPDCode',
                    value: '4123456789'
                }
            ]
        };
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

        it('must include GP PPD Code', function () {
            data.identifier[0].system = 'urn:fhir.nhs.uk/id/GeneralPractitionerPPDCodeXX';

            var result =fhir. validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });
});