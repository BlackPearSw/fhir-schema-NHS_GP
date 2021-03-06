var fhir = require('fhir-schema-dstu2');
var NHS_GP = require('../../lib/index');

var expect = require('chai').expect;

describe('GP Practice', function () {
    var data;
    var schema = NHS_GP.profiles.GP_Practice;

    beforeEach(function () {
        data = {
            resourceType: 'Organization',
            identifier: [
                {
                    use: 'usual',
                    system: 'urn:fhir.nhs.uk/id/ODSCode',
                    value: 'Q12345'
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

        it('must include ODS Code', function () {
            data.identifier[0].system = 'urn:fhir.nhs.uk/id/ODSCodeXX';

            var result = fhir.validator.validate(data, schema);

            expect(result.valid).to.be.false;
        });
    });
});