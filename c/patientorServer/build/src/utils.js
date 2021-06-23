"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewEntryForPatient = exports.toNewPatientEntry = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
const types_1 = require("./types");
//import diagnoseService from '../services/diagnoseService';
const toNewPatientEntry = (object) => {
    return {
        name: parseName(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseName(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseName(object.occupation),
    };
};
exports.toNewPatientEntry = toNewPatientEntry;
const toNewEntryForPatient = (object) => {
    console.log("toNewEntryForPatient");
    return {
        type: parseType(object.type),
        description: parseName(object.description),
        date: parseDate(object.date),
        specialist: parseName(object.specialist),
        diagnosisCodes: parseDiagnosis(object.diagnosisCodes),
    };
};
exports.toNewEntryForPatient = toNewEntryForPatient;
const parseDiagnosis = (diagnosisCodes) => {
    //  const diagnoseData: string[] = diagnoseService.getDiagnoseCodes();
    // diagnoseData.map(dc => diagnosisCodes.map(dcd => dcd === dc));
    return diagnosisCodes;
};
const parseGender = (gender) => {
    if (!gender || !isGender) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};
const isGender = (param) => {
    return Object.values(types_1.Gender).includes(param);
};
const parseName = (name) => {
    console.log(name);
    if (!name || !isString(name)) {
        throw new Error('Incorrect or missing name: ' + name);
    }
    return name;
};
const isString = (text) => {
    return typeof text === 'string';
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseDate = (date) => {
    console.log(date);
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};
const parseType = (type) => {
    if (!type || !isType) {
        throw new Error('incorrect or missing type ' + type);
    }
    return type;
};
const isType = (type) => {
    return Object.values(types_1.Type).includes(type);
};
exports.default = exports.toNewPatientEntry;
