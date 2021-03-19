import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
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

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#7986cb",
      main: "#3f51b5",
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
    },
    background: {
      default: "#f4f5fd",
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SidebMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
