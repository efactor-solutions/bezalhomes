import React, { useState, useEffect, useCallback, useRef } from 'react';
import BlackDiamond from '../assets/image 36.png';
import Marble from '../assets/image 34.png';
import Jaiz from '../assets/image 35.png';
import PolarisBank from '../assets/polarisbank.png';
import MCandT from '../assets/mcandt.png';
import LivingTrust from '../assets/livingtrust.png';

const Partners = () => {
  const partnerLogos = [BlackDiamond, Marble, Jaiz, PolarisBank, MCandT, LivingTrust];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const carouselRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Manual scroll: Next
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % partnerLogos.length;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  }, [partnerLogos.length]);

  // Manual scroll: Previous
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev === 0 ? partnerLogos.length - 1 : prev - 1;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  }, [partnerLogos.length]);

  // Function to scroll carousel to specific index
  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      // Calculate scroll position
      const logoWidth = carouselRef.current.children[0].offsetWidth;
      const gapWidth = 32; // 8px in mobile or 14px in desktop with padding
      const scrollPosition = index * (logoWidth + gapWidth);
      
      // Smooth scroll to position
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) handlePrev(); // Swipe right
    if (deltaX < -50) handleNext(); // Swipe left

    setIsPaused(false);
  };

  return (
    <div
      className="flex justify-center items-center flex-col py-10 lg:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h1 className="uppercase font-[400] text-[#333333] inter text-[16px] md:text-[46px] leading-[20.24px] lg:leading-[50.4px] mt-7">
        Our Partners
      </h1>
      <h2 className="inter uppercase font-[500] text-[9px] leading-[7.86px] lg:leading-[24.5px] mt-2 trackin-[1px] text-[#2D6462] lg:text-[#E9682B]">
        They Trust us
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-all z-20"
        >
          <svg
            className="w-6 h-6 text-[#E9682B]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Logo Carousel - Modified for smooth scrolling */}
        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-8 md:gap-14 py-10 overflow-x-auto scrollbar-hide scroll-smooth"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 transition-transform duration-500 ease-in-out"
              >
                <img
                  src={logo}
                  alt={`partner-${index}`}
                  className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-all z-20"
        >
          <svg
            className="w-6 h-6 text-[#E9682B]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center mt-4 gap-2">
        {partnerLogos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              scrollToIndex(index);
            }}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-[#E9682B]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;