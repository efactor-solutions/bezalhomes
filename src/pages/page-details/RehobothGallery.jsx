import React, { useState } from "react";

import image1 from "../../assets/Rehoboth1.png";
import image2 from "../../assets/Rehoboth2.png";
import image3 from "../../assets/Rehoboth3.png";
import image4 from "../../assets/Rehoboth4.png";
import image5 from "../../assets/Rehoboth5.png";
import image6 from "../../assets/Rehoboth6.png";
import image7 from "../../assets/Rehoboth7.png";
import image8 from "../../assets/Rehoboth8.png";
import image9 from "../../assets/Rehoboth9.png";
import image10 from "../../assets/Rehoboth10.png";

import work1 from '../../assets/rehoWork1.png'
import work2 from '../../assets/rehoWork2.png'
import work3 from '../../assets/rehoWork3.png'
import work4 from '../../assets/rehoWork4.png'
import work5 from '../../assets/rehoWork5.png'
import work6 from '../../assets/rehoWork6.png'
import work7 from '../../assets/rehoWork7.png'
import work8 from '../../assets/rehoWork8.png'
import work9 from '../../assets/rehoWork9.png'
import work10 from '../../assets/rehoWork10.png'
import work11 from '../../assets/rehoWork11.png'
import work12 from '../../assets/rehoWork12.png'

const architecture = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10
];
const workInProgress = [
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  work7,
  work8,
  work9,
  work10,
  work11,
  work12
];

const RehobothGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTab, setActiveTab] = useState("architecture");

  const handleImageClick = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
    setZoomLevel(1); // Reset zoom level when closing lightbox
  };

  const handleMovePrev = () => {
    setLightboxIndex((prevIndex) => (prevIndex + activeImages.length - 1) % activeImages.length);
  };

  const handleMoveNext = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % activeImages.length);
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.1));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Choose the array of images based on the active tab
  const activeImages = activeTab === "architecture" ? architecture : workInProgress;

  return (
    <div className="w-full lg:py-20">
      <div className="w-[90%] m-auto py-10">
        <div className="text-zinc-800 text-[16px] lg:text-3xl font-normal Inter uppercase leading-normal tracking-wide">
          Explore the gallery
        </div>
        <div className="w-full mt-2 h-[1px] lg:h-[3px] bg-zinc-600" />
        <div className="flex gap-4 md:gap-8 mt-10 ">
          <div className={`tab cursor-pointer font-[400] text-[12px] md:text-[25px] ${activeTab === "architecture" ? "active text-[#E9682B] border-b border-b-[#E9682B]" : "text-[#333333]"}`} onClick={() => handleTabChange("architecture")}>
            Architecture Design
          </div>
          <div className={`tab cursor-pointer font-400 text-[12px] md:text-[25px] ${activeTab === "workInProgress" ? "active text-[#E9682B] border-b border-b-[#E9682B]" : "text-[#333333]"}`} onClick={() => handleTabChange("workInProgress")}>
            Work in Progress
          </div>
        </div>
      </div>
      
      <div className="grid w-full gap-1 lg:gap-2 lg:grid-cols-3">
        {/* Render images based on the active tab */}
        {activeImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Show ${index + 1}`}
            className="w-full h-full cursor-pointer"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox">
          <div className="lightbox-content " style={{ transform: `scale(${zoomLevel})` }}>
            <div className="relative">
              <span
                className="text-white md:text-5xl text-2xl absolute top-[25%]  right-[35%] md:right-[2%] cursor-pointer md:top-[3%]"
                onClick={handleCloseLightbox}
              >
                &times;
              </span>
              <div className="text-white flex gap-4 text-2xl md:text-5xl absolute top-[25%]  right-[45%] md:right-[7%] md:top-[3%]">
                <button onClick={handleZoomIn}>+</button>
                <button onClick={handleZoomOut}>-</button>
              </div>
              <div className="md:text-5xl text-2xl text-white absolute bottom-[25%] md:bottom-[6%] right-[40%] flex gap-8 md:right-[4%]">
                <button onClick={handleMovePrev}>&#8592;</button>
                <button onClick={handleMoveNext}>&#8594;</button>
              </div>
            </div>

            <img
              className="w-full"
              src={activeImages[lightboxIndex]}
              alt={`Gallery ${lightboxIndex + 1}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RehobothGallery;
