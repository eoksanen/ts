import express from 'express';
import diagnoseService from '../services/diagnoseService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnoseService.getNonSensitiveEntries());
  //res.send('Fetching all diagnoses!');
})

router.post('/', (_req, res) => {
  res.send('Saving a diagnose!');
})

export default router;