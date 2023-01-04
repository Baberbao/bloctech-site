import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"

//Styled Component
const CustomButton = styled(Button)({
  textAlign: "center",
  background: "linear-gradient(202.6deg, #A615BD 11.43%, #3940DB 85.3%)",
  textTransform: "capitalize",
  color: "#fff",
  fontWeight: 700,
  letterSpacing: "0.3px",
  my: 3,
  borderRadius: "5px",
  transition: "0.5s",
  "&:hover": {
    color: "#CC10C6",
  },
})

export default CustomButton
