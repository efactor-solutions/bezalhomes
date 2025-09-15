import React, { useState } from "react";
import ComingSoon from "../../ComingSoon";

import image1 from "../../assets/chisco-court/ex/bhch1.jpg";
import image2 from "../../assets/chisco-court/ex/bhch2.jpg";
import image3 from "../../assets/chisco-court/ex/bhch3.jpg";
import image4 from "../../assets/chisco-court/ex/bhch4.jpg";
import image5 from "../../assets/chisco-court/ex/bhch5.jpg";
import image6 from "../../assets/chisco-court/ex/bhch6.jpg";
import image7 from "../../assets/chisco-court/ex/bhch7.jpg";
import image8 from "../../assets/chisco-court/ex/bhch8.jpg";
import image9 from "../../assets/chisco-court/ex/bhch9.jpg";
import image10 from "../../assets/chisco-court/ex/bhch10.jpg";
import image11 from "../../assets/chisco-court/ex/bhch11.jpg";
import image12 from "../../assets/chisco-court/ex/bhch12.jpg";
import image13 from "../../assets/chisco-court/ex/bhch13.jpg";
import image14 from "../../assets/chisco-court/ex/bhch14.jpg";
import image15 from "../../assets/chisco-court/ex/bhch15.jpg";
import image16 from "../../assets/chisco-court/ex/bhch16.jpg";
import image17 from "../../assets/chisco-court/ex/bhch17.jpg";
import image18 from "../../assets/chisco-court/ex/bhch18.jpg";
//import image19 from "../../assets/chisco-court/ex/bhch19.jpg";
//import image20 from "../../assets/chisco-court/ex/bhch20.jpg";



// interior images Images
import imagein1 from "../../assets/chisco-court/in/bhchn1.jpg";
import imagein2 from "../../assets/chisco-court/in/bhchn2.jpg";
import imagein3 from "../../assets/chisco-court/in/bhchn3.jpg";
import imagein4 from "../../assets/chisco-court/in/bhchn4.jpg";
import imagein5 from "../../assets/chisco-court/in/bhchn5.jpg";
import imagein6 from "../../assets/chisco-court/in/bhchn6.png";
import imagein7 from "../../assets/chisco-court/in/bhchn7.png";
import imagein8 from "../../assets/chisco-court/in/bhchn8.png";
import imagein9 from "../../assets/chisco-court/in/bhchn9.png";
import imagein10 from "../../assets/chisco-court/in/bhchn10.png";
import imagein11 from "../../assets/chisco-court/in/bhchn11.png";
import imagein12 from "../../assets/chisco-court/in/bhchn12.png";
import imagein13 from "../../assets/chisco-court/in/bhchn13.png";
import imagein14 from "../../assets/chisco-court/in/bhchn14.png";
import imagein15 from "../../assets/chisco-court/in/bhchn15.png";
import imagein16 from "../../assets/chisco-court/in/bhchn16.jpg";
import imagein17 from "../../assets/chisco-court/in/bhchn17.png";
import imagein18 from "../../assets/chisco-court/in/bhchn18.png";
//import imagein19 from "../../assets/chisco-court/in/bhchn19.jpg";
//import imagein20 from "../../assets/chisco-court/in/bhchn20.png";


// Mall Images
import imagema1 from "../../assets/chisco-court/mall/chma1.png";
import imagema2 from "../../assets/chisco-court/mall/chma2.png";
import imagema3 from "../../assets/chisco-court/mall/chma3.png";
import imagema4 from "../../assets/chisco-court/mall/chma4.png";
import imagema5 from "../../assets/chisco-court/mall/chma5.png";
import imagema6 from "../../assets/chisco-court/mall/chma6.png";
import imagema7 from "../../assets/chisco-court/mall/chma7.png";
import imagema8 from "../../assets/chisco-court/mall/chma8.png";
import imagema9 from "../../assets/chisco-court/mall/chma9.png";
import imagema10 from "../../assets/chisco-court/mall/chma10.png";
import imagema11 from "../../assets/chisco-court/mall/chma11.png";
import imagema12 from "../../assets/chisco-court/mall/chma12.png";
import imagema13 from "../../assets/chisco-court/mall/chma13.png";
import imagema14 from "../../assets/chisco-court/mall/chma14.png";
import imagema15 from "../../assets/chisco-court/mall/chma15.png";
import imagema16 from "../../assets/chisco-court/mall/chma16.png";
import imagema17 from "../../assets/chisco-court/mall/chma17.png";
import imagema18 from "../../assets/chisco-court/mall/chma18.png";
import imagema19 from "../../assets/chisco-court/mall/chma19.png";
import imagema20 from "../../assets/chisco-court/mall/chma20.png";
import imagema21 from "../../assets/chisco-court/mall/chma21.png";
//import imagema22 from "../../assets/chisco-court/mall/chma22.png";



// Architecture Images
const architectureImages = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15,
  image16, image17, image18, //image19, image20,
];

// Work in Progress Images (replace with correct imports)
const workInProgressImages = [
  imagein1,
  imagein2,
  imagein3,
  imagein4,
  imagein5,
  imagein6,
  imagein7,
  imagein8,
  imagein9,
  imagein10,
  imagein11,
  imagein12,
  imagein13,
  imagein14,
  imagein15,
  imagein16,
  imagein17,
  imagein18,
 // imagein19,
  //imagein20,
];

// Interior Designs Images (replace with correct imports)
const interiorDesignsImages = [
  imagema1,
  imagema2,
  imagema3,
  imagema4,
  imagema5,
  imagema6,
  imagema7,
  imagema8,
  imagema9,
  imagema10,
  imagema11,
  imagema12,
  imagema13,
  imagema14,
  imagema15,
  imagema16,
  imagema17,
  imagema18,
  imagema19,
  imagema20,
  imagema21,
 // imagema22,
];

const ChiscoGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeTab, setActiveTab] = useState("architecture");

  const handleImageClick = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
    setZoomLevel(1);
  };

  const handleMovePrev = (images) => {
    setLightboxIndex(
      (prevIndex) => (prevIndex + images.length - 1) % images.length
    );
  };

  const handleMoveNext = (images) => {
    setLightboxIndex(
      (prevIndex) => (prevIndex + 1) % images.length
    );
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.1));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setLightboxIndex(null); // reset lightbox when switching tabs
  };

  // Pick the correct images based on active tab
  const getImagesForTab = () => {
    if (activeTab === "architecture") return architectureImages;
    if (activeTab === "workInProgress") return workInProgressImages;
    if (activeTab === "interiorDesigns") return interiorDesignsImages;
    return [];
  };

  const images = getImagesForTab();

  return (
    <div className="w-full lg:py-20">
      <div className="w-[90%] m-auto py-10">
        <div className="text-zinc-800 text-[16px] lg:text-3xl font-normal Inter uppercase leading-normal tracking-wide">
          Explore the gallery
        </div>
        <div className="w-full mt-2 h-[1px] lg:h-[3px] bg-zinc-600" />

        {/* Tabs */}
        <div className="flex gap-4 md:gap-8 mt-10">
          <div
            className={`tab cursor-pointer font-[400] text-[12px] md:text-[25px] ${activeTab === "architecture" ? "active text-[#E9682B] border-b border-b-[#E9682B]" : "text-[#333333]"}`}
            onClick={() => handleTabChange("architecture")}
          >
            Exterior Designs
          </div>
          <div
            className={`tab cursor-pointer font-[400] text-[12px] md:text-[25px] ${activeTab === "workInProgress" ? "active text-[#E9682B] border-b border-b-[#E9682B]" : "text-[#333333]"}`}
            onClick={() => handleTabChange("workInProgress")}
          >
            Interior Designs
          </div>
          <div
            className={`tab cursor-pointer font-[400] text-[12px] md:text-[25px] ${activeTab === "interiorDesigns" ? "active text-[#E9682B] border-b border-b-[#E9682B]" : "text-[#333333]"}`}
            onClick={() => handleTabChange("interiorDesigns")}
          >
            Mall
          </div>
        </div>
      </div>

      {/* Image Grid */}
      {images.length > 0 ? (
        <div className="grid w-full gap-1 lg:gap-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                loading="lazy"
                src={image}
                alt={`Show ${index + 1}`}
                className="w-full h-full cursor-pointer"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>
      ) : (
        <ComingSoon />
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox z-[999999]">
          <div className="lightbox-content relative">
            <img
              loading="lazy"
              className="w-full absolute"
              style={{ transform: `scale(${zoomLevel})` }}
              src={images[lightboxIndex]}
              alt={`Image ${lightboxIndex + 1}`}
            />

            <span
              className="text-white md:text-5xl text-2xl absolute top-[25%] right-[35%] md:right-[2%] cursor-pointer md:top-[3%]"
              onClick={handleCloseLightbox}
            >
              &times;
            </span>

            <div className="text-white flex gap-4 text-2xl md:text-5xl absolute top-[25%] right-[45%] md:right-[7%] md:top-[3%]">
              <button onClick={handleZoomIn}>+</button>
              <button onClick={handleZoomOut}>-</button>
            </div>

            <div className="md:text-5xl text-2xl text-white absolute bottom-[25%] md:bottom-[5%] right-[40%] flex gap-8 md:right-[4%]">
              <button onClick={() => handleMovePrev(images)}>&#8592;</button>
              <button onClick={() => handleMoveNext(images)}>&#8594;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChiscoGallery;
