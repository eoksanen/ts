import { State } from "./state";
import { Diagnosis, Patient, Entry } from "../types";

export type Action =
  | {
      type: "SET_DIAGNOSE_CODES";
      payload: Diagnosis[];
    }
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
    }
  | {
      type: "ADD_NEW_ENTRY_FOR_PATIENT";
      payload: [string, Entry];
    };
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      console.log(action.payload);
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

     const patients2 = Object.values(state.patients);
     const updatedPatients = patients2.map(patient => patient.id !== action.payload.id ? patient : action.payload);

     console.log("updatedPatients", updatedPatients );

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

      case "ADD_NEW_ENTRY_FOR_PATIENT":

    //    const ptnts = Object.values(state.patients);

    const patients3 = Object.values(state.patients);
    //console.log(patients3);
    //console.log("action payload 1", action.payload[1]);
    //console.log("action payload 0", action.payload[0]);
    const updatedPatientEntryFor = patients3.find(patient => patient.id === action.payload[0]);

    //console.log("updatedPatientEntryFor  ",updatedPatientEntryFor);


    //const entryAddedForPatient =  updatedPatientEntryFor?.entries?.concat(action.payload[1]);

    //console.log("updatedPatientEntryForAdded  ",entryAddedForPatient);

    const testEntry = action.payload[1];

    //console.log("TESTINGETRY ", testEntry);


    const entryAddedForPatient = {...updatedPatientEntryFor, entries: updatedPatientEntryFor?.entries?.concat(testEntry)};

    const updatedPatientsE: Patient[] = patients3.map(patient => patient.id !== action.payload[0] ? patient : entryAddedForPatient as Patient);

    console.log("updatedPatientsE ",updatedPatientsE);

       // const patientEntryFor = ptnts.find(ptn => ptn.id === action.payload[0]);
       return {
        ...state,
        patients: {
         ...updatedPatientsE.reduce(
           (memo, patient) => ({ ...memo, [patient.id]: patient }),
           
           {}
         ),
        // ...state.patients
 
         //[action.payload.id]: action.payload
 
        }
       
             };

    case "SET_DIAGNOSE_CODES":
      return {
        ...state,
        diagnoses: {
          ...action.payload.reduce(
            (memo, diagnosis) => ({ ...memo, [diagnosis.code]: diagnosis }),
            
            {}
          ),
          ...state.diagnoses,
        },
        ...state.patients
      };


    default:
      return state;
  }
};


export const setPatientList = (patientList: Patient[]) => {

  return {
    type: "SET_PATIENT_LIST",
    payload: patientList,
  };
};

export const setPatient = (patient: Patient) => {

  return {
    type: "SET_PATIENT",
    payload: patient,
  };
};