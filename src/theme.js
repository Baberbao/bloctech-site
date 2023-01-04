import { createTheme, responsiveFontSizes } from "@mui/material/styles"

let theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      light: "#4349DC",
    },
    secondary: {
      main: "#373F41",
      light: "#737B7D",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
      tertiary: "#fff",
    },
  },
  typography: {
    fontFamily: "Mulish",
  },
  li: {
    fontSize: "12px",
    color: "#fff",
    fontFamily: "Mulish",
  },
})

theme.components = {
  MuiCssBaseline: {
    styleOverrides: `
      body {
        background-color: #120319;
      }
      li {
        font-size: "12px";
        color: "#fff";
        font-family: "Mulish";
      },
    
    `,
  },
}

theme = responsiveFontSizes(theme)

export default theme
