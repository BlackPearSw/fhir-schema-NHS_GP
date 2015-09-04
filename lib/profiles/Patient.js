var FHIR_DSTU2 = require('fhir-schema-dstu2');
var registry = require('../registry');

var _ = require('lodash');

var Patient = FHIR_DSTU2.resources.Patient();
Patient.title = 'NHS-GP-Patient Profile';
Patient.required = _.union(Patient.required, ['identifier', 'name', 'gender', 'birthDate']);
Patient.properties.identifier.items.required = _.union(Patient.properties.identifier.items.required, ['value']);
Patient.properties.identifier.minItems = 1;
Patient.properties.identifier.format = 'NHS_GP.Patient.identifier';
/*
Patient.format['NHS_GP.Patient.identifier'] = FHIR_DSTU2.assertions.assert([
    FHIR_DSTU2.assertions.array.hasOneMatch({system: registry.identifiers.NHSNumber.uri}, 'One identifier from system ' + registry.identifiers.NHSNumber.uri + ' must be provided')
]);*/
Patient.properties.name.minItems = 1;
Patient.properties.maritalStatus = FHIR_DSTU2.elements.CodeableConcept({binding: {system:registry.valueSets.MaritalStatus.uri, codes: registry.valueSets.MaritalStatus.codes }});
delete Patient.properties.photo;
delete Patient.properties.animal;
delete Patient.properties.managingOrganization;
delete Patient.properties.link;
delete Patient.properties.active;
Patient.properties.religion = FHIR_DSTU2.elements.CodeableConcept({binding: {system:registry.valueSets.ReligionGroup.uri, codes: registry.valueSets.ReligionGroup.codes}});
Patient.properties.ethnicity = FHIR_DSTU2.elements.CodeableConcept({binding: {system: registry.valueSets.Ethnicity.uri, codes: registry.valueSets.Ethnicity.codes}});
Patient.properties.organDonor = FHIR_DSTU2.elements.boolean;
Patient.properties.residentialStatus = FHIR_DSTU2.elements.CodeableConcept();
Patient.properties.treatmentCategory = FHIR_DSTU2.elements.CodeableConcept();

module.exports = Patient;

