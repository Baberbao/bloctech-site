import { Box, Typography } from "@mui/material"
import React from "react"

const GoalCard = ({ bg, img, title, boxShadow }) => {
  return (
    <Box
      sx={{
        background: `${bg}`,
        py: "20px",
        px: "10px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "0.3s",
        borderRadius: "5px",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: `${boxShadow}`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {img}
        <Typography
          variant="h3"
          fontSize={{ xs: "16px", md: "23px" }}
          fontWeight={700}
          letterSpacing="0.3px"
          color="white"
          lineHeight={{ xs: "auto", md: "32px" }}
          textAlign="center"
          py="20px"
          px="10px"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  )
}

export default GoalCard
