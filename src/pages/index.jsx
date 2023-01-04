import * as React from "react"
import {
  Box,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"

import { StaticImage } from "gatsby-plugin-image"

import Banner from "../components/Banner"
import bottom from "../images/bottm.png"
import last from "../images/last.png"
import CustuomCard from "../components/CustuomCard"
import CustomButton from "../components/CustomButton"

import Badges from "../components/Badges"
import SeoHelmet from "../components/SeoHelmet"
import ServicesModel from "../components/ServicesModel"
import CustomContact from "../components/CustomContact"

import { motion, useIsPresent } from "framer-motion"

//Styled Component
const MainHeading = styled(Typography)({
  fontWeight: 700,
  letterSpacing: "0.2px",
  color: "white",
  lineHeight: { xs: "auto", sm: "56px" },
})

const StyledBox = styled(Box)({
  transition: "0.4s",
  "&: hover": {
    color: "#DB24B0",
  },
  backgroundColor: "#240035",
  borderRadius: "50%",
  width: { md: "70px", xs: "30px" },
  height: { md: "70px", xs: "30px" },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

// >>>>>>>>>>>>>>   Technologies >>>>>>>>>>>>>

const partnerImg = [
  { img: <StaticImage alt="partnerimg" src="../images/partner1.png" /> },
  { img: <StaticImage alt="partnerimg" src="../images/partner2.png" /> },
  { img: <StaticImage alt="partnerimg" src="../images/partner3.png" /> },
  { img: <StaticImage alt="partnerimg" src="../images/partner4.png" /> },
  { img: <StaticImage alt="partnerimg" src="../images/partner5.png" /> },
]

const cardData = [
  {
    img: <StaticImage alt="Ethereum" src="../images/logo1.png" />,
    title: "Ethereum",
  },
  {
    img: <StaticImage alt="Solana" src="../images/logo2.png" />,
    title: "Solana",
  },
  {
    img: <StaticImage alt="Binance" src="../images/logo3.png" />,
    title: (
      <>
        Binance <br /> Smart Chain
      </>
    ),
  },
  {
    img: <StaticImage alt="Polygon" src="../images/logo4.png" />,
    title: "Polygon",
  },
  {
    img: <StaticImage alt="Polkadot" src="../images/logo5.png" />,
    title: "Polkadot",
  },
  {
    img: <StaticImage alt="Cosmos" src="../images/logo6.png" />,
    title: "Cosmos",
  },
  {
    img: <StaticImage alt="Avalanche" src="../images/logo7.png" />,
    title: "Avalanche",
  },
  {
    img: <StaticImage alt="Hyperledger" src="../images/logo8.png" />,
    title: "Hyperledger",
  },
  {
    img: <StaticImage alt="Curve" src="../images/logo9.png" />,
    title: "Curve",
  },
  {
    img: <StaticImage alt="Harmony" src="../images/logo10.png" />,
    title: "Harmony",
  },
  {
    img: <StaticImage alt="Fantom" src="../images/logo11.png" />,
    title: "Fantom",
  },
  {
    img: <StaticImage alt="Chain link" src="../images/logo12.png" />,
    title: "Chain link",
  },
  { img: <StaticImage alt="NEAR" src="../images/logo13.png" />, title: "NEAR" },
  {
    img: <StaticImage alt="COSMOS" src="../images/logo14.png" />,
    title: "COSMOS",
  },
  {
    img: <StaticImage alt="img" src="../images/logo15.png" />,
    title: "Cardano",
  },
  { img: <StaticImage alt="img" src="../images/logo16.png" />, title: "AXS" },
  {
    img: <StaticImage alt="img" src="../images/logo17.png" />,
    title: "Web 3.0",
  },
  {
    img: <StaticImage alt="img" src="../images/logo18.png" />,
    title: "Metaverse",
  },
  { img: <StaticImage alt="img" src="../images/logo19.png" />, title: "NFTs" },
  { img: <StaticImage alt="img" src="../images/logo20.png" />, title: "IPFS" },
]
const structureData = () => {
  let data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BlocTech Solutions",
    alternateName: "BlocTech",
    url: "https://bloctechsolutions.com/",
    logo: "",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+9203138604818",
      contactType: "customer service",
      areaServed: ["US", "GB", "AE", "PK"],
      availableLanguage: "en",
    },
    sameAs: "https://bloctechsolutions.com/",
  }
  return JSON.stringify(data)
}
const IndexPage = () => {
  const isPresent = useIsPresent()

  const [open, setOpen] = React.useState(false)
  const toggelModal = () => {
    console.log(open + " open")
    setOpen(!open)
  }

  const matches = useMediaQuery("(max-width:700px)")
  let init = matches ? 4 : 8
  const [no, setno] = React.useState(init)
  const ani = useMediaQuery("(max-width: 899px")

  return (
    <main>
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
        <ServicesModel open={open} setOpen={setOpen} />
        {/* >>>>>>>>>>    Home  page>>>>>>>>>>>> */}
        <>
          <SeoHelmet
            title="Blockchain Development Company | BlocTech Solutions"
            description="Bloctech solutions is one of the best blockchain development company based on competitive team of Blockchian developers, web engineers and blockchain consultants"
            keywords="Blockchain development company, blockchain services"
            structureData={structureData}
          />
          <Box position={"relative"} zIndex="0">
            <svg
              className="simpe"
              style={{
                position: "absolute",
                top: ani ? "0px" : "-100px",
                left: ani ? "-40px" : "-100px",
                zIndex: "-1 !important",
              }}
              width={ani ? "200" : "700"}
              height={ani ? "200" : "700"}
              viewBox="0 0 775 775"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="homepath2"
                d="M387.5 775C284.012 775 186.672 734.7 113.512 661.488C40.3 588.277 0 490.988 0 387.5C0 284.012 40.3 186.672 113.512 113.512C186.723 40.3 284.012 0 387.5 0C490.988 0 588.328 40.3 661.488 113.512C734.7 186.723 775 284.012 775 387.5C775 490.988 734.7 588.328 661.488 661.488C588.328 734.648 490.988 775 387.5 775ZM387.5 4.39166C176.287 4.39166 4.39167 176.235 4.39167 387.5C4.39167 598.713 176.235 770.608 387.5 770.608C598.765 770.608 770.608 598.765 770.608 387.5C770.608 176.235 598.765 4.39166 387.5 4.39166Z"
                fill="url(#paint0_linear_1283_16)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1283_16"
                  x1="0.000516667"
                  y1="387.473"
                  x2="775.007"
                  y2="387.473"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0F98C5" />
                  <stop offset="0.2243" stopColor="#0D4996" />
                  <stop offset="0.327" stopColor="#194696" />
                  <stop offset="0.5919" stopColor="#962C92" />
                  <stop offset="0.7811" stopColor="#DE658C" />
                  <stop offset="1" stopColor="#FFB3B3" />
                </linearGradient>
              </defs>
            </svg>
          </Box>
          <Box
            sx={{
              background:
                "radial-gradient(164.31% 249.62% at 18.6% 0%, #A75D9E 5.42%, #66158D 36.23%, #172263 67.22%, #058BAE 100%)",
              zIndex: "1000",
              py: { md: 3, xs: "100px" },
            }}
          >
            <Box id="home" pb={{ md: "50px", xs: "50px" }}>
              <Container>
                <Grid container pt={{ xs: 2, md: 5 }}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    order={{ xs: 2, md: 1 }}
                    sx={{ zIndex: "100 !important" }}
                  >
                    <Box
                      component={"h1"}
                      textAlign={{ md: "left", xs: "center" }}
                      fontSize={{ xs: "25px", sm: "44px" }}
                      fontWeight={700}
                      letterSpacing="0.2px"
                      color="white"
                      lineHeight={{ xs: "auto", sm: "56px" }}
                      mt={8}
                      sx={{
                        fontFamily: "Mulish",
                        zIndex: "5",
                      }}
                    >
                      We Build Blockchain Solutions, Softwares and Applications
                    </Box>
                    <Box
                      textAlign={{ sm: "left", xs: "center" }}
                      my={4}
                      component={"p"}
                      fontSize={{ xs: "16px", sm: "16px" }}
                      fontWeight={400}
                      color="white"
                      letterSpacing="0.3px"
                      lineHeight="22px"
                      // px={{ xs: 1, sm: 5 }}
                      sx={{ zIndex: "5" }}
                    >
                      A leading blockchain development company nurturing
                      innovative practices in Web 3.0 and inspiring product
                      companies and non-IT enterprises to build reliable
                      blockchain solutions.
                    </Box>
                    <Box
                      display="flex"
                      justifyContent={{ sm: "flex-start", xs: "center" }}
                      mt={6}
                    >
                      {/* <HashLink
                                        style={{
                      textDecoration: "none",
                      position: "relative",
                      zIndex: "5",
                    }}
                    to={"/contact-us/"}
                  > */}

                      <CustomButton>Contact us</CustomButton>

                      {/* </HashLink> */}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} sm={12} order={{ xs: 1, md: 2 }}>
                    {/* =================thy animation============== */}

                    <Box
                      display="flex"
                      justifyContent={{ md: "center", xs: "center" }}
                      flexDirection={"column"}
                      alignItems="center"
                    >
                      <Box
                        textAlign={{ md: "right", xs: "center" }}
                        // mt={{ md: "40px", xs: "20px" }}
                        width="100%"
                        zIndex="1"
                        position="relative"
                      >
                        <Box>
                          <StaticImage
                            alt="Blockchain-Development-Services"
                            src="../images/homeimage.png"
                          />{" "}
                          {/* <Rotateanimation />{" "} */}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
            <Box position={"relative"}>
              {!ani && (
                <img
                  src={bottom}
                  style={{
                    position: "absolute",
                    left: "0px",
                    top: "-522px",
                  }}
                  alt=""
                />
              )}

              {!ani && (
                <img
                  src={last}
                  style={{
                    position: "absolute",
                    left: "20%",
                    top: "-240px",
                  }}
                  alt=""
                />
              )}
            </Box>
          </Box>
        </>{" "}
        {/* >>>>>>>>>>    About us page>>>>>>>>>>>> */}
        <Box pt={"30px"} pl={2} component="h2" textAlign="center">
          <MainHeading fontSize={{ xs: "25px", sm: "44px" }}>
            About Us
          </MainHeading>
        </Box>
        <Banner
          heading="Bloctech is a stocked Blockchain Consulting and Software
                  Development Company."
          discription="We’re specialized in developing decentralized applications
                  (dApps) and delivering blockchain startup companies with
                  consultation to enable them to develop new products or improve
                  existing ones."
          image={
            <StaticImage src="../images/about.png" alt="Blocchain Cunsulting" />
          }
          buttonText="Find Out More"
          backgroundColortext="#260238"
        />
        {/* >>>>>>>>>>    Services page >>>>>>>>>>>> */}
        <Box component="h2" textAlign="center">
          <MainHeading fontSize={{ xs: "25px", sm: "44px" }}>
            Services
          </MainHeading>
        </Box>
        <Box>
          <Container maxWidth="lg">
            <Grid spacing={4} container justifyContent={"center"} py="40px">
              <Grid item lg={4} sm={5} xs={12}>
                <CustuomCard
                  title="Blockchain Development"
                  discription="We offer a diverse portfolio in blockchain development, including building blockchain products, smart contracts, provide consultation through whole lifecycle of a project."
                  buttonText="Learn more"
                  image={
                    <StaticImage
                      alt="Blockchain-Development-Services"
                      src="../images/i1.png"
                    />
                  }
                  link="/blockchain-development-services"
                />
              </Grid>
              <Grid item lg={4} sm={5} xs={12}>
                <CustuomCard
                  title="Smart Contracts Development & Audit"
                  discription="For blockchain nodes, dApps, marketplaces, and smart contracts,BlocTech Solutions provide security audits services to reduce the fraud and ensure augmented security protocols."
                  buttonText="Learn more"
                  toggelModal={toggelModal}
                  image={
                    <StaticImage
                      alt="Blockchain-Development-Services"
                      src="../images/i2.png"
                    />
                  }
                />
              </Grid>
              <Grid item lg={4} sm={5} xs={12}>
                <CustuomCard
                  title="Dapp Development"
                  discription="We offer dApp development services to assist startups and established businesses in creating dependable, scalable, and decentralized peer-to-peer applications that are highly scalable and extendable to assist a variety of businesses."
                  buttonText="Learn more"
                  image={
                    <StaticImage
                      alt="Blockchain-Development-Services"
                      src="../images/i3.png"
                    />
                  }
                  link="/dapp-development-company"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* // >>>>>>>>>>>>>>   Technologies >>>>>>>>>>>>> */}
        <Box my={7}>
          <Container maxWidth="lg">
            <Box component="h2" textAlign={"center"}>
              <MainHeading fontSize={{ xs: "25px", sm: "44px" }}>
                Technologies we Believe in
              </MainHeading>
            </Box>

            <Grid container justifyContent="center" spacing={2} mt={4}>
              {cardData.slice(0, no).map(({ img, title }, index) => (
                <Grid
                  key={index + "ids"}
                  item
                  xs={12}
                  md={3}
                  textAlign="center"
                >
                  <Box
                    sx={{
                      borderRadius: "5px",
                      backgroundColor: "#240035",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                      py: "20px",
                      px: "10px",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: matches ? "column" : "row",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow:
                          "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
                      },
                      transition: "0.3s",
                    }}
                  >
                    {img}
                    <Typography
                      ml={!matches && 2}
                      mt={2}
                      fontSize={{ xs: "16px", sm: "20px" }}
                      fontWeight={700}
                      letterSpacing="0.3px"
                      color="white"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                      textAlign="left"
                    >
                      {title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {cardData.length != no && (
              <Box
                mt="30px"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  zIndex: "100 !important",
                }}
              >
                <CustomButton
                  onClick={() => setno(no + (cardData.length - no))}
                >
                  Load more
                </CustomButton>{" "}
              </Box>
            )}
          </Container>
        </Box>
        {/* // >>>>>>>>>>>>>>   Technologies >>>>>>>>>>>>> */}
        <Box
          pt={{ sm: 7, md: 6 }}
          pb={"90px"}
          sx={{
            background:
              "radial-gradient(164.31% 249.62% at 88.6% 0%, #b349a6 5.42%, #66158D 36.23%, #172263 67.22%, #058BAE 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: { sm: "top center", xs: "left" },
          }}
        >
          <Container maxWidth="lg">
            <Box m="0px" component="h2" pt="20px" textAlign="center">
              <MainHeading fontSize={{ xs: "25px", sm: "44px" }}>
                Testimonial
              </MainHeading>
            </Box>
            <Box
              component="h3"
              textAlign="center"
              fontSize={{ xs: "20px", sm: "32px" }}
              fontWeight={700}
              letterSpacing="0.1px"
              color="white"
              lineHeight={{ xs: "auto", sm: "40px" }}
            >
              {" "}
              What our clients say about us
            </Box>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <StaticImage
                  src="../images/Testimonial1.png"
                  alt="Testimonial"
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <StaticImage
                  src="../images/Testimonial2.png"
                  alt="Testimonial"
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <StaticImage
                  src="../images/Testimonial3.png"
                  alt="Testimonial"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* // >>>>>>>>>>>>>>   Partner >>>>>>>>>>>>> */}
        <Container maxWidth="lg">
          <Box
            component="h2"
            pt="30px"
            textAlign="center"
            fontSize={{ xs: "25px", sm: "44px" }}
            fontWeight={700}
            letterSpacing="0.2px"
            color="white"
            lineHeight={{ xs: "auto", sm: "56px" }}
          >
            Our Global Partners
          </Box>
          <Box
            sx={{
              padding: "25px 00px",
              borderRadius: "20px",
              boxShadow: "40",
              background: "transparent",
            }}
          >
            <Grid width="100%" container spacing={3} pb="30px">
              {partnerImg.map(({ img }, i) => (
                <Grid
                  key={i}
                  item
                  md={2.4}
                  sm={4}
                  xs={12}
                  justifyContent="center"
                  display="flex"
                >
                  <Box
                    textAlign="center"
                    width={"200px"}
                    sx={{
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow:
                          "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
                      },
                      transition: "0.3s",
                      borderRadius: "50%",
                    }}
                  >
                    {img}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>Contac us >>>>>>>>>>>>>>>>>>>>>>>>> */}
        <Box
          pb={{ sm: "0px", xs: "20px" }}
          sx={{
            background: "#3B0D73",
          }}
        >
          <Box id="contact" py={{ sm: 5, xs: 8 }}>
            {/* <BackDrop progress={formsubmit} /> */}
            <Container maxWidth="lg">
              <Box>
                <Grid container spacing={5}>
                  <Grid item sm={6} xs={12}>
                    <Box sx={{ marginTop: "100px" }}>
                      <CustomContact />
                    </Box>
                  </Grid>

                  <Grid item sm={6} xs={12} width="100%">
                    <Box
                      mt={{ md: "100px", xs: "40px" }}
                      sx={{
                        border: "1px solid #DB24B0",
                        borderRadius: "5px",
                        background: "rgba(217, 217, 217, 0.13)",
                        backdropFilter: "blur(76px)",
                        py: "20px",
                      }}
                    >
                      <Box
                        mt={{ md: "10px", xs: "20px" }}
                        component="h2"
                        pb={{ sm: "40px", xs: "30px" }}
                        textAlign="center"
                      >
                        <MainHeading fontSize={{ xs: "25px", sm: "44px" }}>
                          Follow Us
                        </MainHeading>
                      </Box>
                      <Stack
                        // px={check ? "40px" : "10px"}
                        mt="10px"
                        direction="row"
                        alignItems={"center"}
                        justifyContent="space-evenly"
                      >
                        <a
                          to="https://twitter.com/BloctechS"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#fff", textDecoration: "none" }}
                        >
                          <StyledBox
                            sx={{
                              width: { md: "70px", xs: "30px" },
                              height: { md: "70px", xs: "30px" },
                            }}
                          >
                            <TwitterIcon
                              sx={{ fontSize: { md: "35px", xs: "16px" } }}
                            />
                          </StyledBox>
                        </a>

                        <a
                          href="https://www.facebook.com/BlocTechSolutions/"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#fff", textDecoration: "none" }}
                        >
                          <StyledBox
                            sx={{
                              width: { md: "70px", xs: "30px" },
                              height: { md: "70px", xs: "30px" },
                            }}
                          >
                            <FacebookIcon
                              sx={{ fontSize: { md: "35px", xs: "16px" } }}
                            />
                          </StyledBox>
                        </a>
                        <a
                          href="https://www.instagram.com/bloctechsolutions/"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#fff", textDecoration: "none" }}
                        >
                          <StyledBox
                            sx={{
                              width: { md: "70px", xs: "30px" },
                              height: { md: "70px", xs: "30px" },
                            }}
                          >
                            <InstagramIcon
                              sx={{ fontSize: { md: "35px", xs: "16px" } }}
                            />
                          </StyledBox>
                        </a>
                        <a
                          href="
              https://www.linkedin.com/company/bloctech-solution/"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#fff", textDecoration: "none" }}
                        >
                          <StyledBox
                            sx={{
                              width: { md: "70px", xs: "30px" },
                              height: { md: "70px", xs: "30px" },
                            }}
                          >
                            <LinkedInIcon
                              sx={{ fontSize: { md: "35px", xs: "16px" } }}
                            />
                          </StyledBox>
                        </a>
                      </Stack>
                    </Box>
                    <Box
                      mt="20px"
                      py="34px"
                      sx={{
                        border: "1px solid #DB24B0",
                        borderRadius: "5px",
                        background: "rgba(217, 217, 217, 0.13)",
                        backdropFilter: "blur(76px)",
                      }}
                    >
                      <Box component="h2" textAlign={"center"}>
                        <MainHeading fontSize={{ xs: "25px", sm: "44px" }}>
                          Ratings & Reviews
                        </MainHeading>
                      </Box>
                      <Badges />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Box>
      </motion.div>
    </main>
  )
}

export default IndexPage
