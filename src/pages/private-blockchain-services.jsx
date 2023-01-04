import { Box, Container, Grid, styled, Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { motion, useIsPresent } from "framer-motion"

import Banner from "../components/Banner"
import CustomButton from "../components/CustomButton"
import CustomCard3 from "../components/CustomCard3"

import SeoHelmet from "../components/SeoHelmet"
import Subheading from "../components/Subheading"
import { AppContext } from "../utils/utils"

//Styled Component

const Headingtwo = styled(Typography)({
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

const cardData = [
  {
    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    title: "Reduced Costs",
    text: "Thanks to smart contract development , processes in the network are largely automated which reduces all sorts of operational and administrative costs. Transactions in the network are also cheaper because they do not need to be verified by all nodes but only a few trusted ones.",
    boxShadow:
      "0px 0px 5px rgba(255, 53, 17, 0.52),   0px 0px 20px rgba(255, 53, 17, 0.52),  0px 0px 45px rgba(255, 53, 17, 0.52),  0px 0px 180px rgba(255, 53, 17, 0.52)",
  },
  {
    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    title: "Scalability",
    text: "Private blockchain networks are more scalable and have greater transaction throughput – a key requirement for enterprises. They can process significantly more files than their public counterparts.This is because not all nodes need to participate in the validation of transactions. Validation can be limited to only a few nodes with greater processing power.",
    boxShadow:
      "0px 0px 5px rgba(219, 36, 176, 0.5),   0px 0px 20px rgba(219, 36, 176, 0.5),  0px 0px 45px rgba(219, 36, 176, 0.5),  0px 0px 180px rgba(219, 36, 176, 0.5)",
  },
  {
    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    title: "Control",
    text: "With a private blockchain, an enterprise has control over the infrastructure which allows it to more easily adjust to legal and compliance requirements.The rules of a private blockchain are set and revised by the enterprise that run it. Ensure such a network, where transactions can be reverted and balances modified, if necessary.",
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5)",
  },
  {
    bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    title: "Security",
    text: "A private blockchain is restricted and access is granted only to trusted parties. This guarantees that confidential information does not become public. Regardless of the nature of the blockchain, any stored information is also cryptographically secured.",
    boxShadow:
      "0px 0px 5px rgba(21, 76, 229, 0.5),   0px 0px 20px rgba(21, 76, 229, 0.5),  0px 0px 45px rgba(21, 76, 229, 0.5),  0px 0px 180px rgba(21, 76, 229, 0.5)",
  },
  {
    bg: "linear-gradient(180deg, #67FE1A 0%, #139950 100%)",
    title: "Efficiency",
    text: "Due to limited number of participants, downtime on private blockchain networks remains significantly lower, whereas uptime remains higher. Moreover, you can have better node connections and faults can be fixed more easily.",
    boxShadow:
      "0px 0px 5px rgba(102, 254, 26, 0.5),   0px 0px 20px rgba(102, 254, 26, 0.5),  0px 0px 45px rgba(102, 254, 26, 0.5),  0px 0px 180px rgba(102, 254, 26, 0.5)",
  },
]

const PrivateBlockchain = () => {
  const isPresent = useIsPresent()
  const { setOpen } = useContext(AppContext)
  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.bloctechsolutions.com/private-blockchain-services/",
      },
      headline: "Private Blockchain Development Services",
      description:
        "We, at BlocTech Solutions, leverage companies to rank up their private blockchains to optimize their business processes.We have robust private blockchain development experience with in-depth knowledge. Thus, we deliver dynamic, infiltration free, and amenadable private blockchain development services.",
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
        title="Private Blockchain Development Services | BlocTech Solutions"
        description="We provide private blockchain development services for companies to bring a decentralized blockchain system in their businesses, by organized and secured private blockchain development."
        keywords="Private Blockchain development services, Private Blockchain development "
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
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)",
          }}
        >
          <Banner
            heading="Private Blockchain Development Services"
            discription="We, at BlocTech Solutions, leverage companies to rank up their
                  private blockchains to optimize their business processes.We
                  have robust private blockchain development experience with
                  in-depth knowledge. Thus, we deliver dynamic, infiltration
                  free, and amenadable private blockchain development services."
            image={
              <StaticImage
                src="../images/privateStartup.png"
                alt="Private Blockchain Development Services"
              />
            }
            buttonText="Get Started"
          />
        </Box>

        <Container>
          <Box mt="50px">
            <Grid mt={4} container spacing={5}>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box display="flex" justifyContent="flex-start" mt="10px">
                  <StaticImage src="../images/shield.png" alt="shield" />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box component="h2" m="0px">
                    <Headingtwo fontSize={{ xs: "20px", sm: "33px" }}>
                      What is a private blockchain?
                    </Headingtwo>
                  </Box>
                  <Box sx={{ width: "86%" }}>
                    <Box component="p">
                      <Paragraph>
                        A private blockchain is a closed ecosystem that is not
                        open for public participation. A private blockchain is
                        run by a centralized entity and its use is restricted to
                        those who have been granted access.Key features of a
                        private blockchain include the following:
                      </Paragraph>
                    </Box>
                    <Box
                      fontSize={{ xs: "13px", sm: "16px" }}
                      fontWeight={400}
                      letterSpacing="0.3px"
                      color="#FFFFFF"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      my={2}
                    >
                      <ul className="myUl">
                        <li className="list">
                          Users need permission to access the blockchain.
                        </li>
                        <li className="list">
                          Members of the chain can negotiate the level of
                          decentralization for their network.
                        </li>
                        <li className="list">
                          Can provide varying levels of access to users and can
                          enact customized restrictions.
                        </li>
                        <li className="list">
                          User cannot obtain entry to the blockchain until they
                          are granted access by the central entity controlling
                          the blockchain.
                        </li>
                        <li className="list">
                          Each participant on the blockchain can be easily
                          identified.
                        </li>
                        <li className="list">
                          Enable much faster transactions than on public
                          blockchains.
                        </li>
                        <li className="list">
                          Central authority sets the rules to be followed by the
                          users of private blockchain.
                        </li>
                      </ul>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box pt={{ xs: 0, md: 7 }} my={2} component="h2">
            <Subheading subHeading="Benefits of Private Blockchain Development for Businesses" />
          </Box>

          <Grid
            container
            justifyContent="center"
            display="flex"
            spacing={5}
            mt={4}
          >
            {cardData.map(({ text, title, bg, boxShadow }, index) => (
              <Grid key={index} item xs={12} md={4} textAlign={"center"}>
                <CustomCard3
                  title={title}
                  discripton={text}
                  bg={bg}
                  boxShadow={boxShadow}
                />
              </Grid>
            ))}
          </Grid>

          <Box component="h2" pt={{ xs: 0, md: 7 }} my={2}>
            <Subheading subHeading=" Our Blockchain Development Services" />
          </Box>
          <Box component="p" pt={{ xs: 0, md: 2 }} my={2}>
            <Paragraph>
              BlocTech Solutions offers the following types of services related
              to the process of developing on private blockchain:
            </Paragraph>
          </Box>

          <Grid mt={3} container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Box textAlign="left" height="100%">
                <Box
                  component="h2"
                  py={4}
                  width="100%"
                  mt="10px"
                  pl={4}
                  fontSize={{ xs: "20px", md: "22px" }}
                  fontWeight={700}
                  letterSpacing="0.3px"
                  color="#FFFFFF"
                  lineHeight={{ xs: "auto", md: "22px" }}
                  textAlign="left"
                  sx={{
                    background: "#41015F",
                    boxShadow: "9px 0px 26px #000000",
                  }}
                >
                  Our Blockchain Development Services
                </Box>
                <Box
                  sx={{
                    background: "#240035",
                    py: { xs: "20px", sm: "77px" },
                    px: { xs: "30px", sm: "60px" },
                  }}
                >
                  <Box component="p" width="100%">
                    <Paragraph>
                      BlocTech Solutions offers the following types of services
                      related to the process of developing on private
                      blockchain:
                    </Paragraph>
                  </Box>
                  <ul>
                    <li className="list">
                      End-to-end private blockchain development
                    </li>
                    <li className="list">
                      {" "}
                      Proof of concept (PoC) development
                    </li>
                    <li className="list"> Consulting</li>
                    <li className="list"> Private blockchain integration</li>
                  </ul>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="left" height="100%">
                <Box
                  component="h2"
                  py={4}
                  width="100%"
                  mt="10px"
                  pl={4}
                  fontSize={{ xs: "20px", md: "22px" }}
                  fontWeight={700}
                  letterSpacing="0.3px"
                  color="#FFFFFF"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                  textAlign="left"
                  sx={{
                    background: "#41015F",
                    boxShadow: "9px 0px 26px #000000",
                  }}
                >
                  Platforms
                </Box>
                <Box
                  sx={{
                    background: "#240035",
                    py: { xs: "20px", sm: "60px" },
                    px: { xs: "30px", sm: "60px" },
                  }}
                >
                  <Box width="100%">
                    <Paragraph>
                      For this purpose, we make use of the following platforms
                      when developing your company’s network:
                    </Paragraph>
                  </Box>
                  <ul>
                    <li className="list"> Hyperledger Fabric</li>
                    <li className="list"> Hyperledger Besu</li>
                    <li className="list"> Hyperledger Indy</li>
                    <li className="list">
                      The complete Hyperledger tool stack
                    </li>
                    <li className="list"> Corda</li>
                    <li className="list"> Quorom</li>
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid mt={4} container spacing={3}>
            <Grid item xs={12} sm={10} md={10}>
              <Box>
                <Box component="h1" mb={4}>
                  <Headingtwo sx={{ fontSize: { xs: "20px", md: "34px" } }}>
                    Private Blockchain Development by BlocTech Solutions
                  </Headingtwo>
                </Box>
                <Box
                  component="p"
                  pt={{ xs: 0, md: 2 }}
                  m="auto"
                  my={2}
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={400}
                  letterSpacing="0.3px"
                  color="white"
                  lineHeight={{ xs: "auto", sm: "22px" }}
                  textAlign="left"
                >
                  <Paragraph>
                    BlocTech Solutions offers the following types of services
                    related to the process of developing on private blockchain:
                  </Paragraph>
                </Box>
                <Box
                  fontWeight={400}
                  color="primary.main"
                  letterSpacing="0.3px"
                  lineHeight="22px"
                >
                  <ul className="myUl">
                    <li>
                      We are a one-stop shop for development of highly secured,
                      infiltration proof private blockchain for your business.
                    </li>
                    <li>
                      We can find you the feasibility of a project by verifying
                      that your idea has the potential in a real-world situation
                      or not with proof of concept.
                    </li>
                    <li>
                      We provide consultation services for businesses to
                      maintain, upgrade and fix issues in their private
                      blockchain.
                    </li>
                    <li>
                      We provide private blockchain integration services which
                      creates an immutable record of transactions and leads to
                      optimize business processes.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            my={2}
            sx={{
              display: "flex",
              alignitems: "center",
              justifyContent: "center",
            }}
          >
            <CustomButton onClick={() => setOpen(true)}>
              Get Free Assessment
            </CustomButton>
          </Box>
        </Container>
      </motion.div>
    </div>
  )
}

export default PrivateBlockchain
