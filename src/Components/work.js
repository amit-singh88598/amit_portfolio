import {
  Button,
  Card,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  heading: {
    fontSize: "2em",
    color: "#fff",
    paddingTop: 60,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 40,
    },
  },
  divider: {
    width: 200,
    height: 2,
    backgroundColor: "#C7C7C7",
    marginBottom: 40,
  },
  underline: {
    width: 150,
    height: 2,
    backgroundColor: "#fff",
    marginBottom: 60,
  },
  media: {
    height: 200,
    width: "100%",
    marginTop: 15,
  },
  cardStyle: {
    padding: 10,
    backgroundColor: "#37474F",
    borderRadius: 0,
  },
  title: {
    fontSize: "1em",
    color: "#18FFFF",
    letterSpacing: 1,
  },
  viewBtn: {
    marginLeft: "auto",
    // marginRight: 10,
    color: "#949494",
    cursor: "pointer",
  },
  btn: {
    marginTop: 40,
    backgroundColor: "#18F1F1",
    color: "#000",
  },
  flex: {
    display: "flex",
  },
}));

const MyWork = [
  {
    title: "Doorest",
    img: "/doorest.png",
    link: "https://doorest.in/",
  },
  {
    title: "Login Academy",
    img: "/login-academy.png",
    link: "https://login-academic.herokuapp.com/",
  },
  {
    title: "Sell My Car",
    img: "/sell-my-car.png",
    link: "https://sell-my-car.vercel.app/",
  },
];

function Work(props) {
  const classes = useStyle();
  return (
    <div id="myWork">
      <Typography className={classes.heading}>WORKS</Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        {MyWork.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <a
              href={item.link}
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <Card className={classes.cardStyle} elevation={0}>
                <div className={classes.flex}>
                  <Typography className={classes.title}>
                    {item.title}
                  </Typography>
                  <ArrowForward className={classes.viewBtn} />
                </div>
                <img alt="images" src={item.img} className={classes.media} />
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
      {/* <Button className={classes.btn} variant="contained">
        View All Works
      </Button> */}
    </div>
  );
}

export default Work;