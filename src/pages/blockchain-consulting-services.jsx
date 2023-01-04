import React, { useContext } from "react"

import { Box, Container, Grid, Stack, styled, Typography } from "@mui/material"

import { StaticImage } from "gatsby-plugin-image"

import Banner from "../components/Banner"
import Subheading from "../components/Subheading"
import "../style/flip.css"
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

const data1 = [
  {
    issue: "Complicated Assessment of Blockchain",
    fixed:
      "We do use-case analysis according to client’s specifications to examine feasiblity, and study of proof of work to test the prospects of blockchain solution.",
    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    icon: (
      <StaticImage src="../images/issue1.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(243, 23, 129, 0.5),   0px 0px 20px rgba(243, 23, 129, 0.5),  0px 0px 45px rgba(243, 23, 129, 0.5),  0px 0px 180px rgba(243, 23, 129, 0.5)",
  },
  {
    issue:
      "Lack of in-house competencies to create a clear Blockchain solution",
    fixed:
      "We provide robust blockchain solutions from proposing an architecture design to implement integration plan for required software. ",
    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    icon: (
      <StaticImage src="../images/issue2.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(219, 36, 176, 0.5),   0px 0px 20px rgba(219, 36, 176, 0.5),  0px 0px 45px rgba(219, 36, 176, 0.5),  0px 0px 180px rgba(219, 36, 176, 0.5)",
  },
  {
    issue: "Mounting Cost of Blockchain Project",
    fixed:
      "By conducting a parallel prospect analysis of possible approaches to the blockchain, we single out most cost-effective approach for your blockchain project.",
    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    icon: (
      <StaticImage src="../images/issue3.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5)",
  },
  {
    issue:
      "Lack of Project Management Skills to accurately plan the Blockchain Implementation",
    fixed:
      "We create an in detail standard procedure for blockchain implementation, with fair consideration of a risk mitigation plan, project cost, and time estimation.",
    bg: "linear-gradient(180deg, #67FE1A 0%, #139950 100%)",
    icon: (
      <StaticImage src="../images/issue4.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(102, 254, 26, 0.5),   0px 0px 20px rgba(102, 254, 26, 0.5),  0px 0px 45px rgba(102, 254, 26, 0.5),  0px 0px 180px rgba(102, 254, 26, 0.5)",
  },
  {
    issue:
      "Lack of in-house capabilities to build smooth Blockchain solution  integrated with softwares",
    fixed:
      "We offer end-to-end blockchain implementation, which equip companies to integrate their software with blockchain solution and ensure quality, maintenance and support.",
    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    icon: (
      <StaticImage src="../images/issue5.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(243, 23, 129, 0.5),   0px 0px 20px rgba(243, 23, 129, 0.5),  0px 0px 45px rgba(243, 23, 129, 0.5),  0px 0px 180px rgba(243, 23, 129, 0.5)",
  },
]

const data2 = [
  {
    img: (
      <StaticImage src="../images/key1.png" alt="DeFi Product Development" />
    ),
    heading: "Finance management",
    ul: (
      <ul>
        <li>
          We ensure flashing, fully protected, and economical domestic and
          cross-border payments, currency exchange, and lending transactions.
        </li>
        <li>
          We safeguard all the manual errors across financial transaction
          processing by multiple revisions and testing.
        </li>
      </ul>
    ),
    alt: "Finance management",
  },
  {
    img: (
      <StaticImage src="../images/key2.png" alt="DeFi Product Development" />
    ),
    heading: "Supply chain and logistics",
    ul: (
      <ul>
        <li>
          To track a product from origin to consumption, we provide traceability
          in supplychain and logistics.
        </li>
        <li>
          We facilitate clients with verification of goods authenticity, and
          automated enforcement of fixed multi-party agreement.
        </li>
      </ul>
    ),
    alt: "Supply chain and logistics",
  },
  {
    img: (
      <StaticImage src="../images/key3.png" alt="DeFi Product Development" />
    ),
    heading: "Medical record management",
    ul: (
      <ul>
        <li>
          We help healthcare industry to become immutable, and secure HIPPA
          compliance by safe and easy medical record sharing with patients.
        </li>

        <li>
          We keep the channel infiltration free to transfer sensitive medical
          data between multiple healthcare providers.
        </li>
      </ul>
    ),
    alt: "Medical record management",
  },
  {
    img: (
      <StaticImage src="../images/key4.png" alt="DeFi Product Development" />
    ),
    heading: "Asset management",
    ul: (
      <ul>
        <li>
          We help in tokenization by providing immutablity to asset records for
          different industries, from FMCG’s to media and real estate.
        </li>
        <li>
          We ensure proof of ownership for assets and prevente fraud
          counterfeiting with blockchain solutions.
        </li>
      </ul>
    ),
    alt: "Asset management",
  },
]

const BlockchainConsultingServices = () => {
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
            heading="Blockchain Consulting Services"
            discription="Our Blockchain development consultation assists
        organizations to overcome all obstacles in the finding best
        blockchain based solutions. We foster steadily expanding
        product development competence that benefits our clients by
        boosting their revenue. We plan our workflow so that our
        clients may simply monitor and comprehend the status of
        their projects. Regarding spending, time and labor
        efficiency, this keeps clients on the safe side."
            image={
              <StaticImage
                src="../images/BlockchainConsulting.png"
                alt="DeFi Product Development"
              />
            }
            buttonText="Talk To Our Experts"
            backgroundColortext="#260238"
          />
        </Box>

        <Container>
          <Box>
            <Subheading subHeading="Get Best Bockchain Consultation Now" />

            <Paragraph
              component="p"
              fontSize={{ xs: "13px", sm: "16px" }}
              lineHeight={{ xs: "auto", sm: "22px" }}
            >
              We cultivate consistently growing product development experience
              that helps our clients to multiply their profit generation. We
              devise our work strategy in a way that our clients could easily
              track and understand progress of their projects. This thing
              remains clients at the safe side in terms of budget and
              optimization of work and time. We cover all from smart contracts
              to decentralized exchanges and applications, Our dApp Development
              Company helps businesses to beat all odds in the decentralized
              applications world.
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
              {data1.map(({ issue, bg, icon, boxShadow }, index) => (
                <Grid key={index} item xs={12} md={4}>
                  <Box
                    height="100%"
                    width={"100%"}
                    position={"relative"}
                    className="flip"
                  >
                    <Box
                      className="front"
                      sx={{
                        background: `${bg}`,
                        px: "15px",
                      }}
                      height="100%"
                    >
                      <Box textAlign="center" py="30px">
                        {" "}
                        {icon}
                      </Box>

                      <Box
                        component="p"
                        pb="50px"
                        fontSize={{ xs: "13px", sm: "16px" }}
                        fontWeight={400}
                        letterSpacing="0.3px"
                        color="white"
                        lineHeight={{ xs: "auto", sm: "22px" }}
                        textAlign="center"
                      >
                        {issue}
                      </Box>
                    </Box>
                    <Box className="back">
                      <CustomCard3
                        boxShadow={boxShadow}
                        discripton={issue}
                        bg={bg}
                      />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Subheading subHeading="Key Blockchain Use Cases BlocTech Solutions Supports" />

            <Grid
              my="50px"
              container
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {data2.map(({ img, heading, ul }, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Box
                    height="100%"
                    sx={{
                      background: "#240035",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      py: "30px",
                      px: "20px",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow:
                          "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
                      },
                      transition: "0.3s",
                    }}
                  >
                    <Stack direction={"row"} justifyContent="space-evenly">
                      <Box textAlign="center">{img}</Box>{" "}
                      <Box
                        component="h3"
                        mt="20px"
                        fontSize={{ xs: "14px", sm: "18px" }}
                        fontWeight={700}
                        letterSpacing="0.3px"
                        color="white"
                        lineHeight={{ xs: "auto", sm: "22px" }}
                        textAlign="center"
                      >
                        {heading}
                      </Box>
                    </Stack>
                    <Box
                      mt="30px"
                      color="white"
                      sx={{ fontSize: { sm: "12px", xs: "10px" } }}
                    >
                      {ul}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            mt="50px"
            py="50px"
            mb="50px"
            px={{ sm: "50px", xs: "20px" }}
            sx={{
              background: "#411F78",
            }}
          >
            <Box
              component="p"
              mt={3}
              fontSize={{ xs: "12px", sm: "14px" }}
              fontWeight={400}
              color="#bdc4cc"
              letterSpacing="0.3px"
              textAlign="center"
              lineHeight="22px"
            >
              We covey easy to understand, flawless audits of smart contacts by
              ensuring best practices to audit for tokens, NFTs, crowd sales,
              marketplaces, gambling games, financial protocols, and much more.
              We provide the best combos of automated tools, static analysis,
              and a robust review process to provide recommendations for the
              project.
            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
              <CustomButton onClick={() => setOpen(true)}>
                Book Free Assessment
              </CustomButton>
            </Box>
          </Box>
        </Container>
      </motion.div>
    </>
  )
}

export default BlockchainConsultingServices
