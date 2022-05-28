import { Card, makeStyles, Typography } from "@material-ui/core";
import { Call, GitHub, Twitter } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingBlock: 50,
  },
  cardStyle: {
    backgroundColor: "#37474F",
    paddingBlock: 50,
    borderRadius: 0,
    boxShadow: "2px 3px 20px rgba(0,0,0,0.16), 2px 3px 20px rgba(0,0,0,0.16)",
  },
  socialCard: {
    paddingTop: 30,
    height: 70,
  },
  twitter: {
    height: 30,
    width: 30,
    color: "#18F1F1",
    marginBottom: -5,
    "&:hover": {
      transform: "scale(1.125)",
      transition: "all .4s",
    },
  },

  github: {
    height: 40,
    width: 40,
    color: "#18F1F1",
    marginLeft: 20,
    "&:hover": {
      transform: "scale(1.125)",
      transition: "all .3s",
    },
  },

  linkedIn: {
    height: 80,
    width: 80,
    color: "#18F1F1",
    marginInline: 20,
    "&:hover": {
      transform: "scale(1.125)",
      transition: "all .3s",
    },
  },
  mail: {
    height: 32,
    width: 40,
    color: "#18F1F1",
    marginRight: 20,
    "&:hover": {
      transform: "scale(1.125)",
      transition: "all .3s",
    },
  },
  call: {
    height: 25,
    width: 25,
    color: "#18F1F1",
    "&:hover": {
      transform: "scale(1.125)",
      transition: "all .3s",
    },
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
    <div className={classes.root} id="contact">
      <Card className={classes.cardStyle} elevation={0}>
        <div className={classes.justifyCenter}>
          <a
            href="https://twitter.com/amitsin64341700"
            rel="noreferrer"
            target="_blank"
          >
            <Twitter className={classes.twitter} />
          </a>
          <a
            href="https://github.com/amit-singh88598"
            rel="noreferrer"
            target="_blank"
          >
            <GitHub className={classes.github} />
          </a>
          <a
            href="https://www.linkedin.com/in/amit-singh-71755b159/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="./linkedin.svg"
              alt="linkedin"
              className={classes.linkedIn}
            />
          </a>
          <a
            href="mailto:amitsingh992728@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <img src="./mail.svg" alt="mail" className={classes.mail} />
          </a>
          <a href="tel:7300689054">
            <Call className={classes.call} />
          </a>
        </div>
        <Typography className={classes.text}>
          © 2021. All Rights Reserved.
        </Typography>
      </Card>
    </div>
  );
}

export default Contact;
