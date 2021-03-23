import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Controls from "./controls/Controls";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(1),
  },
  DialogTitle: {
    paddingRight: "0px",
  },
}));
export default function PopUp(props) {
  const classes = useStyles();
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      className={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.DialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.Button text="X" color="secondary"></Controls.Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
