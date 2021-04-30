import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../state";
import { apiBaseUrl } from "../constants";
import { Patient, Diagnosis } from "../types";
import { Icon, Container, Grid } from "semantic-ui-react";
import { setPatient } from "../state"

  const PatientPage: React.FC = () => {
    const [{ patients, diagnosis }, dispatch] = useStateValue();
    const { id } = useParams<{ id: string }>();

    
console.log("Patients STATE diagnosis ", diagnosis)
console.log("Patients STATE", patients)

    let patient = Object.values(patients).find((patient: Patient) => ((patient.id === id)))
    let diagnoses = Object.values(diagnosis)
  
  
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
  const heartGreen = <Icon name='heart' color = 'green'></Icon>
  const heartYellow = <Icon name='heart' color ='yellow'></Icon>



  return (

    <div>
      <h2>{patient?.name} {genreIcon}</h2>
      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>
      <div>
        <h3>entries</h3>
          {patient?.entries?.map((pe) => {  
            switch(pe.type){

            case "OccupationalHealthcare":
              return (
                <div key={pe.id}>
                 <Container>
                   <Grid celled>
                   <Grid.Row>
   
                  <h4>{pe.date + " "}<Icon name ='stethoscope'></Icon> {pe.employerName}</h4>

                  </Grid.Row>
               
                    <Grid.Row>
                    <p> {pe.description}</p>
                    <ul>
                  {pe.diagnosisCodes?.map(dc => <li key={dc}>{dc} 
                  {diagnoses.map(d => 
                   d?.code === dc ? " " + d.name : null)}</li>)}
                   </ul>
                   
                   </Grid.Row>
                   </Grid>
                   </Container>
                  </div>
                      )
              break;
            case "Hospital":
              
              break;
            case "HealthCheck":
              return (
                <div key={pe.id}>
                  <h4>{pe.date + " "}<Icon name= 'user md'></Icon></h4>
                  <p>{pe.date} {pe.description}</p>
                  <p>{pe.diagnosisCodes?.map(dc => <li>{dc}</li>)}</p>
                  <p>{pe.healthCheckRating === 0 ? heartGreen: heartYellow}  </p>
                  </div>
                      )              
              break;
            }
          })
        }      
      </div>
    </div>
  )};

export default PatientPage;