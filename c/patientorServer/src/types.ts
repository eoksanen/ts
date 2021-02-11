

export type Genre = 'male' | 'female';

export type NonSensitiveDiagnoseEntry = Omit<DiagnoseEntry, 'latin'>;
export type NonSensitivePatientsEntry = Omit<PatientEntry, 'ssn'>;

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
    gender: Genre;
    occupation: string
  }