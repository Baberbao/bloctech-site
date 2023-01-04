import React, { useContext } from "react"

import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material"

import { StaticImage } from "gatsby-plugin-image"

import Banner from "../components/Banner"
import CustomButton from "../components/CustomButton"
import CustomCard3 from "../components/CustomCard3"
import SeoHelmet from "../components/SeoHelmet"
import Subheading from "../components/Subheading"

import { motion, useIsPresent } from "framer-motion"

import { AppContext } from "../utils/utils"

const Paragraph = styled(Typography)({
  fontWeight: 400,
  letterSpacing: "0.3px",
  color: "white",
  display: "flex",
  textAlign: "center",
  py: "30px 0px",
})

const Carddata = [
  {
    img: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    title: "Get Rid from Intermediaries and Gatekeepers",
    description:
      "Get more authority as there is no limit or restriction to create and use DeFi applications for participants. This system disqualifies the role of gatekeepers and intermediaries and encourages greater participation.It also rewards users freedom as DeFi apps typically allow them to retain their private keys, and be in control of their finances.",
    boxShadow:
      "0px 0px 5px rgba(243, 23, 129, 0.5),   0px 0px 20px rgba(243, 23, 129, 0.5),  0px 0px 45px rgba(243, 23, 129, 0.5),  0px 0px 180px rgba(243, 23, 129, 0.5)",
  },
  {
    img: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    title: "Attain 100% Transparency",
    description:
      "With DeFi applications’ code transparency of data and transactions reaches to maximal level. This enables participants to completely comprehend how the application works or even to enhance its efficiency by identifying bugs.Public distribution of transaction details brings greater market efficiency because there is no information asymmetry such as in traditional finances.",
    boxShadow:
      "0px 0px 5px rgba(219, 36, 176, 0.5),   0px 0px 20px rgba(219, 36, 176, 0.5),  0px 0px 45px rgba(219, 36, 176, 0.5),  0px 0px 180px rgba(219, 36, 176, 0.5)",
  },
  {
    img: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    title: "Give Major Relief to Your Budget",
    description:
      "All praises to the efficiency and resourcefulness of blockchain, the automation of smart contracts, and their immutability, transaction costs with DeFi apps are significantly lower than for traditional services. This guarantees greater buy-in from users.The reason behind such cost-effectiveness basically comes due to elimination of third party involvement like intermediaries and governing bodies.",
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5)",
  },
  {
    img: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    title: "No Need to Put Your Trust at Risk",
    description:
      "DeFi applications users are free to put their trust at stake of any authority. On the contrary, users enjoy full control over their assets and investments. They can have access to their assets and handle them any time and from anywhere in the world without acquiring any permission from anyone.",
    boxShadow:
      "0px 0px 5px rgba(21, 76, 229, 0.5),   0px 0px 20px rgba(21, 76, 229, 0.5),  0px 0px 45px rgba(21, 76, 229, 0.5),  0px 0px 180px rgba(21, 76, 229, 0.5)",
  },
  {
    img: "linear-gradient(180deg, #00E4E7 0%, #2DA7F2 100%)",
    title: " Provide Interoperability",
    description:
      "DeFi applications can form entirely new products by combining or collaborating with others. Thanks to the nature of smart contracts which enables us to form such products. In this way, a host of different services can be created collectively to meet various user requirements.",
    boxShadow:
      "0px 0px 5px rgba(0, 227, 231, 0.5),   0px 0px 20px rgba(0, 227, 231, 0.5),  0px 0px 45px rgba(0, 227, 231, 0.5),  0px 0px 180px rgba(0, 227, 231, 0.5)",
  },
]

const data = [
  {
    img: (
      <StaticImage src="../images/dafi1.png" alt="DeFi Product Development" />
    ),
    title: "Use-case analysis",
    description:
      "Use case analysis is a technique first used to identify and understand the requirements of a client, then offer the client a suitable solution on the basis of collected information and minute observations of client’s interest and demand. This creates the basic plan for the development of the DeFi product and the next steps.",
  },
  {
    img: (
      <StaticImage src="../images/dafi2.png" alt="DeFi Product Development" />
    ),
    title: "External Dependencies and Integrations Analysis",
    description:
      "Besides the use-case analysis itself, external dependencies of the DeFi product must be addressed and taken into account. This analysis is necessary to plan integrations with third-parties that are essential for transactions or other services.",
  },
  {
    img: (
      <StaticImage src="../images/dafi3.png" alt="DeFi Product Development" />
    ),
    title: "Use-Case Smart Contracts Development and Testing",
    description:
      "In the wake of initial analysis, work on smart contract development gets initiated. Smart contracts are held accountable for the seamless and automated operation of the DeFi. Smart contracts are immutable and cannot easily be modified. Due to this reason, once developed, they are also tested extensively and repeatedly to ensure that there are no bugs or errors left in them.",
  },
  {
    img: (
      <StaticImage src="../images/dafi4.png" alt="DeFi Product Development" />
    ),
    title: "Front-end Application Development",
    description:
      "Finally, before the DeFi is launched, the application’s front-end is developed. Following its completion and after further tests, the DeFi is ready to use!",
  },
]
const DefiDevelopmentServices = () => {
  const isPresent = useIsPresent()
  const { setOpen } = useContext(AppContext)
  const matches = useMediaQuery("(max-width:700px)")

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.bloctechsolutions.com/defi-development-services/",
      },
      headline: "DeFi Product Development",
      description:
        "Decentralized Finance (DeFi) and decentralized Applications (dApps) built on blockchain enable various financial services and allow for permissionless financial operations to be conducted within a peer-to-peer network.",
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
        title="Decentralized Finance - Defi - Development Services"
        description="We help with defi development services. Decentralized finance has changed the traditional financial models and improve payment verification methods and data of asset ownership."
        keywords="defi development services, decentralized finance development"
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
            py: 7,
          }}
        >
          <Banner
            heading="DeFi Product Development"
            discription="Decentralized Finance (DeFi) and decentralized
        Applications (dApps) built on blockchain enable various
        financial services and allow for permissionless financial
        operations to be conducted within a peer-to-peer network."
            image={
              <StaticImage
                src="../images/dafiimg.png"
                alt="DeFi Product Development"
              />
            }
            buttonText="Get Your Defi Product"
          />
        </Box>
        <Container>
          <Box mt={"50px"}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box display="flex" justifyContent="flex-start">
                  <StaticImage
                    src="../images/deffiiimg2.png"
                    alt="Deffii Product"
                    style={{
                      width: "100%",
                      height: matches ? "388px" : "650px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: matches ? "center" : "start",
                  }}
                >
                  <Box
                    component="h2"
                    fontSize={{ xs: "20px", sm: "34px" }}
                    fontWeight={700}
                    letterSpacing="0.1px"
                    color="primary.main"
                    lineHeight={{ xs: "auto", sm: "40px" }}
                    // mt={{ xs: 5 }}
                    sx={{
                      background:
                        "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                    }}
                  >
                    What are DeFi Products?
                  </Box>
                  <Box sx={{ width: "86%" }}>
                    <Box
                      component="p"
                      fontSize={{ xs: "13px", sm: "16px" }}
                      fontWeight={400}
                      letterSpacing="0.3px"
                      // color="primary.main"
                      color="#FFFFFF"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      mt={"45px"}
                      display="flex"
                      alignItems={"center"}
                      sx={{
                        textAlign: "justify",
                      }}
                    >
                      The goal of DeFi product development is to bypass
                      traditional ways of financial services by disrupting the
                      role of intermediaries like banks, exchanges and lenders
                      and governing bodies. DeFi products are designed with
                      blockchain technology that enable decentralized finance.
                      When we say that blockchain is distributed and
                      decentralized, that means all parties using a DeFi
                      application have an identical copy of the public ledger,
                      which records each and every transaction in encrypted
                      code. That secures the system by providing users with
                      anonymity, plus verification of payments and a record of
                      asset ownership that’s (nearly) impossible to alter by
                      fraudulent activity.
                    </Box>

                    <Box
                      fontSize={{ xs: "13px", sm: "16px" }}
                      fontWeight={400}
                      letterSpacing="0.3px"
                      color="#FFFFFF"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      my={2}
                    >
                      BlocTech Solutions can develop some of the most popular
                      types of DeFi applications that include:
                    </Box>
                    <Box
                      fontSize={{ xs: "13px", sm: "16px" }}
                      fontWeight={400}
                      letterSpacing="0.3px"
                      color="#FFFFFF"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      my={2}
                    >
                      – Staking platforms
                      <br /> – Liquidity mining platforms <br />– Decentralized
                      Exchanges (DEX) <br />– Decentralized Lending Protocols
                      and Apps <br />– Non-custodial wallets
                    </Box>
                    <Box
                      component="p"
                      fontSize={{ xs: "13px", sm: "16px" }}
                      fontWeight={400}
                      letterSpacing="0.3px"
                      color="#FFFFFF"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      my={2}
                    >
                      Considering DeFi product development for your business?
                      Here are some of its benefits!
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Subheading subHeading="Benefits of DeFi Product Development for Your Business" />

          <Paragraph
            component="p"
            fontSize={{ xs: "13px", sm: "16px" }}
            lineHeight={{ xs: "auto", sm: "22px" }}
          >
            Foundation of DeFi Product Development lies in altering ways of
            traditional financial services and offering easy and open access to
            the participants in a network. Businesses backed with Defi products
            provide value to all the participants by distributed ledger
            technology beyond simple value transfer to include more complex
            operations. Here are some of the benefits of DeFi product
            development:
          </Paragraph>

          <Grid
            container
            justifyContent="center"
            display="flex"
            spacing={4}
            my={5}
          >
            {Carddata.map(({ img, title, description, boxShadow }, index) => (
              <Grid key={index} item xs={12} md={4} textAlign={"center"}>
                <CustomCard3
                  title={title}
                  discripton={description}
                  bg={img}
                  boxShadow={boxShadow}
                />
              </Grid>
            ))}
          </Grid>

          <Box>
            <Subheading subHeading="The DeFi Product Development Process" />

            <Paragraph
              component="p"
              fontSize={{ xs: "13px", sm: "16px" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
            >
              The DeFi product development process goes through multiple stages
              to ensure that client requirements and needs have been understood
              and met. These stages include:
            </Paragraph>

            <Box>
              {data.map(({ img, title, description }, index) => (
                <Grid container my={7} key={index}>
                  <Grid item sm={4} xs={12} minHeight="295px">
                    <Box
                      display="flex"
                      flexDirection={"column"}
                      justifyContent="center"
                      alignItems={"center"}
                      sx={{
                        background: "#41015F",
                        boxShadow: "9px 0px 26px #000000",
                        p: "80px",
                        height: "100%",
                      }}
                    >
                      {img}
                      {/* <img src={img} alt="" /> */}
                    </Box>
                  </Grid>
                  <Grid item sm={8} xs={12} minHeight="295px">
                    <Box
                      display="flex"
                      flexDirection={"column"}
                      justifyContent="center"
                      alignItems={{ sm: "start", xs: "center" }}
                      sx={{
                        background: "#240035",
                        height: "100%",
                        px: { sm: "30px", xs: "10px" },
                      }}
                    >
                      <Typography
                        variant={"h3"}
                        sx={{
                          fontWeight: 700,
                          fontSize: { sm: "28px", xs: "20px" },
                          color: "white",
                          textAlign: { sm: "start", xs: "center" },
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant={"p"}
                        sx={{
                          fontWeight: 400,
                          fontSize: { sm: "20px", xs: "15px" },
                          color: "white",

                          textAlign: { sm: "justify", xs: "center" },
                        }}
                      >
                        {description}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Box>

          <Box>
            <Subheading subHeading="DeFi Product Development by BlocTech Solutions" />

            <Paragraph
              component="p"
              fontSize={{ xs: "13px", sm: "16px" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
            >
              Since 2020, We at BlocTech Solutions are not merely building dApps
              but also striving hard to nurture innovative practices in Web 3.0
              and inspire product companies and non-IT enterprises to build
              reliable blockchain solutions. We have completed more than 150
              blockchain projects till date. Over the course of this period, we
              have gained extensive experience in developing DeFi products,
              dApps, smart contract development and crypto wallet development.
              In working with notable customers such as Solar Dex, CARDENCE and
              others, we learnt a lot about market trends and latest innovations
              in the blockchain industry. Our expertise in the field includes
              end-to-end DeFi product development, the development of features
              such as staking, liquidity mining, non-custodial wallets, and
              more.
            </Paragraph>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 4,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#411F78",
                maxWidth: "800px",
              }}
            >
              <Box
                fontSize={{ xs: "20px", sm: "34px" }}
                fontWeight={700}
                letterSpacing="0.1px"
                lineHeight={{ xs: "auto", sm: "40px" }}
                color="#fff"
                p={4}
                component="h2"
              >
                Are you working on a new DeFi project?
              </Box>
              <Box
                fontSize={{ xs: "13px", sm: "16px" }}
                fontWeight={400}
                letterSpacing="0.3px"
                color="#fff"
                lineHeight={{ xs: "auto", sm: "22px" }}
                display="flex"
                alignItems={"center"}
                justifyContent="center"
                flexDirection={"column"}
                textAlign={{ xs: "center" }}
                my={2}
                component="p"
              >
                Get in touch with us to tell us more and find out how we can
                help you in this journey!
                <CustomButton
                  style={{ marginTop: "40px" }}
                  onClick={() => setOpen(true)}
                >
                  {" "}
                  Contact Us
                </CustomButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </motion.div>
    </>
  )
}

export default DefiDevelopmentServices
