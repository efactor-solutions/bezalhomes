import React from "react";
import Explore from '../../../assets/Explore.svg'
import Video from '../../../assets/productVideo.png'

const Head = () => {
  const scrollToExplore = () => {
    const exploreSection = document.getElementById("chisco-details");
    if (exploreSection) {
      exploreSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="chisco-details flex flex-col">
      <div className="overlay "></div>
      <div className="lg:w-[80%] m-auto absolute px-4 top-[30%] left-[5%]">
        <h1 className=" text-white text-[30px] leading-[40px] tracking-[1px] lg:text-[90px] font-normal Inter uppercase lg:leading-[50.40px] lg:tracking-wide">
          Chisco Court
        </h1>
        <p className="uppercase masterpiece-head text-[12px] lg:text-[20px] lg:leading-[28px] font-[400] mt-1 lg:mt-4 lg:ml-3">
          By Bezal Homes
        </p>
        <p className="lg:max-w-[60%] text-[15px] leading-[18.97px] mt-9 lg:ml-3 masterpiece-head lg:text-xl font-normal Inter capitalize lg:leading-7">
          Welcome to Chisco Court, where luxury living takes on a new meaning.
          As an exquisite residential haven developed by Bezal Homes and
          Investment Ltd. Chisco Court is set to redefine the expectations of
          upscale living in the city of Lagos, Nigeria.
        </p>
        <div onClick={scrollToExplore}  className="lg:mt-[5%] mt-[40%] cursor-pointer">
           
        <img src={Explore} alt="Button"  className="animate-pulse transition-all w-[77.83px] h-[77.94px] lg:w-[160.72px] lg:h-[160.94px]"/>
          </div>
      </div>
      <div className="absolute cursor-pointer hover-zoom w-[419px] h-[234px] hidden lg:block right-[5%] bottom-[10%]">
        <img src={Video} alt="Icon" className="" />
      </div>
    </div>
  );
};

export default Head;
