import React from "react";
import Buttonicon from '../assets/button-icon-orange.png'

const index = () => {
  return (

    <div className="w-full bg-[#1D1D1D] hidden lg:block py-8 lg:py-20">
    <div className="giphy w-[80%] lg:w-[90%]  m-auto text-white flex justify-center items-center">
      <div className="w-full overlay4"></div>
   
      <div className="absolute z-10">
        <h1 className="text-[12px] lg:text-[46px] mt-6 lg:mt-0 font-[400]  leading-[11.48px] lg:leading-[50.4px]">Discover exquisite Projects </h1>
        <span className="text-[8px] lg:text-[13.89px] font-[400] lg:leading-[24.5px] lg:tracking-[1.4 px] leading-[5.58px] self-center flex justify-center mt-2 tracking-[0.32 px]">Learn more</span>
        <div className="py-10 flex mt-2 lg:mt-4 justify-center">
            <button className="py-2 text-[#E0E0E0] lg:py-4 flex justify-center self-center text-[8px] tracking-[1.33 px] leading-[6.64px] md:text-[20.74px] rounded-[1.586px] flex items-center gap-2 px-8 border border-white bg-transparent transition duration-300 hover:bg-white hover:text-black  hover:border-black hover:border-2 focus:outline-none">
              REQUEST CALL BACK
              <span>
                <img
                  src={Buttonicon}
                  alt="button-icon"
                  className="w-[5.3px] h-[6.62px] md:w-[13.73px] md:h-[17.17px]"
                />
              </span>
            </button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default index;
