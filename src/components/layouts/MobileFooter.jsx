import React from "react";
import Logo from "../../assets/BezalLogo.png";
import Facebook from "../../assets/Link.png";
import Twitter from "../../assets/Link (1).png";
import Instagram from "../../assets/Link (2).png";
import Youtube from "../../assets/Link (3).png";
import Buttonicon from '../../pages/landing-page/assets/button-icon-orange.png'
const MobileFooter = () => {
  return (
    <div className="bg-[#1D1D1D] block lg:hidden">
          <div className="w-full bg-[#1D1D1D] py-6 lg:py-20">
    <div className="giphy w-[90%] lg:w-[90%]  m-auto text-white flex justify-center items-center">
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
      <div className="">
        <div className="logo text-white w-[231px] h-[45px] m-auto flex justify-center py-10 items-center">
          <img src={Logo} alt="logo" className="w-full object-cover" />
        </div>
        <div className="w-full mt-2 h-[0px] border border-neutral-200 border-opacity-20"></div>
        <div className="py-10 px-8">
        <div className="text-white text-opacity-50 text-xs mt-8 font-normal uppercase leading-[12.90px]">
          Stay in the know
        </div>
        <div className="w-[317.85px] h-[37.62px] relative mt-7 border-b border-white border-opacity-50">
          <div className="w-full justify-start items-center inline-flex">
            <div className=" text-stone-100 text-[11.04px] font-normal">
              Email Address
            </div>
          </div>
          <div className="left-[285.85px] top-[16px] absolute text-neutral-200 text-[10px] font-normal font-['Optima Pro'] uppercase leading-[8.53px] tracking-widest">
            send
          </div>
        </div>

        <h1 className="text-white text-opacity-50 text-xs font-normal mt-8 leading-[15.12px]">
        OUR STORY
        </h1>
        <p className="w-[317px] h-[74px] text-white text-xs font-normal mt-4 leading-[18px]">
          Our primary focus lies in the residential sector, where we
          passionately dedicate ourselves to the creation and investment in
          top-tier properties located in prime areas across Nigeria.
        </p>

        <h1 className="text-white text-opacity-50 text-xs font-normal mt-8 leading-[15.12px]">
        MASTERPIECES
        </h1>
        <p className="text-white text-xs font-normal mt-2 leading-[15.12px]">Legacy Place</p>
        <p className="text-white text-xs font-normal mt-2 leading-[15.12px]">Rehoboth Apartment</p>
        <p className="text-white text-xs font-normal mt-2 leading-[15.12px]">Chisco Court</p>
        <h1 className="text-white text-opacity-50 text-xs font-normal mt-8 leading-[15.12px]">
        OUR PEOPLE
        </h1>
        <div className="text-white text-xs font-normal mt-2 leading-[15.12px]">Board of Directors </div>
        <div className="text-white text-xs font-normal mt-2 leading-[15.12px]">Management Team </div>
        <h1 className="text-white text-opacity-50 text-xs font-normal mt-8 leading-[15.12px]">
        CONTACT US
        </h1>
        <p className="text-white text-xs font-normal mt-2 leading-[15.12px]">info@bezalhomes.ng</p>
        <p className="text-white text-xs font-normal mt-2 leading-[15.12px]">+234 (0) 817 8206002</p>

        <div className=" space-x-4 mt-16 flex">
              <img src={Facebook} alt="logo" className="w-[23.27x] h-[23.27px]" />
              <img src={Twitter} alt="logo" className="w-[23.27x] h-[23.27px]" />
              <img src={Instagram} alt="logo" className="w-[23.27x] h-[23.27px]" />
              <img src={Youtube} alt="logo" className="w-[23.27x] h-[23.27px]" />
            </div>
            <p className="text-white text-xs font-normal mt-8 leading-[15.12px]">Terms of Use</p>
            <p className="text-white text-xs font-normal mt-2 leading-[15.12px]">Privacy</p>
            <p className="text-white text-xs font-normal mt-2 leading-[15.12px]">Cookie Policy</p>

            <p className="text-white text-xs font-normal mt-10 uppercase leading-[15.12px]">Bezal Homes © 2023</p>
      </div>
    </div>
    </div>
  );
};

export default MobileFooter;
