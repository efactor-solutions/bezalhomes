import React from "react";
import Home from "../../../assets/Home.svg";
import Layer from "../../../assets/Layer 12.svg";
import Terraces from "../../../assets/Kitchen.svg";
import Expansive from "../../../assets/Expansive.svg";
import Comfort from "../../../assets/Amenit.svg";
import Swimming from "../../../assets/swimming.svg";
import EV from "../../../assets/Car.svg";
import High from "../../../assets/HighQuality.svg";

import PrivatePools from "../../../assets/PrivatePools.svg";

const Amenities = () => {
  return (
    <main>
      <div className="w-[90%] mt-10 lg:mt-2 m-auto">
        <h1 className="text-zinc-800 text-[16px] lg:text-3xl font-normal Inter uppercase leading-normal tracking-wide">
          The amenities
        </h1>
        <div className="w-full my-2 h-[1px] lg:h-[3px] bg-zinc-600" />
        <div className="max-w-7xl mt-4 text-[12px] px-2 about-new-text lg:text-xl font-normal Inter leading-[34px] tracking-wide">
          The moment you step into Rehoboth Apartments, you'll be greeted by an
          air of sophistication and an ambiance that speaks of exclusivity; a
          testament to the unadulterated luxury that awaits you inside. Rehoboth
          Apartments is designed to harmoniously blend exclusivity, prime
          location, and unrivaled quality, ensuring that every day here feels
          like an extraordinary experience.
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-5 w-full mt-4 lg:space-x-12 gap-4 lg:gap-0 lg:space-y-16 items-center  py-10">
          <div className="flex flex-col items-center gap-3">
            <span>
              <img
                src={Home}
                alt="Icon"
                className=" w-[48.78px] h-[48.78px]    lg:w-[107px] lg:h-[107px]"
              />
            </span>
            <span className="text-center max-w-[150px]  text-teal-800 text-[8px] lg:text-[16px] font-normal Inter uppercase leading-relaxed tracking-wide">
              Full Home Automation
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img
                src={Layer}
                alt="Icon"
                className="w-[36.93px] h-[48.68px] lg:w-[81px] lg:h-[106.77px]"
              />
            </span>
            <span className="text-center  text-teal-800 text-[8px] max-w-[150px] lg:text-[16px] font-normal Inter uppercase leading-relaxed tracking-wide">
            State of the Art Security
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img
                src={PrivatePools}
                alt="Icon"
                className="w-[57.76px] h-[54.25px] lg:w-[115px] lg:h-[108px]"
              />
            </span>
            <span className="text-center text-teal-800 text-[8px]  lg:text-[16px] font-normal Inter uppercase leading-relaxed tracking-wide">
            Swimming Pool
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img
                src={Swimming}
                alt="Icon"
                className="lg:w-[110px] w-[44.13px h-[44.13px] lg:h-[117px]"
              />
            </span>
            <span className="text-center text-teal-800 text-[8px]  lg:text-[16px] font-normal Inter uppercase leading-relaxed tracking-wide">
            Sports facilities
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img
                src={High}
                alt="Icon"
                className="w-[37.52px] h-[48px] lg:w-[73px] lg:h-[103px]"
              />
            </span>
            <span className="text-center text-teal-800 text-[8px]  lg:text-[16px] font-normal Inter uppercase leading-relaxed tracking-wide">
            Elegant Interiors
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img
                src={Expansive}
                alt="Icon"
                className="lg:w-[107px] w-[41.78px] h-[41.78px] lg:h-[107px]"
              />
            </span>
            <span className="text-center text-teal-800 text-[8px]  lg:text-[16px] font-normal Inter uppercase leading-relaxed tracking-wide">
            Spacious Balconies
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img
                src={Terraces}
                alt="Icon"
                className="lg:w-[103px] w-[48.68px] h-[48.78px] lg:h-[107px]"
              />
            </span>
            <span className="text-center text-teal-800 text-[8px]  lg:text-[16px] font-normal Inter uppercase leading-relaxed tracking-wide">
            Modern Kitchen
            </span>
          </div>
       
          <div className="flex flex-col items-center gap-3">
            <span>
              <img
                src={Comfort}
                alt="Icon"
                className="lg:w-[122.97px] w-[48.02px] h-[40.14px] lg:h-[105.92px]"
              />
            </span>
            <span className="text-center text-teal-800 text-[8px]  lg:text-[16px] font-normal Inter uppercase leading-relaxed tracking-wide">
            Proximity to Amenities
            </span>
          </div>
       
          <div className="flex flex-col items-center gap-3">
            <span>
              <img
                src={EV}
                alt="Icon"
                className="w-[47.8px] h-[47.74px] lg:w-[104px] lg:h-[105px]"
              />
            </span>
            <span className="text-center text-teal-800 text-[8px]  lg:text-[16px] font-normal Inter uppercase leading-relaxed tracking-wide">
            Dedicated parking
            </span>
          </div>
      
     
        </div>
      </div>
    </main>
  );
};

export default Amenities;
