import React, { useContext } from "react"
import { Box, Container, Grid, styled, Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { motion, useIsPresent } from "framer-motion"

import Banner from "../components/Banner"
import SeoHelmet from "../components/SeoHelmet"
import CustomButton from "../components/CustomButton"
import Subheading from "../components/Subheading"
import CustomCard3 from "../components/CustomCard3"
import { AppContext } from "../utils/utils"

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

const mapData = [
  {
    title: "Open Source Code",
    discription:
      "DAOs are reserved till the financing time frame concludes and the DAO is deployed. After this, it converts into an independent identity autonomous of outsiders and it’s makers by creating an open source code accessible to all participants.",
    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    boxShadow:
      "0px 0px 5px rgba(219, 36, 176, 0.5),   0px 0px 20px rgba(219, 36, 176, 0.5),  0px 0px 45px rgba(219, 36, 176, 0.5),  0px 0px 180px rgba(219, 36, 176, 0.5)",
    icon: <StaticImage src="../images/daoi1.png" alt="Open Source Code" />,
  },
  {
    title: "DAO Token",
    discription:
      "The financing state continues as you set up the DAO rules. During this financing phase, it is important to make sure that these rules have an interior property that allows for genuine economic growth at any given point of time and permits financing.",
    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    boxShadow:
      "0px 0px 5px rgba(255, 53, 17, 0.52),   0px 0px 20px rgba(255, 53, 17, 0.52),  0px 0px 45px rgba(255, 53, 17, 0.52),  0px 0px 180px rgba(255, 53, 17, 0.52)",
    icon: <StaticImage src="../images/daoi2.png" alt="DAO Token" />,
  },
  {
    title: "Based on Smart Contract",
    discription:
      "For a decentralised autonomous organization blockchain to be effective there need to be guidelines that dictate the way in which the platform is supposed to work. These guidelines or rules are coded as smart contracts so that they can eventually be taken as valid in the future.",
    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5)",
    icon: (
      <StaticImage src="../images/daoi3.png" alt="Based on Smart Contract" />
    ),
  },
  {
    title: "Using Blockchain Technology",
    discription:
      "Organizations can work in an autonomous and decentralized manner by using the blockchain technology. This is because users are allowed to exercise command and make choices over the exchange. This makes DAOs transparent, incorrupt and immutable.",
    bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    boxShadow:
      "0px 0px 5px rgba(21, 76, 229, 0.5),   0px 0px 20px rgba(21, 76, 229, 0.5),  0px 0px 45px rgba(21, 76, 229, 0.5),  0px 0px 180px rgba(21, 76, 229, 0.5)",
    icon: (
      <StaticImage
        src="../images/daoi4.png"
        alt="Using Blockchain Technology"
      />
    ),
  },
]

const Dao = () => {
  const isPresent = useIsPresent()
  const { setOpen } = useContext(AppContext)

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/dao-service-and-development-company/",
      },
      headline: "Dao Service and Development",
      description:
        "We, at BlocTech Solutions, challenge centralized businesses to be overlooked by converting them into decentralized businesses with DAO development services.",
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
        title="DAO Service and Development company | BlocTech Solutions"
        description="Being a dao development company, we integrate the full structure of decentralized autonomous organizations and satisfy our clients with the best dao services"
        keywords="dao development company, dao service"
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
            heading="Dao Service and Development"
            discription="We, at BlocTech Solutions, challenge centralized businesses to
          be overlooked by converting into decentralized businesses with
          DAO development services. We have developed top-level
          functionalities with market needed features for the DAO
          development to provide a single, secure, and feature-rich
          shared system. Our blockchain experts will help you to refine
          your offering and suggest the most suitable tech approach."
            image={
              <StaticImage
                src="../images/daomain.png"
                alt="Dao Service and Development"
              />
            }
            buttonText="Get Your App Today"
          />
        </Box>

        {/* -------------------------Home ---------------- */}

        <Container>
          <Grid container spacing={5} my={6}>
            <Grid item xs={12} sm={12} md={6}>
              <Box height="100%">
                <StaticImage
                  src="../images/daoimg.png"
                  alt="DAO Blockchain Development"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Box component="h2">
                <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                  BlocTech Solutions Professional DAO Blockchain Development
                </HeadingTwo>
              </Box>
              <Box component="body1" my={2}>
                <Paragraph textAlign={{ md: "justify", xs: "center" }}>
                  Blockchain has given us a single, secure shared system that
                  comes with multiple rich features. DAO blockchain development
                  is a cost-effective method that addresses the challenges faced
                  by traditional centralized businesses. Learn more about
                  protecting the interests of your business with DAO blockchain
                  development with BlocTech Solutions Solutions.
                </Paragraph>
              </Box>
              <Box mt={3}>
                <CustomButton onClick={() => setOpen(true)}>
                  {" "}
                  Get a Quote
                </CustomButton>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5} my={12}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Box component="h2">
                <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                  Introduction to DAO
                </HeadingTwo>
              </Box>

              <Box component="body1">
                <Paragraph textAlign={{ md: "justify", xs: "center" }}>
                  A Decentralized Autonomous Organization or DAO is a
                  transparent and autonomous community led entity without any
                  central authority. This means that a DAO is governed by all
                  the members of a project equally and all critical decisions
                  are taken collectively by them.
                  <br />
                  <br />A DAO can be created by numerous crypto wallets that are
                  controlled by either organizations or individuals. All the
                  moments are executed voa code allows the management of assets
                  and votes without having to undergo traditional banking and
                  legal formalities.
                </Paragraph>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <StaticImage
                  src="../images/dao2.png"
                  alt="Introduction to Dao"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* ----------------------2nd------------------ */}

        <Box mt={{ xs: 8, sm: 15 }}>
          <Container>
            <Box component={"h2"}>
              <Subheading subHeading="Digital Autonomous Organization VS Traditional Organization" />
            </Box>

            <Grid container spacing={6} mt={5} mb={5}>
              <Grid item xs={12} sm={12} md={6}>
                <Box bgcolor="#240035" pb={5}>
                  <Box
                    component="h3"
                    px={5}
                    bgcolor="#41015F"
                    height="103px"
                    display="flex"
                    alignItems="center"
                    fontSize={{ xs: "20px", sm: "28px" }}
                    fontWeight={700}
                    letterSpacing="0.1px"
                    lineHeight={{ xs: "auto", sm: "34px" }}
                    color="#fff"
                    boxShadow={"9px 0px 26px #000000"}
                  >
                    DAO
                  </Box>
                  <Box px={5}>
                    <ul
                      style={{
                        fontSize: { xs: "14px", sm: "20px" },
                        fontWeight: 400,
                        lineHeight: { xs: "auto", sm: "26px" },
                        color: "#fff",
                        letterSpacing: "1.3 px",
                        marginTop: "30px",
                      }}
                    >
                      <li style={{ marginBottom: "10px" }}>
                        Fully Transparent & Public for all activity
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Low cost for operational process
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Everything is on the Cryptography (Blockchain)
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Usually flat and fully democratized
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Voting has required by members for any changes to be
                        implemented
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        The smart contract has embedded in the Governance
                        process
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Fully Automated and smart contracts for decision making
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box bgcolor="#240035" pb={5}>
                  <Box
                    component="h3"
                    px={5}
                    bgcolor="#41015F"
                    height="103px"
                    display="flex"
                    alignItems="center"
                    fontSize={{ xs: "20px", sm: "28px" }}
                    fontWeight={700}
                    letterSpacing="0.1px"
                    lineHeight={{ xs: "auto", sm: "34px" }}
                    color="#fff"
                    boxShadow={"9px 0px 26px #000000"}
                  >
                    Traditional Organizations
                  </Box>
                  <Box px={5}>
                    <ul
                      style={{
                        fontSize: { xs: "14px", sm: "20px" },
                        fontWeight: 400,
                        lineHeight: { xs: "auto", sm: "26px" },
                        color: "#fff",
                        letterSpacing: "1.3 px",
                        marginTop: "30px",
                      }}
                    >
                      <li style={{ marginBottom: "10px" }}>
                        Limited activity is shown to the public, basically
                        Private
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Trust is built based on experience and relationships
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        High cost for operational process
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Usually hierarchical
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Depending on the structure, changes can be demanded from
                        a sole party, or voting may be offered
                      </li>{" "}
                      <li style={{ marginBottom: "10px" }}>
                        Top-down management, many information & decision
                        bottlenecks for the Governance process
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        Based on expertise and seniority each decision has done
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* ----------------------3rd------------------ */}

        <Box mt={5}>
          <Container>
            <Box justifyContent="center" display="flex">
              <Box component="h2">
                <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                  Features of a Decentralized Autonomous Network
                </HeadingTwo>
              </Box>
            </Box>

            <Grid
              container
              spacing={5}
              py="20px"
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {mapData.map(({ title, discription, bg, icon, boxShadow }, i) => (
                <Grid item md={5} key={i} sm={6} xs={12} mt="60px">
                  <CustomCard3
                    title={title}
                    discripton={discription}
                    bg={bg}
                    boxShadow={boxShadow}
                    image={icon}
                  />
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={3} my={6}>
              <Grid item xs={12} sm={12} md={6}>
                <Box>
                  <StaticImage
                    src="../images/dao3.png"
                    alt="Introduction to Dao"
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <Box component="h2">
                  <HeadingTwo fontSize={{ xs: "20px", sm: "33px" }}>
                    How Does a DAO Work?
                  </HeadingTwo>
                </Box>

                <ul
                  style={{
                    fontSize: { xs: "14px", sm: "20px" },
                    fontWeight: 400,
                    lineHeight: { xs: "auto", sm: "26px" },
                    color: "#fff",
                    letterSpacing: "1.3 px",
                    marginTop: "30px",
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    Smart contract development is behind the foundation of the
                    DAO. Smart contracts regulate the rules of the organization
                    and group treasury. Once the smart contract is conveyed to
                    live on the Ethereum platform, then no one can make
                    variations in the rules guidance except by a consensus. This
                    is possible because smart contracts are tamper-proof once
                    they go live on Ethereum.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    It will fail if someone tries to change something that is
                    not covered by the codes rules and reasons. Because the
                    treasury is also established by the smart contract, no one
                    can use the money without the permission of the
                    organization.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    As a result, DAOs do not necessitate a centralized
                    authority. Instead, the group makes decisions collectively,
                    and when votes are passed, transactions are automatically
                    permitted. You cant arbitrarily change the code (the DAOs
                    rules) without everyone noticing because everything is
                    public.
                  </li>
                </ul>
              </Grid>
            </Grid>

            <Box my={5} textAlign="center">
              <CustomButton onClick={() => setOpen(true)}>
                {" "}
                Talk to our Experts
              </CustomButton>
            </Box>
          </Container>
        </Box>
      </motion.div>
    </div>
  )
}

export default Dao
