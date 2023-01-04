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
const SmallHeading = styled(Typography)({
  fontSize: "18px",
  color: "white",
  fontWeight: "bold",
})

const NumberCard = ({ img, title, ul }) => {
  return (
    <Grid container mb={3}>
      <Grid item sm={4} xs={12} minHeight="295px">
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          sx={{
            background: "#41015F",
            boxShadow:
              "0px 0px 5px rgba(65, 1, 95, 0.5),   0px 0px 20px rgba(65, 1, 95, 0.5),  0px 0px 45px rgba(65, 1, 95, 0.5),  0px 0px 180px rgba(65, 1, 95, 0.5)",
            p: "80px",
            height: "100%",
            borderRadius: "5px",
          }}
        >
          {img}
        </Box>
      </Grid>
      <Grid item sm={8} xs={12} minHeight="295px">
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={{ sm: "start", xs: "center" }}
          sx={{
            background: "#240035",
            boxShadow:
              "0px 0px 5px rgba(36, 0, 53, 0.5),   0px 0px 20px rgba(36, 0, 53, 0.5),  0px 0px 45px rgba(36, 0, 53, 0.5),  0px 0px 180px rgba(36, 0, 53, 0.5)",
            height: "100%",
            px: { sm: "30px", xs: "10px" },
            borderRadius: "5px",
          }}
        >
          <Typography
            variant={"h3"}
            sx={{
              fontWeight: 700,
              fontSize: { sm: "28px", xs: "20px" },
              color: "white",
              textAlign: { sm: "start", xs: "center" },
            }}
          >
            {title}
          </Typography>
          <Box className="myUl">{ul}</Box>
        </Box>
      </Grid>
    </Grid>
  )
}

//map data

const mapData = [
  {
    title: "Frictionless Market",
    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    boxShadow:
      "0px 0px 5px rgba(255, 53, 17, 0.52),   0px 0px 20px rgba(255, 53, 17, 0.52),  0px 0px 45px rgba(255, 53, 17, 0.52),  0px 0px 180px rgba(255, 53, 17, 0.52)",
    img: <StaticImage src="../images/ti1.png" alt="ti1" />,
    ul: (
      <ul>
        <li>Generate verified represention on the blockchain.</li>
        <li>
          Easily traded or exchanged for any other assets without any
          intermediaries on a global scale.
        </li>
      </ul>
    ),
  },
  {
    title: "Deep integrations",
    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    boxShadow:
      "0px 0px 5px rgba(219, 36, 176, 0.5),   0px 0px 20px rgba(219, 36, 176, 0.5),  0px 0px 45px rgba(219, 36, 176, 0.5),  0px 0px 180px rgba(219, 36, 176, 0.5)",
    img: <StaticImage src="../images/ti2.png" alt="ti1" />,
    ul: (
      <ul>
        <li>
          With web ushered into humanity get the ability to integrate different
          services to create meaningful experiences for users.
        </li>
        <li>
          Integrations can be done in a decentralized fashion without the pain
          of setting standards and creating dedicated channels.{" "}
        </li>
      </ul>
    ),
  },
  {
    title: "Earn",
    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5)",
    img: <StaticImage src="../images/ti3.png" alt="ti1" />,
    ul: (
      <ul>
        <li>
          Making waves in the financial world through new concepts such as
          Decentralized Finance (Defi), Initial Coin Offering (ICO), and
          Security Token Offering (STO).
        </li>
        <li>
          Created a new asset class, opening doors for a very active trading
          ecosystem.
        </li>
      </ul>
    ),
  },
  {
    title: "Disrupt",
    bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    boxShadow:
      "0px 0px 5px rgba(21, 76, 229, 0.5),   0px 0px 20px rgba(21, 76, 229, 0.5),  0px 0px 45px rgba(21, 76, 229, 0.5),  0px 0px 180px rgba(21, 76, 229, 0.5)",
    img: <StaticImage src="../images/ti4.png" alt="ti1" />,
    ul: (
      <ul>
        <li>
          Paves the way to new business models, doing away with the
          intermediates and middlemen, who add no value to the transaction.
        </li>
        <li>
          Disrupt the incumbents in multiple industries, while creating a more
          decentralized world.
        </li>
      </ul>
    ),
  },
  {
    title: "Pseudo-Confidentiality",
    bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    boxShadow:
      "0px 0px 5px rgba(21, 76, 229, 0.5),   0px 0px 20px rgba(21, 76, 229, 0.5),  0px 0px 45px rgba(21, 76, 229, 0.5),  0px 0px 180px rgba(21, 76, 229, 0.5)",
    img: <StaticImage src="../images/ti5.png" alt="ti1" />,
    ul: (
      <ul>
        <li>
          Does not collect or store any personal information about our users.
        </li>
        <li>
          Ensure you are leveraging the best in class privacy and security
          standards for your blockchain transactions.
        </li>
      </ul>
    ),
  },
]

const data = [
  {
    img: <StaticImage src="../images/count1.png" alt="ti1" />,
    title: "Detailed",
    ul: (
      <ul>
        <li>
          Comply entirely with the concept of ERC20 and compatible worldwide
          with each ERC20 wallet.
        </li>
        <li>Has a name, a symbol, and a number of decimals.</li>
      </ul>
    ),
  },

  {
    img: <StaticImage src="../images/count2.png" alt="ti2" />,
    title: "Burnable",
    ul: (
      <ul>
        <li>Enable us to burn our tokens.</li>
        <li>Can reduce the circulating stock by burning any of the tokens.</li>
      </ul>
    ),
  },
  {
    img: <StaticImage src="../images/count3.png" alt="ti3" />,
    title: "Mintable",
    ul: (
      <ul>
        <li>Produce tokens via minting.</li>
        <li>Only the owner of the token can mint.</li>
        <li>Can also disable minting.</li>
      </ul>
    ),
  },
  {
    img: <StaticImage src="../images/count4.png" alt="ti1" />,
    title: "Pauseable",
    ul: (
      <ul>
        <li>Can delay your token movement.</li>
        <li>
          Useful to prohibit trading until all token transactions have been
          unfrozen.
        </li>
      </ul>
    ),
  },
  {
    img: <StaticImage src="../images/count5.png" alt="ti1" />,
    title: "Access to ownership",
    ul: (
      <ul>
        <li>Get complete ownership over your token.</li>
        <li>Owners can also get to mint new tokens and manage them.</li>
      </ul>
    ),
  },
  {
    img: <StaticImage src="../images/count6.png" alt="ti1" />,
    title: "Capped",
    ul: (
      <ul>
        <li>Cannot create more tokens than the token limit specified.</li>
        <li>Ensures that people do not create more than declared tokens.</li>
      </ul>
    ),
  },
]

const TokenDevelopment = () => {
  const isPresent = useIsPresent()
  const { setOpen } = useContext(AppContext)

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.bloctechsolutions.com/token-development-services/",
      },
      headline: "Token Development Services",
      description:
        "BlocTech Solutions is the leading token development company to create token on desired blockchain network in a short span of time. We have certified blockchain professionals who can develop custom tokens with tamper-proof security practices that safe-guard tokens from hacks and attacks.",
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
        title="Token Development Services by BlocTech Solutions"
        description="BlocTech brings Token development services, our developers make custom tokens on desired blockchain network. They specifically work on securing the tokens from cyber attacks."
        keywords="Token development services, token developers"
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
            heading="Token Development Services"
            discription="BlocTech Solutions is the leading token development company
          to create token on desired blockchain network in a short
          span of time. We have certified blockchain professionals who
          can develop custom tokens with tamper-proof security
          practices that safe-guard tokens from hacks and attacks."
            image={<StaticImage src="../images/tokenDev.png" alt="about" />}
            buttonText="Get Token Development Services Now"
          />
        </Box>
        <Container>
          <Box
            component="h2"
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
            mt="40px"
          >
            <Box>
              <Subheading subHeading="TOKEN DEVELOPMENT SERVICES" />
            </Box>
            <Box component="p" py={3}>
              <Paragraph textAlign="justify">
                We provide premium token development services for startups and
                enterprises to develop scalable tokens with an extraordinary
                security implementation to regulate, track and trace every token
                transaction. Here are some of the core services that we offer
                for crypto seekers all over the world.
              </Paragraph>
            </Box>
          </Box>
        </Container>
        <Container maxWidth="md">
          <Box component="h2" pt={{ xs: 0, md: 7 }} m="auto" my={2}>
            <HeadingTwo fontSize={{ xs: "20px", sm: "34px" }}>
              Tokenized Assets: the Essence
            </HeadingTwo>
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
          >
            <Paragraph textAlign="justify">
              Tokenized asset offering paves the way for financial markets to
              move into blockchain through automated KYC/AML, investor
              verification and a fully transparent voting rights.
            </Paragraph>
          </Box>

          <SmallHeading>Non-Fungible Token (NFT) Development</SmallHeading>
          <ul className="myUl">
            <li>Build NFT around usability</li>
            <li>ensure NFT’s security, functionality, and uniqueness</li>
          </ul>
          <SmallHeading>DeFi Token Development</SmallHeading>
          <ul className="myUl">
            <li>create DeFi tokens as end-user entities</li>
            <li>
              build DeFi token to improve Defi functions such as lending,
              staking, trading and risk management{" "}
            </li>
          </ul>
          <SmallHeading>Ethereum Token Development</SmallHeading>
          <ul className="myUl">
            <li>
              create Ethereum Tokens with custom smart contract creation and
              auditing
            </li>
            <li>
              make sure various Ethereum Standards like ERC-20, ERC-223,
              ERC-777, ERC-1400, ERC-827, ERC-1155 etc.
            </li>
          </ul>
          <SmallHeading>Tron Token Development</SmallHeading>
          <ul className="myUl">
            <li>can develop and launch you own token on the TRON blockchain</li>
            <li>
              use the platform of TRC-10, TRC-20, and TRC-721 standards based on
              your requirements.
            </li>
          </ul>
          <SmallHeading>BEP20 Token Development</SmallHeading>
          <ul className="myUl">
            <li>
              create BEP tokens built on Binance Smart Chain to raise funds via
              ICO
            </li>
            <li>
              enable fast transaction speeds and is extremely scalable with BEP
              20 Tokens{" "}
            </li>
          </ul>
          <SmallHeading>Solana Token Development</SmallHeading>
          <ul className="myUl">
            <li>
              develop unique tokens with high-end functionality based on your
              business needs
            </li>
            <li>
              provide token creation services to developcoins pioneers on Solana
              and other blockchain networks with custom smart contract
            </li>
          </ul>
          <SmallHeading>Polygon Token Development</SmallHeading>
          <ul className="myUl">
            <li>
              offer best-in-class crypto token development services on Polygon
              blockchain network
            </li>
            <li>ensure security and efficiency of polygon toke</li>
          </ul>
          <SmallHeading>Avalanche Token Development Company</SmallHeading>
          <ul className="myUl">
            <li>
              offer the smart contract-able decentralized token on
              Avalanche(AVAX) Blockchain Platform
            </li>
            <li>
              guarantee high transaction speed, low costs, and eco-friendliness
            </li>
          </ul>
          <SmallHeading>Mintable Token Development</SmallHeading>
          <ul className="myUl">
            <li>create mintable ERC20 tokens with a non-fixed total supply</li>
            <li>
              pave your way where you’re allowed to “mint” more tokens whenever
              you want
            </li>
          </ul>
          <SmallHeading>
            Decentralized Non- Fungible Token (DNFT) Development
          </SmallHeading>
          <ul className="myUl">
            <li>
              create decentralized Non-fungible tokens on the top blockchain
              platforms
            </li>
            <li>
              provide uniqueness and non-interchangeability to prevent
              replacement by any other similar tokens
            </li>
          </ul>
          <Typography>Semi Fungible Token (SFT) Development</Typography>
          <ul className="myUl">
            <li>
              develop SFT Tokens with launch of ERC-1155 tokens using the
              Ethereum network{" "}
            </li>
            <li>
              ensure security, tradability, high efficiency, and immunity to
              hacking
            </li>
          </ul>
          <SmallHeading>Token Generator Platform Development</SmallHeading>
          <ul className="myUl">
            <li>develop your exclusive token generator platform </li>
            <li>
              provide crypto entrepreneurs a reliable platform that can create
              and launch their tokens in the crypto market
            </li>
          </ul>
          <SmallHeading>Token Wallet Development</SmallHeading>
          <ul className="myUl">
            <li>provide state-of-the-art token wallet development solutions</li>
            <li>
              develop crypto token wallet to enable users to execute
              transactions easily
            </li>
          </ul>

          <Box component="h2" pt={{ xs: 0, md: 7 }} my={2}>
            <Subheading subHeading=" Key Capabilities Tokenized Assets Provide" />
          </Box>
          <Box component="p" pt={{ xs: 0, md: 2 }} my={2} textAlign="center">
            <Paragraph>
              Asset-backed tokens and underlying smart contracts provide unique
              capabilities to meet specific asset management needs, improve
              asset liquidity, and streamline asset management.
            </Paragraph>
          </Box>
        </Container>
        <Container>
          <Grid
            container
            spacing={3}
            py="60px"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {mapData.map(({ title, ul, bg, img, boxShadow }, i) => (
              <Grid key={i} item md={4} sm={6} xs={12}>
                <CustomCard3
                  title={title}
                  discripton={ul}
                  bg={bg}
                  boxShadow={boxShadow}
                  image={img}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container>
          {/* ////////////////////////////////////////////////////////////////////// */}
          <Box component="h2" my="50px">
            <Subheading subHeading="Features of Token Development" />
          </Box>

          {/* /////////////////////  Stepers  ////////////////////////////////////// */}
          <Box>
            {data.map(({ img, title, ul }, index) => (
              <NumberCard key={index} img={img} title={title} ul={ul} />
            ))}
          </Box>
          {/* //////////////////////////////////////////////////// */}

          {/* ///////////////////////////////////////////// */}

          {/* ///////////////////////////////////////////// */}
          <Grid
            my="40px"
            container
            // spacing={5}
            style={{
              boxShadow: "0 2px 20px 0 rgb(0 0 0 / 10%)",
              padding: "0px 50px",
              backgroundColor: "#411F78",
            }}
          >
            <Grid item xs={12} md={8}>
              <Box
                component="h2"
                className="linbarcontnew"
                pt={{ xs: 0, md: 7 }}
                m="auto"
                my={2}
                fontSize={{ xs: "20px", sm: "34px" }}
                fontWeight={700}
                letterSpacing="0.1px"
                color="white"
                lineHeight={{ xs: "auto", sm: "40px" }}
              >
                Get Expert Help on Asset Tokenization
              </Box>
              <Box
                component="p"
                sx={{
                  alignItem: "center",
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "20px",
                  textAlign: "initial",
                }}
              >
                <Paragraph>
                  BlocTech Solutions’s team is ready to tokenize your assets to
                  enhance their liquidity and tradability, enable fast, secure,
                  cost-effective and fully traceable transfer of asset
                  ownership.
                </Paragraph>
              </Box>
              <Box py="30px">
                <CustomButton onClick={() => setOpen(true)}>
                  TOKENIZE MY ASSETS
                </CustomButton>
              </Box>
            </Grid>
          </Grid>

          {/* /////////////////////////////////////////////////////////////////// */}
        </Container>
      </motion.div>
    </div>
  )
}

export default TokenDevelopment
