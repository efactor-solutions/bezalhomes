import React from 'react';
import Video from '../assets/Video.mp4'
const Header = () => {
  return (
    <div className="container-style py-10 md:py-0">
      <div className="video-container h-[40vh] md:h-screen">
        <video autoPlay loop muted controls={false} className="video">
          {/* Include different video formats for better browser compatibility */}
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Ensure the content is centered within the video container */}
        <div className="content flex justify-center items-center">
          <div className="flex flex-col gap-4 text-center w-full max-w-7xl">
            <h1 className="text-white uppercase Outfit font-[600] text-xl md:text-6xl">
              Welcome to Bezal Homes
            </h1>
            <h1 className="text-[#E9682B] uppercase Outfit font-bold text-base md:text-4xl">
              Where Your Dream Home Awaits You!
            </h1>
            <p className="text-white inter max-w-xl px-2 md:mt-4 text-center self-center font-normal text-xs md:text-xl">
              At Bezal Homes, we transcend the realm of real estate. We are the
              promise of an enriched life. We do not merely construct houses; we
              meticulously shape homes that narrate your unique story. Embark on
              your path to a brighter tomorrow with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
