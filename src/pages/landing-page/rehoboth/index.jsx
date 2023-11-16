import React, { useState } from "react";
import SeeDetails from "../assets/see-details.png";


const ScrollBar = ({ totalImages, onPrev, onNext }) => {
  return (
    <div className=" flex items-center space-x-6">
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
      className={`chisco h-screen flex flex-col justify-center relative items-center ${classnames[currentImage]}`}
    >
      <div className="flex items-center justify-center flex-col gap-4"></div>
      <div className="w-34 mt-12 cursor-pointer hover:animate-pulse">
        <img src={SeeDetails} alt="button" className="w-full h-full object-cover"/>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-60  w-full max-w-5xl absolute bottom-3 px-2 md:px-0 md:bottom-[2%]">
        <div>
          <h1 className="uppercase mr-8 justify-center flex inter font-[600] text-[22px] max-w-[12px] md:text-[40px] md:leading-[50.4px] tracking-[1px] text-white">
            Rehoboth Apartments
          </h1>
        </div>
        <div className="flex justify-center items-center space-x-20 w-full">
          <div className="h-[112px] w-[2px] bg-white"></div>
          <div className="text-white inter flex flex-col">
            <span className="font-[600] text-[20px] leading-[28px]">Elevate Your Living Experience</span>
            <span className="text-[18px] font-normal leading-[28px]">Shonibare, Ikeja, Lagos.</span>
          </div>
        </div>

        <ScrollBar
          totalImages={classnames.length}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

export default Rehoboth;
