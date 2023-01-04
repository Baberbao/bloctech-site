import React from "react"
import { Box, styled, Typography } from "@mui/material"

const Heading = styled(Typography)({
  fontWeight: 700,
  letterSpacing: "0.3px",
  color: "#FFFFFF",
  lineHeight: { xs: "auto", sm: "22px" },
  textAlign: "left",
})

const CustomCard2 = ({ heading, list }) => {
  return (
    <div>
      <Box textAlign="left" height="100%">
        <Box
          component="h3"
          py={4}
          pl={4}
          mt="10px"
          width="100%"
          sx={{
            background: "#41015F",
            boxShadow: "9px 0px 26px #000000",
            borderRadius: "5px",
          }}
        >
          <Heading fontSize={{ xs: "20px", sm: "28px" }}>{heading}</Heading>
        </Box>
        <Box
          sx={{
            background: "#240035",
            py: { xs: "20px", sm: "60px" },
            px: { xs: "30px", sm: "60px" },
            borderRadius: "5px",
          }}
        >
          {list}
        </Box>
      </Box>
    </div>
  )
}

export default CustomCard2
