import React from "react";
import GetInTouch from "../../../assets/getTouch.svg";

const Information = () => {
  return (
    <div className="w-[90%] m-auto py-20 relative">
      <h1 className="text-zinc-800 text-[16px] md:text-3xl font-normal Inter uppercase leading-relaxed tracking-wide">
        Request Information
      </h1>
      <div className="w-full h-[1px] md:h-[3px] bg-zinc-600 mt-4" />
      <div className=" text-black text-[12px] md:mt-4 md:text-xl font-normal Inter  leading-[34px] tracking-wide">
        Request Information for Chisco Court by Bezal Homes.
        <br />
        <br className="hidden md:block" />
        Your future at Chisco Court awaits. Whether you're looking for a dream
        home or a sound investment, this is your path to affordable luxury.
        Discover the epitome of modern living in Lagos.
        <br />
        <br />
        Contact us today to learn more about Chisco Court and how you can be
        part of this unique opportunity.
      </div>
      <div className="lg:absolute lg:bottom-[3%] right-[4%]  cursor-pointer">
        <img
          src={GetInTouch}
          alt="Button"
          className="animate-pulse transition-all w-[77.83px] h-[77.94px] lg:w-[160.72px] lg:h-[160.94px]"
        />
      </div>
    </div>
  );
};

export default Information;
