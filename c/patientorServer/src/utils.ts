/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewPatientEntry, NewEntry, Gender, Type } from './types';
//import diagnoseService from '../services/diagnoseService';


export const toNewPatientEntry = (object: any): NewPatientEntry => {
    return {
        name: parseName(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseName(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseName(object.occupation),
        //entries?: parseEntries(object.entries),
      };
  };

 export const toNewEntryForPatient = (object: any): NewEntry => {
    return {
        type: parseType(object.type),
        description: parseName(object.name),
        date: parseDate(object.date),
        specialist: parseName(object.specialist),
        diagnosisCodes: parseDiagnosis(object.diagnosisCodes),

      };
  };

  const parseDiagnosis = (diagnosisCodes: any): string[] => {
  
  //  const diagnoseData: string[] = diagnoseService.getDiagnoseCodes();
   // diagnoseData.map(dc => diagnosisCodes.map(dcd => dcd === dc));

    return diagnosisCodes;
  };

const parseGender = (gender: any): Gender => {
    if (!gender || !isGender) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
  };
const parseName = (name: any): string => {
    if (!name || !isString(name) ) {
        throw new Error('Incorrect or missing name: ' + name);
    }
    return name;
  };

  const isString = (text: any): text is string => {
    return typeof text === 'string';
  };
  const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };
  
  const parseDate = (date: any): string => {
      console.log(date);
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
  };


  const parseType = (type: any): type is Type => {
    return Object.values(Type).includes(type);
  };



export default toNewPatientEntry;