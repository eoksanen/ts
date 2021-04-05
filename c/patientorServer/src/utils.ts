/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewPatientEntry, Gender, //Entry 
} from './types';

const toNewPatientEntry = (object: any): NewPatientEntry => {
    return {
        name: parseName(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseName(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseName(object.occupation),
        //entries?: parseEntries(object.entries),
      };
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
/*
  const parseEntries = (param: any): param is Entry => {

    if (param || isString(param)) {
      return param;
    }
  };
*/
export default toNewPatientEntry;