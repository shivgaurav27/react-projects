import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export function UseForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    errors,
    setErrors,
    resetForm,
    handleInputChange,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));
export default function Form(props) {
  const classes = useStyles();
  const { children, ...othersProps } = props;
  return (
    <form className={classes.root} autoComplete="off" {...othersProps}>
      {children}
    </form>
  );
}
