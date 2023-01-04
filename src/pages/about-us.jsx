import React from "react"
import {
  Box,
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { motion, useIsPresent } from "framer-motion"
import Banner from "../components/Banner"
import CustomCard2 from "../components/Cards/CustomCard2"
import GoalCard from "../components/Cards/GoalCard"
import SeoHelmet from "../components/SeoHelmet"

//Styled Component
const MainHeading = styled(Typography)({
  background: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  fontWeight: 700,
  letterSpacing: "0.2px",
  lineHeight: { xs: "auto", sm: "56px" },
  color: "#fff",
})
const Paragraph = styled(Typography)({
  fontWeight: 400,
  letterSpacing: "0.3px",
  color: "#fff",
  lineHeight: { xs: "auto", sm: "22px" },
})

const cardData = [
  {
    img: <StaticImage src="../images/abouticon1.png" alt="icon1" />,
    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    title: "Consistent quality and performance",
    boxShadow:
      "0px 0px 5px rgba(255, 53, 17, 0.52),   0px 0px 20px rgba(255, 53, 17, 0.52),  0px 0px 45px rgba(255, 53, 17, 0.52),  0px 0px 180px rgba(255, 53, 17, 0.52)",
  },
  {
    img: <StaticImage src="../images/abouticon2.png" alt="icon1" />,
    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    title: "Providing dependable services",
    boxShadow:
      "0px 0px 5px rgba(219, 36, 176, 0.5),   0px 0px 20px rgba(219, 36, 176, 0.5),  0px 0px 45px rgba(219, 36, 176, 0.5),  0px 0px 180px rgba(219, 36, 176, 0.5)",
  },
  {
    img: <StaticImage src="../images/abouticon3.png" alt="icon1" />,
    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    title: "Dedicate to excellence",
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5)",
  },
  {
    img: <StaticImage src="../images/abouticon4.png" alt="icon1" />,
    bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    title: "Rapid application development with application stability",
    boxShadow:
      "0px 0px 5px rgba(21, 76, 229, 0.5),   0px 0px 20px rgba(21, 76, 229, 0.5),  0px 0px 45px rgba(21, 76, 229, 0.5),  0px 0px 180px rgba(21, 76, 229, 0.5)",
  },
]

const AboutPage = () => {
  const isPresent = useIsPresent()
  const matches = useMediaQuery("(max-width:600px)")

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BlocTech Solutions",
      alternateName: "BlocTech",
      url: "https://www.bloctechsolutions.com/about-us/",
      logo: "",
    }
    return JSON.stringify(data)
  }
  return (
    <div>
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
        title="Blockchain software development | About Us | BlocTech Solutions"
        description="As a blockchain software development company, we provide blockchain solutions to businesses and assist them with innovative blockchain applications and platforms."
        keywords="Blockchain software development, Blockchain service provider"
        structureData={structureData}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 4, ease: "circOut" } }}
        exit={{ opacity: 0, transition: { duration: 4, ease: "circIn" } }}
      >
        <Box
          sx={{
            backgroundColor: "#240035",
          }}
        >
          <Banner
            heading="About Us"
            discription="BlocTech is a stocked Blockchain Consulting and Software
                      Development Company. We offer a wide range of blockchain
                      development services and cryptocurrency solutions
                      development (crypto wallets, exchanges, trading apps,
                      etc). Being early birds of the blockchain revolution, we
                      have gained deep expertise in cryptocurrency development
                      and became a reliable and experienced blockchain
                      development company.We’re specialized in developing
                      decentralized applications (dApps) and delivering
                      blockchain startup companies with consultation to enable
                      them to develop new products or improve existing ones."
            image={<StaticImage src="../images/aboutmain.png" alt="about" />}
            buttonText="Contact Us"
          />
        </Box>

        <Container>
          <Grid my={3} container spacing={4}>
            <Grid item xs={12} sm={6}>
              <CustomCard2
                heading="Problems"
                list={
                  <ul>
                    <li className="list">
                      Cost is an important concern for customers looking to
                      build apps or develop their ideas
                    </li>
                    <li className="list">
                      Finding the right skillset to develop your ideas is a
                      challenge
                    </li>
                    <li className="list">
                      Maintaining and sustaining product at the early stage of
                      your startup is a hassle
                    </li>
                  </ul>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomCard2
                heading="Solutions"
                list={
                  <ul>
                    <li className="list">
                      An all in one web service were we work with clients to
                      bring their ideas to live
                    </li>
                    <li className="list">
                      Save money without breaking the bank or comprising quality
                    </li>
                    <li className="list">
                      Tech support of 50+ skilled developers
                    </li>
                  </ul>
                }
              />
            </Grid>
          </Grid>

          <Grid my={3} container spacing={5}>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box display="flex" justifyContent="flex-start">
                <StaticImage
                  src="../images/arrow.png"
                  alt="about"
                  style={{
                    width: "100%",
                    height: matches ? "350px" : "500px",
                    borderRadius: "5px",
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
                <Box component="h2" mt={5}>
                  <MainHeading fontSize={{ xs: "20px", sm: "34px" }}>
                    OUR VISION
                  </MainHeading>
                </Box>
                <Box sx={{ width: "86%" }}>
                  <Box component="p" mt={2}>
                    <Paragraph textAlign={"justify"}>
                      Our vision is to help companies build innovative software
                      with a team of world class blockchain engineers with an
                      innovative approach to each project, so you can be
                      confident in your success with us. We dedicate our
                      resources to build next-gen applications, powerful
                      products and blockchain solutions across the globe. We can
                      help take special care of your blockchain project needs.
                      With a credible group of research engineers, designers,
                      blockchain developers, smart contract auditors, and
                      product managers- all having technical expertise in
                      blockchain in our arsenal. We Are Relentlessly Working To
                      Contribute To The Ever-Evolving World Of Web3 Technology.
                    </Paragraph>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box component="h2" pt={{ xs: 0, md: 7 }} my={2}>
            <MainHeading
              fontSize={{ xs: "20px", sm: "34px" }}
              textAlign="center"
            >
              OUR GOALS
            </MainHeading>
          </Box>
          <Box component="p" pt={{ xs: 0, md: 2 }} my={2}>
            <Paragraph textAlign="center">
              Our goals are directly related to your results
            </Paragraph>
          </Box>

          <Grid
            container
            justifyContent="center"
            display="flex"
            spacing={5}
            my={4}
          >
            {cardData.map(({ img, title, bg, boxShadow }, index) => (
              <Grid key={index} item xs={12} md={3} textAlign={"center"}>
                <GoalCard
                  img={img}
                  title={title}
                  bg={bg}
                  boxShadow={boxShadow}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.div>
    </div>
  )
}

export default AboutPage
