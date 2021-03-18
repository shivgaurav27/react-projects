import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import SidebMenu from "../components/SidebMenu";
import "./App.css";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <SidebMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
