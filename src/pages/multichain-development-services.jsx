import React, { useContext } from "react"
import { Box, Container, Grid, styled, Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { motion, useIsPresent } from "framer-motion"

import Banner from "../components/Banner"
import SeoHelmet from "../components/SeoHelmet"
import Subheading from "../components/Subheading"
import CustomButton from "../components/CustomButton"
import CustomCard3 from "../components/CustomCard3"
import { AppContext } from "../utils/utils"

//Styled Component
const Paragraph = styled(Typography)({
  fontWeight: 400,
  letterSpacing: "0.3px",
  color: "#fff",
  lineHeight: { xs: "auto", md: "22px" },
  fontSize: { xs: "13px", md: "16px" },
})

const data = [
  {
    img: (
      <StaticImage
        src="../assets/bridgeCard1.png"
        alt="Lightweight Financial Systems"
      />
    ),
    title: "Lightweight Financial Systems",
    text: "We develop and deploy redeemable asset solutions using Multichain features like real-time automatic reconciliation for crowdfunding, loyalty points, local currencies, and direct peer-to-peer asset trading services. We also create internal accounting systems to streamline the control of funds with minimum cost and greater efficiency",
  },

  {
    img: (
      <StaticImage src="../assets/bridgeCard1.png" alt="Provenance Tracking" />
    ),
    title: "Provenance Tracking",
    text: "We provide digital token issuance services for end-to-end tracking of high-value items like luxury goods and pharmaceuticals and documentation of bills and letters of credit. The digital tokens act as transaction authenticators and provide blockchain features like decentralized trust, immutability, and no intermediary",
  },
  {
    img: (
      <StaticImage
        src="../assets/bridgeCard1.png"
        alt="Interorganizational Record Keeping"
      />
    ),
    title: "Interorganizational Record Keeping",
    text: "We develop shared databases for recording and notarizing inter-organizational record, and auditing communications between two or more institutions with unencrypted, encrypted, and hashed data. They are accompanied with shared digital audit trail, timestamping, digital signatures and a round robin consensus",
  },
  {
    img: (
      <StaticImage
        src="../assets/bridgeCard4.png"
        alt="Multiparty Aggregation"
      />
    ),
    title: "Multiparty Aggregation",
    text: "We develop shared internal databases which multiple parties can use to efficiently exchange verification data and avoid duplicate work. Our solutions enable multiple parties to list data in a collectively managed record system and merge information from various separate sources",
  },
]

const cardData = [
  {
    img: <StaticImage src="../assets/cardDiamond1.png" alt="icon1" />,
    title: "MultiChain Explorer",
    description:
      "Web-based blockchain browser for tracking activities on the network with advanced configuration options.",
  },
  {
    img: <StaticImage src="../assets/cardDiamond2.png" alt="icon1" />,
    title: "MultiChain Web Demo",
    description:
      "Web interface for nodes to provide intuitive front-end features with no additional configuration setup.",
  },
  {
    img: <StaticImage src="../assets/cardDiamond3.png" alt="icon1" />,
    title: "Docker-multichain",
    description:
      "Open source Docker development for a standard 3-node private blockchain setup provided by Kunstmaan Labs.",
  },
  {
    img: <StaticImage src="../assets/cardDiamond4.png" alt="icon1" />,
    title: "YobiChain",
    description:
      "Private blockchain ecosystem for a test environment with development tools, database, and web and FTP server.",
  },
  {
    img: <StaticImage src="../assets/cardDiamond5.png" alt="icon1" />,
    title: "Libraries",
    description:
      "Different libraries to enhance the development process, like C#, GO, Java, PHP, Python, Ruby, and JavaScript (Node.JS).",
  },
]

const Multichain = () => {
  const { setOpen } = useContext(AppContext)
  const isPresent = useIsPresent()

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/multichain-development-services/",
      },
      headline: "Multichain Development Services",
      description:
        "We, at BlocTech Solutions, enables private business and enterprises to establish Private Blockchains that can be used within an organization for facilitating financial transactions.",
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
    <div>
      <SeoHelmet
        title="Multichain Development Services | BlocTech Solutions"
        description="We offer Multichain Development Services embedded with blockchain technology. Multichain is a hybrid environment that helps the deployment of private blockchain. Contact any time."
        keywords="multichain development services, multichain blockchain development"
        structureData={structureData}
      />
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
        {/* ---------Main section  page----------- */}
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)",
          }}
        >
          <Banner
            heading=" Centralized Exchange Development"
            discription="We, at BlocTech Solutions, enables private business and
          enterprises to establish Private Blockchains that can be
          used within an organization for facilitating financial
          transactions. A full-fledged Multichain network is capable
          of conducting as many as 1,000 transactions per second. It
          provides a simple API and command-line interface to the
          developers that helps set up and preserve the chain."
            image={
              <StaticImage src="../assets/multichainimg.png" alt="Multichain" />
            }
            buttonText="Get Free Assessment"
          />
        </Box>
        <Container>
          <Box component={"h2"}>
            <Subheading subHeading="Key Features of MultiChain" />
          </Box>

          <Box
            sx={{
              py: { xs: "20px", sm: "60px" },
              px: { xs: "30px", sm: "60px" },
            }}
          >
            <ul>
              <li className="list">
                Allows users to authorize and verify an extensively large number
                of assets on a Blockchain-based ledger
              </li>
              <li className="list">
                Get support for multi-asset and multi-party transactions.
              </li>
              <li className="list">
                Provides a permissioned environment for the users to connect at
                the enterprise level
              </li>
              <li className="list">
                With finely tuned permissions, the entities can grant access to
                operate within the Blockchain (public or private)
              </li>
              <li className="list">
                Provides requisite support for data sharing, archiving, data
                encryption and timestamping
              </li>
              <li className="list">
                Offers a lightning fast development process
              </li>
              <li className="list">
                Users can quickly establish new Blockchains and operate
                efficiently with a permissioned network
              </li>
            </ul>
          </Box>
          <Box width="80%" sx={{ margin: "auto" }}>
            <StaticImage
              src="../assets/bridgeFeature.png"
              alt="Multichain Bridge Features"
            />
          </Box>

          <Box component={"h2"}>
            <Subheading subHeading="Our MultiChain application development services" />
          </Box>

          <Box component="p" pt={{ xs: 0, md: 2 }} textAlign="center">
            <Paragraph>
              We develop applications using MultiChain to improve enterprise
              processes and provide authority to connect external entities with
              the developed network
            </Paragraph>
          </Box>

          <Box>
            {data.map(({ img, title, text }, index) => (
              <Grid container key={index}>
                <Grid item sm={4} xs={12}>
                  <Box>{img}</Box>
                </Grid>
                <Grid item sm={8} xs={12}>
                  <Box
                    mt={3.3}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems={{ sm: "start", xs: "center" }}
                    sx={{
                      background: "#240035",
                      height: "81%",
                      px: { sm: "30px", xs: "10px" },
                    }}
                  >
                    <Typography
                      variant={"h3"}
                      py={4}
                      sx={{
                        fontWeight: 700,
                        fontSize: { sm: "28px", xs: "20px" },
                        color: "white",
                        textAlign: { sm: "start", xs: "center" },
                      }}
                    >
                      {title}
                    </Typography>
                    <Box
                      py={3}
                      color="#fff"
                       component={"p"}
                    >
                      {text}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>

          <Box component={"h2"}>
            <Subheading subHeading="Tools and Libraries We Use for MultiChain application development" />
          </Box>
          <Box component="p" pt={{ xs: 0, md: 2 }} my={2} textAlign="center">
            <Paragraph>
              Our developers analyze remains up to date with best market
              practices, and don’t hesitate to upgrade their development tools
              to meet custom solution needs with MultiChain’s advanced tools and
              libraries.
            </Paragraph>
          </Box>

          <Grid
            container
            justifyContent="center"
            display="flex"
            spacing={5}
            mt={4}
          >
            {cardData.map(({ img, title, description }, index) => (
              <Grid mt={2} key={index} item xs={12} md={4} textAlign={"center"}>
                <CustomCard3
                  title={title}
                  bg={"#41015F"}
                  boxShadow={
                    "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) "
                  }
                  image={img}
                  discripton={description}
                />
              </Grid>
            ))}
          </Grid>

          <Box
            my={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomButton onClick={() => setOpen(true)}>
              Get Free Assessment Now
            </CustomButton>
          </Box>
        </Container>
      </motion.div>
    </div>
  )
}

export default Multichain
