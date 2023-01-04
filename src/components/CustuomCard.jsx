import React from "react"

import { Box, styled, Typography } from "@mui/material"

import { Link } from "gatsby"

import CustomButton from "./CustomButton"

const CardDitail = styled(Typography)({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  color: "white",
  textAlign: "center",
  padding: "30px 0px",
})

const CardMain = styled(Box)({
  backgroundImage: "linear-gradient(202.6deg, #A615BD 11.43%, #3940DB 85.3%)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  padding: "0px  20px",
  display: "flex",
  aligItems: "center",
  justifyContent: "cente",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  transition: "0.3s",
  borderRadius: "5px",
})

const CardMainBox = styled(Box)({
  paddingBottom: "20px",
  height: "100%",
  textAlign: "center",
  display: "flex !important",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
})

const CustuomCard = ({
  title,
  discription,
  buttonText,
  image,
  link,
  toggelModal,
}) => {
  return (
    <CardMainBox>
      <CardMain height="100%">
        <Box>
          {image && <Box py="20px"> {image}</Box>}
          <Box
            pt={image ? "0px" : "20px"}
            fontSize={"30px"}
            fontWeight="700"
            textAlign={"center"}
            color="white"
          >
            {title}
          </Box>
          <CardDitail>{discription}</CardDitail>

          <Box my="20px">
            {toggelModal ? (
              <CustomButton onClick={toggelModal}>{buttonText}</CustomButton>
            ) : (
              <Link style={{ textDecoration: "none" }} to={link}>
                <CustomButton>{buttonText}</CustomButton>
              </Link>
            )}
          </Box>
        </Box>
      </CardMain>
    </CardMainBox>
  )
}

export default CustuomCard
