import React from "react";

const About = () => {
  return (
    <div className="py-8 md:py-20">
      <div className="flex flex-col gap-4 p-2 py-2 w-full justify-center items-center md:py-10">
        <h2 className="text-[#2D6462] inter font-medium text-sm">ABOUT US</h2>
        <h1 className="text-[#333333] inter font-normal text-4xl">
          WHO WE ARE
        </h1>
        <p className="w-full max-w-5xl inter text-center text-sm font-normal leading-7 md:text-xl">
          Welcome to Bezal Homes, a subsidiary of Farmcenta, where innovation
          and dynamism converge in the world of real estate. We are a
          full-service real estate development and investment company, and our
          roots run deep as the real estate arm of Farmcenta. Our primary focus
          lies in the residential sector, where we passionately dedicate
          ourselves to the creation and investment in top-tier properties
          located in prime areas across Lagos Mainland and Island.
        </p>
        <div className="contains-2-divs md:py-10 w-full max-w-7xl flex flex-col md:flex-row gap-8 justify-between items-center">
          <div className="left-div w-full flex gap-4">
          <div className="line bg-[#0A0A3D4D] w-[0.6px] h-[120px]"></div>
            <div className="left-div-content mt-4 w-full">
              <h1 className="text-[#333333] inter font-medium text-[30px] md:text-[40px]">
                Our Vision
              </h1>
              <p className="text-[#333333] inter font-normal leading-7 max-w-lg text-[12px] md:text-[18px]">
                Our aspiration is clear - to stand as a distinctive high-end
                luxury homes development company within the real estate sector.
              </p>
            </div>
          </div>
          <div className="right-div w-full flex gap-4 md:mt-8">
            <div className="line bg-[#0A0A3D4D] w-[0.6px] h-[120px]"></div>
            <div className="right-div-content  w-full">
              <h1 className="text-[#333333] inter font-medium text-[30px] md:text-[40px]">
                Our Mission
              </h1>
              <p className="text-[#333333] inter font-normal leading-7 text-[12px] max-w-2xl md:text-[18px]">
                We are on a mission to revolutionize communities and society
                through the development of smart, ultra-luxury quality homes.
                Our approach involves sustainable investing that transforms the
                way we live. By doing so, we aim to leave a lasting imprint on
                the real estate landscape and contribute to a better, more
                vibrant society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
