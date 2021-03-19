import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Input from "../../components/controls/Input";
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
            <Input
              name="fullName"
              label="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
            />

            <TextField
              variant="outlined"
              label="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={values.gender}
                  onChange={handleInputChange}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormLabel>
            </FormControl>
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
