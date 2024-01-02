import React, { useEffect } from "react";

import Header from "./header-page";
import About from "./about";
import ChiscoCourt from "./chisco-court";
import Partners from "./partners";
import Rehoboth from "./rehoboth";
import Blog from "./blog";

import LegacyPalace from "./legacy-place";
import { ChiscoHeading } from "./constant";
import MasterPieces from "./master-pieces";
import DiscoverProjects from "./discover-project";

const LandingPage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Header />
      <About />
      <MasterPieces />

      <ChiscoCourt />
      <ChiscoHeading />
      <Rehoboth />
      <Partners />
      <LegacyPalace />
      <Blog />
      <DiscoverProjects />
    </div>
  );
};

export default LandingPage;
