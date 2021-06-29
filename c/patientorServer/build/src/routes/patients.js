"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const utils_1 = require("../utils");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(patientService_1.default.getNonSensitiveEntries());
    //res.send('Fetching all patients!');
});
router.get('/:id', (_req, res) => {
    const foundPatient = patientService_1.default.getPatientById(_req.params.id);
    if (foundPatient) {
        res.send(foundPatient);
    }
    else {
        res.send('Patient not found!');
    }
});
router.post('/', (_req, res) => {
    try {
        //const { name, dateOfBirth, ssn, gender, occupation  } = _req.body;
        const newPatientEntry = utils_1.toNewPatientEntry(_req.body);
        const addedPatientEntry = patientService_1.default.addPatientEntry(newPatientEntry);
        res.json(addedPatientEntry);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
router.post('/:id/entries', (_req, res) => {
    console.log(_req.params.body);
    try {
        //const { name, dateOfBirth, ssn, gender, occupation  } = _req.body;
        const patientId = _req.params.id;
        console.log("patientID", patientId);
        const newEntryForPatient = utils_1.toNewEntryForPatient(_req.body);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const addedEntryForPatient = patientService_1.default.addEntryForPatient(patientId, newEntryForPatient);
        res.json(addedEntryForPatient);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
exports.default = router;
