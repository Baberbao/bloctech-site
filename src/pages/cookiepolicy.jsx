import React from "react"
import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material"
import { Link } from "gatsby"
import { motion, useIsPresent } from "framer-motion"

import SeoHelmet from "../components/SeoHelmet"
import CustomCard3 from "../components/CustomCard3"

//images
import img from "../assets/privacyBg.png"

//Styled Component
const HeadingTwo = styled(Typography)({
  background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  fontFamily: "Mulish",
  fontWeight: 700,
  letterSpacing: "0.2px",
  color: "#3B3F6D",
})
const Paragraph = styled(Typography)({
  fontWeight: 400,
  letterSpacing: "0.3px",
  color: "#fff",
  lineHeight: { xs: "auto", md: "22px" },
  fontSize: { xs: "13px", md: "16px" },
  textAlign: "justify",
})

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
          Cookies Policy
        </Box>
      </Box>
    </Box>
  )
}

const introCards = [
  {
    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    boxShadow:
      "0px 0px 5px rgba(255, 53, 17, 0.52),   0px 0px 20px rgba(255, 53, 17, 0.52),  0px 0px 45px rgba(255, 53, 17, 0.52),  0px 0px 180px rgba(255, 53, 17, 0.52)",
    title: "Strictly Necessary Cookies",
    content:
      "These are cookies that are required for the operation of our Website.",
  },
  {
    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    boxShadow:
      "0px 0px 5px rgba(219, 36, 176, 0.5),   0px 0px 20px rgba(219, 36, 176, 0.5),  0px 0px 45px rgba(219, 36, 176, 0.5),  0px 0px 180px rgba(219, 36, 176, 0.5)",
    title: "Performance and Functionality Cookies",
    content:
      "These are used to recognize you when you return to our Website. This enables us to personalize our content for you and remember your preferences, but are non-essential to the performance of the Website.",
  },
  {
    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5)",
    title: "Analytical or Customization Cookies",
    content:
      "These cookies collect information about how users access and move through the Website. We use this information in either aggregate form to help us to improve the way our Website works, or to personalize our Website to your interests.",
  },
  {
    bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    boxShadow:
      "0px 0px 5px rgba(21, 76, 229, 0.5),   0px 0px 20px rgba(21, 76, 229, 0.5),  0px 0px 45px rgba(21, 76, 229, 0.5),  0px 0px 180px rgba(21, 76, 229, 0.5)",
    title: "Social Media Cookies",
    content:
      "These cookies allow us to integrate social media functions into our Website. Depending on the lifetime cycle, the cookies might be: Persistent Cookies will remain stored on your device until deleted or until they reach their expiry date, and Session Cookies that are temporary and removed at once from your device after your web browser closes.",
  },
]

const Cookies = () => {
  const isPresent = useIsPresent()
  return (
    <div>
      <SeoHelmet title="Cookie Policy BlocTech Solutions | BlocTech Solutions" />
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

        <Container maxWidth="lg">
          <Paragraph py={5}>Last updated: April 25, 2022</Paragraph>

          {/* Recitals section */}
          <Box pb={10}>
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              Recitals
            </HeadingTwo>
            <Box component="p" mt={2} ml={4}>
              <Paragraph>
                This Policy describes the usage of cookies on Bloctech Solutions
                website (“Website”) and explains your rights to control our use
                of them. We use cookies to improve user experience on our
                Website through personalization and analytics. Should you have
                any questions about this Policy, please contact us at
                support@bloctechsolutions.com .<br />
                <br /> By using the Website, you are consenting to our use of
                cookies in accordance with this Policy. If you do not agree to
                our cookies in this way, you should set your browser settings
                accordingly as recommended in section 4 below or not use the
                Website. Please note that if you disable cookies that we use,
                this may impact your user experience while on the Website or
                prevent you from visiting the Website at all.
                <br />
                <br /> When you first access the Website, you may receive a
                message advising you that cookies are in use. By clicking the OK
                button, or closing the message, or continuing to browse the
                Website, you signify that you understand and agree to the use of
                the respective technologies, as described in this Cookies
                Policy.
              </Paragraph>
            </Box>
            {/* //////////////////////// */}

            {/*  What are Cookies? part */}
            <Box mt={5}>
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                What are Cookies?
              </HeadingTwo>

              <Box component="p" mt={2} ml={4}>
                <Paragraph>
                  Cookies are small files containing a string of characters that
                  may be stored on your computer (or other devices, such as
                  smartphone or tablet) when you visit the Website. This allows
                  us to distinguish your device from those of other users of our
                  Website. Cookies will usually contain the name of a website
                  the cookies come from, how long it will stay on your device
                  and a randomly generated unique id number. Cookies may store
                  your preferences and other information but cannot read data
                  off your hard disk or read cookie files created by other
                  sites. <br />
                  <br /> Cookies set by a website owner are called “first party
                  cookies”. Cookies set by parties other than the website owner
                  are called “third party cookies”. Third party cookies enable
                  third party features or functionality to be provided on or
                  through the Website (i.e. social media functions and
                  analytics). Third parties that place cookies on the Website
                  control the personal data they collect about you. You are
                  encouraged to read their privacy policies to understand their
                  data processing activities, policies and procedures.
                </Paragraph>
              </Box>
            </Box>
            {/* //////////////////////// */}

            {/*  Cookies we use part */}
            <Box mt={5}>
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                The Cookies we use
              </HeadingTwo>

              <Box component="p" mt={2} ml={4}>
                <Paragraph>
                  We use cookies for a variety of reasons. Cookies make it
                  easier for you to log on to and use the Website during visits.
                  The aggregate information collected permits us to analyze
                  traffic patterns and target the interests of our users. This
                  helps us provide you with a better experience by improving the
                  content and making our Website easier to use.
                  <br />
                  <br />
                  We use the following categories of cookies:
                </Paragraph>
              </Box>
              <Grid
                container
                spacing={3}
                sx={{
                  marginTop: "2px",
                  marginBottom: "40px",
                  paddingLeft: 4,
                }}
              >
                {introCards.map(({ bg, title, content, boxShadow }, i) => {
                  return (
                    <Grid key={i} item xs={11} sm={5.5}>
                      <CustomCard3
                        title={title}
                        discripton={content}
                        bg={bg}
                        boxShadow={boxShadow}
                      />
                    </Grid>
                  )
                })}
              </Grid>
            </Box>
            {/* //////////////////////// */}

            {/*  control Cookies part */}
            <Box mt={5}>
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                How to control Cookies
              </HeadingTwo>

              <Box mt={2} ml={4}>
                <Paragraph>
                  You may refuse to accept cookies by changing the corresponding
                  settings in your web browser. However, if you choose to do so,
                  you might be unable to access certain content of the Website
                  or it may prevent you from visiting the Website at all. Unless
                  you change your web browser settings regarding cookies, our
                  systems will place cookies on your device when you visit our
                  Website. You can refuse the setting of all or some cookies.
                  <br /> Please follow the links below to helpful information
                  for the most popular browsers:
                  <ul>
                    <li style={{ wordBreak: "break-word" }}>
                      Microsoft Internet Explorer: <br />
                      <a
                        target="_blank"
                        href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies"
                        style={{ color: "#fff" }}
                        rel="noreferrer"
                      >
                        https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
                      </a>
                    </li>
                    <li style={{ marginTop: "20px", wordBreak: "break-word" }}>
                      Google Chrome: <br />
                      <Link
                        target="_blank"
                        to="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en"
                        style={{ color: "#fff" }}
                      >
                        https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en
                      </Link>
                    </li>
                    <li style={{ marginTop: "20px", wordBreak: "break-word" }}>
                      Mozilla Firefox: <br />
                      <Link
                        target="_blank"
                        to="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                        style={{ color: "#fff" }}
                      >
                        https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
                      </Link>
                    </li>
                    <li style={{ marginTop: "20px", wordBreak: "break-word" }}>
                      Safari: <br />
                      <Link
                        target="_blank"
                        to="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                        style={{ color: "#fff" }}
                      >
                        https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                      </Link>
                    </li>
                  </ul>
                </Paragraph>
              </Box>
            </Box>
            {/* //////////////////////// */}

            {/*  General part */}
            <Box mt={5}>
              {/* <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }} >General</HeadingTwo> */}

              <Box component="p" mt={2} ml={4}>
                <Paragraph>
                  We may change this policy from time to time, please check it
                  regularly for any changes. If there are any discrepancies
                  between the cookies we use and the cookies listed in section 3
                  hereinabove, they will be aligned during the next periodic
                  review that we run quarterly. <br />
                  <br />
                  <span style={{ fontWeight: "700" }}>
                    Should you have any questions about this Policy, please
                    contact us at support@bloctechsolutions.com.
                  </span>
                </Paragraph>
              </Box>
            </Box>
            {/* //////////////////////// */}
          </Box>
        </Container>
      </motion.div>
    </div>
  )
}

export default Cookies
