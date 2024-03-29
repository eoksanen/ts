import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Divider, Header, Container } from "semantic-ui-react";

import { apiBaseUrl } from "./constants";
import { useStateValue, //setPatientList 
} from "./state";
import { Patient, Diagnosis } from "./types";

import PatientListPage from "./PatientListPage";
import PatientPage from "./PatientPage";

const App: React.FC = () => {
  const [, dispatch] = useStateValue();
  React.useEffect(() => {
    //console.log("APP")
    axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      try {
        
        const { data: patientListFromApi } = await axios.get<Patient[]>(
          `${apiBaseUrl}/patients`
        );
        dispatch(  {type: "SET_PATIENT_LIST", payload: patientListFromApi});
       // dispatch(setPatientList(patientListFromApi));
      } catch (e) {
        console.error(e);
      }
    };
    fetchPatientList();
  }, [dispatch]);

  React.useEffect(() => {
    axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchDiagnoseCodes = async () => {
      try {
        
        const { data: diagnoseCodesFromApi } = await axios.get<Diagnosis[]>(
          `${apiBaseUrl}/diagnoses`
        );
        dispatch(  {type: "SET_DIAGNOSE_CODES", payload: diagnoseCodesFromApi});
        //console.log("fetched diagnose codes", diagnoseCodesFromApi)
       // dispatch(setPatientList(patientListFromApi));
      } catch (e) {
        console.error(e);
      }
    };
    fetchDiagnoseCodes();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Container>
          <Header as="h1">Patientor</Header>
          <Button as={Link} to="/" primary>
            Home
          </Button>
          <Divider hidden />
          <Switch>
            <Route path="/patients/:id" render={() => <PatientPage />} />
   
            <Route path="/" render={() => <PatientListPage />} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
