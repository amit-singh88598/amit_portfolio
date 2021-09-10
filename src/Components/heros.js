import React from "react";
import "../index.css";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  text1: {
    color: "#18FFFF",
    fontSize: "1em",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 100,
    },
  },
  img: {
    paddingTop: 100,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 50,
    },
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "100%",
    },
  },
}));

function Heros(props) {
  const classes = useStyle();
  return (
    <div className={classes.root} id="home">
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Typography className={classes.text1}>Hi There, I'm</Typography>
          <Typography class="Roboto-Slab letter-spacing grey-text heading">
            Amit Singh
          </Typography>
          <Typography class="Azeret-Mono grey-text subtitle">
            Web Designer & Developer
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.img}>
            <img
              class="ml-n50 mb-n5 "
              className={classes.image}
              src="/avatar.svg"
              alt="avatar"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Heros;
