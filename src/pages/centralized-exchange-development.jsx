import React, { useContext } from "react"
import { Box, Grid, Typography, Container } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { motion, useIsPresent } from "framer-motion"

import Banner from "../components/Banner"
import SeoHelmet from "../components/SeoHelmet"
import Subheading from "../components/Subheading"
import { styled } from "@mui/system"
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

const Carddata = [
  {
    img: <StaticImage src="../assets/platform1.png" alt="icon1" />,
    title: "Multiple Order Types",
  },
  {
    img: <StaticImage src="../assets/platform2.png" alt="icon1" />,
    title: "Powerful Trading Engine",
  },
  {
    img: <StaticImage src="../assets/platform3.png" alt="icon1" />,
    title: "Payment Gateway Integration",
  },
  {
    img: <StaticImage src="../assets/platform4.png" alt="icon1" />,
    title: "KYC & AML Integration",
  },
  {
    img: <StaticImage src="../assets/platform5.png" alt="icon1" />,
    title: "CSRF & SSRF Protection",
  },
  {
    img: <StaticImage src="../assets/platform6.png" alt="icon1" />,
    title: "Elliptic-curve cryptography wallet",
  },
  {
    img: <StaticImage src="../assets/platform7.png" alt="icon1" />,
    title: "DDoS protection and X-XSS-Protection",
  },
  {
    img: <StaticImage src="../assets/platform8.png" alt="icon1" />,
    title: "Advance Admin Dashboard",
  },
  {
    img: <StaticImage src="../assets/platform9.png" alt="icon1" />,
    title: "Multi-Signature Wallet",
  },
  {
    img: <StaticImage src="../assets/platform10.png" alt="icon1" />,
    title: "Multi-crypto Support",
  },
]

const mapData = [
  {
    title: "Ease Of Access",
    discription:
      "CEX simplifies the process of registering for an account and purchasing their first coin. This has aided in attracting new users to the system, as well as increasing the popularity of crypto marketplaces.",

    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    boxShadow:
      "0px 0px 5px rgba(255, 53, 17, 0.52),   0px 0px 20px rgba(255, 53, 17, 0.52),  0px 0px 45px rgba(255, 53, 17, 0.52),  0px 0px 180px rgba(255, 53, 17, 0.52)",
    img: <StaticImage src="../assets/centeri1.png" alt="icon1" />,
  },
  {
    title: "License",
    discription:
      "The majority of these centralized exchanges are licensed and regulated by the government. This gives the trader peace of mind in the event that something goes wrong.",

    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    boxShadow:
      "0px 0px 5px rgba(219, 36, 176, 0.5),   0px 0px 20px rgba(219, 36, 176, 0.5),  0px 0px 45px rgba(219, 36, 176, 0.5),  0px 0px 180px rgba(219, 36, 176, 0.5)",
    img: <StaticImage src="../assets/centeri2.png" alt="icon1" />,
  },
  {
    title: "Use Of Escrow",
    discription:
      "They keep the currency as an intermediary in exchanges until both parties have fulfilled their obligations. As a result, there's no need to be concerned about the transaction once it's completed.",

    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5)",
    img: <StaticImage src="../assets/centeri3.png" alt="icon1" />,
  },
  {
    title: "Transparency",
    discription:
      "They provide the dealers with their address and location. As a result, it makes it easier for customers to contact them if necessary.",

    bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    boxShadow:
      "0px 0px 5px rgba(21, 76, 229, 0.5),   0px 0px 20px rgba(21, 76, 229, 0.5),  0px 0px 45px rgba(21, 76, 229, 0.5),  0px 0px 180px rgba(21, 76, 229, 0.5)",
    img: <StaticImage src="../assets/centeri4.png" alt="icon1" />,
  },
  {
    title: "Offers And Discounts",
    discription:
      "CEX also gives you a discount if you trade in large numbers. Users can also trade fiat dollars for cryptocurrencies and cryptocurrencies for fiat currencies.",
    bg: "linear-gradient(180deg, #2DA7F2 28.24%, #00E4E7 100%)",
    boxShadow:
      "0px 0px 5px rgba(45, 166, 242, 0.5),   0px 0px 20px rgba(45, 166, 242, 0.5),  0px 0px 45px rgba(45, 166, 242, 0.5),  0px 0px 180px rgba(45, 166, 242, 0.5)",
    img: <StaticImage src="../assets/centeri4.png" alt="icon1" />,
  },
]

const Carddata2 = [
  {
    img: <StaticImage src="../assets/platform11.png" alt="icon1" />,
    title: "HTTP Authentication",
    description:
      "Secure HTTP Authentication tokens like OAuth for user authentication",
  },
  {
    img: <StaticImage src="../assets/platform12.png" alt="icon1" />,
    title: "Data Encryption",
    description:
      "Encryption of data transmission for protecting user credentials and other confidential information",
  },
  {
    img: <StaticImage src="../assets/platform13.png" alt="icon1" />,
    title: "Jail Login",
    description:
      "Prevents multiple failed attempts for a certain amount of time",
  },
  {
    img: <StaticImage src="../assets/platform14.png" alt="icon1" />,
    title: "Anti-Denial of Service (DoS)",
    description:
      "Protection of the exchange from large requests sent to the server",
  },
  {
    img: <StaticImage src="../assets/platform15.png" alt="icon1" />,
    title: "CSRF Protection",
    description:
      "Prevents state-changing requests and other unwanted user actions",
  },
  {
    img: <StaticImage src="../assets/platform16.png" alt="icon1" />,
    title: "SSRF Protection",
    description:
      "Protects internal systems from attacks sent from pregnable web applications",
  },
  {
    img: <StaticImage src="../assets/platform17.png" alt="icon1" />,
    title: "HTTP Parameter Pollution Protection",
    description:
      "Deters web attacks that craft an HTTP request in order to retrieve hidden information",
  },
  {
    img: <StaticImage src="../assets/platform18.png" alt="icon1" />,
    title: "Anti-Distributed Denial of Service (DDoS)",
    description:
      "Defends the exchange from overwhelming traffic originating from multiple sources",
  },
]

const CentralizedExchange = () => {
  const isPresent = useIsPresent()
  const { setOpen } = useContext(AppContext)

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.bloctechsolutions.com/centralized-exchange-development/",
      },
      headline: "Centralized Exchange Development",
      description:
        "BLocTech Solutions helps you to acquire the best centralized crypto exchange platform like Binance, with high trade volume and liquidity, allowing users to trade cryptocurrencies seamlessly.",
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
        title="Centralized Exchange Development | BlocTech Solutions"
        description="we offer centralized exchange development services for businesses and organizations. centralized crypto exchanges help crypto traders to connect mutually."
        keywords="centralized exchange development"
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
        {/* ---------Main section of crypto wallet page----------- */}
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(289.47deg, #45108A 0.04%, #3D065F 38.2%, #10054D 100.1%)",
          }}
        >
          <Banner
            heading=" Centralized Exchange Development"
            discription="  BLocTech Solutions helps you to acquire the best centralized
          crypto exchange platform like Binance, with high trade
          volume and liquidity, allowing users to trade
          cryptocurrencies seamlessly."
            image={
              <StaticImage
                src="../images/centerlized.png"
                alt="Centralized Exchange Development"
              />
            }
            buttonText="Get Free Assessment"
          />
        </Box>
        {/* /////////////////////////////////////////////////////////////////// */}
        <Container>
          {/* start services */}

          <Box component={"h2"}>
            <Subheading subHeading="What is Centralized Exchange Development?" />
          </Box>

          <Paragraph>
            Centralized cryptocurrency exchanges are online platforms used to
            buy and sell cryptocurrencies. They are the most common means that
            investors use to buy and sell cryptocurrency holdings.
          </Paragraph>

          <Paragraph>
            In the term “centralized cryptocurrency exchange,” the idea of
            centralization refers to the use of a middle man or third party to
            help conduct transactions. Centralized exchanges are trading
            platforms that function like traditional brokerage or stock markets.
            In essence, centralized exchanges often act as the first point of
            contact for newcomers that are interested in trading cryptocurrency.
            Many individuals seek to have an interface that can connect them to
            both cryptocurrency trading and the real economy, and centralized
            exchanges provide that.
          </Paragraph>

          <Box component={"h2"}>
            <Subheading subHeading="Centralized Cryptocurrency Exchange Development Services" />
          </Box>

          <Paragraph>
            We develop centralized crypto exchanges like Binance or Coinbase
            with advanced features and security mechanisms that include, but are
            not limited
          </Paragraph>

          {/* <PlatformCE01 /> */}

          <Grid
            container
            justifyContent="center"
            display="flex"
            spacing={5}
            mt={4}
          >
            {Carddata.map(({ img, title }, index) => (
              <Grid key={index} item xs={12} md={4} textAlign={"center"}>
                <CustomCard3
                  title={title}
                  bg={"#41015F"}
                  boxShadow={
                    "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) "
                  }
                  image={img}
                />
              </Grid>
            ))}
          </Grid>

          <Box component={"h2"}>
            <Subheading subHeading="Features Of Centralized Exchange" />
          </Box>

          <Grid
            container
            spacing={3}
            py="20px"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {mapData.map(({ title, discription, bg, img, boxShadow }, i) => (
              <Grid key={i} item md={4} sm={6} xs={12} mt="10px">
                <CustomCard3
                  title={title}
                  bg={bg}
                  boxShadow={boxShadow}
                  image={img}
                  discripton={discription}
                />
              </Grid>
            ))}
          </Grid>

          <Box component={"h2"}>
            <Subheading subHeading="Key Security Mechanism" />
          </Box>

          {/* <PlatformCE02 /> */}
          <Grid
            container
            justifyContent="center"
            display="flex"
            spacing={5}
            mt={4}
          >
            {Carddata2.map(({ img, title, description }, index) => (
              <Grid key={index} item xs={12} md={4} textAlign={"center"}>
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
            py={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomButton onClick={() => setOpen(true)}>
              Get a Quote
            </CustomButton>
          </Box>
        </Container>
      </motion.div>
    </div>
  )
}

export default CentralizedExchange
