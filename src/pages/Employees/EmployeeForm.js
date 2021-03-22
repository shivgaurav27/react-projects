import { Grid } from "@material-ui/core";
import React from "react";
import Controls from "../../components/controls/Controls";
import Form, { UseForm } from "../../components/UseForm";
import * as employeeService from "../../services/EmployeeServices";
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
  isPermanent: false,
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
            <Controls.Select
              name="departementId"
              label="Department"
              value={values.departmentId}
              onChange={handleInputChange}
              options={employeeService.getDepartmentCollection()}
            ></Controls.Select>

            <Controls.Checkbox
              name="isPermanent"
              label="Permanent Employee"
              value={values.isPermanent}
              onChange={handleInputChange}
            ></Controls.Checkbox>
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
