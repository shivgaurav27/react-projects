import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
import Controls from "../../components/controls/Controls";
import Form, { UseForm } from "../../components/UseForm";

const genderItems = [
  { id: "male", title: "male" },
  { id: "female", title: "Female" },
  { id: "other", title: "other" },
];

const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  iaPermanent: false,
};

export default function EmployeeForm() {
  const { values, setValues, handleInputChange } = UseForm(initialValues);

  return (
    <>
      <Form>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              name="fullName"
              label="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
            />

            <Controls.Input
              variant="outlined"
              label="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroup
              name="gender"
              label="Gender"
              value={values.gender}
              onChange={handleInputChange}
              items={genderItems}
            />
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
