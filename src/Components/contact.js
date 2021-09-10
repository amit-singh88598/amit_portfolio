import { Card, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Call, GitHub, LinkedIn, Mail } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingBlock: 50,
  },
  cardStyle: {
    backgroundColor: "#37474F",
    padding: 50,
  },
  socialCard: {
    backgroundColor: "#37474F",
    padding: 10,
    height: 100,
  },
  btn: {
    color: "#18F1F1",
    marginInline: 30,
  },
  icon: {
    "&:hover": {
      height: 50,
      width: 50,
    },
  },
  text: {
    textAlign: "center",
    fontSize: "0.8em",
    color: "#fff",
    opacity: "0.7",
    marginTop: 20,
    letterSpacing: 2,
  },
  justifyCenter: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Contact(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Card className={classes.cardStyle}>
        <Card className={classes.socialCard} elevation={0}>
          <div className={classes.justifyCenter}>
            <a href="https://github.com/amit-singh88598">
              <IconButton className={classes.btn}>
                <GitHub className={classes.icon} />
              </IconButton>
            </a>
            <a href="https://www.linkedin.com/in/amit-singh-71755b159/">
              <IconButton className={classes.btn}>
                <LinkedIn className={classes.icon} />
              </IconButton>
            </a>
            <a href="mailto:amitsingh992728@gmail.com">
              <IconButton className={classes.btn}>
                <Mail className={classes.icon} />
              </IconButton>
            </a>
            <a href="tel:7300689054">
              <IconButton className={classes.btn}>
                <Call className={classes.icon} />
              </IconButton>
            </a>
          </div>
        </Card>
        <Typography justify="center" className={classes.text}>
          © 2021. All Rights Reserved.
        </Typography>
      </Card>
    </div>
  );
}

export default Contact;
