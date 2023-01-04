import React, { useContext } from "react"
import { Box, Container, Grid, styled, Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { motion, useIsPresent } from "framer-motion"

import Banner from "../components/Banner"
import SeoHelmet from "../components/SeoHelmet"
import Subheading from "../components/Subheading"
import CustomCard3 from "../components/CustomCard3"
import CustomButton from "../components/CustomButton"
import { AppContext } from "../utils/utils"

//Styled Component
const Paragraph = styled(Typography)({
  fontWeight: 400,
  letterSpacing: "0.3px",
  color: "#fff",
  lineHeight: { xs: "auto", md: "22px" },
  fontSize: { xs: "13px", md: "16px" },
})

const cardsData = [
  {
    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    boxShadow:
      "0px 0px 5px rgba(255, 53, 17, 0.52),   0px 0px 20px rgba(255, 53, 17, 0.52),  0px 0px 45px rgba(255, 53, 17, 0.52),  0px 0px 180px rgba(255, 53, 17, 0.52)",
    title: "Delicate Network",
    content:
      "By providing information to participating borrowers and lenders, a blockchain-based P2P lending network promotes more confidence. When a new transaction occurs, the network as a whole is informed about it. All participants that provide complete transparency to all activities will reveal all previous and present transactions. Additionally, since the mechanism is managed by several parties, lenders and borrowers can interact directly at any point in the process, which lowers friction.",
  },
  {
    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    boxShadow:
      "0px 0px 5px rgba(219, 36, 176, 0.5),   0px 0px 20px rgba(219, 36, 176, 0.5),  0px 0px 45px rgba(219, 36, 176, 0.5),  0px 0px 180px rgba(219, 36, 176, 0.5)",
    title: "Realistic Information Exchange",
    content:
      "Peer review of transactions and public-key cryptography, which enables direct interaction, are two methods used to ensure information integrity. Each user may therefore verify the veracity of the material being broadcast using predetermined laws.",
  },
  {
    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5)",
    title: "Immovable Data",
    content:
      "Immutability of data is the last crucial element in developing trust. Because of the way it is created, nobody can change transactions once they are joined to a blockchain-based database. A proof-of-work agreement method, which involves a computational issue that other network users must solve, is used to add information to a block.",
  },
  {
    bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    boxShadow:
      "0px 0px 5px rgba(21, 76, 229, 0.5),   0px 0px 20px rgba(21, 76, 229, 0.5),  0px 0px 45px rgba(21, 76, 229, 0.5),  0px 0px 180px rgba(21, 76, 229, 0.5)",
    title: "Mechanisms of Privacy",
    content:
      "Depending on the form of blockchain, pseudonyms will mask the identities of the users. It, with the use of public-key cryptography to protect interactions, promotes a degree of privacy for P2P loan platform users. Find out more about the various forms of blockchain in the “Blockchain Forms” section below.",
  },
  {
    bg: "linear-gradient(180deg, #2DA7F2 28.24%, #00E4E7 100%)",
    boxShadow:
      "0px 0px 5px rgba(45, 166, 242, 0.5),   0px 0px 20px rgba(45, 166, 242, 0.5),  0px 0px 45px rgba(45, 166, 242, 0.5),  0px 0px 180px rgba(45, 166, 242, 0.5)",
    title: "Integrity",
    content:
      "By transmitting and preserving information about network transactions, promoting automated processes that reduce the need for manual involvement and, consequently, the possibility of individual errors, and other factors, the system's authenticity is created.",
  },
  {
    bg: "linear-gradient(180deg, #67FE1A 0%, #139950 100%)",
    boxShadow:
      "0px 0px 5px rgba(102, 254, 26, 0.5),   0px 0px 20px rgba(102, 254, 26, 0.5),  0px 0px 45px rgba(102, 254, 26, 0.5),  0px 0px 180px rgba(102, 254, 26, 0.5)",
    title: "Flexibility",
    content:
      "Blockchain technology enables peers to contribute to the development of the database's supporting code, resulting in the construction of an open and scalable framework where participants may develop and share their own code and functionality.",
  },
]

const P2pLanding = () => {
  const isPresent = useIsPresent()
  const { setOpen } = useContext(AppContext)

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/p2p-lending-platform-development/",
      },
      headline: "P2P Lending Platform Development",
      description:
        "BlocTech Solutions helps to connect lenders and borrowers to tap into the world of the billion-dollar market with our peer-to-peer lending and borrowing solutions backed with blockchain.",
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
        title="P2P Lending Platform Development | BlocTech Solutions"
        description="p2p lending platforms structure designing, development, and implementation by BlocTech experienced p2p lending software developers. check out our guide and start the process."
        keywords="p2p lending platform development, p2p lending software development"
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
            heading="P2P Lending Platform Development"
            discription="BlocTech Solutions helps to connect lenders and borrowers
          to tap into the world of the billion-dollar market with
          our peer-to-peer lending and borrowing solutions backed
          with blockchain."
            image={
              <StaticImage
                src="../images/p2pimg.png"
                alt="P2P Lending Platform Development"
              />
            }
            buttonText="Get Free Assessment"
          />
        </Box>
        <Container>
          <Box py={10} textAlign="center">
            <Box component={"h2"}>
              <Subheading subHeading="Blockchain-Based P2P Lending" />
            </Box>

            <Typography variant="p">
              <Paragraph>
                Peer-to-peer lending links investors/lenders with borrowers
                through an online platform that acts as an authentic third
                party. The stakeholders that get involved in the operation are:
              </Paragraph>
            </Typography>

            <Box mt={7}>
              <Grid container spacing={4}>
                {[
                  "Private individuals or organizations which provide funding",
                  "An online p2p transaction management tool",
                  "A company or private person seeking funding",
                ].map((content, i) => {
                  return (
                    <Grid key={i} item xs={12} sm={4}>
                      <Box
                        height="100%"
                        px={3}
                        py={4}
                        sx={{
                          background: "#41015F",
                          transition: "0.3s",
                          "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow:
                              "0px 0px 5px rgba(219, 36, 176, 0.5),   0px 0px 20px rgba(219, 36, 176, 0.5),  0px 0px 45px rgba(219, 36, 176, 0.5),  0px 0px 180px rgba(219, 36, 176, 0.5)",
                          },
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h4"
                          fontSize={{ xs: "17px", md: "23px" }}
                          fontWeight="700"
                          lineHeight="34px"
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

            <Box m="auto" mt={7} color="#fff" width={{ xs: "95%", md: "85%" }}>
              <Paragraph variant="body1">
                However, the need for intermediaries and regulation in the
                conventional P2P lending model means transactions on traditional
                peer-to-peer sites are subject to additional cost and time
                restrictions, as well as security concerns.
              </Paragraph>

              <Paragraph variant="body1">
                Blockchain is at the core of theBlocTech Solutions revolution
                and can fundamentally transform a wide variety of sectors, from
                financial services and lending to P2P. In peer-to-peer lending,
                the main benefit of using blockchain technology is that it can
                eliminate intermediaries from the lending process. It has a wide
                range of advantages which we will discuss in the next segment.
                First, we will include a brief introduction to blockchain
                technology and how blockchain’s core features are also crucial
                in lending to P2P.
              </Paragraph>
            </Box>
          </Box>

          <Box pb={4} textAlign="center">
            <Box component={"h2"}>
              <Subheading subHeading="Key Features of P2P Blockchain-Based P2P Lending" />
            </Box>
          </Box>

          <Box pb={10}>
            <Grid container spacing={5}>
              {cardsData.map(({ bg, title, content, boxShadow }, i) => {
                return (
                  <Grid key={i} item xs={12} sm="4">
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
            <Box mt={4} textAlign="center">
              <CustomButton onClick={() => setOpen(true)}>
                Book Free Assessment Now
              </CustomButton>
            </Box>
          </Box>

          <Box
            my={14}
            py={6}
            textAlign="center"
            bgcolor="#411F78"
            borderRadius="5px"
          >
            <Container>
              <Typography
                variant="h2"
                m="auto"
                sx={{
                  fontSize: { xs: "25px", md: "44px" },
                  fontWeight: "700",
                  lineHeight: { xs: "auto", sm: "56px" },
                  color: "#fff",
                  width: "fit-content",
                }}
              >
                Smart Contracts in P2P Lending
              </Typography>

              <Paragraph>
                A smart contract in P2P lending will include the initial amount
                of the loan and the terms of repayment, including penalties if
                payments are late or skipped. For example, a company makes a
                loan of $100,000 with a repayment period of 24 months at $5,000.
                A smart contract solution will automatically execute the payment
                requests, obtain the payments, and change the due sum without
                any intermediary having to be involved. Additionally, it
                incorporates automated compensation features in the smart
                contract, such as deducting percentages for early loan
                repayment, changing credit scores, or converting to a higher
                yield currency.
              </Paragraph>

              <Box mt={5} mb={2}>
                <CustomButton onClick={() => setOpen(true)}>
                  {" "}
                  Talk to our Experts
                </CustomButton>
              </Box>
            </Container>
          </Box>
        </Container>
      </motion.div>
    </div>
  )
}

export default P2pLanding
