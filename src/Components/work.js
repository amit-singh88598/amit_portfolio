import {
  Button,
  Card,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  heading: {
    textAlign: "center",
    fontSize: "4em",
    fontFamily: "-moz-initial",
    color: "#fff",
    paddingTop: 80,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 40,
    },
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
    marginTop: 10,
  },
  cardStyle: {
    padding: 10,
    backgroundColor: "#37474F",
  },
  title: {
    fontSize: "1em",
    color: "#18FFFF",
  },
  viewBtn: {
    marginLeft: "auto",
    marginRight: 10,
    color: "#fff",
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
    img: "/javascript.png",
  },
  {
    title: "Captain Shield",
    img: "/javascript.png",
  },
  {
    title: "Sell My EV",
    img: "/javascript.png",
  },
];

function Work(props) {
  const classes = useStyle();
  return (
    <div>
      <Typography className={classes.heading}>Works</Typography>
      <hr
        style={{
          width: 150,
          height: 2,
          backgroundColor: "#fff",
          marginBottom: 60,
        }}
      />
      <Grid container spacing={3}>
        {MyWork.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card className={classes.cardStyle}>
              <div className={classes.flex}>
                <Typography className={classes.title}>{item.title}</Typography>
                <Visibility className={classes.viewBtn} />
              </div>
              <CardMedia
                className={classes.media}
                image={item.img}
                title="Contemplative Reptile"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button className={classes.btn} variant="contained">
        View All Works
      </Button>
    </div>
  );
}

export default Work;
