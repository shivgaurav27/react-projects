import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minwidth: 0,
    margin: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: theme.palette.secondary,
    "& .MuiButton-label": {
      color: theme.palette.secondary.light,
    },
  },
  primary: {
    backgroundColor: theme.palette.primary,
    "& .MuiButton-label": {
      color: theme.palette.primary.main,
    },
  },
}));

export default function ActionButton(props) {
  const classes = useStyles();
  const { color, children, onClick, ...rest } = props;
  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  );
}
