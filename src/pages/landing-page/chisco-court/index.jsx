import React, { useState } from "react";
import SeeDetails from "../assets/SeeDetails.svg";
import { useNavigate } from "react-router-dom";

// import Play from '../assets/playIcon.png'

const ProgressBar = ({ totalImages, currentImage }) => {
  return (
    <div className="flex items-center w-full max-w-[50%] md:max-w-[60%]">
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
const ChiscoCourt = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const classnames = ["chisco1", "chisco2", "chisco3", "chisco4", "chisco5"];

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
        <h2 className="uppercase text-[30px] md:text-[45px]  lg:text-[60px] px-4 ml-4 mt-7  inter text-white lg:font-[400] leading-[54.46px]">
          Chisco Court
        </h2>
        <h2 className="uppercase text-[11px] font-[400] md:text-[20px] lg:text-[20px] px-4 ml-5  inter text-white">
          BY BEZAL HOMES
        </h2>
      </div>

      <div className="flex  justify-center gap-[20%] md:gap-60  w-full  absolute bottom-[6%] lg:bottom-[7%] px-12">
        <div className="w-full flex flex-col lg:flex-row space-y-9 lg:space-x-20">
          <div
            onClick={() => navigate("/chisco-details")}
            className="lg:absolute lg:bottom-[40%]  cursor-pointer"
          >
            <img
              src={SeeDetails}
              alt="Button"
              className="animate-pulse transition-all w-[77.83px] h-[77.94px] lg:w-[160.72px] lg:h-[160.94px]"
            />
          </div>
          <div className="w-full flex justify-between lg:justify-around">
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

export default ChiscoCourt;
