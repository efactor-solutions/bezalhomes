import React, { useState, useEffect } from 'react';

const PhoneCallButton = ({ 
  phoneNumber = "+2347000000000",
  text = "Call Us Now",
  showText = true,
  pulseEffect = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Add a small delay before showing the button for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle click with analytics tracking if needed
  const handleClick = () => {
    // You could add analytics tracking here if needed
    // Example: trackEvent('phone_call_button_clicked');
    
    window.location.href = `tel:${phoneNumber}`;
  };
  
  // Don't render anything until visible (prevents animation issues)
  if (!isVisible) return null;
  
  return (
    <div 
      className={`fixed bottom-6 left-6 flex items-center z-50 transition-all duration-500 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      {/* Main button with phone icon */}
      <button
        onClick={handleClick}
        className={`flex items-center bg-[#2D6462] hover:bg-[#E9682B] text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
          showText ? 'pr-4 pl-3 py-2' : 'p-3'
        } ${pulseEffect ? 'animate-pulse' : ''}`}
        aria-label="Call us"
      >
        {/* Phone Icon */}
        <div className="relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-6 h-6"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          
          {/* Optional: Animated ring effect around the icon */}
          {pulseEffect && (
            <span className="absolute inset-0 rounded-full border-4 border-[#2D6462] opacity-75 animate-ping"></span>
          )}
        </div>
        
        {/* Optional text label */}
        {showText && (
          <span className="ml-2 font-medium">
            {text}
          </span>
        )}
      </button>
      
      {/* Optional: Add tooltip that appears on hover */}
      <div className="absolute left-full ml-2 px-3 py-1 bg-black bg-opacity-75 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Call {phoneNumber}
      </div>
    </div>
  );
};

export default PhoneCallButton;