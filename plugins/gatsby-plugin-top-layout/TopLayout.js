import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
// MUI Components
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"

// Components
import Navbar from "../../src/components/Navbar/Navbar"
import theme from "../../src/theme"
import Footer from "../../src/components/Footer/Footer"
import { AppContextProvider } from "../../src/utils/utils"
import ModalC from "../../src/components/ModalC"

export default function TopLayout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Navbar />
          <ModalC />
          {children}

          <Footer />
        </ThemeProvider>
      </AppContextProvider>
    </React.Fragment>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node,
}
