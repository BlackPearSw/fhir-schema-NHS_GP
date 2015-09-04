module.exports = {
    AdministrativeGender: {
        uri: 'urn:fhir.nhs.uk:vs/AdministrativeGender',
        oid: '2.16.840.1.113883.2.1.3.2.4.16.25',
        codingSystem: 'Sex',
        description: 'The administrative sex of a person.',
        issuer: 'HSCIC'
    },
    Ethnicity: {
        uri: 'urn:fhir.nhs.uk:vs/Ethnicity',
        oid: '2.16.840.1.113883.2.1.3.2.4.16.6',
        codingSystem: 'Ethnicity',
        description: 'A person\'s ethnic category (as perceived by themselves).',
        issuer: 'HSCIC',
        codes: ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','R','S','Z']
    },
    MessageEvent: {
        uri: 'urn:fhir.nhs.uk:vs/MessageEvent',
        oid: 'NA',
        codingSystem: 'Message Event',
        description: 'FHIR Message Event Codes',
        issuer: 'HSCIC'
    },
    MaritalStatus: {
        uri: 'urn:fhir.nhs.uk:vs/MaritalStatus',
        oid: '2.16.840.1.113883.2.1.3.2.4.16.82',
        codingSystem: 'Marital Status',
        description: 'MaritalStatus',
        issuer: 'HSCIC',
        codes: ['S','M','D','W','P','N']
    },
    Language: {
        uri: 'urn:fhir.nhs.uk:vs/Language',
        oid: 'NA',
        codingSystem: 'Language',
        description: 'The language used by a person',
        issuer: 'HSCIC'
    },
    ReligionGroup: {
        uri: 'urn:fhir.nhs.uk:vs/ReligionGroup',
        oid: 'NA',
        codingSystem: 'Religion',
        description: 'A vocabulary that identifies the religion of a person.',
        issuer: 'HSCIC',
        codes: ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N']
    },
    AppointmentType: {
        uri: 'urn:fhir.nhs.uk:vs/AppointmentType',
        oid: '2.16.840.1.113883.4.642.2.1769',
        codingSystem: 'Appointment Type',
        description: 'Vocabulary for the Clinical type of the appointment',
        issuer: 'HSCIC'
    },
    AppointmentReason: {
        uri: 'urn:fhir.nhs.uk:vs/AppointmentReason',
        oid: '2.16.840.1.113883.4.642.2.188',
        codingSystem: 'Appointment Reason',
        description: 'Vocabulary for the reason for the appointment',
        issuer: 'HSCIC'
    },
    AppointmentParticipantType: {
        uri: 'urn:fhir.nhs.uk:vs/AppointmentParticipantType',
        oid: '2.16.840.1.113883.4.642.2.183',
        codingSystem: 'Appointment Participant Type',
        description: 'Vocabulary for appointment participant type',
        issuer: 'HSCIC'
    },
    AppointmentParticipantRequired: {
        uri: 'urn:fhir.nhs.uk:vs/AppointmentParticipantRequired',
        oid: '2.16.840.1.113883.4.642.1.362',
        codingSystem: 'Appointment Participant Required',
        description: 'Vocabulary for appointment participant required',
        issuer: 'HSCIC'
    },
    AppointmentParticipantStatus: {
        uri: 'urn:fhir.nhs.uk:vs/AppointmentParticipantStatus',
        oid: '2.16.840.1.113883.4.642.1.361',
        codingSystem: 'Appointment participant (patient) status',
        description: 'Vocabulary for appointment participant (patient) status',
        issuer: 'HSCIC'
    },
    AppointmentCategory: {
        uri: 'urn:fhir.nhs.uk:vs/AppointmentCategory',
        oid: '?',
        codingSystem: 'Appointment category',
        description: 'Vocabulary for appointment category',
        issuer: 'HSCIC'
    },
    AppointmentBookingMethod: {
        uri: 'urn:fhir.nhs.uk:vs/AppointmentBookingMethod',
        oid: '?',
        codingSystem: 'Appointment Booking method',
        description: 'Vocabulary for appointment booking method',
        issuer: 'HSCIC'
    },
    AppointmentContactMethod: {
        uri: 'urn:fhir.nhs.uk:vs/AppointmentContactMethod',
        oid: '?',
        codingSystem: 'Appointment contact method',
        description: 'Vocabulary for appointment contact method',
        issuer: 'HSCIC'
    },
    AppointmentResponseParticipantType: {
        uri: 'urn:fhir.nhs.uk:vs/AppointmentResponseParticipantType',
        oid: '2.16.840.1.113883.4.642.2.183',
        codingSystem: 'Appointment Response Participant Type',
        description: 'Vocabulary for appointment response participant type',
        issuer: 'HSCIC'
    },
    AppointmentResponseParticipantStatus: {
        uri: 'urn:fhir.nhs.uk:vs/AppointmentResponseParticipantStatus',
        oid: '2.16.840.1.113883.4.642.1.361',
        codingSystem: 'Appointment Response participant (patient) status',
        description: 'Vocabulary for appointment response participant (patient) status',
        issuer: 'HSCIC'
    },
    AppointmentResponseCategory: {
        uri: 'urn:fhir.nhs.uk:vs/AppointmentResponseCategory',
        oid: '?',
        codingSystem: 'Appointment Response category',
        description: 'Vocabulary for appointment response category',
        issuer: 'HSCIC'
    },
    AppointmentResponseBookingMethod: {
        uri: 'urn:fhir.nhs.uk:vs/AppointmentResponseBookingMethod',
        oid: '?',
        codingSystem: 'Appointment Response Booking method',
        description: 'Vocabulary for appointment response booking method',
        issuer: 'HSCIC'
    },
    AppointmentResponseContactMethod: {
        uri: 'urn:fhir.nhs.uk:vs/AppointmentResponseContactMethod',
        oid: '?',
        codingSystem: 'Appointment Response contact method',
        description: 'Vocabulary for appointment response contact method',
        issuer: 'HSCIC'
    },
    LocationFunctionType: {
        uri: 'urn:fhir.nhs.uk:vs/LocationFunctionType',
        oid: '2.16.840.1.113883.1.11.17660',
        codingSystem: 'Location Function Type',
        description: 'A volcabulary that identifies the type of functions performed at the location',
        issuer: 'HSCIC'
    },
    LocationPhysicalType: {
        uri: 'urn:fhir.nhs.uk:vs/LocationPhysicalType',
        oid: '2.16.840.1.113883.4.642.2.336',
        codingSystem: 'Location Phyiscal Type',
        description: 'A volcabulary of the Physical form of the location',
        issuer: 'HSCIC'
    },
    ScheduleType: {
        uri: 'urn:fhir.nhs.uk:vs/ScheduleType',
        oid: '2.16.840.1.113883.4.642.2.1769',
        codingSystem: 'Schedule Type',
        description: 'A volcabulary that identifies the type of appointment schedule',
        issuer: 'HSCIC'
    }
}
