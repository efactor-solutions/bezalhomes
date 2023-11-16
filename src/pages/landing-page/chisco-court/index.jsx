import React, { useState } from "react";
import SeeDetails from '../assets/see-details.png'
// import Play from '../assets/playIcon.png'

const ProgressBar = ({ totalImages, currentImage }) => {
  return (
    <div className="flex items-center w-full max-w-[50%] md:max-w-[70%]">
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
const ChiscoCourt = () => {
    const [currentImage, setCurrentImage] = useState(0);
  
    const classnames = ['chisco1', 'chisco2', 'chisco3', 'chisco4', 'chisco5'];
  
    const handleNext = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % classnames.length);
    };
  
    const handlePrev = () => {
      setCurrentImage(
        (prevIndex) => (prevIndex - 1 + classnames.length) % classnames.length
      );
    };
  
    return (
      <div className={`chisco h-screen flex flex-col justify-center relative items-center ${classnames[currentImage]}`}>
      <div className="flex items-center justify-center flex-col gap-4">
        <h1 className="uppercase inter mt-20 font-[400] text-[40px] md:text-[90px] leading-[50.4px] tracking-[1px] text-white">
          Chisco Court
        </h1>
        <div className="bg-white  h-[1.5px] w-[25%] md:w-[210px]"></div>
        <h2 className="uppercase text-white font-medium md:font-[600] text-xs md:text-xl leading-7 inter">
          Where Dreams Take Root – Your Path to Affordable Luxury
        </h2>
        <h1 className="inter font-[600] text-lg md:text-[30px] leading-[28px] text-white">LAGOS</h1>
      </div>
      <div className="w-24 mt-12 cursor-pointer hover:animate-pulse">
        <img src={SeeDetails} alt="button" w-full />
      </div>
      {/* <div className="w-24 mt-12 cursor-pointer hover:animate-pulse absolute md:right-[5%] bottom-[20%] md:bottom-[30%]">
        <img src={Play} alt="button" className="w-full" />
      </div> */}
      <div className="flex  justify-center gap-28 md:gap-60  w-full max-w-7xl absolute bottom-[10%] md:right-[3%]">
      <ProgressBar totalImages={classnames.length} currentImage={currentImage} />
      <ScrollBar totalImages={classnames.length} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
};

export default ChiscoCourt;
