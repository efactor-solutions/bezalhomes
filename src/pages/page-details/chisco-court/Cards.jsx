import React from "react";
import DuplexD from '../../../assets/Duplex1.svg'
import DuplexSD from '../../../assets/Duplex2.svg'
import Terraces from '../../../assets/Terraces.svg'
import Maisonnete from '../../../assets/Maisonnete.svg'
import Flat from '../../../assets/Flat.svg'
import Video from '../../../assets/productVideo.png'

export const Cards = () => {
  return (
    <div className="lg:flex hidden py-20">
      <div className="w-[90%] flex space-x-4 items-center m-auto">
        <div className="px-8  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[41px] h-[41px]">
            <img src={DuplexD} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-lg font-normal Inter leading-[27px] tracking-wide">Fully detached duplexes</div>
        </div>
        <div className="px-8  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[41px] h-[41px]">
            <img src={DuplexSD} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-lg font-normal Inter leading-[27px] tracking-wide">Semi-Detached Duplexes</div>
        </div>
        <div className="px-8  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[41px] h-[41px]">
            <img src={Terraces} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-lg font-normal Inter leading-[27px] tracking-wide">Terraces and townhouses</div>
        </div>
        <div className="px-8  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[41px] h-[41px]">
            <img src={Maisonnete} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-lg font-normal Inter leading-[27px] tracking-wide">Maisonette duplexes</div>
        </div>
        <div className="px-8  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
          <div className="w-[41px] h-[41px]">
            <img src={Flat} alt="Icon" className="w-full" />
          </div>
          <div className=" text-zinc-800 text-lg font-normal Inter leading-[27px] tracking-wide">Flat and Apartments</div>
        </div>
      </div>
    </div>
  );
}

export const CardsMobile = () => {
    return (
      <div className="flex lg:hidden py-10">
        <div className="w-[90%] flex flex-col space-y-4 items-center m-auto">
        <div className="block hover-zoom  md:w-full lg:hidden">
        <img src={Video} alt="Icon" className="md:w-full" />
      </div>
          <div className="px-8 w-full  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
            <div className="w-[27px] h-[27px]">
              <img src={DuplexD} alt="Icon" className="w-full" />
            </div>
            <div className=" text-zinc-800 text-[14px] font-normal Inter leading-[27px] tracking-[0.45px]">Fully detached duplexes</div>
          </div>
          <div className="px-8  w-full   py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
            <div className="w-[27px] h-[27px]">
              <img src={DuplexSD} alt="Icon" className="w-full" />
            </div>
            <div className=" text-zinc-800 text-[14px] font-normal Inter leading-[27px] tracking-[0.45px]">Semi-Detached Duplexes</div>
          </div>
          <div className="px-8  w-full  py-5 flex gap-7 justify-center items-center  bg-slate-50 rounded-[10px]">
            <div className="w-[27px] h-[27px]">
              <img src={Terraces} alt="Icon" className="w-full" />
            </div>
            <div className=" text-zinc-800 text-[14px] font-normal Inter leading-[27px] tracking-[0.45px]">Fully detached duplexes</div>
          </div>
          <div className="px-8  w-full  py-5 flex gap-6 justify-center items-center  bg-slate-50 rounded-[10px]">
            <div className="w-[27px] h-[27px]">
              <img src={Maisonnete} alt="Icon" className="w-full" />
            </div>
            <div className=" text-zinc-800 text-[14px] font-normal Inter leading-[27px] tracking-[0.45px]">Terraces and townhouses</div>
          </div>
          <div className="px-8  w-full  py-5 flex gap-12 justify-center items-center  bg-slate-50 rounded-[10px]">
            <div className="w-[27px] h-[27px]">
              <img src={Flat} alt="Icon" className="w-full" />
            </div>
            <div className=" text-zinc-800 text-[14px] font-normal Inter leading-[27px] tracking-[0.45px]">Maisonette duplexes</div>
          </div>
        </div>
      </div>
    );
  };


