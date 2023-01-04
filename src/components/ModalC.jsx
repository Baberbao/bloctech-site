import React, { useState, useEffect, useContext } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Stack } from "@mui/material"
import { Link } from "gatsby"
import { AppContext } from "../utils/utils"

const style = {
  position: "fixed",
  bottom: "-44.5px",
  width: "100%",
  bgcolor: "#280959",
  boxShadow: 24,
  zIndex: 1000,
  transition: "0.7s",
  transform: "translateY(-44.5px)",
}
function ModalC() {
  const { terms, setTerms } = useContext(AppContext)

  useEffect(() => {
    let term = localStorage.getItem("terms")
    if (term) {
      setTerms("none")
    }
  }, [])
  const setValueToLocalStorage = () => {
    localStorage.setItem("terms", "true")
    setTerms("none")
  }

  return (
    <div>
      <Stack justifyContent={"center"}>
        <Box sx={style} height={{ md: "50px", xs: "80px" }} display={terms}>
          <Box
            fontSize={{ xs: "13px", sm: "16px" }}
            fontWeight={400}
            letterSpacing="0.3px"
            color="white"
            lineHeight={{ xs: "auto", sm: "22px" }}
            // my={5}
            textAlign="center"
            px="8px"
            pt="10px"
          >
            Please Review our{" "}
            <Link to={"/terms/"} style={{ color: "white" }}>
              {" "}
              terms & conditions{" "}
            </Link>{" "}
            by using this site, you agree to our terms and
            <Link to={"/cookiepolicy/"} style={{ color: "white" }}>
              {" "}
              cookie policy.
            </Link>
            <Button
              variant="contained"
              onClick={setValueToLocalStorage}
              sx={{
                color: "#3B3F6D",
                background: "white",
                fontWeight: "700",
                mx: 2,
                fontSize: {
                  xs: "11px",
                  md: "13px",
                },
                "&:hover": {
                  background: "white",
                  color: "#3B3F6D",
                },
              }}
            >
              Agree
            </Button>
          </Box>
        </Box>
      </Stack>
    </div>
  )
}

export default ModalC
