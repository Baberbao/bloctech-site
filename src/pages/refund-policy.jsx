import { Box, useMediaQuery } from "@mui/material"
import React from "react"
import { motion, useIsPresent } from "framer-motion"

import img from "../assets/privacyBg.png"
import SeoHelmet from "../components/SeoHelmet"

const Home = () => {
  const matches = useMediaQuery("(max-width:700px)")
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box textAlign="center" py={matches ? 15 : 25}>
        <Box
          component="h1"
          m="auto"
          fontSize={{ xs: "25px", sm: "44px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          lineHeight={{ xs: "auto", sm: "60px" }}
          color="#fff"
          sx={{
            background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            width: "fit-content",
          }}
        >
          Refund Policy
        </Box>

        <Box
          component="p"
          m="auto"
          mt={3}
          fontSize={{ xs: "13px", sm: "16px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="#fff"
          textAlign="center"
          lineHeight={{ xs: "auto", sm: "22px" }}
          width={{ xs: "90%", md: "60%" }}
        >
          Users may find content and products of other companies or
          organizations on our website and/or links to the sites and services of
          our suppliers, licensors, or other third parties. Please note that we
          do not control these sites. Each such third party is solely
          responsible for complying with the laws, rules and regulations
          applicable to its business and the operation of its own website. For
          any questions regarding your personal data please feel free to contact
          Bloctech Data Protection Officer at dpo@bloctechsolutions.com.
        </Box>
      </Box>
    </Box>
  )
}

const RefundPolicy = () => {
  const isPresent = useIsPresent()
  return (
    <div>
      <SeoHelmet title="Refund Policy BlocTech Solutions | BlocTech Solutions" />
      <motion.div
        initial={{ scaleX: 1, opacity: 1 }}
        animate={{
          scaleX: 0,
          opacity: 0.5,
          transition: { duration: 1.6, ease: "circOut" },
        }}
        exit={{
          scaleX: 1,
          opacity: 1,
          transition: { duration: 1.6, ease: "circIn" },
        }}
        style={{
          originX: isPresent ? 0 : 1,
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          background:
            "linear-gradient(202.6deg, #A615BD 11.43%, #3940DB 85.3%)",
          zIndex: 10000,
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 4, ease: "circOut" } }}
        exit={{ opacity: 0, transition: { duration: 4, ease: "circIn" } }}
      >
        <Home />
      </motion.div>
    </div>
  )
}

export default RefundPolicy
