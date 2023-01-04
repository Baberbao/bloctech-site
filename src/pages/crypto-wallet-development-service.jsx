import React, { useContext } from "react"

import { Box, Container, Grid, styled, Typography } from "@mui/material"

import { StaticImage } from "gatsby-plugin-image"

import Banner from "../components/Banner"
import CustomButton from "../components/CustomButton"
import CustomCard3 from "../components/CustomCard3"
import CustomCardList from "../components/CustomCardList"
import SeoHelmet from "../components/SeoHelmet"
import Subheading from "../components/Subheading"

import { AppContext } from "../utils/utils"

import { motion, useIsPresent } from "framer-motion"

const Paragraph = styled(Typography)({
  fontWeight: 400,
  letterSpacing: "0.3px",
  color: "white",
  textAlign: "center",
  py: "30px 0px",
})

const data = [
  {
    img: (
      <StaticImage src="../images/dafi1.png" alt="DeFi Product Development" />
    ),
    title: "By the type of key storage",
    ul: (
      <ul>
        <li>Custodial wallets</li>
        <li>Non-custodial wallets</li>
      </ul>
    ),
  },

  {
    img: (
      <StaticImage src="../images/dafi2.png" alt="DeFi Product Development" />
    ),
    title: "By the method of storage",
    ul: (
      <ul>
        <li>Hot (software) wallets</li>
        <li>Cold (hardware) wallets</li>
      </ul>
    ),
  },
  {
    img: (
      <StaticImage src="../images/dafi3.png" alt="DeFi Product Development" />
    ),
    title: "By the number of cryptocurrencies supported",
    ul: (
      <ul>
        <li>Coin-specific wallets (e.g., only Bitcoin, Etherium, Ripple)</li>
        <li>Multi-currency wallets</li>
      </ul>
    ),
  },
  {
    img: (
      <StaticImage src="../images/dafi4.png" alt="DeFi Product Development" />
    ),
    title: "By the number of wallet users",
    ul: (
      <ul>
        <li>Single-signature (singlesig) wallets for personal use</li>
        <li>Multi-signature (multisig, shared) wallets for business needs</li>
      </ul>
    ),
  },
]

const Carddata = [
  {
    img: (
      <StaticImage
        src="../images/cryptoicons1.png"
        alt="DeFi Product Development"
      />
    ),
    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    title: "Crypto asset security.",
    alt: "Crypto asset security.",
    boxShadow:
      "0px 0px 5px rgba(243, 23, 129, 0.5),   0px 0px 20px rgba(243, 23, 129, 0.5),  0px 0px 45px rgba(243, 23, 129, 0.5),  0px 0px 180px rgba(243, 23, 129, 0.5) ",
  },
  {
    img: (
      <StaticImage
        src="../images/cryptoicons2.png"
        alt="DeFi Product Development"
      />
    ),
    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    title: "Crypto asset management",
    alt: "Crypto asset management",
    boxShadow:
      "0px 0px 5px rgba(219, 36, 176, 0.5),   0px 0px 20px rgba(219, 36, 176, 0.5),  0px 0px 45px rgba(219, 36, 176, 0.5),  0px 0px 180px rgba(219, 36, 176, 0.5) ",
  },
  {
    img: (
      <StaticImage
        src="../images/cryptoicons3.png"
        alt="DeFi Product Development"
      />
    ),
    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    title: "Transaction tracking and tracing",
    alt: "Transaction tracking and tracing",
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5) ",
  },
  {
    img: (
      <StaticImage
        src="../images/cryptoicons4.png"
        alt="DeFi Product Development"
      />
    ),
    bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    title: "Support for multiple crypto assets",
    alt: "Support for multiple crypto assets",
    boxShadow:
      "0px 0px 5px rgba(21, 76, 229, 0.5),   0px 0px 20px rgba(21, 76, 229, 0.5),  0px 0px 45px rgba(21, 76, 229, 0.5),  0px 0px 180px rgba(21, 76, 229, 0.5) ",
  },
  {
    img: (
      <StaticImage
        src="../images/cryptoicons5.png"
        alt="DeFi Product Development"
      />
    ),
    bg: " linear-gradient(180deg, #00E4E7 0%, #2DA7F2 100%)",
    title: "Multi-signature support",
    alt: "Multi-signature support",
    boxShadow:
      "0px 0px 5px rgba(0, 227, 231, 0.5),   0px 0px 20px rgba(0, 227, 231, 0.5),  0px 0px 45px rgba(0, 227, 231, 0.5),  0px 0px 180px rgba(0, 227, 231, 0.5) ",
  },
  {
    img: (
      <StaticImage
        src="../images/cryptoicons6.png"
        alt="DeFi Product Development"
      />
    ),
    bg: "linear-gradient(180deg, #67FE1A 0%, #139950 100%)",
    title: "QR code-based payments",
    alt: "QR code-based payments",
    boxShadow:
      "0px 0px 5px rgba(102, 254, 26, 0.5),   0px 0px 20px rgba(102, 254, 26, 0.5),  0px 0px 45px rgba(102, 254, 26, 0.5),  0px 0px 180px rgba(102, 254, 26, 0.5) ",
  },
]
const data1 = [
  {
    img: (
      <StaticImage
        src="../images/cryptoicon1.png"
        alt="DeFi Product Development"
      />
    ),

    title: "Flexible cooperation models",
    ul: (
      <ul>
        <li>Full crypto wallet development outsourcing </li>
        <li>Dedicated teams or team augmentation</li>
      </ul>
    ),
    alt: "Flexible cooperation models",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    img: (
      <StaticImage
        src="../images/cryptoicon2.png"
        alt="DeFi Product Development"
      />
    ),

    title: "Fast crypto wallet development",
    ul: (
      <ul>
        <li>Quick project start (1-2 weeks)</li>
        <li>Frequent releases (every 2-3 weeks) </li>
        <li>Established Lean, Agile and DevOps culture</li>
      </ul>
    ),
    alt: "Fast crypto wallet development",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    img: (
      <StaticImage
        src="../images/cryptoicon3.png"
        alt="DeFi Product Development"
      />
    ),

    title: "High cryptocurrency wallet quality",
    ul: (
      <ul>
        <li>Proven technology skills </li>
        <li>Multi-industry expertise of our developers</li>
      </ul>
    ),
    alt: "High cryptocurrency wallet quality",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
]

const CryptoWalletDevelopmentService = () => {
  const isPresent = useIsPresent()
  const { setOpen } = useContext(AppContext)

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/crypto-wallet-development-service/",
      },
      headline: "Crypto Wallet Development Services",
      description:
        "To design, build, integrate, and maintain crypto wallet applications, we provide complete support to our clients by providing excellent end-to-end cryptocurrency wallet development services.",
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
        title="Crypto Wallet Development Services | BlocTech Solutions"
        description="we provide crypto wallet development services for businesses and organizations to build different end-to-end cryptocurrency wallets for blockchain projects."
        keywords="Crypto Wallet Development Services, crypto wallet services"
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
            heading="Crypto Wallet Development Services"
            discription="  To design, build, integrate, and maintain crypto wallet
        applications, we provide complete support to our clients by
        providing excellent end-to-end cryptocurrency wallet
        development services."
            image={
              <StaticImage
                src="../images/CryptoWalletimg.png"
                alt="Crypto Wallet Development Services"
              />
            }
            buttonText="Get a reliable crypto wallet"
            backgroundColortext="#260238"
          />
        </Box>
        <Container>
          <Box>
            <Paragraph
              component="p"
              fontSize={{ xs: "13px", sm: "16px" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
              my={5}
            >
              <span style={{ fontWeight: "900" }}>
                Crypto Wallet Development Services{" "}
              </span>
              help to build different types of end-to-end cryptocurrency wallet
              for streamlined crypto asset management, secure cryptocurrency
              storage, easy, fast and safe cryptocurrency transfer.
            </Paragraph>
            <Subheading subHeading="Crypto Wallet Development Services" />
          </Box>
          <Box>
            {data.map(({ img, title, ul }, index) => (
              <Grid key={index} container mb={3}>
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
                    <Box textAlign="left" className="myUl">
                      {ul}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
          <Box>
            <Subheading subHeading="Key Features of Crypto Wallet Development Services" />
            <Grid
              container
              justifyContent="center"
              display="flex"
              spacing={4}
              my={4}
            >
              {Carddata.map(({ img, title, bg, boxShadow }, index) => (
                <Grid key={index} item xs={12} md={4} textAlign={"center"}>
                  <CustomCard3
                    image={img}
                    title={title}
                    bg={bg}
                    boxShadow={boxShadow}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            my={5}
            p={5}
            bgcolor="#411F78"
            sx={{
              boxShadow: 3,
              "&:hover": {
                boxShadow: 6,
              },
            }}
          >
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={8}>
                <Box>
                  <Typography
                    variant={"h2"}
                    mb={4}
                    fontSize={{ xs: "20px", sm: "34px" }}
                    fontWeight={700}
                    letterSpacing="0.2px"
                    color="white"
                    lineHeight={{ xs: "auto", sm: "56px" }}
                  >
                    Get Expert Help to Roll Out a Crypto Wallet
                  </Typography>

                  <Typography
                    my={3}
                    fontSize={{ xs: "12px", sm: "16px" }}
                    fontWeight={400}
                    color="white"
                    letterSpacing="0.3px"
                    lineHeight="22px"
                    // textAlign="center"
                  >
                    BlocTech Solutions’s team is ready to design and build:
                  </Typography>
                  <Box
                    mb={5}
                    fontWeight={400}
                    color="white"
                    letterSpacing="0.3px"
                    lineHeight="22px"
                  >
                    <ul className="myUl" style={{ padding: "0px" }}>
                      <li>
                        <span style={{ fontWeight: "900" }}>
                          Crypto wallet products
                        </span>{" "}
                        for product companies to reduce time-to-market and drive
                        ROI fast.
                      </li>
                      <li>
                        <span style={{ fontWeight: "900" }}>
                          Custom crypto wallet applications
                        </span>{" "}
                        for non-IT enterprises to conveniently and securely
                        leverage crypto assets in their business activities.
                      </li>
                    </ul>
                  </Box>
                  <CustomButton onClick={() => setOpen(true)}>
                    {" "}
                    Get a Quote
                  </CustomButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              my: 5,
            }}
          >
            <Box
              component="h2"
              mb={4}
              fontSize={{ xs: "20px", sm: "34px" }}
              fontWeight={700}
              letterSpacing="0.2px"
              color="primary.main"
              lineHeight={{ xs: "auto", sm: "56px" }}
              sx={{
                background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Why Choose BlocTech Solutions?
            </Box>
            <Box
              fontWeight={400}
              color="primary.main"
              letterSpacing="0.3px"
              lineHeight="22px"
            >
              <ul className="myUl">
                <li>
                  Are experienced in leading blockchain frameworks:{" "}
                  <span style={{ fontWeight: "900" }}>
                    Ethereum, Hyperledger Fabric, Graphene.
                  </span>
                </li>
                <li>
                  Have
                  <span style={{ fontWeight: "900" }}>
                    C++, Golang, Node.js, Java, Python, and JavaScript
                  </span>
                  developers in the team.
                </li>
                <li>
                  Are in cybersecurity to ensure world-class cryptocurrency
                  wallet protection.
                </li>
                <li>
                  Provide mobile development to introduce reliable mobile crypto
                  wallets.
                </li>
                <li>
                  Have catered
                  <span style={{ fontWeight: "900" }}>30+ industries,</span>
                  including banking and fintech, retail, healthcare, telecoms,
                  professional services.
                </li>
              </ul>
            </Box>
          </Box>

          <Box>
            <Subheading subHeading="Perks of Working with BlocTech Solutions" />

            <Grid
              container
              justifyContent="center"
              display="flex"
              spacing={3}
              my={4}
            >
              {data1.map(({ img, title, ul, boxShadow }, index) => (
                <Grid key={index} item xs={12} md={4}>
                  <CustomCardList
                    image={img}
                    title={title}
                    bg="#41015F"
                    discripton={ul}
                    boxShadow={boxShadow}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            m="auto"
            sx={{ display: "flex", justifyContent: "center" }}
            my="50px"
          >
            <CustomButton onClick={() => setOpen(true)}>
              {" "}
              REQUEST ASSISTANCE
            </CustomButton>
          </Box>
        </Container>
      </motion.div>
    </>
  )
}

export default CryptoWalletDevelopmentService
