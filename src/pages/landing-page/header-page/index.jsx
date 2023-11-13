import React, { useEffect, useState } from "react";
import Play from '../assets/playIcon.png'

const Header = () => {
  const [currentState, setCurrentState] = useState("image1")
  const [activeDot, setActiveDot] = useState(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentState((prev) => {
        if (prev === "image1") {
          setActiveDot(2);
          return "image2";
        }
        if (prev === "image2") {
          setActiveDot(3);
          return "image3";
        }
        setActiveDot(1);
        return "image1";
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (dotNumber) => {
    if (dotNumber === 1) setCurrentState("image1");
    else if (dotNumber === 2) setCurrentState("image2");
    else setCurrentState("image3");

    setActiveDot(dotNumber);
  };


  return (
    <div className="container-style">
      <div
        className={`${currentState} h-screen flex justify-center items-center relative`}
      >
        <div className="flex flex-col gap-4 text-center w-full max-w-5xl">
          <h1 className="text-white uppercase Outfit font-[600] text-4xl md:text-6xl">
            Welcome to Bezal Homes
          </h1>
          <h1 className="text-[#E9682B] uppercase Outfit font-bold text-2xl md:text-4xl">
            Where Your Dream Home Awaits YOu!
          </h1>
          <p className="text-white inter max-w-xl md:mt-4 text-center self-center font-normal text-base md:text-xl">
            At Bezal Homes, we transcend the realm of real estate. We are the
            promise of an enriched life. We do not merely construct houses; we
            meticulously shape homes that narrate your unique story. Embark on
            your path to a brighter tomorrow with us.
          </p>
        </div>
      </div>

<div className="flex w-full absolute justify-center items-center bottom-[15%] ">
      <div className="dots-container   w-full flex justify-center gap-4">
        <span
          className={`dot  ${activeDot === 1 ? "active  " : "  "}`}
          onClick={() => handleDotClick(1)}
        ></span>
        <span
          className={`dot  ${activeDot === 2 ? "active  " : ""}`}
          onClick={() => handleDotClick(2)}
        ></span>
        <span
          className={`dot  ${activeDot === 3 ? "active  " : " "}`}
          onClick={() => handleDotClick(3)}
        ></span>
      </div>
      <div className="mr-12 md:mr-20 w-24">
        <img src={Play} alt="Play Icon" className="w-full"/>
      </div>
      </div>
    </div>
  );
};

export default Header;
