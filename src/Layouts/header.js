import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: "#263238",
  },
  title: {
    display: "none",
    fontFamily: "cursive",
    fontSize: "1.6em",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  navText: {
    color: "#707070",
    textDecoration: "none",
    fontSize: "1em",
    fontWeight: "bold",

    marginLeft: 15,
    marginRight: 15,
    "&:hover": {
      color: "#18FFFF",
    },
  },
  mobNavigation: {
    color: "#000",
    textDecoration: "none",
    display: "flex",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/home" className={classes.mobNavigation}>
          home
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/about" className={classes.mobNavigation}>
          About
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/education" className={classes.mobNavigation}>
          Education
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/experience" className={classes.mobNavigation}>
          Experience
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/myWork" className={classes.mobNavigation}>
          My Work
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#263238" }}
        elevation={0}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Amit Singh
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/home" className={classes.navText}>
              Home
            </Link>
            <Link to="/about" className={classes.navText}>
              About
            </Link>
            <Link to="/education" className={classes.navText}>
              Education
            </Link>
            <Link to="/experience" className={classes.navText}>
              Experience
            </Link>
            <Link to="/myWork" className={classes.navText}>
              My Work
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
