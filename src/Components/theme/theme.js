import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00796B",
      light: "#4DB6AC",
      dark: "#00695C",
    },
    secondary: {
      main: "#E91E63",
      light: "#F06292",
      dark: "#C2185B",
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: "50px",
      lineHeight: "40px",
    },
    h2: {
      fontWeight: 500,
      fontSize: "29px",
      lineHeight: "32px",
    },
    h3: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "28px",
    },
    h4: {
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "24px",
    },
    h5: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
    },
    h6: {
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "20px",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: "bolder",
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: "14px",
    },
    body1: {
      fontSize: "14px",
    },
    body2: {
      fontSize: "14px",
    },
    button: {
      fontSize: "14px",
      textTransform: "none",
    },
    caption: {
      fontSize: "12px",
    },
    overline: {
      fontSize: "12px",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: "20px",
  },
});

export default theme;
