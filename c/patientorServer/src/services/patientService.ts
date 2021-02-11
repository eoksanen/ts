import patientData from '../../data/patients.json';
import { NonSensitivePatientsEntry, PatientEntry } from '../types';

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
  
  const addEntry = () => {
    return null;
  };
  
  export default {
    getEntries,
    addEntry,
    getNonSensitiveEntries
  };