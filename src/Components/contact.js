import {
  Card,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  Call,
  GitHub,
  Instagram,
  LinkedIn,
  Mail,
  Twitter,
} from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingBlock: 30,
  },
  cardStyle: {
    backgroundColor: "#37474F",
    paddingBlock: 50,
    borderRadius: 0,
    boxShadow: "2px 3px 20px rgba(0,0,0,0.16), 2px 3px 20px rgba(0,0,0,0.16)",
  },
  socialCard: {
    // backgroundColor: "#37474F",
    paddingTop: 30,
    height: 70,
  },
  twitter: {
    height: 30,
    width: 30,
    color: "#18F1F1",
    marginBottom: -5,
    // "&:hover": {
    //   opacity: "0.5",
    // },
  },

  github: {
    height: 40,
    width: 40,
    color: "#18F1F1",
    // "&:hover": {
    //   opacity: "0.5",
    // },
    marginLeft: 20,
  },

  linkedIn: {
    height: 80,
    width: 80,
    color: "#18F1F1",
    marginInline: 20,
    // "&:hover": {
    //   opacity: "0.5",
    // },
  },
  mail: {
    height: 32,
    width: 40,
    color: "#18F1F1",
    marginRight: 20,
    // "&:hover": {
    //   opacity: "0.5",
    // },
  },
  call: {
    height: 25,
    width: 25,
    color: "#18F1F1",
    // "&:hover": {
    //   opacity: "0.5",
    // },
  },
  text: {
    textAlign: "center",
    fontSize: "0.8em",
    color: "#949494",
    marginTop: 40,
    letterSpacing: 2,
  },
  justifyCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

function Contact(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Card className={classes.cardStyle} elevation={0}>
        {/* <Card className={classes.socialCard} elevation={0}> */}
        <div className={classes.justifyCenter}>
          <a href="https://github.com/amit-singh88598">
            {/* <IconButton className={classes.btn}> */}
            {/* </IconButton> */}
            <Twitter className={classes.twitter} />
          </a>
          <a href="https://www.instagram.com/nomad_amitsingh/">
            {/* <IconButton className={classes.btn}> */}
            <GitHub className={classes.github} />
            {/* </IconButton> */}
          </a>
          <a href="https://www.linkedin.com/in/amit-singh-71755b159/">
            {/* <IconButton className={classes.btn}> */}
            {/* <LinkedIn className={classes.linkedIn} /> */}
            <img
              src="./linkedin.svg"
              alt="linkedin"
              className={classes.linkedIn}
            />
            {/* </IconButton> */}
          </a>
          <a href="mailto:amitsingh992728@gmail.com">
            {/* <IconButton className={classes.btn}> */}
            {/* <Mail className={classes.mail} /> */}
            {/* </IconButton> */}
            <img src="./mail.svg" alt="mail" className={classes.mail} />
          </a>
          <a href="tel:7300689054">
            {/* <IconButton className={classes.btn}> */}
            <Call className={classes.call} />
            {/* </IconButton> */}
          </a>
        </div>
        {/* </Card> */}
        <Typography justify="center" className={classes.text}>
          © 2021. All Rights Reserved.
        </Typography>
      </Card>
    </div>
  );
}

export default Contact;
