import React, { useEffect } from "react";
import Head from "./Head";
import Ourstory from "./Ourstory";
import DiscoverProject from "../landing-page/discover-project";
import CoreValues from "./CoreValues";

const OurStory = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <Head />
      <Ourstory />
      <CoreValues />
      <DiscoverProject />
    </div>
  );
};

export default OurStory;
