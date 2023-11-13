import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Header from "./header-page";
import About from "./about";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default LandingPage;
