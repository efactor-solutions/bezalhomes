import React from "react";
import AboutImage from "../../../assets/AboutRehoboth.png";


const AboutRehoboth = () => {
  return (
    <main className="flex lg:py-20 mobileGray">
      <div className="lg:w-[90%] w-full m-auto lg:space-x-12 items-center flex flex-col-reverse lg:flex-row">
        <div className=" px-5 lg:px-0">
          <h1 className="text-zinc-800 mt-6 lg:mt-0  text-[16px] lg:text-3xl font-normal Inter uppercase lg:leading-[21px] lg:tracking-[3px]">
            About rehoboth APARTMENT
          </h1>
          <div className="max-w-5xl py-6 lg:py-0 text-[12px] lg:mt-8 about-new-text  lg:text-xl font-normal Inter leading-[15px] lg:leading-[30px]">
            The Rehoboth redefined the art of contemporary living, aiming to set
            a new standard in the Nigerian real estate landscape.
            <br />
            <br />
            Inspired by a commitment to timeless elegance and functionality,
            we've left no stone unturned in crafting this living environment
            that resonates with the architectural ingenuity of the 16th century,
            all while seamlessly integrating the conveniences of the 21st
            century.
          </div>
          <div>
         
          </div>
        </div>
        <div className="w-full">
          <img src={AboutImage} alt="About" className="w-full object-cover" />
        </div>
      </div>
    </main>
  );
};

export default AboutRehoboth;
