import express from 'express';
import patientService from '../services/patientService'

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensitiveEntries())
  //res.send('Fetching all patients!');
})

router.post('/', (_req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation  } = _req.body;
  const newPatientEntry = patientService.addEntry(

    {
    name, 
    dateOfBirth, 
    ssn, 
    gender, 
    occupation
    }
  );
  res.json(newPatientEntry);
});

export default router;