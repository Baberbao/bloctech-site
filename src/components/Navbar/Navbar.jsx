import React, { useContext } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//MUI
import { Box, Container, useMediaQuery } from "@mui/material"
import { styled } from "@mui/material/styles"
import CustomButton from "../CustomButton"
import Dropdown from "./Dropdown"
import Sidebar from "./Sidebar"

import { AppContext } from "../../utils/utils"

import { motion, useScroll, useSpring } from "framer-motion"

//Styled Component
const NavMain = styled(Box)({
  position: "sticky",
  zIndex: 1000,
  background: "#280959",
  top: "0",
  width: "100%",
  py: 1,
})

const TopNav = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "65px",
})
const DesktopNav = styled(Box)({
  display: "flex",
  flexBasis: "70%",
  justifyContent: "flex-end",
  alignItems: "center",
})
export const StyledLink = styled(Box)({
  "&:hover": {
    color: "#CC10C6",
  },
  "&:active": {
    color: "#CC10C6",
  },
  cursor: "pointer",
  padding: "5px  8px",
  borderRadius: "10px",
  transition: "1s",
  fontFamily: "Mulish",
  fontSize: { xs: "12px", sm: "16px" },
  fontWeight: 600,
  letterSpacing: "0.2px",
  color: "white",
})
//Dropdown

const Navbar = () => {
  const matches = useMediaQuery("(max-width:1000px)")
  const { setOpen } = useContext(AppContext)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {matches ? (
        <Sidebar />
      ) : (
        <>
          <NavMain>
            <Container maxWidth="lg">
              <TopNav>
                <Link style={{ textDecoration: "none" }} to={"/"}>
                  <Box>
                    <StaticImage src="../../images/logo.png" alt="logo" />
                  </Box>
                </Link>
                <DesktopNav>
                  <Link style={{ textDecoration: "none" }} to={"/about-us/"}>
                    <StyledLink>About Us</StyledLink>
                  </Link>
                  <StyledLink>Services</StyledLink>
                  <StyledLink> Products</StyledLink>
                  <Dropdown />
                </DesktopNav>
                <Box>
                  <CustomButton onClick={() => setOpen(true)}>
                    {" "}
                    Contact Us{" "}
                  </CustomButton>
                </Box>
                {/* <Sidebar /> */}
              </TopNav>
            </Container>
          </NavMain>
        </>
      )}
      <motion.div
        className="progress"
        style={{
          scaleX,
          position: "fixed",
          left: "0",
          right: "0",
          height: "5px",
          background: "#DB24B0",
          top: matches ? "81px" : "65px",
          zIndex: 10000000,
          borderRadius: "10px",
        }}
      />
    </>
  )
}

export default Navbar
