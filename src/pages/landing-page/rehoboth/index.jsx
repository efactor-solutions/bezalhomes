import React, { useState } from "react"
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
    <div className=" flex items-center space-x-8 lg:ml-32">
      <button onClick={onPrev}>
        <span className="text-2xl  md:text-4xl text-white">&#8592;</span>
      </button>
      <button onClick={onNext}>
        <span className="text-2xl md:text-4xl text-white">&#8594;</span>
      </button>
    </div>
  );
};
const Rehoboth = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const classnames = ["reho1", "reho2", "reho3", "reho4", "reho5"];

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % classnames.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + classnames.length) % classnames.length
    );
  };

  return (
    <div
      className={`chisco h-screen flex flex-col relative  ${classnames[currentImage]}`}
    >
      <div className="overlay"></div>
      <div className="flex  absolute flex-col lg:mt-8">
        <h2 className="uppercase text-[22px] md:text-[45px]  lg:text-[60px] px-4 ml-4 mt-7  inter text-white lg:font-[400] leading-[54.46px]">
          Rehoboth Apartments
        </h2>
        <h2 className="uppercase text-[11px] font-[400] md:text-[20px] lg:text-[20px] px-4 ml-5  inter text-white">
          BY BEZAL HOMES
        </h2>
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
          <div className="w-full flex justify-between lg:gap-[40px] lg:justify-around lg:max-w-">
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

export default Rehoboth;
