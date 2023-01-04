import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material"
import React from "react"
import CustomButton from "./CustomButton"

//Styled Component
const MainHeading = styled(Typography)({
  fontWeight: 700,
  letterSpacing: "0.2px",
  color: "white",
  lineHeight: { xs: "auto", sm: "56px" },
})

const StyledInput = styled(TextField)({
  width: "100%",
  fontWeight: "400",
  color: "white",
  borderBottomColor: "white",
  "& .MuiInput-underline": {
    borderBottomColor: "white",
  },
  "& label": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#DB24B0 ",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "white",
  },
  "& .MuiInput-underline:hover": {
    borderBottomColor: "#DB24B0 ",
  },
  "& .MuiStandardInput-root": {
    borderBottomColor: "white !important",
    "& fieldset": {
      color: "white",
      borderBottomColor: "white",
    },

    "&:hover fieldset": {
      color: "white",
      borderBottomColor: "white",
    },
    "&.Mui-focused fieldset": {
      color: "white",
      borderBottomColor: "white",
    },
  },

  input: {
    "&[type=number]": {
      "-moz-appearance": "textfield",
    },
    "&::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    color: "white !important",
    fontSize: { xs: "16px", md: "14px" },
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "white",
    },
  },
})

const CustomContact = () => {
  return (
    <div>
      <Box
        sx={{
          background: "rgba(217, 217, 217, 0.13)",
          backdropFilter: "blur(76px)",
          borderRadius: "5px",
          px: { sm: "40px", xs: "20px" },
          py: { sm: "30px", xs: "20px" },
          border: "1px solid #DB24B0",
        }}
        py="40px"
      >
        <Box>
          <Box component="h2" textAlign="center">
            <MainHeading fontSize={{ xs: "25px", sm: "44px" }}>
              Contact Us
            </MainHeading>
          </Box>
          <form action="" autoComplete="off">
            <Grid container spacing={{ xs: 2, sm: 5 }} mt={3}>
              <Grid item sm={6} xs={12}>
                <StyledInput
                  variant="standard"
                  label="Name"
                  id="standard-name"
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <StyledInput
                  variant="standard"
                  label="Email"
                  type={"email"}
                  id="standard-name"
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <StyledInput
                  variant="standard"
                  label="Company/ Organization"
                  id="standard-name"
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <StyledInput
                  variant="standard"
                  label="Phone"
                  id="standard-name"
                  type="number"
                  placeholder="+923000000000"
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <StyledInput
                  variant="standard"
                  label="Country"
                  id="standard-name"
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <StyledInput
                  variant="standard"
                  label="Share your requirements"
                  id="standard-name"
                />
              </Grid>

              <Grid item sm={12} xs={12}>
                <Box>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          inputProps={{
                            "aria-label": "controlled",
                          }}
                        />
                      }
                      label="I agree, to terms and conditions"
                    />
                  </FormGroup>
                </Box>
              </Grid>
            </Grid>
            <Box
              mt="20px"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CustomButton>Send</CustomButton>
            </Box>
          </form>
        </Box>
      </Box>
    </div>
  )
}

export default CustomContact
