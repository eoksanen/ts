import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../state";
import { apiBaseUrl } from "../constants";
import { Patient } from "../types";
import { Icon } from "semantic-ui-react";
import { setPatient } from "../state"

  const PatientPage: React.FC = () => {
    const [{ patients }, dispatch] = useStateValue();
    const { id } = useParams<{ id: string }>();

console.log("Patients STATE", patients)

    let patient = Object.values(patients).find((patient: Patient) => ((patient.id === id)))
  
  
    React.useEffect(() => {
      console.log("PatientPage")
      axios.get<void>(`${apiBaseUrl}/ping`);
  
      const fetchPatientList = async () => {

        try {
          const { data: patientFromApiByID } = await axios.get<Patient>(
            `${apiBaseUrl}/patients/${id}`
          );
          console.log("fetched pattients full info", patientFromApiByID)
         dispatch({ type: "SET_PATIENT", payload: patientFromApiByID });
        // dispatch(setPatient(patientFromApiByID));
        } catch (e) {
          console.error(e);
        }
      };
      if(!patient?.ssn) fetchPatientList();
    }, [dispatch]);


  const genreIcon = patient?.gender === 'male' ? <Icon name ='mars' size='large'></Icon> : <Icon name ='venus' size='large'></Icon>



  return (

    <div>
      <h2>{patient?.name} {genreIcon}</h2>
      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>
      <div>
        <h3>entries</h3>
        <ul>
          {patient?.entries?.map((p) => {  
            switch(p.type){

            case "OccupationalHealthcare":
              return (
                <div key={p.id}>
                  <h4>OccupationalHealthcare</h4>
                  <p>{p.date} {p.description}</p>
                  {p.diagnosisCodes?.map(dc => <li key={dc}>{dc}</li>)}
                  </div>
              )
              break;
            case "Hospital":
              
              break;
            case "HealthCheck":
              return (
                <div key={p.id}>
                  <h4>HealthCheck</h4>
                  <p>{p.date} {p.description}</p>
                  {p.diagnosisCodes?.map(dc => <li>{dc}</li>)}
                  </div>

            )              

              break;
            }

  }
  )
  }
          
          
        </ul>
      </div>
    </div>

  )
  };

export default PatientPage;