import React from "react";
import BlackDiamond from "../assets/image 36.png";
import Marble from "../assets/image 34.png";
import Jaiz from "../assets/image 35.png";
import PolarisBank from "../assets/polarisbank.png";
import MCandT from "../assets/mcandt.png";
import Omoluabi from "../assets/omoluabi.png";

const Partners = () => {
  const partnerLogos = [
    Omoluabi,
    BlackDiamond,
    Marble,
    Jaiz,
    MCandT,
    PolarisBank,
    
  ];

  return (
    <div className="flex justify-center items-center flex-col py-10 lg:py-20">
      <h1 className="uppercase font-[400] text-[#333333] inter text-[16px] md:text-[46px] leading-[20.24px] lg:leading-[50.4px] mt-7">
        Our Partners
      </h1>
      <h2 className="inter uppercase font-[500] text-[9px] leading-[7.86px] lg:leading-[24.5px] mt-2 tracking-[1px] text-[#2D6462] lg:text-[#E9682B]">
        They Trust us
      </h2>

      {/* Logos displayed straight, no carousel */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-14 py-10 w-full max-w-6xl px-4">
        {partnerLogos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center transition-transform duration-300 ease-in-out"
          >
            <img
              src={logo}
              alt={`partner-${index}`}
              className="w-32 h-auto opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
