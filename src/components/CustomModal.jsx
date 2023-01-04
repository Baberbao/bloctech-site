import React, { useContext } from "react"
import Modal from "@mui/material/Modal"
import { Box, IconButton } from "@mui/material"
import { Container } from "@mui/system"
import CloseIcon from "@mui/icons-material/Close"
import { AppContext } from "../utils/utils"
import CustomContact from "./CustomContact"
import { motion } from "framer-motion"

//Styled Component

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: 800 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  background: "transparent",
  mt: { xs: "100px", md: "0px" },
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.6,
    },
  },
}
const CustomModal = () => {
  const { setOpen, open } = useContext(AppContext)
  const handleClose = () => setOpen(false)
  return (
    <Modal
      sx={{ overflow: { xs: "scroll", md: "hidden" }, py: "30px" }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container maxWidth="md">
        <Box sx={style}>
          <Box
            sx={{
              position: "absolute",
              right: "25px",
              top: "25px",
              zIndex: "1000",
            }}
          >
            <IconButton onClick={handleClose}>
              {" "}
              <CloseIcon sx={{ color: "white" }} />{" "}
            </IconButton>
          </Box>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={cardVariants}>
              <CustomContact />
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </Modal>
  )
}

export default CustomModal
