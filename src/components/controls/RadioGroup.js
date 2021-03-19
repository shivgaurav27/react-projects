import {
  FormControl,
  RadioGroup as MiuiRadioGroup,
  FormLabel,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import React from "react";

export default function RadioGroup(props) {
  console.log("props", props);
  const { name, label, value, onChange, items } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MiuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </MiuiRadioGroup>
    </FormControl>
  );
}
