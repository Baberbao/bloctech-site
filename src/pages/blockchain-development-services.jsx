import React, { useContext } from "react"

import { Box, Container, Grid, Typography } from "@mui/material"

import { StaticImage } from "gatsby-plugin-image"

import expertbg from "../images/expertbg.png"
import Banner from "../components/Banner"
import Subheading from "../components/Subheading"
import CustomButton from "../components/CustomButton"
import SeoHelmet from "../components/SeoHelmet"
import CustuomCard from "../components/CustuomCard"

import { motion, useIsPresent } from "framer-motion"

import { AppContext } from "../utils/utils"

const data = [
  {
    img: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    link: "/private-blockchain-services/",
    title: "Private blockchain networks",
    description:
      "Build private and controlled participants network, execute the consensus protocol to decide the mining rights and rewards, and maintain the shared ledger.",
  },
  {
    img: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    title: "Blockchain Consulting Services",
    link: "/blockchain-consulting-services/",
    description:
      "Get encrypted peer-to-peer apps with no single point of failure and zero downtime and get rid of data breach and hacking attempt.",
  },
  {
    img: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    title: "Centralized Exchange ",
    link: "/centralized-exchange-development/",
    description:
      "With smart contracts ensure protocols that guarantee the integrity of multi-party agreements and automatically enforce fixed obligations.",
  },

  {
    img: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    title: "Crypto wallets",
    link: "/crypto-wallet-development-service/",
    description:
      "Get a physical medium or a device to store public and private keys for cryptocurrency transactions.",
  },
]

const BlockchainDevelopmentServices = () => {
  const isPresent = useIsPresent()

  const { setOpen } = useContext(AppContext)
  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blockchain-development-services/",
      },
      headline: "Blockchain Development Services",
      description:
        "Blockchain development services help create decentralized blockchain networks that provide increased traceability and security of data and transactions.",
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
      />
      <SeoHelmet
        title="Blockchain Development Services | BlocTech Solutions"
        description="we provide Blockchain development services, we work on Data security and traceability, and help organizations to build credible and sustainable blockchain solutions."
        keywords="Blockchain development services, Blockchain developments"
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
            heading="Blockchain Development Services"
            discription=" Blockchain development services help create decentralized
        blockchain networks that provide increased traceability and
        security of data and transactions. A software development
        company with several years of experience, BlocTech Solutions
        offers end-to-end blockchain application development services
        to help product companies and non-IT enterprises build
        reliable blockchain solutions."
            image={
              <StaticImage
                src="../images/Blockchain-Development-Services.png"
                alt="Blockchain-Development-Services"
              />
            }
            buttonText="Get your Blockchain Product"
            backgroundColortext="#260238"
          />
        </Box>
        <Box>
          <Container>
            <Subheading subHeading="BlocTech Delivers Blockchain Solutions" />

            <Grid
              container
              justifyContent="center"
              display="flex"
              spacing={5}
              my={4}
            >
              {data.map(({ title, description, link }, index) => (
                <Grid key={index} item xs={12} md={4} textAlign={"center"}>
                  {/* <GoalCard img={img} title={title} bg={bg} boxShadow={boxShadow} /> */}
                  <CustuomCard
                    title={title}
                    discription={description}
                    // bg={bg}
                    // boxShadow={boxShadow}
                    link={link}
                    buttonText="Learn more"
                  />
                </Grid>
              ))}
            </Grid>
            <Subheading subHeading="A Sample Blockchain Architecture" />
            <StaticImage
              src="../images/archi.png"
              alt="Blockchain Architecture"
            />

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={5}
              my={5}
            >
              <Box
                sx={{
                  background: `url(${expertbg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: { sm: "top center", xs: "left" },
                  p: 6,
                }}
              >
                <Grid item md={6} xs={12}>
                  <Box py={2}>
                    <Typography
                      variant="h2"
                      fontSize={{ xs: "20px", sm: "33px" }}
                      fontWeight={700}
                      letterSpacing="0.2px"
                      // color="#3B3F6D"
                      lineHeight={{ xs: "auto", sm: "40px" }}
                      sx={{
                        fontFamily: "Mulish",
                        background:
                          "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                      }}
                    >
                      Get Expert Help to Roll Out Blockchain Software
                    </Typography>
                    <Typography
                      variant="body1"
                      my={3}
                      fontSize={{ xs: "12px", sm: "16px" }}
                      fontWeight={400}
                      color="white"
                      letterSpacing="0.3px"
                      lineHeight="22px"
                    >
                      BlocTech Solutions is ready to build:
                    </Typography>
                    <Box
                      fontWeight={400}
                      color="white"
                      letterSpacing="0.3px"
                      lineHeight="22px"
                    >
                      <ul className="blocklist">
                        <li>
                          <span
                            style={{ fontWeight: "bold", fontSize: "20px" }}
                          >
                            Blockchain-based products
                          </span>
                          for product companies to generate revenue fast.
                        </li>
                        <li>
                          <span
                            style={{ fontWeight: "bold", fontSize: "20px" }}
                          >
                            Tailored blockchain solutions
                          </span>
                          for non-IT enterprises to improve the trust,
                          transparency and security of their businesses.
                        </li>
                      </ul>
                    </Box>
                    <CustomButton onClick={() => setOpen(true)}>
                      REQUEST ASSISTANCE
                    </CustomButton>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Container>
        </Box>
      </motion.div>
    </>
  )
}

export default BlockchainDevelopmentServices
