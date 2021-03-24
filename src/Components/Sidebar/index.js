import React from "react";
import {
  Button,
  Hidden,
  makeStyles,
  Paper,
  SwipeableDrawer,
} from "@material-ui/core";
import clsx from "clsx";
import theme from "../theme/theme";

const useStyles = makeStyles({
  root: {
    display: "block",
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    borderRadius: "20px",
    width: "210px",
  },
});

export default function Sidebar(props) {
  const classes = useStyles();
  const {
    sidebarToggleMobile,
    closeDrawer,
    sidebarToggle,
    sidebarHover,
    sidebarFixed,
  } = props;

  const sidebarMenuContent = (
    <div style={{ alignItems: "center" }}>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        size="large"
      >
        Add Patient
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        size="large"
      >
        View Patients
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        size="large"
      >
        View Uploaded Images
      </Button>
    </div>
  );
  return (
    <>
      <Hidden mdUp>
        <SwipeableDrawer
          anchor="left"
          open={sidebarToggleMobile}
          onClose={closeDrawer}
          variant="temporary"
          elevation={4}
          className="app-sidebar-wrapper-lg"
        >
          {sidebarMenuContent}
        </SwipeableDrawer>
      </Hidden>
      <Hidden mdDown>
        <Paper
          className={clsx("app-sidebar-wrapper", {
            "app-sidebar-wrapper-close": sidebarToggle,
            "app-sidebar-wrapper-open": sidebarHover,
            "app-sidebar-wrapper-fixed": sidebarFixed,
          })}
          square
          open={sidebarToggle}
        >
          <div
            className={clsx({
              "app-sidebar-menu": sidebarFixed,
              "app-sidebar-collapsed": sidebarToggle && !sidebarHover,
            })}
          >
            {sidebarMenuContent}
          </div>
        </Paper>
      </Hidden>
    </>
  );
}
