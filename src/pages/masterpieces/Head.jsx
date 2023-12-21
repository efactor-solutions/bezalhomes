import React from "react";

const Head = () => {
  return (
    <div className="class4 flex flex-col justify-center items-center">
      <div className="w-full absolute bottom-0 left-0 h-full bg-black opacity-20"></div>
      <div className="absolute">
        <h1 className="masterpiece-head uppercase Inter text-[20px]  lg:text-[52px] text-center font-[700] lg:leading-[72px]">
          Elevated Living
        </h1>
        <p className="text-[#EDEFF6] text-center text-[12px] px-8 lg:px-4 lg:text-[20px] max-w-3xl Inter leading-[15px] lg:leading-[28px] font-[400]">
          Bezal homes aren't just structures; they are canvases painted with
          love and warmth. Our property masterpieces are more than bricks and
          mortar—they are a reflection of dreams woven into the very fabric of
          every wall.
        </p>
      </div>
    </div>
  );
};

export default Head;
