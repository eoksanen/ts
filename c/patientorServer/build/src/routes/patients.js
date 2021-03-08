"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(patientService_1.default.getNonSensitiveEntries());
    //res.send('Fetching all patients!');
});
router.post('/', (_req, res) => {
    try {
        //const { name, dateOfBirth, ssn, gender, occupation  } = _req.body;
        const newPatientEntry = utils_1.default(_req.body);
        const addedPatientEntry = patientService_1.default.addEntry(newPatientEntry);
        res.json(addedPatientEntry);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
exports.default = router;
