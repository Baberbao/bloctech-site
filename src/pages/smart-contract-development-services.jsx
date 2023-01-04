import React, { useContext } from "react"

import { Box, Grid, styled, Typography, Container } from "@mui/material"

import { StaticImage } from "gatsby-plugin-image"

import Banner from "../components/Banner"
import CustomButton from "../components/CustomButton"
import CustomCardList from "../components/CustomCardList"
import SeoHelmet from "../components/SeoHelmet"
import Subheading from "../components/Subheading"
import CustuomCard from "../components/CustuomCard"

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
    title: "Design and Development",
    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    icon: (
      <StaticImage src="../images/dafi1.png" alt="DeFi Product Development" />
    ),
    ul: (
      <ul>
        <li>Design of multiple smart contract logic scenarios.</li>
        <li>
          Development of proxy contracts to facilitate updates and iterative
          development of smart contracts.
        </li>
        <li>
          Built-in ‘contract self-destruct’ command for contract termination.
        </li>
      </ul>
    ),
    boxShadow:
      "0px 0px 5px rgba(243, 23, 129, 0.5),   0px 0px 20px rgba(243, 23, 129, 0.5),  0px 0px 45px rgba(243, 23, 129, 0.5),  0px 0px 180px rgba(243, 23, 129, 0.5)",
  },
  {
    title: "Audit, Testing, and Deployment",
    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    icon: (
      <StaticImage src="../images/dafi1.png" alt="DeFi Product Development" />
    ),
    ul: (
      <ul>
        <li>Testing to guarantee zero vulnerabilities zero</li>
        <li>Code reviews and audits. </li>
        <li>
          Logic audit (in the presence of the involved parties) to ensure
          reflection of stipulated agreements.
        </li>
        <li>Post-deployment contract testing (via test oracles).</li>
      </ul>
    ),
    boxShadow:
      "0px 0px 5px rgba(243, 23, 129, 0.5),   0px 0px 20px rgba(243, 23, 129, 0.5),  0px 0px 45px rgba(243, 23, 129, 0.5),  0px 0px 180px rgba(243, 23, 129, 0.5)",
  },
  {
    title: "Oracle Development",
    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    icon: (
      <StaticImage src="../images/dafi1.png" alt="DeFi Product Development" />
    ),
    ul: (
      <ul>
        <li>
          Development of oracles for seamless integration with off-chain data
          sources (sensors, databases, bank systems, etc.
        </li>
        <li>
          Integration of oracles with smart contracts and businesses’ IT
          ecosystems.
        </li>
      </ul>
    ),
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5)",
  },
]
const Carddata = [
  {
    img: (
      <StaticImage
        src="../images/smartbanking.png"
        alt="DeFi Product Development"
      />
    ),
    title: "Banking and Finance",
    description: (
      <ul>
        <li>Peer-to-peer transactions, seamless KYC processing .</li>
        <li>Error-free insurance claim processing</li>
        <li>Transparent audits </li>
      </ul>
    ),
    alt: "Banking and Finance",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    img: (
      <StaticImage
        src="../images/smartlogistics.png"
        alt="DeFi Product Development"
      />
    ),
    title: "Logistics and Supply Chain",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    description: (
      <ul>
        <li>Improve the transparency .</li>
        <li>Traceability and efficiency of a supply chain</li>
        <li>More agile while strengthening relationships among stakeholders</li>
      </ul>
    ),
    alt: "Logistics and Supply Chain",
  },
  {
    img: (
      <StaticImage
        src="../images/smartecommerce.png"
        alt="DeFi Product Development"
      />
    ),
    title: "eCommerce",
    description: (
      <ul>
        <li>Supplychain tracking and monitoring</li>
        <li>Affordability: cheaper and faster</li>
        <li>Transparency and security</li>
      </ul>
    ),
    alt: "ECommerce",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    img: (
      <StaticImage
        src="../images/smarthealth.png"
        alt="DeFi Product Development"
      />
    ),
    title: "Healthcare",
    description: (
      <ul>
        <li>Helping to automate process</li>
        <li>Promote transparency</li>
        <li>Improve efficiency</li>
        <li>Minimize service time</li>
      </ul>
    ),
    alt: "Healthcare",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    img: (
      <StaticImage
        src="../images/insurance.png"
        alt="DeFi Product Development"
      />
    ),
    title: "Insurance",
    description: (
      <ul>
        <li>Automate policies and services</li>
        <li>Reduce administrative and claims processing costs</li>
        <li>Increase transparency and prevent fraud</li>
      </ul>
    ),
    alt: "Insurance",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    img: (
      <StaticImage
        src="../images/smartgoverment.png"
        alt="DeFi Product Development"
      />
    ),
    title: "Government",
    description: (
      <ul>
        <li>Prevent incompliance in voting system</li>
        <li>Streamline the tax collection process</li>
        <li>Social security deductions</li>
        <li>Improved data security in defence sector</li>
      </ul>
    ),
    alt: "Government",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
]
const Carddata2 = [
  {
    img: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    link: "/token-development-services/",
    title: "Token Development",
    description:
      "Build private and controlled participants network, execute the consensus protocol to decide the mining rights and rewards, and maintain the shared ledger.",
  },
  {
    img: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    title: "Tokenization services",
    link: "/tokenization-service/",
    description:
      "Get encrypted peer-to-peer apps with no single point of failure and zero downtime and get rid of data breach and hacking attempt.",
  },
]

const SmartContractDevelopmentServices = () => {
  const isPresent = useIsPresent()
  const { setOpen } = useContext(AppContext)
  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.bloctechsolutions.com/smart-contract-services/",
      },
      headline: "Smart contract development Services",
      description:
        "BlocTech Solutions have robust blockchain-enabled smart contract development experience with in-depth knowledge. We deliver dynamic, infiltration free, and amenadable smart contracts and oracles development services.",
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
        title="Smart Contract Development Services | BlocTech Solutions"
        description="Reform your Business with our Smart contract development services. Along with cyber security and efficiency we provide easier smart contract integration."
        keywords="smart contract services, smart contract development services"
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
            heading="Smart Contract Development Services"
            discription="BlocTech Solutions have robust blockchain-enabled smart
        contract development experience with in-depth knowledge.
        We deliver dynamic, infiltration free, and amenadable
        smart contracts and oracles development services."
            image={
              <StaticImage
                src="../images/smartimg.png"
                alt="Smart Contract Development Services"
              />
            }
            buttonText="Request Quote"
            backgroundColortext="#260238"
          />
        </Box>
        <Container>
          <Subheading subHeading="BlocTech Delivers Blockchain Solutions" />

          <Grid
            container
            justifyContent="center"
            display="flex"
            spacing={5}
            my={4}
          >
            {Carddata2.map(({ title, description, link }, index) => (
              <Grid key={index} item xs={12} md={4} textAlign={"center"}>
                {/* <GoalCard img={img} title={title} bg={bg} boxShadow={boxShadow} /> */}
                <CustuomCard
                  title={title}
                  discription={description}
                  link={link}
                  buttonText="Learn more"
                />
              </Grid>
            ))}
          </Grid>
          <Box>
            <Paragraph
              component="p"
              fontSize={{ xs: "13px", sm: "16px" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
            >
              Although, Smart contract development is not an easy to go
              process,and comprised of complex development stages, testing, and
              blockchain deployment of smart contract logic, but we also make
              this journey smooth and satisfying for our clients by adopting
              best practices which also help in reducing cost and guarantee
              cyber immunity.
            </Paragraph>
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
            <Box my={"20px"}>
              <li className="list">
                {" "}
                Oracles – entities that connect blockchains to external systems,
                thereby enabling smart contracts to execute based upon inputs
                and outputs from the real world.
              </li>
              <li className="list">
                {" "}
                Proxy contracts – stores an address of the latest deployed
                contract and redirect calls to that, currently valid, logic.
              </li>
            </Box>

            <Grid
              container
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                my: 5,
              }}
            >
              {mapData.map(({ bg, title, ul, boxShadow, icon }, index) => (
                <Grid key={index} item xs={12} md={4}>
                  <CustomCardList
                    title={title}
                    discripton={ul}
                    bg={bg}
                    boxShadow={boxShadow}
                    image={icon}
                  />
                </Grid>
              ))}
            </Grid>
            <Subheading subHeading="Industrial Smart Contract Services" />
            <Grid
              container
              spacing={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                my: 5,
              }}
            >
              {Carddata.map(({ title, description, boxShadow, img }, index) => (
                <Grid key={index} item xs={12} md={4}>
                  <CustomCardList
                    title={title}
                    discripton={description}
                    bg="#41015F"
                    boxShadow={boxShadow}
                    image={img}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box py={4}>
            <Grid
              container
              style={{
                padding: 50,
                background: "#411F78",
              }}
            >
              <Grid item xs={12} sm={12}>
                <Box
                  component="h2"
                  pt={4}
                  sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: { xs: "20px", sm: "34px" },
                    lineHeight: { xs: "auto", sm: "40px" },
                    textAlign: { xs: "center", sm: "left" },
                    letterSpacing: "1.3px",
                    color: "#FFFFFF",
                  }}
                >
                  Haven’t Found Your Business Case?{" "}
                </Box>
                <Box
                  component="p"
                  py={4}
                  width="100%"
                  mx="auto"
                  sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: { xs: "13px", sm: "16px" },
                    lineHeight: "21px",
                    letterSpacing: "1.3px",
                    color: "#FFFFFF",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  BlocTech Solutions have catered over 30+ industries with the
                  most diverse business needs. Get in touch with our experts to
                  discuss the feasibility of leveraging smart contracts in your
                  domain.
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} textAlign="left" alignSelf={"center"}>
                <CustomButton onClick={() => setOpen(true)}>
                  DISCUSS MY NEEDS
                </CustomButton>
              </Grid>
            </Grid>
          </Box>
          <Subheading subHeading="Estimated Time Duration and Cost Factors for Smart Contract Development" />
          <Grid container spacing={4} my={5}>
            <Grid item xs={12} sm={6}>
              <Box textAlign="left" height="100%">
                {" "}
                <Box
                  textAlign={"center"}
                  sx={{
                    background: "#41015F",
                    boxShadow: "9px 0px 26px #000000",
                  }}
                  py={"30px"}
                  width="100%"
                >
                  <StaticImage src="../images/dafi1.png" alt="Smart Contract" />
                </Box>
                <Box
                  sx={{
                    background: "#240035",
                    py: { xs: "20px", sm: "60px" },
                    px: { xs: "30px", sm: "60px" },
                  }}
                >
                  <Box
                    component="h3"
                    pb={4}
                    mt="20px"
                    fontSize={{ xs: "16px", sm: "20px" }}
                    fontWeight={700}
                    letterSpacing="0.3px"
                    color="#FFFFFF"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    textAlign="left"
                  >
                    Estimated Time Duration
                  </Box>
                  <Box
                    width="100%"
                    mx="auto"
                    fontSize={{ xs: "13px", sm: "16px" }}
                    fontWeight={400}
                    letterSpacing="0.3px"
                    color="#FFFFFF"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                  >
                    <b>High-level estimates</b> for a small-scale smart contract
                    development project:
                  </Box>
                  <ul>
                    <li className="list">
                      Business analysis – <b>2 weeks.</b>{" "}
                    </li>
                    <li className="list">
                      Logic and architecture design – <b> 2 weeks.</b>
                    </li>
                    <li className="list">
                      Smart contract development – <b>1 month.</b>
                    </li>
                    <li className="list">
                      Oracle development – <b>1 month.</b>
                    </li>
                    <li className="list">
                      Deployment and integration – <b>1-2 weeks.</b>
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="left" height="100%">
                {" "}
                <Box
                  textAlign={"center"}
                  sx={{
                    background: "#41015F",
                    boxShadow: "9px 0px 26px #000000",
                  }}
                  py={"30px"}
                  width="100%"
                >
                  <StaticImage src="../images/dafi2.png" alt="Smart Contract" />
                </Box>
                <Box
                  sx={{
                    background: "#240035",
                    py: { xs: "20px", sm: "40px" },
                    px: { xs: "30px", sm: "60px" },
                  }}
                  // height="100%"
                >
                  <Box
                    component="h3"
                    pb={4}
                    mt="20px"
                    fontSize={{ xs: "16px", sm: "20px" }}
                    fontWeight={700}
                    letterSpacing="0.3px"
                    color="#FFFFFF"
                    lineHeight={{ xs: "auto", sm: "22px" }}
                    textAlign="left"
                  >
                    Cost Factors
                  </Box>

                  <ul>
                    <li className="list">
                      Complexity of smart contract logic.
                    </li>
                    <li className="list">
                      Logic and architecture design – <b> 2 weeks.</b>
                    </li>
                    <li className="list">
                      Number of parties/organizations involved.
                    </li>
                    <li className="list">
                      Scope of an entire blockchain solution.
                    </li>
                    <li className="list">Number of required integrations.</li>
                    <li className="list">Key pricing models:</li>
                    <li className="list">
                      Fixed price – for small projects and PoC.
                    </li>
                    <li className="list">
                      T&M – for most smart contract projects.
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            my={5}
            sx={{
              display: "flex",
              alignitems: "center",
              justifyContent: "center",
            }}
          >
            <CustomButton onClick={() => setOpen(true)}>
              Request Quote
            </CustomButton>
          </Box>
        </Container>
      </motion.div>
    </>
  )
}

export default SmartContractDevelopmentServices
