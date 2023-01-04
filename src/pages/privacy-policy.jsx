import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material"
import React from "react"
import SeoHelmet from "../components/SeoHelmet"
import { motion, useIsPresent } from "framer-motion"

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
          PRIVACY POLICY
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
          This Privacy Policy governs the manner in which bloctechsolutions.com
          collects, uses, maintains and discloses
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          information collected from users (each, a "User") of the
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          bloctechsolutions.com website ("Bloctech website", "our website",
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          "this website"). This privacy policy applies to Bloctech website and
          all products and services offered by bloctechsolutions.com.
        </Box>
      </Box>
    </Box>
  )
}

const securityCards = [
  {
    title: "Fairness and lawfulness",
    content:
      "We process your personal data only after obtaining your consent for the processing, and for a determined specific purpose.",
  },
  {
    title: "Transparency",
    content:
      "We process your personal data in a transparent manner, and only with your knowledge.",
  },
  {
    title: "Purpose limitation",
    content:
      "Your personal data is processed within the purposes outlined above.",
  },
  {
    title: "Data minimization",
    content:
      "we only process your personal data to the extent that it is actually needed to achieve the processing purposes.",
  },
  {
    title: "Accuracy",
    content:
      "we ensure that your personal data is accurate and kept up to date.",
  },
  {
    title: "Storage limitation",
    content:
      "your personal data will be processed for the limited period of 5 years, if no other contractual obligations with you allow a longer time period.",
  },
  {
    title: "Integrity and confidentiality",
    content:
      "we secure your personal data with suitable organizational and technical measures.",
  },
  {
    title: "Accountability",
    content:
      "we will be responsible for, and be able to demonstrate compliance with the above- mentioned principles.",
  },
]

const Privacy = () => {
  const isPresent = useIsPresent()
  return (
    <div>
      <SeoHelmet title="Privacy Policy BlocTech Solutions | BlocTech Solutions" />
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
          {/* introduction section */}
          <Box py={10}>
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              Introductory statement
            </HeadingTwo>
            <Box component="p" mt={2} ml={4}>
              <Paragraph>
                The privacy and confidentiality of your personal data is a top
                priority for Bloctech Analytics (“Bloctech”). This privacy
                policy governs the manner in which Bloctech processes personal
                data obtained from its website users. By using our website,
                providing us with your personal data, and reading this policy:
              </Paragraph>
            </Box>

            {/* //////////////////////// */}

            {/* personal data part */}
            <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
              The personal data we may collect and how we may use it
            </HeadingTwo>

            <Box mt={2} ml={4}>
              <Paragraph>
                We only collect personal data from you that is necessary for us
                to allow you to utilize our Bloctech website. Examples of
                personal data that we may collect from you are the following:
                <ul>
                  <li>Full Name.</li>
                  <li>Record of communication.</li>
                  <li>Email.</li>
                </ul>
                We keep a record of your communication with us to address
                potential issues you might face. We may use your email address
                to inform you about our services, changes or improvements. When
                using our website, we may collect the following information
                about you:
              </Paragraph>
            </Box>

            <Box mt={4} ml={4}>
              <Paragraph>
                All of the above collected information is used for
                organizational, administrative and internal reasons. We do not
                provide this information to third parties, except as required by
                law. <br />
                <br /> The Bloctech website is not directed at children under
                the age of 16 and does not knowingly collect any personally
                identifiable information from children under the age of 16.
              </Paragraph>
            </Box>
            {/* //////////////////////// */}

            {/* how Collect data part */}
            <Box mt={5}>
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                How we collect your personal data:
              </HeadingTwo>
              <Box component="p" mt={2} ml={4}>
                <Paragraph>
                  We use cookies, web beacons, tags and scripts, and other
                  similar technologies including local storage objects such as
                  HTML5. These technologies allow us to manage access to and use
                  of the Bloctech website, recognize you and help us understand
                  how you use our website. <br /> <br /> Cookies are files or
                  pieces of information that may be stored on your computer (or
                  other devices, such as smartphone or tablet) when you visit
                  Bloctech website. This allows us to distinguish your device
                  from those of other users of our website. A cookie will
                  usually contain the name of the website the cookie has come
                  from, how long it will stay on your device, and a randomly
                  generated unique id number. <br />
                </Paragraph>
              </Box>
            </Box>
            {/* //////////////////////// */}

            {/* purposes data part */}
            <Box mt={5}>
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                Main purposes of processing
              </HeadingTwo>
              <Box
                mt={2}
                ml={4}
                sx={{
                  fontSize: "16px",
                  lineHeight: "22px",
                  letterSpacing: "0.3px",
                  color: "#FFFFFF",
                  textAlign: "justify",
                }}
              >
                We use your personal data for the following purposes:
                <ul>
                  <li> To personalize the user experience.</li>
                  <li>
                    To operate, provide, improve, and maintain our website and
                    services.
                  </li>
                  <li>
                    To respond to your inquiries and for other customer service
                    purposes and for other administrative and internal business
                    purposes.
                  </li>
                </ul>
              </Box>
            </Box>
            {/* //////////////////////// */}

            {/* Security data part */}
            <Box mt={5}>
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                Security of your personal data
              </HeadingTwo>
              <Box component="p" mt={2} ml={4}>
                <Paragraph>
                  Bloctech uses a variety of security measures to keep your
                  personal data protected from unauthorised access and
                  disclosure. Bloctech processes your personal data, e.g., based
                  on the following principles:
                </Paragraph>
              </Box>

              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: "15px",
                  textAlign: "center",
                  paddingLeft: 4,
                }}
              >
                {securityCards.map(({ title, content }, i) => {
                  return (
                    <Grid item xs={12} sm={6} md={3} key={i}>
                      <Box
                        bgcolor="#41015F"
                        height="100%"
                        px={3}
                        py={6}
                        sx={{
                          borderRadius: "5px",
                          "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow:
                              "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
                          },
                          transition: "0.3s",
                        }}
                      >
                        <Typography
                          variant="h3"
                          pb={3}
                          fontSize={{ xs: "17px", md: "20px" }}
                          fontWeight="700"
                          lineHeight="22px"
                          color="#fff"
                        >
                          {title}
                        </Typography>

                        <Typography
                          variant="p"
                          fontSize={{ xs: "14px", md: "16px" }}
                          lineHeight="22px"
                          color="#fff"
                        >
                          {content}
                        </Typography>
                      </Box>
                    </Grid>
                  )
                })}
              </Grid>
            </Box>
            {/* //////////////////////// */}

            {/* access data part */}
            <Box mt={5}>
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                Access to your personal data
              </HeadingTwo>

              <Box
                component="p"
                mt={2}
                ml={4}
                sx={{
                  width: "90%",
                }}
              >
                <Paragraph>
                  Only a limited number of Bloctech employees who are
                  responsible for the maintenance of our website and for
                  customer relations have access to your personal data.
                </Paragraph>
              </Box>
            </Box>
            {/* //////////////////////// */}

            {/* processing actions part */}
            <Box mt={5}>
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                Main processing actions with your personal data{" "}
              </HeadingTwo>

              <Box
                component="p"
                mt={2}
                ml={4}
                sx={{
                  width: "90%",
                }}
              >
                <Paragraph>
                  We may process your personal data mostly by way of collection,
                  storing, recording and structuring. However, we cannot exclude
                  other ways of data processing, if necessary for the
                  above-mentioned purposes.
                </Paragraph>
              </Box>
            </Box>
            {/* //////////////////////// */}

            {/* store personal data part */}
            <Box mt={5}>
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                Where we store your personal data
              </HeadingTwo>

              <Box
                component="p"
                mt={2}
                ml={4}
                sx={{
                  width: "90%",
                }}
              >
                <Paragraph>
                  All your personal data collected by us is stored on our secure
                  servers and hosting company such as godaddy.com.
                </Paragraph>
              </Box>
            </Box>
            {/* //////////////////////// */}

            {/* Disclosure personal data part */}
            <Box mt={5}>
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                Disclosure of your personal data
              </HeadingTwo>

              <Box
                component="p"
                mt={2}
                ml={4}
                sx={{
                  width: "90%",
                }}
              >
                <Paragraph>
                  We use our best efforts not to disclose any confidential
                  information to third parties. The Bloctech website maintains a
                  secure site, but you should know that computer use may be
                  monitored by third parties such as network administrators,
                  employers, internet providers, and operation system & internet
                  browser vendors, and, thus, we cannot guarantee the security
                  of information you post online. You disclose all information
                  online at your own risk. Please remember that this website may
                  be hosted outside your home country, and your email
                  communications to us may be directed to a server that is
                  hosted outside your home country. Communications over the
                  Internet may not be secure.
                </Paragraph>
              </Box>
            </Box>
            {/* //////////////////////// */}

            {/* Third party part */}
            <Box mt={5}>
              <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                Third party provided content/links
              </HeadingTwo>

              <Box
                component="p"
                mt={2}
                ml={4}
                sx={{
                  width: "90%",
                }}
              >
                <Paragraph>
                  Users may find content and products of other companies or
                  organizations on our website and/or links to the sites and
                  services of our suppliers, licensors, or other third parties.
                  Please note that we do not control these sites. Each such
                  third party is solely responsible for complying with the laws,
                  rules and regulations applicable to its business and the
                  operation of its own website. For any questions regarding your
                  personal data please feel free to contact Bloctech Data
                  Protection Officer at dpo@bloctechsolutions.com.
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

export default Privacy
