import React, { useContext } from "react"

import { Box, Container, Grid, styled, Typography } from "@mui/material"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import TelegramIcon from "@mui/icons-material/Telegram"

import { StaticImage } from "gatsby-plugin-image"

import Banner from "../components/Banner"
import Subheading from "../components/Subheading"
import CustomCard3 from "../components/CustomCard3"
import CustomButton from "../components/CustomButton"
import SeoHelmet from "../components/SeoHelmet"

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
    alt: "ICO Token Platform",
    title: "ICO Token Platform",
    discription:
      "Utility tokens are built as a method of fundraising for any entity. The tokens can be built on various blockchain platforms such as EOS, Hyperledger, Stellar, etc. or on tailor-made blockchain platform. Non-fungible utility tokens can also be built in order to have a unique identity which can’t be traded for other tokens.",

    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    icon: (
      <StaticImage
        src="../images/tokenizationicon1.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(243, 23, 129, 0.5),   0px 0px 20px rgba(243, 23, 129, 0.5),  0px 0px 45px rgba(243, 23, 129, 0.5),  0px 0px 180px rgba(243, 23, 129, 0.5)",
  },
  {
    alt: "Security Token Platform",
    title: "Security Token Platform",
    discription:
      "Security Tokens are either backed up crypto bonds/shares/assets. The tokens can be built on various existing blockchain platforms, depending on the business needs; or can also be built on a custom-made Blockchain platform.",

    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    icon: (
      <StaticImage
        src="../images/tokenizationicon2.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(243, 23, 129, 0.5),   0px 0px 20px rgba(243, 23, 129, 0.5),  0px 0px 45px rgba(243, 23, 129, 0.5),  0px 0px 180px rgba(243, 23, 129, 0.5)",
  },
  {
    alt: "Asset Tokenization Platform",
    title: "Asset Tokenization Platform",
    discription:
      "The tokens are backed up assets such as real estate property, art, gold, etc. The tokens can be created either by leveraging the existing blockchain platforms such as Ethereum, Hyperledger, etc. or on custom-built blockchain platform.",

    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    icon: (
      <StaticImage
        src="../images/tokenizationicon3.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5)",
  },
  {
    alt: "Non-Fungible Tokenization Platform",
    title: "Non-Fungible Tokenization Platform",
    discription:
      "NFT allows the user to tokenize their unique assets like art, games assets, virtual land, accessories, and so on. The unique tokenization platform introduces various opportunities to create NFT which is under evolution. The NFT enables the creators to tokenize their unique creations and collectibles to NFTs and raise their asset value in the NFT marketplace.",

    bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    icon: (
      <StaticImage
        src="../images/tokenizationicon4.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(21, 76, 229, 0.5),   0px 0px 20px rgba(21, 76, 229, 0.5),  0px 0px 45px rgba(21, 76, 229, 0.5),  0px 0px 180px rgba(21, 76, 229, 0.5)",
  },
]

const platformdata = [
  {
    alt: "Ethereum",
    title: "Ethereum",
    img: (
      <StaticImage
        src="../images/tokenizationlogo1.png"
        alt="DeFi Product Development"
      />
    ),
    text: "Ethereum platform offers an open-source blockchain with SDK functionality. The tokens created in this platform can be either ERC20/ERC721 compliant. Non-fungible tokens are built on ERC721 token type. At BlocTech Solutions, we build smart contracts to optimize gas prices.",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    alt: "Quorum",
    title: "Quorum",
    img: (
      <StaticImage
        src="../images/tokenizationlogo2.png"
        alt="DeFi Product Development"
      />
    ),
    text: "An enterprise version of Ethereum, the Quorum Blockchain is an ideal blockchain for applications which requires high speed and high throughput and help in the keeping the transactions private within permissioned group and adopted in the financial industry.",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    alt: "Hyperledger",
    title: "Hyperledger",
    img: (
      <StaticImage
        src="../images/tokenizationlogo3.png"
        alt="DeFi Product Development"
      />
    ),
    text: "We develop peer-to-peer Blockchain network on the Hyperledger composer that offers transparency, security, enables collaboration, scalability, etc. The solution can be deployed across various industries and organizations that require a personalized blockchain.",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    alt: "Stellar",
    title: "Stellar",
    img: (
      <StaticImage
        src="../images/tokenizationlogo4.png"
        alt="DeFi Product Development"
      />
    ),
    text: "We develop a blockchain on Stellar to trade across borders in no time, between any pair of currencies. The tokens built on this platform are “Lumen” compliant. This platform is more banking-sector friendly, providing a cost-effective and flexible mode of expansion.",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
]

const TokenizationService = () => {
  const isPresent = useIsPresent()
  const { setOpen } = useContext(AppContext)

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/blockchain-consulting-services/",
      },
      headline: "Blockchain Consulting Services",
      description:
        "Our in-depth knowledge of blockchain technology and prosperous Blockchain development experience constantly bring a revolution for companies to conceptualize their blockchain idea, analyze its prospects, and accurately strategize and implement their blockchain projects.",
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
        title="Blockchain Consulting Services & Solutions | BlocTech Solutions"
        description="Get the best Blockchain consulting services to revolutionized you company structure."
        keywords="Blockchain Consulting Services, blockchain consulting company"
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
            heading="Tokenization services"
            discription="Security is critical in the blockchain space. We, at
        BlocTech Solutions, provide comprehensive smart contract
        audit service helps everyone from startups to enterprises
        launch and maintain their Ethereum blockchain applications."
            image={
              <StaticImage
                src="../images/Tokenizationimg.png"
                alt="DeFi Product Development"
              />
            }
            buttonText="Get Free Assessment Now"
            backgroundColortext="#260238"
          />
        </Box>
        <Container>
          <Box>
            <Subheading subHeading="Tokenization Platform Development" />

            <Paragraph
              component="p"
              fontSize={{ xs: "13px", sm: "16px" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
            >
              Technology is transcending a new path in terms of trading &
              securities ecosystems, by adapting to Blockchain technology. The
              birth of crypto tokens has so happened, just to convert illiquid
              assets to liquids. The crypto tokens can be tethered to securities
              such as crypto bonds/equity shares/assets.
            </Paragraph>
            <Paragraph
              component="p"
              my={5}
              fontSize={{ xs: "13px", sm: "16px" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
            >
              BlocTech Solutions, with its unparalleled track record, offers a
              feature-rich compliant platform for digitizing & liquidating
              assets on the blockchain while ensuring the legal compliance of
              securities’ tokens.
            </Paragraph>
            <Subheading subHeading="Types of Tokenization Platforms" />

            <Subheading subHeading="Smart Contract Security Audit Services" />
            <Paragraph
              component="p"
              my={5}
              fontSize={{ xs: "13px", sm: "16px" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
            >
              We offer end-to-end smart contract audit solutions that help our
              clients launch highly secure and error-free blockchain
              applications.
            </Paragraph>
            <Grid
              container
              spacing={5}
              py="60px"
              sx={{
                display: "flex",
                // alignItems: "center",
                justifyContent: "center",
              }}
            >
              {mapData.map(
                ({ title, discription, bg, icon, boxShadow }, index) => (
                  <Grid key={index} item md={6} sm={6} xs={12} mt="60px">
                    <CustomCard3
                      title={title}
                      discripton={discription}
                      bg={bg}
                      boxShadow={boxShadow}
                      image={icon}
                    />
                  </Grid>
                )
              )}
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
                my: 5,
              }}
            >
              <CustomButton>
                <WhatsAppIcon sx={{ mr: "5px" }} /> Connect to Whatsapp
              </CustomButton>

              <CustomButton>
                <TelegramIcon sx={{ mr: "5px" }} /> Connect to Telegram
              </CustomButton>
            </Box>

            <Grid container mt="50px">
              <Grid item md={6} xs={12}>
                <StaticImage src="../images/TokenImg.png" alt="Tocken" />
              </Grid>
              <Grid item md={6} xs={12}>
                <Box>
                  <Typography
                    variant="h2"
                    fontSize={{ xs: "20px", sm: "32px" }}
                    fontWeight={700}
                    letterSpacing="0.1px"
                    color="#3B3F6D"
                    my={4}
                    lineHeight={{ xs: "auto", sm: "40px" }}
                    sx={{
                      background:
                        "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                      textAlign: "left",
                      fontFamily: "Mulish",
                    }}
                  >
                    Why Tokenize?
                  </Typography>
                  <Typography
                    variant="p"
                    my={4}
                    fontSize={{ xs: "12px", sm: "16px" }}
                    fontWeight={400}
                    color="#fff"
                    letterSpacing="0.3px"
                    lineHeight="22px"
                  >
                    Minimalism is in order: Tokenization of Securities makes
                    things easier, faster and radically upgradable for the
                    traditional market, thereby making the trading lives of
                    investors easy, efficient and cost-effective.
                  </Typography>
                  <Typography
                    my={2}
                    fontSize={{ xs: "12px", sm: "16px" }}
                    fontWeight={400}
                    color="#fff"
                    letterSpacing="0.3px"
                    lineHeight="22px"
                  >
                    Some of the advantages include:
                  </Typography>
                  <Box>
                    <ul className="">
                      <li>Legal Compliance</li>
                      <li>Programmable Securities</li>
                      <li>Increased Liquidity</li>
                      <li>24*7 Market Accessibility</li>
                      <li>Fractionalization of Ownership</li>
                      <li>No Intermediaries</li>
                      <li>Cost-effective</li>
                      <li>Transparency</li>
                    </ul>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Subheading subHeading="What is Digital Asset Platform?" />

            <Paragraph
              component="p"
              fontSize={{ xs: "13px", sm: "16px" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
            >
              A tokenizer is a tokenization platform, in order to issue utility
              tokens, security tokens, or asset tokens. It is imperative to use
              an end-to-end integrated platform with built-in security &
              regulatory compliance, incl. of KYC/AML automation, neoteric
              technology to draw smart contracts, et al.
            </Paragraph>
            <Paragraph
              component="p"
              my={5}
              fontSize={{ xs: "13px", sm: "16px" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
            >
              BlocTech Solutions provides Tokenizer/Tokenization as a Service
              (TaaS). As one of the leading pioneers in the Blockchain
              development landscape, we have the expertise to cater to your
              requirements by establishing a custom-made
              ethereum/hyperledger/stellar or to your own customized blockchain
              tokenization platform.
            </Paragraph>
          </Box>
          <Box>
            <Typography
              variant="h2"
              mt={10}
              fontSize={{ xs: "20px", sm: "32px" }}
              fontWeight={700}
              letterSpacing="1.3px"
              color="#fff"
              // my={4}
              lineHeight={{ xs: "auto", sm: "40px" }}
            >
              Some of the advantages include:
            </Typography>
            <Grid container>
              <Grid item md={6} xs={12}>
                <ul className="LineSet">
                  <li>End-to-end platform development</li>
                  <li>Legal compliance</li>
                  <li>Lifecycle management</li>
                  <li>Unique identification of tokens</li>
                  <li>Globalized KYC/AML Verification</li>
                  <li>Multi-ledger Security Token Development</li>
                </ul>
              </Grid>
              <Grid item md={6} xs={12}>
                <ul className="LineSet">
                  <li>
                    Crypto/native tokens or fiat currency as a payment gateway
                  </li>
                  <li>
                    Automated Compliance with Blockchain & Smart Contracts
                  </li>
                  <li>Automated Policy & Regulations with Smart Contracts</li>
                  <li>Automated Reporting to Regulatory Authorities</li>
                  <li>
                    Tokens issued have an interoperability layer for exchanges
                    across the world
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Box>
          <Subheading subHeading="Blockchains for Tokenization Platform" />
          <Grid
            container
            spacing={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              my: 5,
            }}
          >
            {platformdata.map(({ title, text, img, boxShadow }, index) => (
              <Grid key={index} item xs={12} md={6}>
                <CustomCard3
                  boxShadow={boxShadow}
                  discripton={text}
                  bg="#41015F"
                  title={title}
                  image={img}
                />
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              my: 5,
            }}
          >
            <CustomButton onClick={() => setOpen(true)}>
              {" "}
              Get a quote
            </CustomButton>
          </Box>
        </Container>
      </motion.div>
    </>
  )
}

export default TokenizationService
