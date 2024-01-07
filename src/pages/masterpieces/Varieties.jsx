import React from "react";
import Chisco from "../landing-page/assets/Bezal Review_8 - Photo.svg";
import Rehoboth from "../landing-page/assets/reho1.svg";
import Legacy from "../landing-page/assets/legacyImage1.jpeg";
import { useNavigate } from "react-router-dom";

const Varieties = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center flex-col items-center w-full">
      <div className=" py-10 lg:py-20">
        <h1 className="text-center text-zinc-800 text-[14px] lg:text-[40px] font-normal Inter lg:leading-[48px]">
          We have varieties of Masterpieces to pick from
        </h1>
        <p className="text-center max-w-5xl m-auto mt-4 text-xs text-neutral-400 px-8 lg:px-4 lg:text-xl font-normal Inter lg:leading-7">
          Discover the heartbeat of luxury and the embrace of thoughtful design
          as you explore our homes. Each one tells a story, not just of
          architecture, but of the moments that make a house a home. Welcome to
          a place where every detail is a testament to the heartfelt journey of
          creating spaces that resonate with the soul. Your home, your story,
          begins here.
        </p>
      </div>

      <div className="3-divs w-[94%] py-10 lg:mb-24  justify-between grid lg:grid-cols-2 gap-8">
        <div
          onClick={() => navigate("/chisco-details")}
          className="group cursor-pointer relative overflow-hidden rounded-[30px]"
        >
          <div className="w-full absolute bottom-0 left-0 h-full bg-black opacity-30 rounded-[30px]"></div>
          <img
            src={Chisco}
            alt="Chisco"
            className="rounded-[30px] w-full scale-105 group-hover:scale-100 transition-all duration-700"
          />
          <div className="absolute left-[10%] bottom-[5%] flex flex-col">
            <h1 className="uppercase Inter lg:font-[600] text-[20px] lg:text-[45px] lg:leading-[50.4px] tracking-[1px] text-center masterpiece-head ">
              Chisco Court
            </h1>
            <p className="font-[400] text-[9px] lg:text-[18px] lg:ml-2 lg:leading-[28px] masterpiece-head">
              LEKKI, LAGOS
            </p>
          </div>
        </div>
        <div
          onClick={() => navigate("/rehoboth-details")}
          className="group cursor-pointer relative overflow-hidden rounded-[30px]"
        >
          <div className="w-full absolute bottom-0 left-0 h-full bg-black opacity-30 rounded-[30px]"></div>
          <img
            src={Rehoboth}
            alt="Chisco"
            className="rounded-[30px] h-full object-cover w-full scale-105 group-hover:scale-100 transition-all duration-700"
          />
          <div className="absolute w-full left-[1%]  bottom-[5%] flex flex-col">
            <h1 className="uppercase Inter lg:font-[600] text-[20px] lg:text-[45px] lg:leading-[50.4px] tracking-[1px] text-center masterpiece-head ">
              Rehoboth Apartments
            </h1>
            <p className="font-[400] lg:text-[18px] text-[9px] ml-14 lg:ml-[10%] lg:leading-[28px] masterpiece-head">
              Shonibare, Ikeja, Lagos.
            </p>
          </div>
        </div>
        <div
          onClick={() => navigate("/legacy-place")}
          className="group cursor-pointer relative overflow-hidden rounded-[30px]"
        >
          <div className="w-full absolute bottom-0 left-0 h-full bg-black opacity-30 rounded-[30px]"></div>
          <img
            src={Legacy}
            alt="Chisco"
            className="rounded-[30px] w-full scale-105 group-hover:scale-100 transition-all duration-700"
          />
          <div className="absolute left-[10%] bottom-[5%] flex flex-col">
            <h1 className="uppercase Inter lg:font-[600] text-[20px] lg:text-[45px] lg:leading-[50.4px] tracking-[1px] text-center masterpiece-head ">
              LEgacy Place
            </h1>
            <p className="font-[400] text-[9px] lg:text-[18px] lg:ml-2 lg:leading-[28px] masterpiece-head">
              Omole Phase I of Ikeja.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Varieties;
