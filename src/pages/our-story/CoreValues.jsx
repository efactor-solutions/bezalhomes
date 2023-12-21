import React from "react";
import Core from "../../assets/coreIcon.svg";
import Innovation from "../../assets/innovation.svg"
import Excelence from "../../assets/excellence.svg";
import Centric from "../../assets/centric.svg";
import Sustain from "../../assets/sustainability.svg";
const CoreValues = () => {
  return (
    <div id="core-values" className="w-[90%] mx-auto py-10 md:py-20">
      <div className="w-[90%] rounded-xl core-values py-20 md:py-40  mx-auto">
        <h1 className="text-white text-[12px]  text-center md:text-xl font-normal Inter uppercase leading-normal tracking-wider">
          our core values
        </h1>
        <div className="grid grid-cols-1 space-y-8 md:space-y-0 px-8 my-8  md:mt-20 md:grid-cols-3">
          <div className="flex flex-col items-center flex-wrap">
            <span className="mb-4 flex justify-center items-center bg-orange-400 rounded-full w-8 h-8 md:w-[80px] md:h-[80px]">
              <img src={Core} alt="core icon" className="w-4 md:w-[40.73px] md:h-[48.01px]" />
            </span>
            <h1 className=" text-white text-[12px] md:text-3xl font-normal  uppercase">
              INTEGRITY
            </h1>
            <p className=" text-center text-white px-3 text-[8px] max-w-lg md:text-sm font-normal Inter">
              Trust is our foundation. We operate with unwavering ethics,
              transparency, and honesty. At Bezal Homes, it's not just about
              building homes; it's about building trust
            </p>
          </div>
          <div className="flex flex-col items-center flex-wrap">
          <span className="mb-4 flex justify-center items-center bg-orange-400 rounded-full w-8 h-8 md:w-[80px] md:h-[80px]">
              <img src={Innovation} alt="core icon" className="w-4 md:w-[40.73px] md:h-[48.01px]" />
            </span>
            <h1 className=" text-white ext-[12px] md:text-3xl font-normal  uppercase">
              innovation
            </h1>
            <p className=" text-center text-white px-3 text-[8px] max-w-lg md:text-sm font-normal Inter">
              We pride ourselves on being a trailblazer in the real estate
              industry. We continually seek creative solutions to improve our
              properties and services.
            </p>
          </div>
          <div className="flex flex-col items-center flex-wrap">
          <span className="mb-4 flex justify-center items-center bg-orange-400 rounded-full w-8 h-8 md:w-[80px] md:h-[80px]">
              <img src={Excelence} alt="core icon" className="w-4 md:w-[40.73px] md:h-[48.01px]" />
            </span>
            <h1 className=" text-white ext-[16px] md:text-3xl font-normal  uppercase">
              excellence
            </h1>
            <p className=" text-center text-white px-3 text-[8px] max-w-lg md:text-sm font-normal Inter">
              Quality is the cornerstone of every home we create. We hold
              ourselves to the highest standards of craftsmanship, using premium
              materials and top-tier design to ensure that our properties not
              only meet but exceed expectations.
            </p>
          </div>
        </div>
        <div className="md:flex  px-8 md:px-0 max-w-5xl mx-auto md:mt-40">
          <div className="flex flex-col items-center ">
          <span className="mb-4 flex justify-center items-center bg-orange-400 rounded-full w-8 h-8 md:w-[80px] md:h-[80px]">
              <img src={Centric} alt="core icon" className="w-4 md:w-[40.73px] md:h-[48.01px]" />
            </span>
            <h1 className=" text-white text-[12px] md:text-3xl font-normal  uppercase">
              Client-Centric
            </h1>
            <p className="max-w-4xl text-center text-white  px-3 text-[8px] md:text-sm font-normal Inter">
              Our clients are the heart of our business. We are dedicated to
              understanding their unique needs, desires, and dreams. And at
              Bezal Homes, we go the extra mile to ensure that our clients'
              expectations are not only met but exceeded. Their satisfaction and
              happiness are the ultimate measures of our success.
            </p>
          </div>
          <div className="flex mt-8 md:mt-0  flex-col w-full items-center flex-wrap">
          <span className="mb-4 flex justify-center items-center bg-orange-400 rounded-full w-8 h-8 md:w-[80px] md:h-[80px]">
              <img src={Sustain} alt="core icon" className="w-4 md:w-[40.73px] md:h-[48.01px]" />
            </span>
            <h1 className=" text-white text-[12px] md:text-3xl font-normal  uppercase">
              SUSTAINABILITY
            </h1>
            <p className=" text-center max-w-lg  text-white  px-3 text-[8px] md:text-sm font-normal Inter">
              As responsible stewards of the environment, we prioritize
              sustainable building practices. Our commitment to sustainability
              goes beyond just constructing homes; it's about making choices
              that minimize our environmental impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
