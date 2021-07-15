/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import express from 'express';
import patientService from '../services/patientService';
import { toNewEntryForPatient, toNewPatientEntry } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensitiveEntries());
  //res.send('Fetching all patients!');
});

router.get('/:id', (_req, res) => {
  const foundPatient = patientService.getPatientById(_req.params.id);

  if(foundPatient) {
    res.send(foundPatient);
  } else {
    res.send('Patient not found!');
  }

});

router.post('/', (_req, res) => {
  try {
  //const { name, dateOfBirth, ssn, gender, occupation  } = _req.body;

  const newPatientEntry = toNewPatientEntry(_req.body);

  const addedPatientEntry = patientService.addPatientEntry(newPatientEntry);
  res.json(addedPatientEntry);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post('/:id/entries', (_req, res) => {
  console.log(_req.params.body);
  try {
  //const { name, dateOfBirth, ssn, gender, occupation  } = _req.body;

  const patientId = _req.params.id;

  console.log("patientID", patientId);

  const newEntryForPatient = toNewEntryForPatient(_req.body);

  console.log(typeof(newEntryForPatient.date));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const addedEntryForPatient = patientService.addEntryForPatient(patientId, newEntryForPatient);
  res.json(addedEntryForPatient);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default router;