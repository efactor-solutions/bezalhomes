import React from "react";

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
  return (
    <div className="">
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
    </div>
  );
};

export default LandingPage;
