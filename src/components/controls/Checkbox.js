import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckBox,
} from "@material-ui/core";
import React from "react";

export default function Checkbox(props) {
  const { name, label, onChange, value } = props;

  const convertToDefaultEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckBox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefaultEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      ></FormControlLabel>
    </FormControl>
  );
}
