import React from "react";
import Explore from "../../../assets/Explore.svg";


const Head = () => {

  const scrollToExplore = () => {
    const exploreSection = document.getElementById("rehoboth-details");
    if (exploreSection) {
      exploreSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="flex flex-col">
      <div style={{ filter: 'brightness(80%)' }} className="rehoboth-details  "></div>
      <div className="lg:w-[80%] m-auto absolute px-4 top-[30%] left-[5%]">
        <h1 className=" text-white text-[24px] leading-[30px] tracking-[1px] lg:text-[50px] font-[700] Inter uppercase lg:leading-[50.40px] lg:tracking-wide">
          Rehoboth Apartment
        </h1>
        <p className="uppercase masterpiece-head text-[12px] lg:text-[20px] lg:leading-[28px] font-[400]  lg:mt-4 lg:ml-3">
          By Bezal Homes
        </p>
        <p className="lg:max-w-[60%] text-[15px] leading-[19.97px] mt-9 lg:ml-3 masterpiece-head lg:text-xl font-normal Inter  lg:leading-7">
          Experience a new dimension of luxury living with the Rehoboth
          Apartments by Bezal Homes. Situated in the thriving heart of
          Shonibare, Ikeja, this exquisite collection of six three-bedroom
          apartments is more than a project; it's a promise of elevated living.
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
