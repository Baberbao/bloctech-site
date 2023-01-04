import React from "react"

import { styled, Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

const SubHeading = styled(Typography)({
  background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  fontFamily: "Mulish",
  margin: "50px 0px",
  fontWeight: 700,
  letterSpacing: "0.2px",
  color: "#3B3F6D",
  textAlign: "center",
})

const Subheading = ({ subHeading }) => {
  return (
    <SubHeading
      fontSize={{ xs: "20px", sm: "33px" }}
      lineHeight={{ xs: "auto", sm: "40px" }}
    >
      {subHeading}
    </SubHeading>
  )
}

export default Subheading
