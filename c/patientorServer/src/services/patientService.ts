/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import patientData from '../../data/patients.json';
import {PatientEntry, NewPatientEntry, PublicPatient } from '../types';


const { v4: uuidV4 } = require('uuid');

const patients: Array<PatientEntry> = patientData as Array<PatientEntry>;

const getEntries = (): PatientEntry[] => {
    return patients;
  };

  const getNonSensitiveEntries = (): PublicPatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation, entries, ssn }) => ({

        name,
        ssn,
        occupation,
        dateOfBirth,
        gender,
        entries,
        id,
    }));
};


const getPatientById = (id: string): PatientEntry | null => {

  const foundPatient = patients.find(patient => patient.id === id);

  if(foundPatient) return foundPatient;
  else return null;

};
  
  const addEntry = ( 
    entry: NewPatientEntry
    ): PatientEntry => {

      const uuid = uuidV4();
      console.log(uuid);
    
      const newPatientEntry = {
        id: uuid, // Math.max(...patients.map(i => i.id)) +1,
        ...entry
      };
      patients.push(newPatientEntry);
      return newPatientEntry;
  };
  
  export default {
    getEntries,
    addEntry,
    getNonSensitiveEntries,
    getPatientById
  };