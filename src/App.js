import React from "react";

import { ThemeProvider } from "@material-ui/styles";

import theme from "./Components/theme/theme";
import Header from "./Components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
