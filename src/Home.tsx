import React from "react";

import Hero from "./sections/Hero";
import Background from "./sections/Background";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

const Home = () => (
  <>
    {/* <Switch />  */}
    <Hero />
    <Background />
    <Skills />
    <Experience />
    <Projects />
    {/* <Other /> */}
    <Footer />
  </>
);

export default Home;
