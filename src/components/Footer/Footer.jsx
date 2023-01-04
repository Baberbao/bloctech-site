import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material"

//image
import backgroundfooter from "../../images/backgroundfooter.png"

//Styled Component
const Heading = styled(Typography)({
  fontSize: { xs: "16px", sm: "14px" },
  fontWeight: 700,
  letterSpacing: "0.2px",
  color: "#fff",
  lineHeight: { xs: "auto", sm: "20px" },
  mb: 2,
})

const FooterLink = styled(Typography)({
  fontSize: { xs: "16px", sm: "14px" },
  fontWeight: 400,
  letterSpacing: "0.2px",
  lineHeight: { xs: "auto", sm: "20px" },
  color: "#fff",
})
const FooterEnd = styled(Typography)({
  backgroundColor: "#1B0525",
  display: "flex",
  justifyContent: "center",
  padding: "30px 0px",
  color: "#FFFFFF",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
})

const Footer = () => {
  const check = useMediaQuery("(max-width:750px)")
  return (
    <div>
      <>
        <Box
          sx={{
            background: `url(${backgroundfooter})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: { sm: "cover", xs: "cover" },
            backgroundPosition: { sm: "right", xs: "center" },
          }}
          // bgcolor="text.secondary"
          py={8}
        >
          <Container>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                textAlign={{ md: "left", xs: "center" }}
              >
                <StaticImage src="../../images/logo.png" alt="logo" />
              </Grid>
              <Grid
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
                item
                xs={6}
                sm={4}
                md={3}
              >
                <Heading>Company</Heading>

                <Link style={{ textDecoration: "none" }} to={"/career/"}>
                  <FooterLink>Career</FooterLink>
                </Link>

                <Link style={{ textDecoration: "none" }} to={"/faq/"}>
                  <FooterLink>Faqs</FooterLink>
                </Link>
                <Link style={{ textDecoration: "none" }} to={"/about-us/"}>
                  <FooterLink>About us</FooterLink>
                </Link>
              </Grid>
              <Grid
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
                item
                xs={6}
                sm={4}
                md={3}
              >
                <Heading>Support</Heading>
                <a
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  href="https://wa.me/+923138604818"
                  rel="noreferrer"
                >
                  <FooterLink>Support</FooterLink>
                </a>

                <Link
                  className="txt_dec"
                  to={"/privacy-policy/"}
                  style={{ textDecoration: "none" }}
                >
                  <FooterLink>Privacy</FooterLink>
                </Link>
                <Link
                  className="txt_dec"
                  to={"/terms/"}
                  style={{ textDecoration: "none" }}
                >
                  <FooterLink>Terms</FooterLink>
                </Link>

                <Link
                  className="txt_dec"
                  to={"/cookiepolicy/"}
                  style={{ textDecoration: "none" }}
                >
                  <FooterLink>Cookies Policy</FooterLink>
                </Link>

                <Link
                  className="txt_dec"
                  to={"/delivery-policy/"}
                  style={{ textDecoration: "none" }}
                >
                  <FooterLink>Delivery Policy</FooterLink>
                </Link>
                <Link
                  className="txt_dec"
                  to={"/refund-policy/"}
                  style={{ textDecoration: "none" }}
                >
                  <FooterLink>Refund Policy</FooterLink>
                </Link>
              </Grid>
              <Grid
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  mt: check ? 4 : 0,
                }}
                item
                xs={12}
                sm={4}
                md={3}
              >
                <Heading>Company Address</Heading>

                {check ? (
                  ""
                ) : (
                  <Box
                    width="100%"
                    fontSize={{ xs: "16px", sm: "14px" }}
                    fontWeight={400}
                    letterSpacing="0.2px"
                    textAlign={{ xs: "center ", md: "left" }}
                    color="white"
                    sx={{
                      wordBreak: "break-word",
                    }}
                  >
                    5th Floor, GM Plaza, Kohinoor City, Faisalabad, Punjab 38000
                  </Box>
                )}

                {check ? (
                  ""
                ) : (
                  <a
                    style={{ color: "#fff", textDecoration: "none" }}
                    href="mailto:contact@bloctechsolutions.com"
                  >
                    <Box
                      width="100%"
                      fontSize={{ xs: "16px", sm: "14px" }}
                      fontWeight={400}
                      letterSpacing="0.2px"
                      textAlign={{ xs: "center ", md: "left" }}
                      color="white"
                      sx={{
                        wordBreak: "break-word",
                      }}
                    >
                      contact@bloctechsolutions.com
                    </Box>
                  </a>
                )}
                {check ? (
                  <></>
                ) : (
                  <>
                    {" "}
                    <Box
                      width="100%"
                      fontSize={{ xs: "16px", sm: "14px" }}
                      fontWeight={400}
                      letterSpacing="0.2px"
                      textAlign={{ xs: "center ", md: "left" }}
                      color="white"
                      sx={{
                        wordBreak: "break-word",
                      }}
                    >
                      Phone# (+92)03138604818
                    </Box>
                  </>
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>

        <FooterEnd>All rights Reserved @ bloctechsolutions 2022</FooterEnd>
      </>
    </div>
  )
}

export default Footer
