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

const images = [
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

const RehobothGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleImageClick = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
    setZoomLevel(1); // Reset zoom level when closing lightbox
  };

  const handleMovePrev = () => {
    setLightboxIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
  };

  const handleMoveNext = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.1));
  };

  return (
    <div className="w-full lg:py-20">
      <div className="w-[90%] m-auto py-10">
        <div className="text-zinc-800 text-[16px] lg:text-3xl font-normal Inter uppercase leading-normal tracking-wide">
          Explore the gallery
        </div>
        <div className="w-full mt-2 h-[1px] lg:h-[3px] bg-zinc-600" />
      </div>
      <div className="grid w-full gap-1 lg:gap-2 lg:grid-cols-3">
        {images.map((image, index) => (
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
          <div className="lightbox-content" style={{ transform: `scale(${zoomLevel})` }}>
            <div>
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
              <div className="md:text-5xl text-2xl text-white absolute bottom-[30%] md:bottom-[6%] right-[40%] flex gap-8 md:right-[4%]">
                <button onClick={handleMovePrev}>&#8592;</button>
                <button onClick={handleMoveNext}>&#8594;</button>
              </div>
            </div>

            <img
              className="w-full"
              src={images[lightboxIndex]}
              alt={`Imag ${lightboxIndex + 1}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RehobothGallery;
