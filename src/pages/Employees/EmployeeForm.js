import { Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Form, { UseForm } from "../../components/UseForm";

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
            <TextField
              variant="outlined"
              label="Full Name"
              value={values.fullName}
              name="fullName"
              onChange={handleInputChange}
            ></TextField>
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Form>
    </>
  );
}
