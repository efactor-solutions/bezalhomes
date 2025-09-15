import React, { useState } from "react";

import image4 from "../../assets/LegacyGallery1.png";
import image5 from "../../assets/legacyGallery2.png";
import image3 from "../../assets/legacyGallery3.png";
import image1 from "../../assets/legacyGallery4.png";
import image2 from "../../assets/legacyGallery5.png";

import LegaWork1 from "../../assets/legaWork1.png";
import LegaWork2 from "../../assets/legaWork2.png";
import LegaWork3 from "../../assets/legaWork3.png";
import LegaWork4 from "../../assets/legaWork4.png";
import LegaWork5 from "../../assets/legaWork5.png";
import LegaWork6 from "../../assets/legaWork6.png";
import LegaWork7 from "../../assets/legaWork7.png";

// New Manu gallery images (replace with your actual assets)
import Manu1 from "../../assets/chisco-court/ex/bhch1.jpg";
import Manu2 from "../../assets/chisco-court/ex/bhch2.jpg";
import Manu3 from "../../assets/chisco-court/ex/bhch3.jpg";

const architecture = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

const workInProgress = [
  LegaWork1,
  LegaWork2,
  LegaWork3,
  LegaWork4,
  LegaWork5,
  LegaWork6,
  LegaWork7
];

// 👇 Added Manu tab images
const manu = [
  Manu1,
  Manu2,
  Manu3
];

const LegacyGallery = () => {
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
  const activeImages =
    activeTab === "architecture"
      ? architecture
      : activeTab === "workInProgress"
      ? workInProgress
      : manu; // 👈 Added Manu tab

  return (
    <div className="w-full lg:py-20">
      <div className="w-[90%] m-auto py-10">
        <div className="text-zinc-800 text-[16px] lg:text-3xl font-normal Inter uppercase leading-normal tracking-wide">
          Explore the gallery
        </div>
        <div className="w-full mt-2 h-[1px] lg:h-[3px] bg-zinc-600" />
        <div className="flex gap-4 md:gap-8  mt-10 ">
          <div
            className={`tab cursor-pointer ${
              activeTab === "architecture"
                ? "active text-orange-700 border-b border-b-orange-700"
                : ""
            }`}
            onClick={() => handleTabChange("architecture")}
          >
            Architecture Design
          </div>
          <div
            className={`tab cursor-pointer ${
              activeTab === "workInProgress"
                ? "active text-orange-700 border-b border-b-orange-700"
                : ""
            }`}
            onClick={() => handleTabChange("workInProgress")}
          >
            Work in Progress
          </div>
          <div
            className={`tab cursor-pointer ${
              activeTab === "manu"
                ? "active text-orange-700 border-b border-b-orange-700"
                : ""
            }`}
            onClick={() => handleTabChange("manu")}
          >
            Manu
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
        <div className="lightbox z-[999999]">
          <div className="lightbox-content relative">
            <img
              className="w-full absolute"
              style={{ transform: `scale(${zoomLevel})` }}
              src={activeImages[lightboxIndex]}
              alt={`Gallery ${lightboxIndex + 1}`}
            />
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
        </div>
      )}
    </div>
  );
};

export default LegacyGallery;
