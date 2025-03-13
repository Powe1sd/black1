import React from "react";
import Layout from "./components/Layaut";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Specifications from "./components/Specifications";
import Innovation from "./components/Innovation";
import "./App.css";

const App = () => {
  return (
    <>
      <Layout />
      <Features />
      <Hero />
      <About />
      <Gallery />
      <Specifications />
      <Innovation />
    </>
  );
};

export default App;
