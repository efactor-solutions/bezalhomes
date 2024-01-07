import React, { useEffect, useState } from "react";
import Video from "../assets/Video.mp4";
import Logo from "../../../assets/BezalLogo.png";
const Header = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Hide the animation after 2 seconds
    const animationTimeout = setTimeout(() => {
      setShowAnimation(false);
    }, 4000);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);
  return (
    <div className="">
      {showAnimation && (
        <div className="w-full flex-wrap animation h-[100vh] absolute z-10 flex justify-center items-center bezalGiphy">
          <div className="overlay-gif w-full"></div>
          <img src={Logo} alt="logo" className="w-[50%] animate-pulse " />
        </div>
      )}

      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          controls={false}
          className="video"
          style={{ filter: "brightness(50%)" }}
        >
          {/* Include different video formats for better browser compatibility */}
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Ensure the content is centered within the video container */}
        <div className="content">
          <div className="flex flex-col text-center w-full ">
            <h1 className="text-center text-white text-[50px] font-bold Inter hidden md:block uppercase leading-[50.40px] tracking-wide">
              Dream Home Comes True
            </h1>
            <h1 className="text-white flex md:hidden flex-col px-12 Smart-watch-heading header-text uppercase Outfit text-[20px] md:text-[30px] md:text-4xl lg:text-[40px]">
              <span className="">
              Dream Home 
              </span>
              Comes True
            </h1>
            <span className="bg-white w-[52px] md:w-[100px] flex md:hidden self-center h-[2px]  my-2 md:my-7"></span>
            <p className="text-white leading-[18.97px] md:leading-[35px] mt-2 Smart-watch-text header-text inter max-w-5xl px-10 md:mt-4 text-center self-center font-normal text-[15px] md:text-[30px]">
              We do not merely construct houses; we meticulously shape homes
              that narrate your unique story. Embark on your path to a brighter
              tomorrow with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
