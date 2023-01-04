import React from "react"
import { styled } from "@mui/material/styles"
import { Button, Menu, MenuItem } from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { Link } from "gatsby"

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    backgroundColor: "#280959",
    color: "#fff",

    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: "#280959",
      },
    },
  },
}))

const buttonStyle = {
  backgroundColor: "#280959",
  color: "#fff",
  borderRadius: "10px",
  transition: "1s",
  fontFamily: "Mulish",
  fontSize: { xs: "16px", sm: "16px" },
  fontWeight: 600,
  letterSpacing: "0.2px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#280959",
  },
}

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      {" "}
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        disableRipple
        sx={buttonStyle}
      >
        Learn
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <Link style={{ textDecoration: "none", color: "#fff" }} to={"/blog/"}>
            Blogs
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Academy
        </MenuItem>
      </StyledMenu>
    </div>
  )
}

export default Dropdown
