import React from "react";
import Explore from "../../assets/Explore.svg";

const Head = () => {
  const scrollToExplore = () => {
    const exploreSection = document.getElementById("core-values");
    if (exploreSection) {
      exploreSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div style={{ filter: "brightness(50%)" }} className="our-story"></div>
      <div className="lg:w-[90%]  m-auto absolute px-4 top-[30%] left-[5%]">
        <div className=" text-[12px]  text-white md:text-3xl font-normal Inter md:leading-10">
          welcome To
        </div>
        <div className="md:mt-4 flex flex-col ">
          <span className="text-white text-[20px] md:text-6xl font-normal Inter uppercase md:leading-[60px] tracking-wide">
            Bezal Homes
          </span>
          <span className="text-white text-[20px] md:text-6xl font-normal Inter uppercase md:leading-[60px] tracking-wide">
            Where Your Dream
          </span>

          <span className="text-white text-opacity-90 text-[20px] md:text-6xl font-normal Inter uppercase md:leading-[60px] tracking-wide">
            Home Awaits
          </span>
        </div>
 
      </div>
      <div
          onClick={scrollToExplore}
          className="absolute right-[7%] bottom-[7%] md:right-[3%] flex cursor-pointer"
        >
          <img
            src={Explore}
            alt="Button"
            className="animate-pulse transition-all w-[77.83px] h-[77.94px] lg:w-[160.72px] lg:h-[160.94px]"
          />
        </div>
    </div>
  );
};

export default Head;
