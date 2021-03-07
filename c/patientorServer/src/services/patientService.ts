import patientData from '../../data/patients.json';
import { NonSensitivePatientsEntry, PatientEntry, NewPatientEntry } from '../types';


const { v4: uuidV4 } = require('uuid');

const patients: Array<PatientEntry> = patientData as Array<PatientEntry>;

const getEntries = (): PatientEntry[] => {
    return patients;
  };

  const getNonSensitiveEntries = (): NonSensitivePatientsEntry[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({

        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};
  
  const addEntry = ( 
    entry: NewPatientEntry
    ): PatientEntry => {
    
      const newPatientEntry = {
        id: uuidV4(), // Math.max(...patients.map(i => i.id)) +1,
        ...entry
      }
      patients.push(newPatientEntry);
      return newPatientEntry;
  };
  
  export default {
    getEntries,
    addEntry,
    getNonSensitiveEntries
  };