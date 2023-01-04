import React from "react"
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import WatchLaterIcon from "@mui/icons-material/WatchLater"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { motion, useIsPresent } from "framer-motion"

import SeoHelmet from "../components/SeoHelmet"

import img from "../assets/careerBg.png"
import { StaticImage } from "gatsby-plugin-image"
import CustomButton from "../components/CustomButton"

//Styled Component

const Home = () => {
  const matches = useMediaQuery("(max-width:700px)")
  return (
    <Box
      mt="-5px"
      sx={{
        width: "100%",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box textAlign="center" pt={2} pb={matches ? 10 : 10}>
        <Box
          component="h1"
          mt={45}
          fontSize={{ xs: "25px", sm: "44px" }}
          fontWeight={700}
          letterSpacing="0.2px"
          lineHeight={{ xs: "auto", sm: "60px" }}
          color="#fff"
        >
          WELCOME TO BLOCTECH SOLUTIONS
        </Box>

        <Box
          component="h2"
          m="auto"
          my={2}
          fontSize={{ xs: "16px", sm: "20px" }}
          fontWeight={400}
          letterSpacing="0.3px"
          color="#fff"
          textAlign="center"
          lineHeight={{ xs: "auto", sm: "22px" }}
          width={{ xs: "90%", md: "65%" }}
        >
          Begin your journey with us today!
        </Box>
      </Box>
    </Box>
  )
}

const data = [
  {
    img: (
      <StaticImage src="../assets/career1.png" alt="Human Resources Manager" />
    ),
    title: "Human Resources Manager",
    seats: "1(3 years of Experience)",
    timing: "Full Time",
    text: "We are actively seeking for Human Resources Manager to join our Blockchain Development Company team. The ideal candidate should be a team player, passionate about human assets management with work-life integration. Having experience in HR policy making for employees & company growth. ",
  },
  {
    img: (
      <StaticImage
        src="../assets/career2.png"
        alt="Full Stack Developer (Mern, Node, React)"
      />
    ),
    title: "Full Stack Developer (Mern, Node, React) ",
    seats: "2-4",
    timing: "Full Time",
    text: "We are looking for Full Stack Developer (MERN, Node, React) to join our development team. The ideal candidate should be a team player, passionate about full stack projects development with a customer-oriented approach.",
  },
  {
    img: <StaticImage src="../assets/career3.png" alt="Blockchain Developer" />,
    title: "Blockchain Developer",
    seats: "3-4",
    timing: "Full Time",
    text: "We are looking for a proactive Blockchain Developer to join our development team. The ideal candidate should be a team player, passionate about smart contracts programming tasks with a customer-oriented approach.",
  },
  {
    img: <StaticImage src="../assets/career4.png" alt="UI/UX Designer" />,
    title: " UI/UX Designer",
    seats: "2",
    timing: "Full Time",
    text: "We are extending our design team. Seeking for a proactive UI/UX creative designer. The ideal applicant should be a team player, enthusiastic about working on creative designs with good user experience, and customer-oriented approach.",
  },
  {
    img: (
      <StaticImage src="../assets/career5.png" alt="IT Business Developer" />
    ),
    title: "IT Business Developer",
    seats: "7-8",
    timing: "Full Time",
    text: "We are actively hiring IT Business developer resources. To join our business development team, we're searching for a proactive IT Business Developer. The ideal applicant should be enthusiastic about business development process and have a customer-oriented attitude.",
  },
  {
    img: <StaticImage src="../assets/career1.png" alt="Blockchain Intern" />,
    title: "Blockchain Intern",
    seats: "7",
    timing: "Full Time",
    text: "Looking for a blockchain developer intern. Who is passionate to join our blockchain development team. An enthusiastic programmer & quick learner with a focus on the needs of the client w.r.t smart contracts development would be the best candidate.",
  },
]

const Career = () => {
  const isPresent = useIsPresent()
  const [btnType, setBtnType] = React.useState("latest")
  const matches = useMediaQuery("(max-width:700px)")
  return (
    <div>
      <SeoHelmet title="Careers at BlocTech Solutions | BlocTech Solutions" />
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
        <Home />
        <Container>
          <Box
            mt={2}
            sx={{
              display: "flex",
              flexDirection: matches ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextField
              sx={{
                background: "rgba(217, 217, 217, 0.13)",
                padding: "12px 27px 12px 18px",
                borderRadius: "5px",
              }}
              placeholder="Search with name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {!matches && <SearchIcon style={{ color: "#827B86" }} />}
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <Box display="flex" mt={matches && 2}>
              <Button
                onClick={() => setBtnType("sort")}
                sx={{
                  background:
                    btnType === "sort"
                      ? "rgba(217, 217, 217, 0.13)"
                      : "transparent",
                  borderRadius: "5px",
                  padding: "8px 15px",
                  marginRight: "10px",
                  color: btnType === "sort" ? "#d9d9d9" : "white",
                  "&:hover": {
                    background: "#2C1F32a1",
                  },
                }}
              >
                Sort by
              </Button>
              <Button
                onClick={() => setBtnType("latest")}
                sx={{
                  background:
                    btnType === "latest"
                      ? "rgba(217, 217, 217, 0.13)"
                      : "transparent",
                  borderRadius: "5px",
                  padding: "8px 17px",
                  color: btnType === "latest" ? "#d9d9d9" : "white",
                  "&:hover": {
                    background: "#2C1F32a1",
                  },
                }}
              >
                Latest
              </Button>
            </Box>
          </Box>

          {data.map(({ img, title, seats, text }, index) => (
            <Grid container my={3} spacing={2} key={index}>
              <Grid item sm={3} xs={12} minHeight="295px">
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    background: "#41015F",
                    boxShadow: "9px 0px 26px #000000",
                    p: "80px",
                    borderRadius: "5px",
                  }}
                  height="100%"
                >
                  {img}
                </Box>
              </Grid>
              <Grid item sm={9} xs={12} minHeight="295px">
                <Box
                  px={2}
                  py={4}
                  sx={{
                    background: "#240035",
                    height: "100%",
                    display: !matches && "flex",
                    borderRadius: "5px",
                  }}
                  height="100%"
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      width: matches ? "100%" : "70%",
                    }}
                  >
                    <Typography
                      variant="h1"
                      pt={2}
                      fontSize={{ xs: "25px", sm: "44px" }}
                      fontWeight={700}
                      letterSpacing="0.2px"
                      lineHeight={{ xs: "auto", sm: "56px" }}
                      color="#fff"
                      sx={{
                        background:
                          "linear-gradient(180deg, #DB24B0 0%, #9934F6 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                      }}
                    >
                      {title}
                    </Typography>

                    <Typography
                      variant="p"
                      my={3}
                      fontSize={{ xs: "13px", sm: "16px" }}
                      fontWeight={400}
                      letterSpacing="0.3px"
                      color="#fff"
                      textAlign="justify"
                      lineHeight={{ xs: "auto", sm: "22px" }}
                    >
                      {text}
                    </Typography>

                    <Box display="flex">
                      <Typography sx={{ color: "white" }}>
                        <LocationOnIcon
                          style={{
                            marginRight: "10px",
                            fontSize: "1.5rem",
                            verticalAlign: "middle",
                          }}
                        />
                        Faisalabad
                      </Typography>
                      <Typography ml={2} sx={{ color: "white" }}>
                        <WatchLaterIcon
                          style={{
                            marginRight: "10px",
                            fontSize: "1.5rem",
                            verticalAlign: "middle",
                          }}
                        />{" "}
                        Full Time
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    mt={matches && 2}
                    sx={{
                      display: "flex",
                      flexDirection: matches ? "row" : "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: matches ? "100%" : "30%",
                    }}
                  >
                    <Typography pt={2} sx={{ color: "white" }}>
                      Available Seats: {seats}
                    </Typography>
                    <CustomButton disabled>Coming Soon</CustomButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ))}

          <Box mt={4} color="#fff">
            <Typography variant="body1" fontSize="22px" fontWeight="700">
              What We Offer:
            </Typography>
            <Typography mt={2} variant="body1" fontSize="18px">
              <ul>
                <li>Healthy Workplace Environment ✔️</li>
                <li>Performance Annual Awards ✔️</li>
                <li>Medical Allowances ✔️</li>
                <li>TA/DA Allowances ✔️</li>
                <li>Gym Allowance ✔️</li>
                <li>Eid Gifts ✔️</li>
                <li>Company Provided Lunch ✔️</li>
                <li>Gaming & Playing Area ✔️</li>
                <li>Prayer Area ✔️</li>
                <li>Recreational activity per month ✔️</li>
                <li>Training by Senior Leads ✔️</li>
                <li>Annual Tours ✔️</li>
                <li>High Performing Team Lunch/Dinner/Prizes ✔️</li>
              </ul>
            </Typography>
          </Box>
        </Container>
      </motion.div>
    </div>
  )
}

export default Career
