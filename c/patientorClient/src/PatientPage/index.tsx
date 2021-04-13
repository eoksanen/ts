import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../state";
import { apiBaseUrl } from "../constants";
import { Patient } from "../types";

  const PatientPage: React.FC = () => {
    const [{ patients }, dispatch] = useStateValue();
  

   
  
    console.log("patients ", patients)
  
    const { id } = useParams<{ id: string }>();
    console.log(id," II D")
  
    React.useEffect(() => {
      axios.get<void>(`${apiBaseUrl}/ping`);
  
      const fetchPatientList = async () => {
        try {
          const { data: patientFromApiByID } = await axios.get<Patient>(
            `${apiBaseUrl}/patients/${id}`
          );
          console.log("patientFromApi ",patientFromApiByID)
          dispatch({ type: "SET_PATIENT", payload: patientFromApiByID });
        } catch (e) {
          console.error(e);
        }
      };
      fetchPatientList();
    }, [dispatch]);
  
  

  return (

    <div>
      <h2>{Object.values(patients).find((patient: Patient) => ((patient.id === id)))?.name}</h2>
      <p>ssn: {Object.values(patients).find((patient: Patient) => ((patient.id === id)))?.ssn}</p>
    </div>

  )
};

export default PatientPage;