import React from "react";
import Vision from "../assets/vision.png";
import Mission from "../assets/mission.png";

import Masterpieces from "../assets/masterpieces.png";
import Development from "../assets/development.png";
import Buttonicon from "../assets/button-icon-orange.png";
import BezalSpinner from "../assets/welcomeBezals.svg";
import BezalSmall from "../assets/BezalSmall.svg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className=" relative">
      <div className="flex flex-col gap-4 w-full ">
        <div className=" flex flex-col justify-center relative items-center py-10  lg:py-[10%] lg:mt-10 gap-2 lg:gap-4">
          <h2 className="text-[#2D6462] md:text-[#E9682B] inter font-medium text-sm ">
            OUR STORY
          </h2>
          <h1 className="text-[#333333] inter font-normal text-lg lg:text-4xl">
            WHO WE ARE
          </h1>
          <p className="w-full flex md:hidden px-8 flex-col  Smart-watch-text max-w-5xl inter text-center text-xs  font-normal leading-5 md:text-xl">
            <span>
              Our narrative unfolds in the residential sector, where our passion
              thrives in the creation and investment of premier properties,
              strategically nestled in prime locations across Nigeria. Bezal
              Homes & Investment Ltd. stands tall, a luminous beacon of
              excellence illuminating the real estate industry, crafting
              exquisite properties that leave an indelible mark on sought-after
              landscapes throughout Nigeria.
            </span>{" "}
          </p>
          <p className="w-full hidden md:flex px-8 flex-col  Smart-watch-text max-w-5xl inter text-center text-xs  font-normal leading-5 md:text-xl">
            Our narrative unfolds in the residential sector, where our passion
            thrives in the creation and investment of premier properties,
            strategically nestled in prime locations across Nigeria. Bezal Homes
            & Investment Ltd. stands tall, a luminous beacon of excellence
            illuminating the real estate industry, crafting exquisite properties
            that leave an indelible mark on sought-after landscapes throughout
            Nigeria.
          </p>
          <div className="div-3-cont flex space-y-9 py-10 flex-col lg:flex-row lg:justify-center lg:gap-32 lg:w-[90%] justify-center items-center w-full">
            <div className="div-1 lg:mt-4 flex items-center gap-4">
              <div className="line hidden lg:block about-line w-[1px] h-[39.47px] md:h-[73.47px]"></div>
              <div className="cont">
                <div className="icon and figures flex items-center ml-4 lg:ml-0 gap-3">
                  <span>
                    <img
                      src={Masterpieces}
                      alt="Icon"
                      className="w-[27.9px] h-[26.54px] md:w-[51.93px] md:h-[49.4px]"
                    />
                  </span>
                  <span className="text-[27.22px] font-bold md:text-[50.67px] text-[#333333]">
                    04
                  </span>
                </div>
                <div className="text-[17.01px] capitalize lg:text-[31.67px] about-new-text">
                  masterpieces{" "}
                </div>
              </div>
            </div>
            <div className="line block lg:hidden about-line w-[200px] h-[1px]"></div>
            <div className="div-1 flex items-center gap-4">
              <div className="line hidden lg:block about-line w-[1px] h-[39.47px] md:h-[73.47px]"></div>
              <div className="cont">
                <div className="icon and figures flex items-center gap-3">
                  <span>
                    <img
                      src={Development}
                      alt="Icon"
                      className="w-[27.9px] h-[26.54px] md:w-[51.93px] md:h-[51.93px]"
                    />
                  </span>
                  <span className="text-[27.22px] font-bold md:text-[50.67px]  text-[#333333]">
                    2 Projects
                  </span>
                </div>

                <div className="text-[17.01px] lg:text-[31.67px] about-new-text">
                  Under Developement{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <button
              onClick={() => {
                navigate("/our-story");
              }}
              className="py-2 text-[#E9682B] text-[8px] md:text-[20.74px] rounded-[1.586px] flex items-center gap-2 px-8 border border-[#E9682B] bg-transparent transition duration-300 hover:border-b-black hover:border-r-black hover:border-l-black hover:border-2 focus:outline-none foc"
            >
              DISCOVER OUR STORY
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
        <div className="Bezal-spinner">
          <img
            src={BezalSpinner}
            alt=""
            className=" animate-spin spinner hidden lg:block absolute left-[42%] top-[58%]"
          />
          <img
            src={BezalSmall}
            alt=""
            className="block animate-spin spinner w-[40%] lg:hidden  absolute left-[30%] top-[59%]"
          />
        </div>

        <div className="contains-2-divs bg-[#D9D9D9] lg:px-20  py-12  lg:py-[10%] w-full  flex flex-col md:flex-row gap-8 justify-between items-center">
          <div className="left-div w-full mb-12 flex gap-4">
            <div className="left-div-content   px-8 mt-8 w-full">
              <div className="flex flex-col md:flex-row md:items-center gap-3 ">
                <img
                  src={Vision}
                  alt="icon"
                  className="w-[26px] h-[26px] md:w-[48px] md:h-[48px]"
                />
                <h1 className="text-[#333333] inter font-medium text-[20px] md:text-[40px]">
                  Our Vision
                </h1>
              </div>
              <p className="text-[#333333] inter font-normal leading-5 md:leading-7 max-w-lg text-[12px] md:text-[18px]">
                Our aspiration is clear - to stand as a distinctive high-end
                luxury homes development company within the real estate sector.
              </p>
            </div>
          </div>
          <div className="right-div w-full px-8 flex gap-4 md:mt-8">
            <div className="right-div-content  w-full">
              <div className="flex flex-col md:flex-row md:items-center gap-3 ">
                <img
                  src={Mission}
                  alt="icon"
                  className="w-[24.75px] h-[24.72px] md:w-[48px] md:h-[48px]"
                />
                <h1 className="text-[#333333] inter font-medium text-[20px] md:text-[40px]">
                  Our Mission
                </h1>
              </div>
              <p className="text-[#333333] inter font-normal leading-5 md:leading-7 text-[12px] max-w-2xl md:text-[18px]">
                We are on a mission to revolutionize communities and society
                through the development of smart, ultra-luxury quality homes.
                Our approach involves sustainable investing that transforms the
                way we live. By doing so, we aim to leave a lasting imprint on
                the real estate landscape and contribute to a better, more
                vibrant society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
