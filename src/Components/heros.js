import React from "react";
import { Typography, Grid, makeStyles, CardMedia } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  //   root: {
  //     paddingTop: 200,
  //     [theme.breakpoints.down("sm")]: {
  //       paddingTop: 100,
  //     },
  //   },
  text1: {
    color: "#18FFFF",
    fontSize: "1em",
    fontWeight: "bold",
    paddingTop: 200,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 100,
    },
  },
  text2: {
    color: "#fff",
    opacity: "0.7",
    fontSize: "2em",
    fontWeight: "bold",
    marginTop: 10,
  },
  text3: {
    color: "#fff",
    fontSize: "1.2em",
    opacity: "0.8",
    marginTop: 10,
  },
  media: {
    height: 400,
    width: 400,
    [theme.breakpoints.down("sm")]: {
      height: 200,
      width: 200,
    },
  },
}));

function Heros(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.text1}>Hi There, I'm</Typography>
          <Typography className={classes.text2}>Amit Singh Chauhan</Typography>
          <Typography className={classes.text3}>Web Developer</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              paddingTop: 100,
            }}
          >
            <CardMedia
              className={classes.media}
              image="https://www.indiewire.com/wp-content/uploads/2019/03/shutterstock_5885988bd.jpg"
              title="Contemplative Reptile"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Heros;
