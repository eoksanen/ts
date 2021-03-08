/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensitiveEntries());
  //res.send('Fetching all patients!');
});

router.post('/', (_req, res) => {
  try {
  //const { name, dateOfBirth, ssn, gender, occupation  } = _req.body;

  const newPatientEntry = toNewPatientEntry(_req.body);

  const addedPatientEntry = patientService.addEntry(newPatientEntry);
  res.json(addedPatientEntry);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default router;