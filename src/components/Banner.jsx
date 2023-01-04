import React, { useContext } from "react"
import { Box, Container, Grid, styled, Typography } from "@mui/material"

import CustomButton from "./CustomButton"
import { AppContext } from "../utils/utils"
import CustomModal from "./CustomModal"
import { Link } from "gatsby"

//Styled Component
const MainHeading = styled(Typography)({
  background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  fontWeight: 700,
  letterSpacing: "0.2px",
  lineHeight: { xs: "auto", sm: "56px" },
  color: "#fff",
})

const Paragraph = styled(Typography)({
  textAlign: { xs: "justify", md: "left" },
  fontSize: { xs: "12px", md: "16px" },
  fontWeight: 400,
  color: "white",
  letterSpacing: "0.3px",
  lineHeight: "22px",
})

const Banner = ({ heading, discription, image, buttonText, link }) => {
  const { setOpen } = useContext(AppContext)
  return (
    <Box py={{ sm: "20px", xs: "70px" }}>
      <CustomModal />
      <Container maxWidth="lg">
        <Grid container spacing={2} display="flex" alignItems="center">
          <Grid item md={6} xs={12} order={{ xs: 2, md: 1 }}>
            <Box textAlign={{ xs: "center", md: "left" }} mb={3} component="h1">
              <MainHeading fontSize={{ xs: "28px", sm: "44px" }}>
                {heading}
              </MainHeading>
            </Box>

            <Paragraph textAlign={{ xs: "justify", md: "left" }}>
              {discription}
            </Paragraph>
            <Box mt={3} textAlign={{ xs: "center", md: "left" }}>
              {link ? (
                <Link to={link}>
                  <CustomButton>{buttonText}</CustomButton>
                </Link>
              ) : (
                <CustomButton onClick={() => setOpen(true)}>
                  {buttonText}
                </CustomButton>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            {image}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Banner
