"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const types_1 = require("./types");
const toNewPatientEntry = (object) => {
    return {
        name: parseName(object.name),
        dateOfBirth: parseDate(object.dayOfBirth),
        ssn: parseName(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseName(object.occupation)
    };
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
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};
exports.default = toNewPatientEntry;
