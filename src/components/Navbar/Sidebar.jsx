import React, { useState } from "react"
import { motion } from "framer-motion"
import { styled } from "@mui/material/styles"
import { Box, Container } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { StyledLink } from "./Navbar"
import { Link } from "gatsby"
import Dropdown from "./Dropdown"
const Header = styled("div")`
  background: #280959;
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 65px;
`

const Nav = styled(motion.nav)`
  background-color: rgba(40, 9, 89, 0.8);
  height: 50vh;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  margin-top: 65px;
`

const AnimatedLink = styled(motion.span)`
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.5s;
  /* margin-top: -20px; */
`

const SvgBox = styled(motion.div)`
  margin-top: 18px;
`

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const iconVariants = {
    opened: {
      rotate: 135,
      y: -20,
      x: -10,
    },
    closed: {
      rotate: 0,
    },
  }

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    closed: {
      top: "-90vh",
    },
  }

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  }
  return (
    <Box>
      <Box
        sx={{
          background: "#280959",
          zIndex: "1000",
          py: 1,
          width: "100%",
          position: "fixed",
        }}
      >
        <Container>
          <Header>
            <Box mt="3px">
              <Link style={{ textDecoration: "none" }} to={"/"}>
                <StaticImage src="../../images/logo.png" alt="logo" />
              </Link>
            </Box>
            <SvgBox
              variants={iconVariants}
              animate={isOpen ? "opened" : "closed"}
              whileHover={{ scale: 1.4 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                  fill="#fff"
                />
              </svg>
            </SvgBox>
          </Header>
        </Container>
      </Box>
      <Nav
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
        <AnimatedLink onClick={() => setIsOpen(false)} variants={linkVariants}>
          <Link style={{ textDecoration: "none" }} to={"/about-us/"}>
            <StyledLink>About Us</StyledLink>
          </Link>
        </AnimatedLink>
        <AnimatedLink onClick={() => setIsOpen(false)} variants={linkVariants}>
          <StyledLink>Services</StyledLink>
        </AnimatedLink>
        <AnimatedLink onClick={() => setIsOpen(false)} variants={linkVariants}>
          <StyledLink> Products</StyledLink>
        </AnimatedLink>
        <AnimatedLink variants={linkVariants}>
          <Dropdown />
        </AnimatedLink>
      </Nav>
    </Box>
  )
}

export default Sidebar
