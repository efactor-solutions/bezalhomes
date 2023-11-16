import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Header from "./header-page";
import About from "./about";
import MasterPieces from "./master-pieces";
import ChiscoCourt from "./chisco-court";
import Partners from "./partners";
import Rehoboth from "./rehoboth";
import Blog from "./blog";
import Footer from "../../components/layouts/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <MasterPieces />
      <ChiscoCourt />
      <Partners />
      <Rehoboth />
      <Blog />
      <Footer />
    </div>
  );
};

export default LandingPage;
