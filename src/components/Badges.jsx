import React from "react"
import { Box } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const carouselData = [
  {
    image: <StaticImage src="../images/b5.svg" alt="bark" />,
    link: "https://www.bark.com/en/us/company/bloctech-solutions/vlYY0/",
  },
  {
    image: <StaticImage src="../images/b2.svg" alt="clutch" />,
    link: "https://clutch.co/profile/bloctech-solutions-0#summary",
  },
  {
    image: <StaticImage src="../images/b7.svg" alt="glassdoor" />,
    link: "https://www.glassdoor.com/Overview/Working-at-BlocTech-Solutions-EI_IE7062920.11,29.htm",
  },
  {
    image: <StaticImage src="../images/b1.svg" alt="GoodFirms" />,
    link: "https://www.goodfirms.co/community/profile/bloctech-solutions",
  },
  {
    image: <StaticImage src="../images/b4.svg" alt="UpWork" />,
    link: "https://www.upwork.com/o/companies/~0171857b6814761962/",
  },
  {
    image: <StaticImage src="../images/b6.svg" alt="TrustPilot" />,
    link: "https://www.trustpilot.com/review/bloctechsolutions.com",
  },
  {
    image: <StaticImage src="../images/b1.svg" alt="TopDeveloper" />,
    link: "https://www.topdevelopers.co/profile/bloctechsolutions",
  },
]

const Badges = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <Box>
      <Carousel
        showDots={false}
        responsive={responsive}
        autoPlaySpeed={2000}
        autoPlay={true}
        infinite={true}
        transitionDuration={500}
        arrows={true}
      >
        {carouselData.map(({ image, link }, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
            }}
          >
            <a
              target="_blank"
              style={{ textDecoration: "none" }}
              href={link}
              rel="noreferrer"
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {image}
              </Box>
            </a>
          </div>
        ))}
      </Carousel>
    </Box>
  )
}

export default Badges
