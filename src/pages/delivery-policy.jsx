import { useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
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
          Delivery Policy for Products & Services
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
          Following receipt of your order, the services will be delivered to you
          in accordance with the conditions of the services you purchased. The
          nature of the services you purchased and the date you acquired them
          may have an impact on when they are delivered. Upon completion of the
          services, the services will be considered effectively supplied to you.
          <br />
          We occasionally schedule a meeting with our customers to gather
          clarification on the service they want us to provide. For specialised
          services, we give invoices as well as a detailed breakdown of the
          delivery timeline.
        </Box>
      </Box>
    </Box>
  )
}

const DeliveryPolicy = () => {
  const isPresent = useIsPresent()
  return (
    <div>
      <SeoHelmet title="Delivery Policy BlocTech Solutions | BlocTech Solutions" />
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

export default DeliveryPolicy
