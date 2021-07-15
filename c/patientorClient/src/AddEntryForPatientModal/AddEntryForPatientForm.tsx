import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Field, Formik, Form } from "formik";
import { useStateValue } from "../state";
import { TextField, DiagnosisSelection, NumberField, SelectType, TypeOption } from "./FormField";
import { Entry, Type } from "../types";
import { isType, isString, isDate } from "../utils";



const typeOptions: TypeOption[] = [
  { value: Type.Hospital, label: "Hospital" },
  { value: Type.HealthCheck, label: "HealthCheck" },
  { value: Type.OccupationalHealthcare, label: "OccupationalHealthcare" }
];


/*
 * use type Patient, but omit id and entries,
 * because those are irrelevant for new patient object.
 */
export type PatientEntryFormValues = Omit<Entry,  "id" >;

interface Props {
  onSubmit: (values: PatientEntryFormValues) => void;
  onCancel: () => void;
}


export const AddEntryForPatientForm = ({ onSubmit, onCancel }: Props) => {
  const [{ diagnoses }] = useStateValue();
  return (
    
    <Formik
    
      initialValues={{
        type: "Hospital",
        description: "",
        date: "",
        specialist: ""
      }}
      onSubmit={onSubmit}
      validate={values => {
        const requiredError = "Field is required";
        const formattedIncorrectly = "Field formatted incorrectly";
        const errors: { [field: string]: string } = {};
        if (!values.description) {
          errors.description = requiredError;
        }
        if (!isString(values.description)){
          errors.description = formattedIncorrectly;
        }
        if (!values.date) {
          errors.date = requiredError;
        }
        if (!isDate(values.date)){
          errors.date = formattedIncorrectly;
        }
        if (!values.specialist) {
          errors.specialist = requiredError;
        }
        if (!isString(values.specialist)){
          errors.specialist = formattedIncorrectly;
        }
        if (!values.type) {
          errors.type = requiredError;
        }
        if(!isType(values.type)){
          errors.type = formattedIncorrectly;
        }
        
        console.log(typeof(values.date));
        console.log("errors ", errors);
        return errors;
      }}
      
    >
      {({ isValid, dirty, setFieldValue, setFieldTouched }) => {
        return (
          <Form className="form ui">

            <SelectType
              label="Type"
              name="type"
              options={typeOptions}
            />

            <Field
              label="description"
              placeholder="Description"
              name="description"
              component={TextField}
            />

            <Field
              label="date"
              placeholder="YYYY-MM-DD"
              name="date"
              component={TextField}
            />

            <Field
              label="specialist"
              placeholder="specialist"
              name="specialist"
              component={TextField}
            />
 
            <Field
              label="healthCheckRating"
              name="healthCheckRating"
              component={NumberField}
              min={0}
              max={3}
/>
            <DiagnosisSelection
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
            diagnoses={Object.values(diagnoses)}
          />   
            <Grid>
              <Grid.Column floated="left" width={5}>
                <Button type="button" onClick={onCancel} color="red">
                  Cancel
                </Button>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Button
                  type="submit"
                  floated="right"
                  color="green"
                  disabled={!dirty || !isValid}
                >
                  Add
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEntryForPatientForm;
