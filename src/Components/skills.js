import {
  Card,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const useStyle = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#022C43",
    paddingBottom: 40,
  },
  media: {
    height: 200,
    width: 200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      height: 150,
      width: 150,
    },
  },
  heading: {
    fontSize: "2em",
    color: "#fff",
    paddingTop: 60,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 40,
    },
  },
  divider: {
    width: 300,
    height: 2,
    backgroundColor: "#C7C7C7",
    marginBottom: 40,
  },
  flex: {
    display: "flex",
    justifyContent: "center",
  },
}));

const SkillImages = [
  {
    img: "/html.png",
  },
  {
    img: "/css.png",
  },
  {
    img: "/javascript.png",
  },
  {
    img: "/react.png",
  },
  {
    img: "/nextjs.png",
  },
  {
    img: "/redux.png",
  },
  {
    img: "/materialui.png",
  },
  {
    img: "/npm1.png",
  },
  {
    img: "/github.png",
  },
];

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 300,
      padding: 10,
      backgroundColor: "#263238",
    }}
  >
    <Card
      style={{
        height: 250,
        backgroundColor: "#263238",
        border: "2px solid #37474F",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt="html"
          src="/html.svg"
          style={{ height: 150, width: 300, paddingTop: 30 }}
        />
      </div>
      <Typography
        style={{
          fontSize: "1.6em",
          dontWeight: "bold",
          textAlign: "center",
          color: "#fff",
          opacity: "0.7",
          marginTop: 20,
        }}
      >
        HTML
      </Typography>
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 300,
      padding: 10,
      backgroundColor: "#263238",
    }}
  >
    <Card
      style={{
        height: 250,
        backgroundColor: "#263238",
        border: "2px solid #37474F",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt="html"
          src="/css.svg"
          style={{ height: 150, width: 300, paddingTop: 30 }}
        />
      </div>
      <Typography
        style={{
          fontSize: "1.6em",
          dontWeight: "bold",
          textAlign: "center",
          color: "#fff",
          opacity: "0.7",
          marginTop: 20,
        }}
      >
        CSS
      </Typography>
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 300,
      padding: 10,
      backgroundColor: "#263238",
    }}
  >
    <Card
      style={{
        height: 250,
        backgroundColor: "#263238",
        border: "2px solid #37474F",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt="html"
          src="/javascript.svg"
          style={{ height: 150, width: 300, paddingTop: 30 }}
        />
      </div>
      <Typography
        style={{
          fontSize: "1.6em",
          dontWeight: "bold",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#fff",
          opacity: "0.7",
          marginTop: 20,
        }}
      >
        Javascript
      </Typography>
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 300,
      padding: 10,
      backgroundColor: "#263238",
    }}
  >
    <Card
      style={{
        height: 250,
        backgroundColor: "#263238",
        border: "2px solid #37474F",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt="html"
          src="/react-js.svg"
          style={{ height: 150, width: 300, paddingTop: 30 }}
        />
      </div>
      <Typography
        style={{
          fontSize: "1.6em",
          dontWeight: "bold",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#fff",
          opacity: "0.7",
          marginTop: 20,
        }}
      >
        react
      </Typography>
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 300,
      padding: 10,
      backgroundColor: "#263238",
    }}
  >
    <Card
      style={{
        height: 250,
        backgroundColor: "#263238",
        border: "2px solid #37474F",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt="html"
          src="/next-js.svg"
          style={{ height: 150, width: 300, paddingTop: 30 }}
        />
      </div>
      <Typography
        style={{
          fontSize: "1.6em",
          dontWeight: "bold",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#fff",
          opacity: "0.7",
          marginTop: 20,
        }}
      >
        next.js
      </Typography>
    </Card>
  </Card>,
];

function Skills(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography className={classes.heading}>SPECIALIZATION</Typography>
      <Divider className={classes.divider} />
      <AliceCarousel
        mouseTracking
        items={items}
        animationDuration={6000}
        autoPlay={true}
        autoHeight={true}
        autoWidth={true}
        disableButtonsControls={true}
        infinite={true}
        disableDotsControls={true}
      />
    </div>
  );
}

export default Skills;
