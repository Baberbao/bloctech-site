import React, { useContext, useState } from "react"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  List,
  ListItem,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { motion, useIsPresent } from "framer-motion"

import SeoHelmet from "../components/SeoHelmet"
import Subheading from "../components/Subheading"
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

let AccordionData = [
  {
    summary:
      "What should I have to do? If I want to create a cryptocurrency, a token, or an exchange?",
    details:
      "To work on cryptocurrency, token, or an exchange, first you must have a credible token/crypto proposal, which we will evaluate and take decision either we can entertain you or not. We will not be able to help unless there is a real use case/utility. We might not be the ideal fit to work together if your main objective is just to generate money. Because we at BlocTech respect vision/concept behind an initiative more than anything.",
  },
  {
    summary: "Do you provide auditing services for smart contracts?",
    details:
      "Yes. We feel it is our fundamental obligation to protect against threats and malice when it comes to smart contract security. Smart Contract Audit is an accounting procedure to elaborate on logical errors, security policies & optimized solutions within code. Our Smart Contract Audit enhances this step by eliminating loopholes and verifying economic logic to assemble a report that is easy to understand for developers & community members alike.",
  },
  {
    summary: "What payment options do BlocTech Solutions provide?",
    details: (
      <List>
        <ListItem>
          1. Fiat - Total cost is paid in USDs or stable currency.
        </ListItem>
        <ListItem>
          2. Fiat + Token - The total cost is paid in a fiat-to-token ratio.
          Before starting the project, everyone agrees on the % ratio.
        </ListItem>
        <ListItem>
          3. Token - The project token provides BlocTech Solutions with token
          allocation. Before starting the project, the proportion and vesting
          are agreed upon by both parties.
        </ListItem>
      </List>
    ),
  },
  {
    summary:
      "Do you have any experience working with start-ups? If that’s the case, then how can I afford you for my start-up?",
    details:
      "Because BlocTech is a startup that understands how things operate in the startup world, you will find us to be highly compatible with you. We can come up with a costing/compensation strategy that works for both of us. In this way, we believe we’re best fit for each other as we both are start-ups, completely understand the elements, and meeting criterias to follow on for start-ups.",
  },
  {
    summary:
      "When and how can I have project estimated cost or get your quotation?",
    details:
      "We'll coordinate our technical team to proceed through the discovery phase once we finish the introduction call. In this, we will do a thorough examination of the requirements. Following that, we'll offer you a quote.",
  },
  {
    summary: "Can we collaborate with you, BlocTech Solutions?",
    details:
      "Yes! We'd be delighted to collaborate with you. Since its inception, BlocTech has been a development/technology partner for a number of firms.",
  },
  {
    summary: "What makes BlocTech so unique?",
    details:
      "We only collaborate with items and concepts that we believe in as a company. Once you've shared your ideas with us, we'll not only provide suggestions for improvements, but we'll also work on it as if it were one of our own products. Our team has a distinct culture that allows us to adapt to change. We believe in keeping our promises and have a track record of completing projects on schedule.",
  },
  {
    summary:
      "Is it safe for me to share my project concept with you privately?",
    details:
      "We realize how difficult it is to come up with original concepts in this industry. However, we want you to know that we will keep all of your thoughts confidential. Your secrets are also ours. We may send you an NDA (Non-Disclosure Agreement) as soon as you connect with us, which legally binds us to not divulge any private information. ",
  },
  {
    summary: "App Development Company",
    details:
      "We, at BlocTech Solutions, seamlessly integrates into your business workflow whether you are looking to create a new application, or need help with development and/or QA of your existing solution. We provide teams capable of increasing the velocity of your development and extending your technical capabilities.",
  },
]

const Faq = () => {
  const isPresent = useIsPresent()
  const { setOpen } = useContext(AppContext)

  const [expanded, setExpanded] = useState(false)
  const check = useMediaQuery("(max-width:750px)")

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <SeoHelmet title="Frequently asked questions BlocTech Solutions | BlocTech Solutions" />
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
        <Subheading subHeading="FAQs" />

        <Container maxWidth="md">
          {AccordionData.map((value, index) => {
            return (
              <Box sx={{ margin: "auto", width: "100%" }} key={index}>
                <Accordion
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
                  sx={{
                    marginTop: "20px",

                    backgroundColor: "transparent",
                    mb: "10px",
                  }}
                >
                  <AccordionSummary
                    aria-controls={`panel${index + 1}bh-content`}
                    id={`panel${index + 1}bh-header`}
                    className="borderRad"
                    expandIcon={<KeyboardArrowDownIcon />}
                    sx={{
                      padding: "0px 20px 0px 0px",
                      background: "#240035",
                      borderRadius: "5px",
                      my: "10px",
                      boxShadow:
                        expanded === `panel${index + 1}`
                          ? "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) "
                          : "",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        px="20px"
                        textAlign="center"
                        fontSize={{ md: "20px", sm: "16px" }}
                        lineHeight={"40px"}
                        sx={{
                          color: "white",
                          fontWeight: "500",
                        }}
                      >
                        {value.summary}
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      background: check ? "#621E82" : "#621E82",
                      borderRadius: "5px",
                      paddingY: "30px",
                      marginTop: "-30px",
                      boxShadow:
                        expanded === `panel${index + 1}`
                          ? "0px 0px 5px rgba(144, 58, 249, 0.52),   0px 0px 20px rgba(144, 58, 249, 0.52),  0px 0px 45px rgba(144, 58, 249, 0.52),  0px 0px 180px rgba(144, 58, 249, 0.52) "
                          : "",
                    }}
                  >
                    <Box mt={2} textAlign="center">
                      <Paragraph>{value.details}</Paragraph>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            )
          })}
        </Container>
        <Box display="flex" justifyContent="center" mt={"50px"} mb={"50px"}>
          <CustomButton onClick={() => setOpen(true)}>
            Get Free Assessment Now
          </CustomButton>
        </Box>
      </motion.div>
    </div>
  )
}

export default Faq
