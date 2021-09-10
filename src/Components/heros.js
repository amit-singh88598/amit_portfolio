import React from "react";
import "../index.css";
import { Typography, Grid, makeStyles, CardMedia } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  text1: {
    color: "#18FFFF",
    fontSize: "1em",
    fontWeight: "bold",
  },
  text2: {
    color: "#fff",
    opacity: "0.7",
    fontSize: "3em",
    fontWeight: "bold",
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
            Amit Singh Chauhan
          </Typography>
          <Typography class="Azeret-Mono grey-text subtitle">
            Web Designer & Developer
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              paddingTop: 100,
            }}
          >
            {/* <CardMedia
              className={classes.media}
              image="/a"
              title="Contemplative Reptile"
            /> */}
            <img class="ml-n50 mb-n5 " src="/avatar.svg" alt="avatar" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Heros;
