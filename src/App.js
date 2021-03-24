import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import { Router } from "react-router";
import history from "./history";

import theme from "./Components/theme/theme";
import Header from "./Components/Header";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Header>
          <Routes />
        </Header>
      </Router>
    </ThemeProvider>
  );
}

export default App;
