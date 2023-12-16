import React, { useState, useEffect, useCallback } from 'react';

const Card = ({ card }) => (
  <div className="w-[200.99px] h-[115.36px] flex px-2 ">
    <div className="w-full h-full flex flex-col justify-center items-center bg-white rounded-[7.08px] border border-neutral-200 hover:shadow-2xl">
      <img src={card.icon} alt="Icon" className="w-[30px] h-[33.33px] mb-2" />
      <div className="border-t border-neutral-200 w-full pt-2 text-black text-[13px] flex text-center justify-center font-normal Inter leading-[13px] tracking-tight">
        {card.text}
      </div>
    </div>
  </div>
);

const CardSlider = ({ cards }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div style={{ width: '90%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', transition: 'transform 0.5s', transform: `translateX(-${currentSlide * 50}%)` }}>
        {cards.map((card, i) => (
          <div key={i} style={{ flex: '0 0 30%', boxSizing: 'border-box' }}>
            <Card card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
