

export enum Gender {
    Male = 'male',
    Female = 'female',
}

export type NonSensitiveDiagnoseEntry = Omit<DiagnoseEntry, 'latin'>;
export type NonSensitivePatientsEntry = Omit<PatientEntry, 'ssn'>;
export type NewPatientEntry = Omit<PatientEntry, 'id'>;

export interface DiagnoseEntry {
    code: string;
    name: string;
    latin?: string;
}

export interface PatientEntry {

    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string
  }