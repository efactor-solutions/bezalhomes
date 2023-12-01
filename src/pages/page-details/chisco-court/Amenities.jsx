import React from "react";
import Home from "../../../assets/Home.svg";
import Layer from "../../../assets/Layer 12.svg";
import Terraces from "../../../assets/Terracesss.svg";
import Expansive from "../../../assets/Expansive.svg";
import Comfort from "../../../assets/Comfort.svg";
import Swimming from "../../../assets/swimming.svg";
import EV from "../../../assets/Ev.svg";
import High from "../../../assets/HighQuality.svg";
import Sports from "../../../assets/Basketball Hoop.svg";
import Cinema from "../../../assets/cinema.svg";
import Plan from "../../../assets/OpenPlan.svg";
import Power from "../../../assets/PowerSupply.svg";
import ClubHouse from "../../../assets/Club.svg";
import PlayGround from "../../../assets/PlayGround.svg";
import PrivatePools from "../../../assets/PrivatePools.svg";

const Amenities = () => {
  return (
    <main>
      <div className="w-[90%] m-auto">
        <h1 className="text-zinc-800 text-[16px] lg:text-3xl font-normal Inter uppercase leading-normal tracking-wide">
          The amenities
        </h1>
        <div className="w-full my-2 h-[1px] lg:h-[3px] bg-zinc-600" />
        <div className="max-w-7xl mt-4 text-[12px] px-2 about-new-text lg:text-xl font-normal Inter leading-[34px] tracking-wide">
          Our commitment at Chisco Court is to redefine affordable luxury real
          estate. We've created a project that offers exceptional residential
          apartments, equipped with top-notch amenities, all while catering to
          the discerning needs of modern homeowners in Lagos. At Chisco Court,
          luxury is not just a word; it's a lifestyle. Our world-class amenities
          and features include:
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-5 w-full mt-4 lg:space-x-12 gap-4 lg:gap-0 lg:space-y-16 items-center  py-10">
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={Home} alt="Icon" className=" w-[48.78px] h-[48.78px]    lg:w-[107px] lg:h-[107px]" />
            </span>
            <span className="text-center  text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
              Full Home Automation
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={Layer} alt="Icon" className="w-[36.93px] h-[48.68px] lg:w-[81px] lg:h-[106.77px]" />
            </span>
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
              24/7 concierge services at your service.
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={Terraces} alt="Icon" className="lg:w-[103px] w-[48.68px] h-[48.78px] lg:h-[107px]" />
            </span>
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
              Individual Rooftop Terraces
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={Expansive} alt="Icon" className="lg:w-[107px] w-[41.78px] h-[41.78px] lg:h-[107px]" />
            </span>
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
              Expansive balconies offering breathtaking views.
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
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
              En-suite bathrooms for added comfort.
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={Swimming} alt="Icon" className="lg:w-[110px] w-[44.13px h-[44.13px] lg:h-[117px]" />
            </span>
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
            Swimming pool and well-equipped gym.
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={EV} alt="Icon" className="w-[47.8px] h-[47.74px] lg:w-[104px] lg:h-[105px]" />
            </span>
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
            EV Charging Station
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={High} alt="Icon" className="w-[37.52px] h-[48px] lg:w-[73px] lg:h-[103px]" />
            </span>
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
            High-quality fittings and finishes.
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={Sports} alt="Icon" className="w-[60.63px] h-[55px] lg:w-[118px] lg:h-[107px]" />
            </span>
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
            Sports facilities and picnic/outdoor dining areas.
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={Cinema} alt="Icon" className="w-[46px] h-[45.57px] lg:w-[108px] lg:h-[107px]" />
            </span>
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
            IMAX Cinema
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={Plan} alt="Icon" className="w-[33px] h-[39.67px] lg:w-[89px] lg:h-[107px]" />
            </span>
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
            Open-plan home offices for remote working.
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={Power} alt="Icon" className="w-[29px] h-[40.83px] lg:w-[76px] lg:h-[107px]" />
            </span>
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
            24/7 power supply for uninterrupted living.
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={ClubHouse} alt="Icon" className="w-[52.24px] h-[54.39px] lg:w-[104px] lg:h-[108.29px]" />
            </span>
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
            Clubhouse for social gatherings and events.
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={PlayGround} alt="Icon" className="w-[54.39px] h-[53.75px] lg:w-[110.08px] lg:h-[107px]" />
            </span>
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
            Playground for kids and jogging lanes for active living.
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span>
              <img src={PrivatePools} alt="Icon" className="w-[57.76px] h-[54.25px] lg:w-[115px] lg:h-[108px]" />
            </span>
            <span className="text-center text-teal-800 text-[8px] lg:text-[15px] font-normal Inter uppercase leading-relaxed tracking-wide">
            Private Pools
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Amenities;
