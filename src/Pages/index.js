import { Container } from "@material-ui/core";
import React from "react";
import About from "../Components/about";
import Contact from "../Components/contact";
import Heros from "../Components/heros";
import Skills from "../Components/skills";
import Work from "../Components/work";
import Header from "../Layouts/header";

function Index(props) {
  return (
    <div style={{ backgroundColor: "#263238" }}>
      <Header />
      <Container>
        <Heros />
        <About />
        <Work />
        <Skills />
        <Contact />
      </Container>
    </div>
  );
}

export default Index;
