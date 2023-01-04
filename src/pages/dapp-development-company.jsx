import React, { useContext } from "react"

import { Box, Container, Grid, styled, Typography } from "@mui/material"

import { StaticImage } from "gatsby-plugin-image"

import Subheading from "../components/Subheading"
import Banner from "../components/Banner"
import CustomCard3 from "../components/CustomCard3"
import CustomButton from "../components/CustomButton"
import SeoHelmet from "../components/SeoHelmet"
import CustuomCard from "../components/CustuomCard"

import { motion, useIsPresent } from "framer-motion"

import { AppContext } from "../utils/utils"

// import img from "../images/dappicon1.png"

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
    title: "MVP Consulting",
    discription:
      "Our dApp Development Experts insight and well researched approach toward market demand and trend help you to figure out the functioning, finance and feasibility of  your ideas. We analyze every prospect for stakeholders to measure out technical components and advise the right blockchain platform as per the client’s requirements.",

    bg: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    icon: (
      <StaticImage
        src="../images/dappicon1.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(243, 23, 129, 0.5),   0px 0px 20px rgba(243, 23, 129, 0.5),  0px 0px 45px rgba(243, 23, 129, 0.5),  0px 0px 180px rgba(243, 23, 129, 0.5)",
  },
  {
    title: "User Interface",
    discription:
      "User friendliness comes through friendly UI/UX design while using an app. Therefore, we go for the most easy to understand yet fully structured user interface designs in dApps development.   Our design process passes through multiple stages right from ideation, wireframe designs, then low fidelity and high fidelity design testing to make interactive prototypes. The extravagant nature in our already done projects (50 apps since 2020), owe a lot to creative, user friendly, and prolific design which earned record breaking praises",

    bg: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    icon: (
      <StaticImage
        src="../images/dappicon2.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(219, 36, 176, 0.5),   0px 0px 20px rgba(219, 36, 176, 0.5),  0px 0px 45px rgba(219, 36, 176, 0.5),  0px 0px 180px rgba(219, 36, 176, 0.5)",
  },
  {
    title: "Decentralized Exchange Development",
    discription:
      "Decentralized Exchange Development has grown to gigantic dimensions in recent years, allowing customers to obtain direct trades without the involvement of third intermediaries. We can help you to innovate a highly modular and tailored exchange platform as per your specifications. Choose us for decentralized exchange development as we’re a one-stop solution, our expert address queries in no time and fully aware of security measures while developing secure code",

    bg: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    icon: (
      <StaticImage
        src="../images/dappicon3.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(155, 68, 255, 0.5),   0px 0px 20px rgba(155, 68, 255, 0.5),  0px 0px 45px rgba(155, 68, 255, 0.5),  0px 0px 180px rgba(155, 68, 255, 0.5)",
  },
  {
    title: "Cloud Services",
    discription:
      "True end-to-end decentralization happens when decentralization of the settlement layer from the financial system synced with the compute layer from data centers to distributed computed networks gets done at the same time.Therefore, we advise our clients to encapsulate dApps as microservices that are externalized by APIs. Our microservices will have you at ease to hyperfocus on single business prospects. We provide cloud data stores for each microservice.",

    bg: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    icon: (
      <StaticImage
        src="../images/dappicon4.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(21, 76, 229, 0.5),   0px 0px 20px rgba(21, 76, 229, 0.5),  0px 0px 45px rgba(21, 76, 229, 0.5),  0px 0px 180px rgba(21, 76, 229, 0.5)",
  },
  {
    title: "Smart Contracts",
    discription:
      "Smart contracts are deployed on the blockchain that allow dApps users to interact. We offer smart contract services including writing, testing and deploying contracts on various platforms like Ethereum, Neo and others. We guide our clients to adopt the most suitable platform that fits their business specifications.",

    bg: "linear-gradient(180deg, #00E4E7 0%, #2DA7F2 100%)",
    icon: (
      <StaticImage
        src="../images/dappicon5.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(0, 227, 231, 0.5),   0px 0px 20px rgba(0, 227, 231, 0.5),  0px 0px 45px rgba(0, 227, 231, 0.5),  0px 0px 180px rgba(0, 227, 231, 0.5)",
  },
  {
    title: "Decentralized Storage",
    discription:
      "In decentralized storage, files are broken down and spread across several nodes.There are several decentralized cloud storage platforms that For peer-to-peer transactions, there are considerable decentralized cloud storage platforms that ensure security, privacy and efficient cloud storage. We single out a platform that sits perfectly for a project.",

    bg: "linear-gradient(180deg, #FE9500 0%, #F2D400 100%)",
    icon: (
      <StaticImage
        src="../images/dappicon6.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(254, 148, 0, 0.5),   0px 0px 20px rgba(254, 148, 0, 0.5),  0px 0px 45px rgba(254, 148, 0, 0.5),  0px 0px 180px rgba(254, 148, 0, 0.5)",
  },
  {
    title: "dApp Porting",
    discription:
      "Many companies find it back-breaking when it comes to migrate their dApp from one blockchain to another. To resolve this issue, we provide across the board a sweeping approach in dApp Porting with fully functional reusable codebase on any operating system. We can move your current application to any blockchain platform that meets the business requirements.",

    bg: "linear-gradient(180deg, #67FE1A 0%, #139950 100%)",
    icon: (
      <StaticImage
        src="../images/dappicon7.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(102, 254, 26, 0.5),   0px 0px 20px rgba(102, 254, 26, 0.5),  0px 0px 45px rgba(102, 254, 26, 0.5),  0px 0px 180px rgba(102, 254, 26, 0.5)",
  },
  {
    title: "dApp Upgrade Services",
    discription:
      "To conduct business operations steadily and effortlessly, applications have to undergo upgrades from time to time. Whenever need arises, we render our outright migration and upgrade services to clients. Our team helps clients to entirely deploy new smart contracts and upgrade the microservices for the dApps",

    bg: "linear-gradient(180deg, #F28E69 0%, #F31783 100%)",
    icon: (
      <StaticImage
        src="../images/dappicon8.png"
        alt="DeFi Product Development"
      />
    ),
    boxShadow:
      "0px 0px 5px rgba(242, 142, 105, 0.5),   0px 0px 20px rgba(242, 142, 105, 0.5),  0px 0px 45px rgba(242, 142, 105, 0.5),  0px 0px 180px rgba(242, 142, 105, 0.5)",
  },
]

const platForm = [
  {
    img: (
      <StaticImage
        src="../images/platform1.png"
        alt="DeFi Product Development"
      />
    ),
    title: "Ethereum",
    description:
      "An open-source decentralized public platform with smart contract functionality",
    alt: "Ethereum",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    img: (
      <StaticImage
        src="../images/platform2.png"
        alt="DeFi Product Development"
      />
    ),
    title: "Hyperledger",
    description:
      "A project of open-source blockchain platforms and related tools",
    alt: "Hyperledger",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    img: (
      <StaticImage
        src="../images/platform3.png"
        alt="DeFi Product Development"
      />
    ),
    title: "Corda",
    description:
      "An open-source blockchain platform to build cross-industry apps",
    alt: "Corda",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    img: (
      <StaticImage
        src="../images/platform4.png"
        alt="DeFi Product Development"
      />
    ),
    title: "Tezos",
    description:
      "An Open-Source Platform for Decentralized Assets and Applications",
    alt: "Tezos",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    img: (
      <StaticImage
        src="../images/platform5.png"
        alt="DeFi Product Development"
      />
    ),
    title: "Stellar",
    description:
      "Stellar An open platform to build decentralized financial products",
    alt: "Stellar",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    img: (
      <StaticImage
        src="../images/platform6.png"
        alt="DeFi Product Development"
      />
    ),
    title: "EOS",
    description:
      "A blockchain, which can support scalable and industrial-grade dApps",
    alt: "EOS",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    img: (
      <StaticImage
        src="../images/platform7.png"
        alt="DeFi Product Development"
      />
    ),
    title: "Hashgrap",
    description:
      "An enterprise-grade public network based on Asynchronous Byzantine Fault Tolerance algorithm",
    alt: "Hashgrap",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
  {
    img: (
      <StaticImage
        src="../images/platform8.png"
        alt="DeFi Product Development"
      />
    ),
    title: "Tron",
    description:
      "A decentralized platform to develop high-performance blockchain apps",
    alt: "Tron",
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",
  },
]

const Tooldata = [
  {
    img: (
      <StaticImage src="../images/tools1.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Ethereum",
    description:
      "Geth is the command-line interface for implementing an Ethereum node in Google's Go programming language. We use ethereum Geth to deploy Ethereum nodes, transfer funds between addresses, examine block history, mine Ether and build contracts.",
  },
  {
    img: (
      <StaticImage src="../images/tools2.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Hyperledger",
    description:
      "A testnet is a collection of nodes that are used to test the Ethereum protocol. To avoid the system from bugs and issues, we test out dApp on Blockchain Testnet before deploying it on the mainnet.",
  },
  {
    img: (
      <StaticImage src="../images/tools3.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Corda",
    description:
      "Zeppelin provides a complete suite of security products to build, manage, and inspect all aspects of operations for Ethereum projects.We use Zeppelin tools to conduct security audits on the smart contracts and regulate reusable smart contracts effectively.",
  },
  {
    img: (
      <StaticImage src="../images/tools4.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Tezos",
    description:
      "Blockstack is a decentralized computing platform, built on blockchain technology, that focuses on individual control of online data and identity. We use Blockstack to build dApps that allow users to own their data and enables us to write the dApps in any programming language.",
  },
  {
    img: (
      <StaticImage src="../images/tools5.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Stellar",
    description:
      "Truffle is a world-class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM). We use Truffle because it offers custom deployments for many public and private networks.",
  },
  {
    img: (
      <StaticImage src="../images/tools6.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "EOS",
    description:
      "Remix is an open-source Ethereum IDE, used to write, compile and debug Solidity code. We create, deploy, debug and test smart contracts written in Solidity language on Remix as it  connects with Ethereum Blockchain via Metamask.",
  },
]

const Frontdata = [
  {
    img: (
      <StaticImage src="../images/front1.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Ethereum",
    description:
      "AngularJS is a robust solution for faster front-end development. Therefore,We simplify the development of dynamic web dApps with such a feature-packed JavaScript framework.",
  },
  {
    img: (
      <StaticImage src="../images/front2.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Hyperledger",
    description:
      "BootStrap, utilize an open-source toolkit supports to build a decentralized and responsive websites using HTML, CSS and JS. To maintain consistency among projects when using multiple developers, Bootstrap framework is best.",
  },
  {
    img: (
      <StaticImage src="../images/front3.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Corda",
    description:
      "Since jQuery is SEO friendly, easily integrates with the Visual Studio IDE and promotes simplicity, we can’t deny the significance of it over other frameworks. We extensively take benefits from its features while building dApps for clients.",
  },
  {
    img: (
      <StaticImage src="../images/front4.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Tezos",
    description:
      "React, an open-source JavaScript Library, provides excellent cross-platform support, handles dependencies to build UI for single page applications. It canalso be used to manage the view layer for both web and mobile apps.",
  },
]

const Langdata = [
  {
    img: (
      <StaticImage src="../images/lang1.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Ethereum",
    description:
      "Solidity is an object-oriented programming language for implementing smart contracts on various blockchain platforms, most notably, Ethereum. We use solidity to write smart contracts for blind auctions, voting, multi-signature wallets and crowdfunding",
  },
  {
    img: (
      <StaticImage src="../images/lang2.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Hyperledger",
    description:
      "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software. Our experts use Golang for writing chaincodes in Hyperledger Fabric as it provides platform independency.",
  },
  {
    img: (
      <StaticImage src="../images/lang3.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Corda",
    description:
      "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. We use JS to store all the code of a dApp to support object-orientation and declarative styles.",
  },
  {
    img: (
      <StaticImage src="../images/lang4.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Tezos",
    description:
      "Java supports portability feature and provides Automatic Garbage Collection. We utilize Java programming language to write code for microservices to be used in a dApp if required. Also, various SDKs for different blockchain platforms are written in Java.",
  },
  {
    img: (
      <StaticImage src="../images/lang5.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "Stellar",
    description:
      "Extensibility to meet customized requirements and reduces loading time by quick caching. Our developers use Node.js to build backend of real-time multi-user decentralized applications as it helps in building cross-platform applications.",
  },
  {
    img: (
      <StaticImage src="../images/lang6.png" alt="DeFi Product Development" />
    ),
    boxShadow:
      "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) ",

    // title: "EOS",
    description:
      "Developers don’t have to worry about placing codes in the right place when using PHP, as it is written between tags. Besides, PHP can interact with different database languages, we use PHP to build dynamic web applications on top of the blockchain platform.",
  },
]

const Carddata = [
  {
    img: "linear-gradient(180deg, #F31783 0%, #F28E69 100%)",
    link: "/p2p-lending-platform-development/",
    title: "P2P Lending Platform Development",
    description:
      "Build private and controlled participants network, execute the consensus protocol to decide the mining rights and rewards, and maintain the shared ledger.",
  },
  {
    img: "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
    title: "Dao Service and Development",
    link: "/dao-service-and-development-company/",
    description:
      "Get encrypted peer-to-peer apps with no single point of failure and zero downtime and get rid of data breach and hacking attempt.",
  },
  {
    img: "linear-gradient(180deg, #9C44FF 0%, #6711E1 100%)",
    title: "Multichain Development Services",
    link: "/multichain-development-services/",
    description:
      "With smart contracts ensure protocols that guarantee the integrity of multi-party agreements and automatically enforce fixed obligations.",
  },

  {
    img: "linear-gradient(180deg, #154EE5 0%, #2DA7F2 100%)",
    title: "DEFI Development",
    link: "/defi-development-services/",
    description:
      "Get a physical medium or a device to store public and private keys for cryptocurrency transactions.",
  },
]

const DappDevelopmentCompany = () => {
  const isPresent = useIsPresent()
  const { setOpen } = useContext(AppContext)

  const structureData = () => {
    let data = {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.bloctechsolutions.com/dapp-development-company/",
      },
      headline: "DAPP DEVELOPMENT COMPANY",
      description:
        "We help companies to innovate in blockchain technology by devising a comprehensive plan to lay out and develop peer to peer decentralized Applications (dApps).",
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
        title="dApp Development Company | dApp services | BlocTech Solutions"
        description="As a dApp development company we provide logistics, supply chain and health care industries with decentralized applications to improve their business ecosystem"
        keywords="dApp development company, dApp development services"
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
            heading="DAPP DEVELOPMENT COMPANY"
            discription="We help companies to innovate in blockchain technology by devising a comprehensive plan to lay out and develop peer to peer decentralized Applications (dApps). Currently, we’re facilitating the healthcare industry, supply chain, logistics, utility and startups to evolve from traditional centralized structure of work to modern decentralized mode of work. Our expert team of dApp developers is exactly aware how to convert ideas into dApp development that can bring transparency and security to your business ecosystem."
            image={
              <StaticImage
                src="../images/dappbg.png"
                alt="Blockchain-Development-Services"
              />
            }
            buttonText="Get A Reliable crypto wallet"
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
            {Carddata.map(({ title, description, link }, index) => (
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

          <Subheading subHeading="Our dApp Development Services" />

          <Paragraph
            component="p"
            fontSize={{ xs: "13px", sm: "16px" }}
            lineHeight={{ xs: "auto", sm: "22px" }}
          >
            We cultivate consistently growing product development experience
            that helps our clients to multiply their profit generation. We
            devise our work strategy in a way that our clients could easily
            track and understand progress of their projects. This thing remains
            clients at the safe side in terms of budget and optimization of work
            and time. We cover all from smart contracts to decentralized
            exchanges and applications, Our dApp Development Company helps
            businesses to beat all odds in the decentralized applications world.
          </Paragraph>

          <Grid
            container
            spacing={3}
            py="60px"
            sx={{
              display: "flex",
              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mapData.map(
              ({ title, discription, bg, icon, boxShadow }, index) => (
                <Grid key={index} item md={4} sm={6} xs={12} mt="60px">
                  <CustomCard3
                    title={title}
                    discripton={discription}
                    bg={bg}
                    boxShadow={boxShadow}
                    image={icon}
                  />
                </Grid>
              )
            )}
          </Grid>

          <Box
            my={4}
            sx={{
              display: "flex",
              alignitems: "center",
              justifyContent: "center",
            }}
          >
            <CustomButton onClick={() => setOpen(true)}>
              Get a Consultation
            </CustomButton>
          </Box>
          <Subheading subHeading="dApp Development Platforms we work on" />

          <Grid
            container
            justifyContent="center"
            display="flex"
            spacing={5}
            mb={2}
          >
            {platForm.map(({ img, title, description, boxShadow }, index) => (
              <Grid key={index} item md={4} sm={6} xs={12} mt="60px">
                <CustomCard3
                  title={title}
                  discripton={description}
                  bg="#240035"
                  image={img}
                  boxShadow={boxShadow}
                />
              </Grid>
            ))}
          </Grid>

          <Subheading subHeading="Technology Tools that pillar our dApp Development Services" />

          <Grid
            container
            justifyContent="center"
            display="flex"
            spacing={5}
            mb={2}
          >
            {Tooldata.map(({ img, description, boxShadow }, index) => (
              <Grid key={index} item md={4} sm={6} xs={12} mt="60px">
                <CustomCard3
                  discripton={description}
                  bg="#240035"
                  image={img}
                  boxShadow={boxShadow}
                />
              </Grid>
            ))}
          </Grid>

          <Subheading subHeading="Technology Tools that pillar our dApp Development Services" />

          <Grid
            container
            justifyContent="center"
            display="flex"
            spacing={5}
            mb={4}
          >
            {Langdata.map(({ img, description, boxShadow }, index) => (
              <Grid key={index} item md={4} sm={6} xs={12} mt="60px">
                <CustomCard3
                  discripton={description}
                  bg="#240035"
                  image={img}
                  boxShadow={boxShadow}
                />
              </Grid>
            ))}
          </Grid>

          <Subheading subHeading="Technology Tools that pillar our dApp Development Services" />

          <Grid
            container
            justifyContent="center"
            display="flex"
            spacing={5}
            mb={4}
          >
            {Frontdata.map(({ img, description, boxShadow }, index) => (
              <Grid key={index} item md={4} sm={6} xs={12} mt="60px">
                <CustomCard3
                  discripton={description}
                  bg="#240035"
                  image={img}
                  boxShadow={boxShadow}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.div>
    </>
  )
}

export default DappDevelopmentCompany
