import React from "react"

import { Box, styled, Typography } from "@mui/material"

const TitleText = styled(Typography)({
  variant: "h3",
  fontWeight: "700",
  textAlign: "center",
  color: "white",
})

const CustomCardList = ({ image, title, discripton, bg, boxShadow }) => {
  console.log(bg, boxShadow, "ASfdasdf")
  return (
    <Box
      height="100%"
      sx={{
        background: `${bg}`,
        p: 1,
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: `${boxShadow}`,
        },
        borderRadius: "5px",
      }}
    >
      {image && <Box textAlign="center">{image}</Box>}
      {title && (
        <TitleText py={3} fontSize={{ xs: "16px", md: "20px" }}>
          {title}
        </TitleText>
      )}

      {discripton && (
        <Box
          component="h5"
          color="white"
          px={3}
          pb={5}
          fontSize={{ xs: "12px", sm: "16px" }}
        >
          {discripton}
        </Box>
      )}
    </Box>
  )
}

export default CustomCardList
