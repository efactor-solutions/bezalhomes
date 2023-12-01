import React from "react";
import DuplexD from "../../../assets/image 57.svg";
import DuplexSD from "../../../assets/locationIcon.svg";
import Terraces from "../../../assets/inProgressIcon.svg";
import Maisonnete from "../../../assets/TimelineIcon.svg";



export const Cards = () => {
  return (
    <div className="lg:flex hidden py-20">
      <div className="w-[90%] flex space-x-6 items-center m-auto">
        <div className="px-8  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[41px] h-[41px]">
            <img src={DuplexD} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 max-w-[150px] text-lg font-normal Inter leading-[27px] tracking-wide">
            6, 3 Bedroom Apartments
          </div>
        </div>
        <div className="px-8  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[41px] h-[41px]">
            <img src={DuplexSD} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 max-w-[150px]  text-lg font-normal Inter leading-[27px] tracking-wide">
            Shonibare, Ikeja, Lagos.
          </div>
        </div>
        <div className="px-8  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[41px] h-[41px]">
            <img src={Terraces} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-lg font-normal Inter leading-[27px] tracking-wide">
            In-Progress{" "}
          </div>
        </div>
        <div className="px-8  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[41px] h-[41px]">
            <img src={Maisonnete} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 max-w-[150px]  text-lg font-normal Inter leading-[27px] tracking-wide">
            Timeline Q4 - 2024
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
            6, 3 Bedroom Apartments
          </div>
        </div>
        <div className="px-8  w-full   py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[27px] h-[27px]">
            <img src={DuplexSD} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-[14px] font-normal Inter leading-[27px] tracking-[0.45px]">
            Shonibare, Ikeja, Lagos.
          </div>
        </div>
        <div className="px-8  w-full  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[27px] h-[27px]">
            <img src={Terraces} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-[14px] font-normal Inter leading-[27px] tracking-[0.45px]">
            In-Progress
          </div>
        </div>
        <div className="px-8  w-full  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[27px] h-[27px]">
            <img src={Maisonnete} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-[14px] font-normal Inter leading-[27px] tracking-[0.45px]">
            Timeline Q4 - 2024
          </div>
        </div>
      </div>
    </div>
  );
};

