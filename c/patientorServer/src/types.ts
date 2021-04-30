

export enum Gender {
    Male = 'male',
    Female = 'female',
}

export enum Type {
    HealthCheck = "HealthCheck",
    Hospital = "Hospital",
    OccupationalHealthcare = "OccupationalHealthcare"

}

export type DiagnoseCodes = Omit<DiagnoseEntry, 'latin' | 'name'>;
export type NonSensitiveDiagnoseEntry = Omit<DiagnoseEntry, 'latin'>;
export type NonSensitivePatientsEntry = Omit<PatientEntry, 'ssn'>;
export type NewPatientEntry = Omit<PatientEntry, 'id' | 'entries' >;
export type PublicPatient = Omit<PatientEntry, 'ssn' | 'entries' >;
export type NewEntry = Omit<Entry, 'id' >;


export interface DiagnoseEntry {
    code: string;
    name: string;
    latin?: string;
}
/*
export interface Entry {
}
*/
export interface PatientEntry {

    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
    entries?: Entry[];
  }

  interface BaseEntry {
    id: string;
    description: string;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<string>;
  }

  export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
  }

  export interface Discharge {
      date: string;
      criteria: string
  }

  export interface SickLeave {
      startDate: string;
      endDate: string;
  }

  interface HealthCheckEntry extends BaseEntry {
    type: "HealthCheck";
    healthCheckRating?: HealthCheckRating;
  }

   interface HospitalEntry extends BaseEntry {
    type: "Hospital";
    discharge?: Discharge;
  }

   interface OccupationalHealthcareEntry extends BaseEntry {
    type: "OccupationalHealthcare";
    employerName?: string;
    sickLeave?: SickLeave;

  }
  export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;