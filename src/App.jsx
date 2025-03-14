import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layaut";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Specifications from "./components/Specifications";
import Innovation from "./components/Innovation";
import TechFeatures from "./components/TechFeatures";
import FutureInnovations from "./components/futurein";
import FutureVision from "./components/FutureVision";
import ExploreMore from "./components/ExploreMore";
import Exploration from "./components/Exploration";
import ExternalLink from "./components/ExternalLink";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import InteractiveCards from "./components/InteractiveCards";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Layout />
      <Features />
      <Hero />
      <About />
      <Gallery />
      <Specifications />
      <Innovation />
      <TechFeatures />
      <FutureInnovations />
      <FutureVision />

      <Routes>
        <Route path="/" element={<ExploreMore />} />
        {<Route path="/exploration" element={<Exploration />} />}
      </Routes>

      <ExternalLink />
      <Testimonials />
      <FAQ />

      <InteractiveCards />
      {/* Contacto ultima seccion */}

      <Contact />
    </Router>
  );
};

export default App;
