import React from "react";
import Explore from "../../../assets/Explore.svg";


const Head = () => {
  const scrollToExplore = () => {
    const exploreSection = document.getElementById("explore-section");
    if (exploreSection) {
      exploreSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className=" flex flex-col">
      <div style={{ filter: 'brightness(50%)' }} className="legacy4 "></div>
      <div className="lg:w-[80%] m-auto absolute px-4 top-[30%] left-[5%]">
        <h1 className=" text-white text-[24px] leading-[30px] tracking-[1px] lg:text-[90px] font-normal Inter uppercase lg:leading-[50.40px] lg:tracking-wide">
          Legacy Place
        </h1>
        <p className="uppercase masterpiece-head text-[12px] lg:text-[20px] lg:leading-[28px] font-[400] mt-1 lg:mt-4 lg:ml-3">
          By Bezal Homes
        </p>
        <p className="lg:max-w-[60%] text-[15px] leading-[19.97px] mt-9 lg:ml-3 masterpiece-head lg:text-xl font-normal Inter capitalize lg:leading-7">
          Welcome to Legacy Place by Bezal Homes, where elegance and modernity
          converge to redefine luxury living in Lagos. Bezal Homes is proud to
          unveil two smart luxury duplexes that are the epitome of
          sophistication, nestled in the prestigious Omole Phase I of Ikeja.
        </p>
        <div onClick={scrollToExplore} className="lg:mt-[5%] mt-[40%] cursor-pointer">
          <img
            src={Explore}
            alt="Button"
            className="animate-pulse transition-all w-[77.83px] h-[77.94px] lg:w-[160.72px] lg:h-[160.94px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
