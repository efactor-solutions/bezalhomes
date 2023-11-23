import React, { useState } from "react";
import Arrow from "../assets/Vector.svg";
import seeDetails1 from "../assets/seeDetails2.svg";

const ProgressBar = ({ totalImages, currentImage }) => {
  return (
    <div className="flex items-center z-10 lg:z-0 w-full max-w-[40%] lg:max-w-[50%]">
      {Array.from({ length: totalImages }).map((_, index) => (
        <div
          key={index}
          className={`h-[7px]  flex-shrink-0 ${
            index === currentImage ? "bg-white" : "bg-gray-300"
          }`}
          style={{
            width: `${100 / totalImages}%`,
            borderRadius:
              index === 0
                ? "5px 0 0 5px" // rounded on the left side
                : index === totalImages - 1
                ? "0 5px 5px 0" // rounded on the right side
                : "none", // no rounding for other divs
          }}
        ></div>
      ))}
    </div>
  );
};

const ScrollBar = ({ totalImages, onPrev, onNext }) => {
  return (
    <div className=" flex items-center z-10 space-x-8 lg:ml-32">
      <button onClick={onPrev}>
        <span className="text-2xl  md:text-4xl text-white">&#8592;</span>
      </button>
      <button onClick={onNext}>
        <span className="text-2xl md:text-4xl text-white">&#8594;</span>
      </button>
    </div>
  );
};
const LegacyPalace = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const classnames = ["legacy1", "legacy2", "legacy3", "legacy4", "legacy5"];

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % classnames.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + classnames.length) % classnames.length
    );
  };

  return (
    <div className={` flex flex-col relative ${classnames[currentImage]}`}>
      <div className="overlay"></div>
      <div className="right flex absolute md:mt-10 flex-col">
        {/* Add your title, content, and list here */}
        <h2 className="uppercase text-[30px] md:text-[45px]  lg:text-[60px] px-4 ml-4 mt-7  inter text-white lg:font-[400] leading-[54.46px]">
          Legacy Place
        </h2>
        <h2 className="uppercase text-[11px] font-[400] md:text-[20px] lg:text-[20px] px-4 ml-5  inter text-white">
          BY BEZAL HOMES
        </h2>
        {/* <p className=" px-4 ml-4 text-white inter font-normal text-[11px] md:text-[18px] lg:mt-9  max-w-lg leading-[28px]">
              The Legacy Place at Omole offers two exquisite units of 4 & 5
              Bedroom luxury duplexes, meticulously designed to cater to the
              most discerning tastes. These smart duplexes feature cutting-edge
              architecture and a remarkable sense of space. Each unit boasts
              spacious living areas, state-of-the-art kitchens, and stylishly
              appointed bedrooms. The design seamlessly blends modern aesthetics
              with practicality, creating a living environment that's second to
              none
            </p> */}
        {/* <ul className="mt-8 lg:mt-20 flex px-4 flex-col ml-4 gap-5">
              <li className="flex gap-7 items-center text-white  uppercase inter lg:font-semibold text-[12px] md:text-base leading-7">
                <span className="">
                  <img src={Residential} alt="Icon" className="w-[15.89px] h-[10.1px] md:w-[29.62px] md:h-[18.83px]"/>
                </span>
                RESIDENTIAL
              </li>
              <li className="flex gap-7 items-center text-white uppercase inter lg:font-semibold text-[12px] md:text-base leading-7">
                  <span className="">
                  <img src={Q2} alt="Icon" className="w-[6.33px] h-[11.82px] md:w-[11.8px] md:h-[22.03px]"/>
                </span>
                Q2 - 2020
              </li>
              <li className="flex gap-7 items-center text-white uppercase inter lg:font-semibold text-[12px] md:text-base leading-7">
                  <span className="">
                  <img src={Detached} alt="Icon" className="w-[9.54px] h-[9.38px] md:w-[17.78px] md:h-[17.48px]" />
                </span>
                <span className="max-w-xs leading-7">2, 4 & 5 Bedrooms units of Detached Duplexes</span>
              </li>
              <li className="flex gap-7 items-center text-white uppercase inter lg:font-semibold text-[12px] md:text-base leading-7">
                <div className="">
                  <img src={SoldOut} alt="Icon" className="w-[7.56px] h-[9.8px] md:w-[14.09px] md:h-[18.26px]" />
                </div>
                Sold Out
              </li>
            </ul> */}
      </div>

      <div className="flex  justify-center gap-[20%] md:gap-60  w-full  absolute bottom-[3%] lg:bottom-[7%] px-12">
        <div className="w-full flex flex-col lg:flex-row space-y-9 lg:space-x-20">
          <div className="lg:absolute lg:bottom-[25%]  cursor-pointer">
          <span className="relative">
                <img
                  src={seeDetails1}
                  alt=""
                  className="spinner w-[80.81px] h-[80.78px] lg:w-[200.26px] lg:h-[180.13px]"
                />
              </span>
            <div className="  w-8 h-8 absolute bottom-[59%] left-[21%] lg:bottom-[33%] lg:left-[30%] md:w-[55.16px] md:h-[55.16px] rounded-full flex justify-center items-center bg-[#E9682B] ">
              <span className="">
                <img
                  src={Arrow}
                  alt=""
                  className="hover:animate-spin w-[9.81px] h-[8.78px] lg:w-[20.26px] lg:h-[18.13px]"
                />
              </span>
            </div>
          </div>
          <div className="w-full flex justify-between lg:justify-around lg:max-w-">
            <ProgressBar
              totalImages={classnames.length}
              currentImage={currentImage}
            />
            <ScrollBar
              totalImages={classnames.length}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacyPalace;
