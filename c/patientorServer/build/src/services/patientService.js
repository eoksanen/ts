"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const patients_1 = __importDefault(require("../../data/patients"));
const { v4: uuidV4 } = require('uuid');
const patients = patients_1.default; // as Array<PatientEntry>;
console.log(patients);
const getEntries = () => {
    return patients;
};
const getNonSensitiveEntries = () => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        name,
        // ssn,
        occupation,
        dateOfBirth,
        gender,
        entries,
        id,
    }));
};
const getPatientById = (id) => {
    const foundPatient = patients.find(patient => patient.id === id);
    if (foundPatient)
        return foundPatient;
    else
        return null;
};
const addEntryForPatient = (patientId, entry) => {
    const uuid = uuidV4();
    console.log(uuid);
    const newEntry = Object.assign({ id: uuid }, entry);
    console.log("patient  ID ", patientId);
    const patient = patients.find(p => p.id === patientId);
    console.log("patient ", patient);
    (patient === null || patient === void 0 ? void 0 : patient.entries) ? patient === null || patient === void 0 ? void 0 : patient.entries.push(newEntry) : null;
    return newEntry;
};
const addPatientEntry = (entry) => {
    const uuid = uuidV4();
    console.log(uuid);
    const newPatientEntry = Object.assign({ id: uuid }, entry);
    patients.push(newPatientEntry);
    return newPatientEntry;
};
exports.default = {
    getEntries,
    addPatientEntry,
    addEntryForPatient,
    getNonSensitiveEntries,
    getPatientById
};
