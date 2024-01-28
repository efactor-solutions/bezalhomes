import React from 'react';
import backgroundImage from './assets/Background.jpg';
import Logo from './assets/logo.png';
import BezalImage from './assets/In Construction.png';

const ComingSoon = () => {
  return (
    <div
      className="w-full h-screen p-2 flex flex-col items-center justify-start bg-contain bg-no-repeat md:bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="mt-10"> 
        <img src={Logo} alt="" className="w-[20rem]" /> 
      </div>
      <div className="text-black text-center mt-4"> 
        <h1 className=" font-medium md:text-2xl tracking-wide">This Section is Under Construction</h1>
        <p className="text-[#828282] text-xs md:text-base tracking-widest">Stay tuned for something amazing</p>
      </div>
      <div className="mt-10"> 
        <img src={BezalImage} alt="" className="w-[40rem]" /> 
      </div>
     
    </div>
  );
};

export default ComingSoon;
