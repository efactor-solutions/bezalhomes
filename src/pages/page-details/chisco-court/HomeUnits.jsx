import React from "react";
import HomeUnit from "../../../assets/HomeUnits1.png";
import DuplexD from '../../../assets/Duplex1.svg'
import DuplexSD from '../../../assets/Duplex2.svg'
import Terraces from '../../../assets/Terraces.svg'
import Maisonnete from '../../../assets/Maisonnete.svg'
import Flat from '../../../assets/Flat.svg'
import UnitSpinner from '../../../assets/UnitSpinner.svg'

const HomeUnits = () => {
  return (
    <main className="w-full lg:mt-[200px] h-full">
      <div className="w-full lg:relative flex flex-col lg:h-[807px] pb-[8rem] bg-zinc-300">
        <div className="lg:w-[523px] lg:h-[899px] w-full bottom-[0.1px] left-[5%] lg:absolute bg-black bg-opacity-20 rounded-sm">
          <img src={HomeUnit} alt="Home Unit" className="w-full" />
      
        </div>
        <div className=" lg:absolute top-[10%] right-[10%]">
          <h1 className="text-zinc-800 text-[16px] ml-6 lg:ml-0 mt-12 lg:mt-0 lg:text-[40px] font-normal Inter uppercase leading-[21px] tracking-[3px]">
            CHISCO COURT Home Units
          </h1>
          <div className="w-full ml-8 lg:ml-0 grid lg:grid-cols-1 mt-6  lg:mt-[4rem] gap-7 lg:gap-[4rem]">
            <div className="w-[286.19px] h-[69.10px] pl-[23.19px] border-l border-slate-900 border-opacity-30 flex-col justify-center items-start inline-flex">
              <div className="text-zinc-800 text-[25px] flex items-center gap-4 lg:text-[31.25px] font-normal Inter leading-[53.10px]">
              {/*<span className="w-[27px] h-[27px]">
              <img src={DuplexD} alt="Icon" className="w-full" />
            </span>*/}   10 Units
              </div>
              <div className="text-black text-opacity-50 text-xs font-normal Inter leading-none">
                4 BEDROOM FULLY DETACHED HOUSE WITH 2 - ROOM BQ
              </div>
            </div>
            <div className="w-[286.19px] h-[69.10px] pl-[23.19px] border-l border-slate-900 border-opacity-30 flex-col justify-center items-start inline-flex">
              <div className="text-zinc-800 text-[25px] flex items-center gap-4 lg:text-[31.25px] font-normal Inter leading-[53.10px]">
              {/*<span className="w-[27px] h-[27px]">
              <img src={DuplexSD} alt="Icon" className="w-full" />
            </span>*/} 14 Units
              </div>
              <div className="text-black text-opacity-50 text-xs font-normal Inter leading-none">
              4 BEDROOM SEMI-DETACHED HOUSE WITH 1-ROOM BQ
              </div>
            </div>
            <div className="w-[286.19px] h-[69.10px] pl-[23.19px] border-l border-slate-900 border-opacity-30 flex-col justify-center items-start inline-flex">
              <div className="text-zinc-800 text-[25px] flex items-center gap-4 lg:text-[31.25px] font-normal Inter leading-[53.10px]">
              {/*<span className="w-[27px] h-[27px]">
              <img src={Terraces} alt="Icon" className="w-full" />
            </span>*/}  10 Units
              </div>
              <div className="text-black text-opacity-50 text-xs font-normal Inter leading-none">
              4 BEDROOM TERRACE WITH 1-ROOM BQ
              </div>
            </div>
            {/*<div className="w-[286.19px] h-[69.10px] pl-[23.19px] border-l border-slate-900 border-opacity-30 flex-col justify-center items-start inline-flex">
              <div className="text-zinc-800 text-[25px] flex items-center gap-4 lg:text-[31.25px] font-normal Inter leading-[53.10px]">
              <span className="w-[27px] h-[27px]">
              <img src={Maisonnete} alt="Icon" className="w-full" />
            </span>02 Units
              </div>
              <div className="text-black text-opacity-50 text-xs font-normal Inter leading-none">
              4 BEDROOM MANSION PENTHOUSE WITH POOL, CINEMA
              </div>
            </div>
            <div className="w-[286.19px] h-[69.10px] pl-[23.19px] border-l border-slate-900 border-opacity-30 flex-col justify-center items-start inline-flex">
              <div className="text-zinc-800 text-[25px] flex items-center gap-4 lg:text-[31.25px] font-normal Inter leading-[53.10px]">
              <span className="w-[27px] h-[27px]">
              <img src={Flat} alt="Icon" className="w-full" />
            </span> 02 Units
              </div>
              <div className="text-black text-opacity-50 text-xs font-normal Inter leading-none">
              3 BEDROOM MAISONETTE PENTHOUSE WITH CINEMA
              </div>
            </div>
            <div className="w-[286.19px] h-[69.10px] pl-[23.19px] border-l border-slate-900 border-opacity-30 flex-col justify-center items-start inline-flex">
              <div className="text-zinc-800 text-[25px] flex items-center gap-4 lg:text-[31.25px] font-normal Inter leading-[53.10px]">
              <span className="w-[27px] h-[27px]">
              <img src={Flat} alt="Icon" className="w-full" />
            </span>  48 Units
              </div>
              <div className="text-black text-opacity-50 text-xs font-normal Inter leading-none">
              3 BEDROOM APARTMENT
              </div>
            </div>
            <div className="w-[286.19px] h-[69.10px] pl-[23.19px] border-l border-slate-900 border-opacity-30 flex-col justify-center items-start inline-flex">
              <div className="text-zinc-800 text-[25px] flex items-center gap-4 lg:text-[31.25px] font-normal Inter leading-[53.10px]">
              <span className="w-[27px] h-[27px]">
              <img src={Flat} alt="Icon" className="w-full" />
            </span>40 Units
              </div>
              <div className="text-black text-opacity-50 text-xs font-normal Inter leading-none">
              2 BEDROOM APARTMENT
              </div>
            </div>
            <div className="w-[286.19px] h-[69.10px] pl-[23.19px] border-l border-slate-900 border-opacity-30 flex-col justify-center items-start inline-flex">
              <div className="text-zinc-800 text-[25px] flex items-center gap-4 lg:text-[31.25px] font-normal Inter leading-[53.10px]">
              <span className="w-[27px] h-[27px]">
              <img src={Flat} alt="Icon" className="w-full" />
            </span>04 Units
              </div>
              <div className="text-black text-opacity-50 text-xs font-normal Inter leading-none">
            4 BEDROOM MAISONETTE APARTMENT
              </div>
            </div>
            */}
          </div>
          <div className="w-[260px] h-[58px] hidden lg:flex justify-center items-center mt-[3rem] bg-orange-500 rounded-[5px]" >
          <div className="text-white text-[25px] font-normal  leading-[18.20px] tracking-wide">34 Units in total </div>
          </div>
          <img
            src={UnitSpinner}
            alt=""
            className="block animate-spin spinner lg:hidden  absolute right-[2%]"
          />
        </div>
      </div>
    </main>
  );
};

export default HomeUnits;
