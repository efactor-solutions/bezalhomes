import React, { useRef, useState, useEffect } from "react";

const VideoComponent = () => {
  const videoLink = "https://api.bezalhomes.ng/media/proverty_videos/asdkmsdfklkdfls.mp4";
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false); // New state for fullscreen mode
  const videoRef = useRef(null);

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
      videoRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    function handleFullScreenChange() {
      setIsFullScreen(!!document.fullscreenElement);
    }
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <div
      className={`${!isFullScreen ? "md:hidden" : ""} relative flex`}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <video
        preload="none"
        ref={videoRef}
        controls={false}
        className="w-full  h-full object-contain small-video-player "
      >
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {(!isPlaying || isHovered) && (
        <div
          onClick={togglePlay}
          className="absolute top-[calc(50%-46px)] left-[calc(50%-46px)] cursor-pointer"
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
        className="absolute top-2 right-2 cursor-pointer bg-blue-500 text-white"
        onClick={toggleFullScreen}
      >
        {isFullScreen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M5 5h14v14H5z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M3 3h18v18H3z" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
