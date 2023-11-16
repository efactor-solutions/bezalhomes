import React, { useState } from "react";
import Image1 from "../assets/Rectangle.png";
import Image2 from "../assets/Rectangle (1).png";
import Image3 from "../assets/Rectangle (2).png";
import Image4 from "../assets/Rectangle (1).png";
import { cardData } from "../constant";

// ProgressBar component
const ProgressBar = ({ totalImages, currentImage }) => {
  return (
    <div className="flex items-center w-full max-w-[50%] md:max-w-[35%]">
      {Array.from({ length: totalImages }).map((_, index) => (
        <div
          key={index}
          className={`h-[7px]  flex-shrink-0 ${
            index + 1 === currentImage ? "bg-gray-600" : "bg-white"
          }`}
          style={{
            width: `${100 / totalImages}%`,
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

// ScrollBar component
const ScrollBar = ({ onPrev, onNext }) => {
  return (
    <div className="flex items-center space-x-6">
      <button onClick={onPrev}>
        <span className="text-2xl  md:text-4xl text-[#000000] ">&#8592;</span>
      </button>
      <button onClick={onNext}>
        <span className="text-2xl md:text-4xl text-[#000000] ">&#8594;</span>
      </button>
    </div>
  );
};

const BlogCard = ({ title, date, content, cardNumber }) => {
  const [hovered, setHovered] = useState(false);

  // Define the corresponding images for each card
  const images = [Image1, Image2, Image3, Image4];

  return (
    <div
      className={`relative w-full transition-all duration-300  ${
        hovered ? "bg-white" : "bg-gray-300"
      } rounded-md`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={hovered ? images[cardNumber - 1] : images[cardNumber - 1]}
        alt="Blog"
        className="w-full object-cover rounded-md"
      />
      {hovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white px-8 flex flex-col  p-4 text-left rounded-md">
          <h3 className="text-2xl text-[#333333] uppercase font-[400] inter mt-7 mb-2">{title}</h3>
          <p className="text-sm uppercase text-gray-500 mb-2">{date}</p>
          <p className="text-[#333333] inter font-[300] text-[14px] mt-4 leading-[16.94px]">{content}</p>
          <button className="mt-8 uppercase tracking-[2px] leading-[20px] text-[14px] font-[400] flex justify-start text-[#333333] underline">
            Read 
          </button>
        </div>
      )}
    </div>
  );
};

const Blog = () => {
  const [currentCard, setCurrentCard] = useState(1);

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % 5);
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + 4) % 5);
  };

  return (
    <div className="text-center py-10 px-8 p-2 md:py-20 flex w-full justify-center items-center flex-col relative  bg-[#D9D9D9]">
      <h1 className="text-[30px] leading-[45px] text-[#333333] md:text-[64px] inter font-[400]">Our Blog</h1>
      <div className="flex justify-around py-20 gap-4 md:gap-8 flex-col md:flex-row w-full">
        {cardData.map((card, index) => (
          <BlogCard
            key={index + 1}
            title={card.title}
            date={card.date}
            content={card.content}
            cardNumber={index + 1}
          />
        ))}
      </div>
      <button className="uppercase underline absolute bottom-[3.5%] md:right-[3%] md:bottom-[15%]">
        View all
      </button>
      {/* Progress Bar and Scroll Bar */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-12 md:space-x-[360px] w-full bottom-[0.4%] md:right-[-15%] absolute md:bottom-[5%]">
        <ProgressBar totalImages={4} currentImage={currentCard} />
        <ScrollBar onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
};

export default Blog;
