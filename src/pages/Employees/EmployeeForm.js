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
  const {
    values,
    setValues,
    errors,
    setErrors,
    resetForm,
    handleInputChange,
  } = UseForm(initialValues);

  const emailRegex = /^.+@.+\..+$/;
  const validate = () => {
    let temp = {};
    temp.fullName = values.fullName ? "" : "This field is required .";
    temp.email = emailRegex.test(values.email) ? "" : "Email is invalid";
    temp.mobile =
      values.mobile.length > 9 ? "" : "Minimum 10 numbers required ";
    temp.departmentId =
      values.departmentId.length != 0 ? "" : "This field is required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      employeeService.insertEmployee(values);
      resetForm();
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.Input
              name="fullName"
              label="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />

            <Controls.Input
              variant="outlined"
              label="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <Controls.Input
              variant="outlined"
              label="Mobile"
              name="mobile"
              value={values.mobile}
              onChange={handleInputChange}
              error={errors.mobile}
            />
            <Controls.Input
              variant="outlined"
              label="City"
              name="city"
              value={values.city}
              onChange={handleInputChange}
              error={errors.city}
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
              name="departmentId"
              label="Department"
              value={values.departmentId}
              onChange={handleInputChange}
              options={employeeService.getDepartmentCollection()}
              error={errors.departmentId}
            ></Controls.Select>

            <Controls.DatePicker
              name="hireDate"
              label="Hire  Date"
              value={values.hireDate}
              onChange={handleInputChange}
            ></Controls.DatePicker>

            <Controls.Checkbox
              name="isPermanent"
              label="Permanent Employee"
              value={values.isPermanent}
              onChange={handleInputChange}
            ></Controls.Checkbox>
            <div>
              <Controls.Button type="submit" text="Submit"></Controls.Button>
              <Controls.Button
                type="reset"
                color="default"
                text="Reset"
                onClick={resetForm}
              ></Controls.Button>
            </div>
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
