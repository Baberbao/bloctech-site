import React, { useContext } from "react"

import { Box, Container, Grid, styled, Typography } from "@mui/material"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import Banner from "../components/Banner"
import CustomButton from "../components/CustomButton"
import CustomCard3 from "../components/CustomCard3"
import SeoHelmet from "../components/SeoHelmet"
import Subheading from "../components/Subheading"

import { AppContext } from "../utils/utils"

import { motion, useIsPresent } from "framer-motion"

const Paragraph = styled(Typography)({
  fontWeight: 400,
  letterSpacing: "0.3px",
  color: "white",
  display: "flex",
  textAlign: "center",
  py: "30px 0px",
})

const mapData = [
  {
    alt: "Security Audits",
    title: "Security Audits",
    discription:
      "A comprehensive assessment of the code by the top smart contract auditors, to detect the loopholes in your smart contract.",

    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    icon: (
      <StaticImage
        src="../images/smartauditicon1.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(243, 23, 129, 0.5),   0px 0px 20px rgba(243, 23, 129, 0.5),  0px 0px 45px rgba(243, 23, 129, 0.5),  0px 0px 180px rgba(243, 23, 129, 0.5) ",
  },
  {
    alt: "Penetration Testing",
    title: "Penetration Testing",
    discription:
      "An extensive exercise attempting to find the vulnerabilities and system exploits was performed by an independent team of expert penetration testers.",

    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    icon: (
      <StaticImage
        src="../images/smartauditicon2.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(219, 36, 176, 0.5),   0px 0px 20px rgba(219, 36, 176, 0.5),  0px 0px 45px rgba(219, 36, 176, 0.5),  0px 0px 180px rgba(219, 36, 176, 0.5) ",
  },
  {
    alt: "Security Consulting",
    title: "Security Consulting",
    discription:
      "ImmuneBytes is one of the leading security consulting companies that helps you with an all-around systemic analysis to manage the security of the overall product.",

    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    icon: (
      <StaticImage
        src="../images/smartauditicon3.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5) ",
  },
]

const data = [
  "Smart Contract Audit is a process of a precisional analysis of the code written by the developers in the term of Smart Contract. An audit secures the code by resolving any vulnerabilities or errors that could expose the users or have the potential for future bugs.",
  "Anyone dealing with a smart contract or looking for launching a project, including a Defi, DApp, game, stablecoin, tokens, NFTs, or more on a blockchain platform, must seek a third-party security auditing solution to prevent their projects from an economic exploit.",
  "Smart contracts are self-executing codes that usually deal with financial and other valuable assets and tokens. Since blockchain is an immutable ledger, a smart contract, once deployed, cannot be altered. Hence, it is vital to audit a smart contract for its vulnerabilities and debug complex codes that often interact with each other, integrating a third-party system that makes the project susceptible to hacking and cybercrimes.",
]
const SmartContractAuditCompany = () => {
  const isPresent = useIsPresent()
  const { setOpen } = useContext(AppContext)

  const [index, setindex] = React.useState(0)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/smart-contract-audit-company/",
      },
      headline: "Smart Contract Audit",
      description:
        "Security is critical in the blockchain space. We, at BlocTech Solutions, provide a comprehensive smart contract audit service that helps everyone from startups to enterprises launch and maintain their Ethereum blockchain applications.",
      image: "",
      author: {
        "@type": "",
        name: "",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "",
    }
    return JSON.stringify(data)
  }
  return (
    <>
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
      />{" "}
      <SeoHelmet
        title="Smart contract audit - Services | BlocTech SolutionsCrypto Wallet Development Services | BlocTech Solutions"
        description="Being a smart contract audit company we offer smart contract audit service that facilitates businesses from startups to enterprises to optimize their blockchain applications."
        keywords="smart contract audit, smart contract auditing, smart contract audit company, smart contract security audit"
        structureData={structureData}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 4, ease: "circOut" } }}
        exit={{ opacity: 0, transition: { duration: 4, ease: "circIn" } }}
      >
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)",
          }}
        >
          <Banner
            heading="Smart Contract Audit"
            discription="Security is critical in the blockchain space. We, at
        BlocTech Solutions, provide comprehensive smart contract
        audit service helps everyone from startups to enterprises
        launch and maintain their Ethereum blockchain applications."
            image={
              <StaticImage
                src="../images/SmartAudit.png"
                alt="Crypto Wallet Development Services"
              />
            }
            buttonText="Get Free Assessment Now"
            backgroundColortext="#260238"
          />
        </Box>
        <Container>
          <Grid container spacing={3} my={5}>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                justifyContent="flex-start"
                pt={{ xs: 0, md: 0 }}
              >
                <StaticImage
                  src="../images/SmartContractAudit.png"
                  alt=" Smart contract audit"
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
            >
              <Box
                component="h1"
                fontSize={{ xs: "20px", sm: "34px" }}
                fontWeight={700}
                letterSpacing="0.2px"
                // color="primary.main"
                lineHeight={{ xs: "auto", sm: "56px" }}
                textAlign={{ md: "left", xs: "center" }}
                sx={{
                  background:
                    "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Smart Contract Audit:
              </Box>

              <Box
                component="p"
                mt={2}
                fontSize={{ xs: "12px", sm: "16px" }}
                fontWeight={400}
                color="white"
                letterSpacing="0.3px"
                textAlign="justify"
                lineHeight="22px"
              >
                Smart Contract Audit is an accounting procedure to elaborate on
                logical errors, security policies & optimized solutions within
                code. Our Smart Contract Audit enhances this step by eliminating
                loopholes and verifying economic logic to assemble a report that
                is easy to understand for developers & community members alike.
              </Box>
              <Box display="flex" justifyContent="flex-start" mt={5}>
                <CustomButton onClick={() => setOpen(true)}>
                  Get your smart contract audited
                </CustomButton>
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Subheading subHeading="BlocTech Delivers Blockchain Solutions" />
            <Paragraph
              component="p"
              fontSize={{ xs: "13px", sm: "16px" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
            >
              Along with guaranteeing cybersecurity and efficiency of smart
              contracts, BlocTech Solutions also enables easier smart contract
              integration and updatability by implementing:
            </Paragraph>
            <Grid
              container
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                my: 5,
              }}
            >
              {mapData.map(
                ({ title, discription, bg, icon, boxShadow }, index) => (
                  <Grid key={index} item md={4} sm={6} xs={12} mt="60px">
                    <CustomCard3
                      bg={bg}
                      discripton={discription}
                      image={icon}
                      title={title}
                      boxShadow={boxShadow}
                    />
                  </Grid>
                )
              )}
            </Grid>
            <Box my={3}>
              <Box
                component="p"
                textAlign="center"
                fontSize={{ xs: "12px", sm: "14px" }}
                fontWeight={800}
                color="white"
                letterSpacing="0.3px"
                lineHeight="22px"
              >
                Capitalize on our expertise to conduct smart contract audit.
              </Box>

              <Box display="flex" justifyContent="center" mt={2}>
                <CustomButton onClick={() => setOpen(true)}>
                  Get a quote
                </CustomButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <Subheading subHeading="Why Smart Contract Audit?" />

            <Box pt={10} pb={7}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <Paragraph
                    component="p"
                    fontSize={{ xs: "13px", sm: "16px" }}
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    pt="100px"
                    my={4}
                    sx={{
                      transition: "0.5",
                    }}
                  >
                    {data[index]}
                  </Paragraph>

                  <Box
                    display="flex"
                    justifyContent="space-evenly"
                    alignItems="center"
                    flexDirection={{ xs: "column", md: "row" }}
                    mt={2}
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to="https://wa.me/+923138604818"
                      target={"_blank"}
                    >
                      <CustomButton>CONNECT TO WHATSAPP</CustomButton>
                    </Link>

                    <Link
                      style={{ textDecoration: "none" }}
                      to="https://t.me/bloctechsolutions92"
                      target="_blank"
                    >
                      <CustomButton>CONNECT TO TELEGRAM</CustomButton>
                    </Link>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Grid container spacing={1} justifyContent="center">
                    <Grid item xs={12} sm={6} md={6}>
                      <Box
                        onClick={() => setindex(0)}
                        sx={{
                          background: "#41015F",
                          boxShadow: "9px 0px 26px #000000",
                          transition: "0.5s",
                          cursor: "pointer",
                          textAlign: "center",
                        }}
                        color="white"
                      >
                        <Box
                          m="auto"
                          // textAlign={"center"}

                          p={3}
                          height="100%"
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box mt={1} mb={3}>
                            <StaticImage
                              src="../images/smarticonchsnge1.png"
                              alt=" Smart contract audit"
                            />
                            {/* <img src={i1} alt="icon" /> */}
                          </Box>
                          <Box
                            component="h3"
                            fontSize={{ xs: "14px", md: "18px" }}
                            fontWeight={700}
                          >
                            What is a smart contract audit?
                          </Box>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                      <Box
                        onClick={() => setindex(1)}
                        sx={{
                          background: "#41015F",
                          boxShadow: "9px 0px 26px #000000",
                          transition: "0.5s",
                          cursor: "pointer",
                          textAlign: "center",

                          // mx: "5px",
                        }}
                        color="white"
                        bgcolor="#fff"
                      >
                        <Box
                          m="auto"
                          // textAlign={"center"}

                          p={3}
                          height="100%"
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box mt={1} mb={3}>
                            <StaticImage
                              src="../images/smarticonchsnge2.png"
                              alt=" Smart contract audit"
                            />

                            {/* <img src={i2} alt="icon" /> */}
                          </Box>
                          <Box
                            component="h3"
                            fontSize={{ xs: "14px", md: "18px" }}
                            fontWeight={700}
                          >
                            Who needs a smart contract audit?
                          </Box>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                      <Box
                        onClick={() => setindex(2)}
                        sx={{
                          background: "#41015F",
                          boxShadow: "9px 0px 26px #000000",
                          transition: "0.5s",
                          cursor: "pointer",
                          textAlign: "center",

                          // mx: "5px",
                        }}
                        color="white"
                        bgcolor="#fff"
                      >
                        <Box
                          m="auto"
                          // textAlign={"center"}

                          p={3}
                          height="100%"
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box mt={1} mb={3}>
                            <StaticImage
                              src="../images/smarticonchsnge3.png"
                              alt=" Smart contract audit"
                            />

                            {/* <img src={i3} alt="icon" /> */}
                          </Box>
                          <Box
                            component="h3"
                            fontSize={{ xs: "14px", md: "18px" }}
                            fontWeight={700}
                          >
                            Why is Smart Contract Audit important?
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <Box>
            <Subheading subHeading="Why Smart Contract Audit?" />

            <Carousel
              showDots={false}
              responsive={responsive}
              autoPlaySpeed={2000}
              autoPlay={true}
              infinite={true}
              transitionDuration={500}
              arrows={true}
            >
              <Box
                sx={{
                  background: "#120319",
                  boxShadow: "inset 31px 4px 183px #41015F",
                  borderRadius: "5px",
                  py: "70px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <StaticImage src="../images/solar.png" alt="Solar DEX" />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    to="../assets/Audit.pdf"
                    rel="noreferrer"
                    download
                  >
                    <CustomButton>View Audit</CustomButton>
                  </Link>
                </Box>{" "}
              </Box>
            </Carousel>
          </Box>
          <Box my={5}>
            <Subheading subHeading="Your trusted partner for smart contract security audits" />

            <Container maxWidth="md">
              <Paragraph
                component="p"
                fontSize={{ xs: "13px", sm: "16px" }}
                lineHeight={{ xs: "auto", sm: "22px" }}
              >
                We deliver user-friendly loophole-free audits of your Smart
                Contact. By following best practices our team performs audits
                for tokens, NFTs, crowd sales, marketplaces, gambling games,
                financial protocols, and much more. We provide the best combos
                of automated tools, static analysis, and a robust review process
                to provide recommendations for the project.
              </Paragraph>
            </Container>
            <Box display="flex" justifyContent="center" mt={2}>
              <CustomButton onClick={() => setOpen(true)}>
                Get a quote
              </CustomButton>
            </Box>
          </Box>
        </Container>
      </motion.div>
    </>
  )
}

export default SmartContractAuditCompany
