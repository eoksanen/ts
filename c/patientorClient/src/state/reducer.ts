import { State } from "./state";
import { Patient } from "../types";

export type Action =
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
    | {
      type: "SET_PATIENT";
      payload: Patient;
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            
            {}
          ),
          ...state.patients
        }
      };
    case "SET_PATIENT":

     const patients2 = Object.values(state.patients)
     const updatedPatients = patients2.map(patient => patient.id !== action.payload.id ? patient : action.payload)

       return {
       ...state,
       patients: {
        ...updatedPatients.reduce(
          (memo, patient) => ({ ...memo, [patient.id]: patient }),
          
          {}
        ),
       // ...state.patients

        //[action.payload.id]: action.payload

       }
      
            };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};

export const setPatientList = (patientList: Patient[]) => {

  return {
    type: "SET_PATIENT_LIST",
    payload: patientList,
  }
}

export const setPatient = (patient: Patient) => {

  return {
    type: "SET_PATIENT",
    payload: patient,
  }
}