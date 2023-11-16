import React, { useState } from "react";
import image1 from "../assets/legacyImage1.jpeg";
import image2 from "../assets/legacyImage2.jpeg";
import image3 from "../assets/legacyImage3.jpeg";
import image4 from "../assets/legacyImage4.jpeg";
import image5 from "../assets/legacyImage5.jpeg";
import Residential from "../assets/residential.png";
import Q2 from "../assets/qr.png";
import Detached from "../assets/detached.png";
import NotAvail from "../assets/not-available.png";
import SoldOut from "../assets/sold-out.png";
const ProgressBar = ({ totalImages, currentImage }) => {
  return (
    <div className="absolute bottom-[8%] left-[6%] flex items-center w-full max-w-[40%]">
      {Array.from({ length: totalImages }).map((_, index) => (
        <div
          key={index}
          className={`h-[8px] flex-shrink-0 ${
            index === currentImage ? "bg-white" : "bg-gray-300"
          }`}
          style={{ width: `${100 / totalImages}%`,
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

const ScrollBar = ({ totalImages, currentImage, onPrev, onNext }) => {
  return (
    <div className="absolute bottom-[4%] md:bottom-[7%] right-[8%] flex items-center space-x-6">
      <button onClick={onPrev}>
        <span className="text-2xl  md:text-4xl text-white">&#8592;</span>
      </button>
      <button onClick={onNext}>
        <span className="text-2xl md:text-4xl text-white">&#8594;</span>
      </button>
    </div>
  );
};

const MasterPieces = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [image1, image2, image3, image4, image5];

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="bg-[#E0E0E0] py-2 h-[1500px] md:h-[1800px] lg:h-[1400px] p-2">
      <div className="flex flex-col md:px-10 py-10 h-full">
        <h1 className="inter font-normal text-xl md:text-3xl">
          OUR MASTERPIECES
        </h1>
        <span className="h-[2px] w-full bg-[#606060] my-2"></span>

        <div className="container-of-2-divs flex flex-col mt-4  h-full  md:px-8 md:py-8  lg:flex-row w-full justify-center items-center relative">
          <div className="left rounded-tl-3xl rounded-bl-3xl relative overflow-hidden  w-full h-full max-w-6xl">
            <div
              className="flex w-full  h-full transition-transform duration-300"
              style={{
                transform: `translateX(-${currentImage * 100}%)`,
              }}
            >
              {images.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`post ${index + 1}`}
                  className="w-full object-cover"
                />
              ))}
            </div>{" "}
            <div className="flex justify-center items-center">
              <ProgressBar
                totalImages={images.length}
                currentImage={currentImage}
              />
              <ScrollBar
                totalImages={images.length}
                currentImage={currentImage}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            </div>
          </div>
          <div className="right flex flex-col h-full rounded-tr-3xl py-2 rounded-br-3xl md:px-12 bg-[#D9D9D9] w-full max-w-3xl">
            {/* Add your title, content, and list here */}
            <h2 className="uppercase text-2xl md:text-[45px] md:ml-4 mt-4 md:py-8 inter text-[#333333] font-normal leading-[54.46px]">
              Legacy Place
            </h2>
            <p className="text-[#333333] md:ml-4 inter font-normal text-sm md:text-xl max-w-lg leading-[28px]">
              The Legacy Place at Omole offers two exquisite units of 4 & 5
              Bedroom luxury duplexes, meticulously designed to cater to the
              most discerning tastes. These smart duplexes feature cutting-edge
              architecture and a remarkable sense of space. Each unit boasts
              spacious living areas, state-of-the-art kitchens, and stylishly
              appointed bedrooms. The design seamlessly blends modern aesthetics
              with practicality, creating a living environment that's second to
              none
            </p>
            <ul className="mt-8 flex flex-col md:ml-4 gap-5">
              <li className="flex items-center text-[#333333] uppercase inter font-semibold text-sm md:text-base leading-7">
                <span className="mr-4">
                  <img src={Residential} alt="Icon" />
                </span>
                RESIDENTIAL
              </li>
              <li className="flex items-center text-[#333333] uppercase inter font-semibold text-sm md:text-base leading-7">
                <span className="mr-4">
                  <img src={Q2} alt="Icon" />
                </span>
                Q2 - 2020
              </li>
              <li className="flex items-center text-[#333333] uppercase inter font-semibold text-sm md:text-base leading-7">
                <span className="mr-4">
                  <img src={Detached} alt="Icon" />
                </span>
                2, 4 & 5 Bedrooms units of Detached Duplexes
              </li>
              <li className="flex items-center text-[#333333] uppercase inter font-semibold text-sm md:text-base leading-7">
                <span className="mr-4">
                  <img src={NotAvail} alt="Icon" />
                </span>
                Not available
              </li>
              <li className="flex items-center text-[#333333] uppercase inter font-semibold text-sm md:text-base leading-7">
                <span className="mr-4  bg-white w-[55.67px] h-[55.67px] rounded-full flex items-center justify-center">
                  <img src={SoldOut} alt="Icon" />
                </span>
                Sold Out
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-content flex flex-col justify-center items-center">
          <h2 className="uppercase mt-4 inter font-medium text-sm text-[#A18A6B] tracking-[1.4px] leading-6">
            Chisco Court by
          </h2>
          <h1 className="uppercase inter font-[400] leading-[50.4px] text-4xl md:text-[46px] text-[#333333]">
            bezal home
          </h1>
          <p className="inter font-[400] leading-7 text-sm md:text-[15.75px] max-w-2xl mt-4 text-[#333333]">
            An exquisite residential haven developed by Bezal Homes and
            Investment Ltd, Chisco Court is set to redefine the expectations of
            upscale living in the city of Lagos, Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasterPieces;
