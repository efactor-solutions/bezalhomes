import React from "react";
import DuplexD from "../../../assets/image 57.svg";
import DuplexSD from "../../../assets/locationIcon.svg";

import Maisonnete from "../../../assets/Progress.svg";



export const Cards = () => {
  return (
    <div className="lg:flex hidden py-20">
      <div className="w-[90%] flex space-x-6 items-center m-auto">
        <div className="px-8  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[41px] h-[41px]">
            <img src={DuplexD} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 max-w-[200px]  text-lg font-normal Inter leading-[27px] tracking-wide">
          2, 4 Bedrooms of Detached Duplexes
          </div>
        </div>
        <div className="px-8  py-5 flex gap-6  justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[41px] h-[41px]">
            <img src={DuplexD} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800   text-lg font-normal Inter leading-[27px] tracking-wide">
          2, 5 Bedrooms of Detached Duplexes
          </div>
        </div>
        <div className="px-8  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[41px] h-[41px]">
            <img src={DuplexSD} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-lg font-normal Inter leading-[27px] tracking-wide">
          Omole Phase 1, Ikeja, Lagos
          </div>
        </div>
        <div className="px-8  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[43.45px] h-[40.9px]">
            <img src={Maisonnete} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 w-full items-center  text-lg font-normal Inter leading-[27px] tracking-wide">
          Sold out
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardsMobile = () => {
  return (
    <div className="flex lg:hidden py-10">
      <div className="w-[90%] flex flex-col space-y-4 items-center m-auto">
        
        <div className="px-8 w-full  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[27px] h-[27px]">
            <img src={DuplexD} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-[14px] font-normal Inter leading-[27px] tracking-[0.45px]">
          2, 4 Bedrooms of Detached Duplexes
          </div>
        </div>
        <div className="px-8  w-full   py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[27px] h-[27px]">
            <img src={DuplexD} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-[14px] font-normal Inter leading-[27px] tracking-[0.45px]">
          2, 5 Bedrooms of Detached Duplexes
          </div>
        </div>
        <div className="px-8  w-full  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[27px] h-[27px]">
            <img src={DuplexSD} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-[14px] font-normal Inter leading-[27px] tracking-[0.45px]">
          Omole Phase 1, Ikeja, Lagos
          </div>
        </div>
        <div className="px-8  w-full  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[27px] h-[27px]">
            <img src={Maisonnete} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-[14px] font-normal Inter leading-[27px] tracking-[0.45px]">
          Sold out
          </div>
        </div>
      </div>
    </div>
  );
};

