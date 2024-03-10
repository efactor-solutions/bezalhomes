import React, { useRef, useState, useEffect } from "react";
import Explore from '../../../assets/Explore.svg'
import maximize from '../../../assets/maximize.png';

const Head = () => {
  const videoLink = "https://api.bezalhomes.ng/media/proverty_videos/asdkmsdfklkdfls.mp4";
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false); // New state for fullscreen mode
  const videoRef = useRef(null);
  const chiscoDetailsRef = useRef(null)
 
  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      setIsFullScreen(true);
      videoRef.current.requestFullscreen();
    } else {
      setIsFullScreen(false);
      document.exitFullscreen();
    }
  };
  
  useEffect(() => {
    // Assign the ref after the chisco-details element is rendered in the DOM
    chiscoDetailsRef.current = document.querySelector('#chisco-details');
  }, []);
  
  const scrollToChiscoDetails = () => {
    // Check if chiscoDetailsRef.current is not null before calling scrollIntoView
    if (chiscoDetailsRef.current) {
      chiscoDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="relative flex flex-col">
      <div style={{ filter: 'brightness(70%)' }} className="chisco-details"></div>
      <div className="lg:w-[80%] m-auto absolute px-4 top-[30%] left-[5%]">
        <h1 className="text-white text-[30px] leading-[30px] tracking-[1px] lg:text-[50px] font-[700] Inter uppercase lg:leading-[50.40px] lg:tracking-wide">
          Chisco Court
        </h1>
        <p className="uppercase masterpiece-head ml-1 text-[12px] lg:text-[20px] lg:leading-[28px] font-[400] mt-1 lg:mt-4 lg:ml-4">
          By Bezal Homes
        </p>
        <p className="lg:max-w-[60%] text-[15px] leading-[19.97px] mt-9 lg:ml-3 masterpiece-head lg:text-xl font-normal Inter lg:leading-7">
          Welcome to Chisco Court, where luxury living takes on a new meaning.
          As an exquisite residential haven developed by Bezal Homes and
          Investment Ltd. Chisco Court is set to redefine the expectations of
          upscale living in the city of Lagos, Nigeria.
        </p>
        <div className="lg:mt-[5%] mt-[40%] cursor-pointer" onClick={scrollToChiscoDetails}>
          <img src={Explore} alt="Button" className="animate-pulse exploredetailsbutton transition-all w-[77.83px] h-[77.94px] lg:w-[160.72px] lg:h-[160.94px]" />
        </div>
      </div>
      <div
        className={`absolute w-[40%] h-[40%] overflow-hidden cursor-pointer !rounded-xl hidden lg:block right-[5%] bottom-[10%] ${isFullScreen ? 'fullscreen-video' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          preload="none"
          ref={videoRef}
          controls={false}
          className="w-full h-full object-contain small-video-player"
        >
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {(!isPlaying || isHovered) && (
          <div
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{
              border: "2px solid #fff",
              borderRadius: "2%",
              padding: "1.5rem",
            }}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        )}
        <div
          className="absolute top-2 right-2 cursor-pointer text-white"
          onClick={toggleFullScreen}
        >
          {isFullScreen ? (
            <img src={maximize} className="w-5 h-5"/>
          ) : (
            <img src={maximize} className="w-5 h-5"/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Head;
