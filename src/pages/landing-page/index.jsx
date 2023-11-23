import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Header from "./header-page";
import About from "./about";
import ChiscoCourt from "./chisco-court";
import Partners from "./partners";
import Rehoboth from "./rehoboth";
import Blog from "./blog";
import Footer from "../../components/layouts/Footer";
import LegacyPalace from "./legacy-place";
import { ChiscoHeading } from "./constant";
import MasterPieces from "./master-pieces";
import DiscoverProjects from "./discover-project";
import MobileFooter from "../../components/layouts/MobileFooter";

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <Header />
      <About />
      <MasterPieces />
      <LegacyPalace />
      <ChiscoHeading />
      <ChiscoCourt />
      <Partners />
      <Rehoboth />
      <Blog />
      <DiscoverProjects />
      <MobileFooter />
      <Footer />
    </div>
  );
};

export default LandingPage;
