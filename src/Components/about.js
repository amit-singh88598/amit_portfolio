import { Card, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Call, GitHub, LinkedIn, Mail } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  cardStyle: {
    backgroundColor: "#37474F",
    borderRadius: 0,
    boxShadow: "2px 3px 20px rgba(0,0,0,0.16), 2px 3px 20px rgba(0,0,0,0.16)",
    paddingInline: 200,
    paddingBlock: 20,
    position: "relative",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      paddingInline: 20,
      paddingBlock: 10,
    },
  },
  heading: {
    fontSize: "1.4em",
    color: "#c7c7c7",
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeading: {
    fontSize: "1em",
    letterSpacing: "0.9px",
    color: "#b5b5b5",
    textAlign: "center",
    marginTop: 20,
  },
  btn: {
    color: "#18F1F1",
    marginTop: 30,
    marginInline: 10,
  },
  justifyCenter: {
    display: "flex",
    justifyContent: "center",
  },
}));

function About(props) {
  const classes = useStyle();
  return (
    <div id="about">
      <Card className={classes.cardStyle} elevation={0}>
        <Typography className={classes.heading}>
          I am a professional web designer from San Francisco.
        </Typography>
        <Typography className={classes.subHeading}>
          Consectetur adipisicing elit olore iusto cupiditate possimus amet
          aliquam qui voluptatem. Animi perferendis Minima nemo blanditiis rem
          odio provident delectus ab magni omnis optio. Architecto debitis
          mollitia itaque eius accusamu.
        </Typography>
        <div className={classes.justifyCenter}>
          <a href="https://github.com/amit-singh88598">
            <IconButton className={classes.btn}>
              <GitHub />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/amit-singh-71755b159/">
            <IconButton className={classes.btn}>
              <LinkedIn />
            </IconButton>
          </a>
          <a href="mailto:amitsingh992728@gmail.com">
            <IconButton className={classes.btn}>
              <Mail />
            </IconButton>
          </a>
          <a href="tel:7300689054">
            <IconButton className={classes.btn}>
              <Call />
            </IconButton>
          </a>
        </div>
      </Card>
    </div>
  );
}

export default About;
