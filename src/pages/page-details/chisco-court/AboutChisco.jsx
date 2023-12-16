import React from "react";
// import { useSpring, animated, config } from "react-spring";
import AboutImage from "../../../assets/AboutChisco.png";
import Timeline from "../../../assets/Timeline.svg"
import Units from "../../../assets/Units.svg";
import Progress from "../../../assets/Progress.svg";



const AboutChisco = () => {

  return (
    <main className="flex  lg:py-20 ">
      <div className="lg:w-[90%] w-full m-auto lg:space-x-12 items-center flex flex-col-reverse lg:flex-row">
        <div className=" px-5 lg:px-0">
          <h1 className="text-zinc-800 mt-6 lg:mt-0   text-[16px] lg:text-3xl font-normal Inter uppercase lg:leading-[21px] lg:tracking-[3px]">
            About chisco court
          </h1>
          <div className="max-w-5xl py-6  lg:py-0 text-[12px] lg:mt-8 about-new-text  lg:text-xl font-normal Inter lg:leading-[30px]">
            Welcome to Chisco Court, where luxury living takes on a new meaning.
            As an exquisite residential haven developed by Bezal Homes and
            Investment Ltd. Chisco Court is set to redefine the expectations of
            upscale living in the city of Lagos, Nigeria.
            <br />
            <br />
            Chisco Court is strategically situated in the heart of Lekki, Lagos,
            and enjoys a prime location in one of the city's most sought-after
            neighborhoods. It is surrounded by vibrant culture, top-notch
            schools, shopping districts, and scenic parks as well as offers the
            perfect blend of luxury, convenience, and lifestyle. With easy
            access to major roadways and public transport, you're never far from
            the best that Lagos has to offer.{" "}
          </div>
          <div>
          <div className="lg:flex flex-col hidden   lg:space-x-6 mt-6  md:flex-row gap-4 md:gap-0 mb-7 md:mb-0 justify-center items-center">
              <div className="w-[200.99px] h-[115.36px] relative">
                <div className="w-[200.99px] h-[115.36px] left-0 top-0 absolute flex justify-center items-center bg-white rounded-[7.08px] border border-neutral-200 hover:shadow-2xl ">
                <img src={Timeline} alt="Icon" className="w-[] h-[] lg:w-[30px] lg:h-[33.33px] absolute top-6" />
                </div>
                <div className="w-[199.58px] h-[0.71px] left-[0.71px] top-[74.71px] absolute bg-neutral-200" />
                <div className="left-[38px] top-[87px] absolute text-black text-[13px] font-normal font-['Optima Pro'] leading-[13px] tracking-tight">
                  Timeline - Q4 - 2026
                </div>
                <div className="w-[30px] h-[33.33px] left-[81px] top-[58.33px] absolute flex-col justify-start items-start inline-flex" />
              </div>
              <div className="w-[200.99px] h-[115.36px] relative">
                <div className="w-[200.99px] h-[115.36px] flex justify-center items-center left-0 top-0 absolute bg-white rounded-[7.08px] border border-neutral-200 hover:shadow-2xl" >
                <img src={Units} alt="Icon" className="w-[] h-[] lg:w-[29.81px] lg:h-[33.12px] absolute top-6" />
                </div>
                <div className="w-[199.58px] h-[0.71px] left-[0.71px] top-[74.71px] absolute bg-neutral-200" />
                <div className="left-[60px] top-[87px] absolute text-black text-[13px] font-normal Inter ml-4 leading-[13px] tracking-tight">
                  100 Units
                </div>
                <div className="w-[30px] h-[33.33px] left-[81px] top-[58.33px] absolute flex-col justify-start items-start inline-flex" />
              </div>
              <div className="w-[200.99px] h-[115.36px] relative">
                <div className="w-[200.99px] h-[115.36px] flex justify-center  left-0 top-0 absolute bg-white rounded-[7.08px] border border-neutral-200 hover:shadow-2xl" >
                <img src={Progress} alt="Icon" className="w-[] h-[] lg:w-[32px] lg:h-[30px] absolute top-6" />
                </div>
                <div className="w-[199.58px] h-[0.71px] left-[0.71px] top-[74.71px] absolute bg-neutral-200" />
                <div className="left-[50px] top-[87px] absolute text-black text-[13px] font-normal font-['Optima Pro'] leading-[13px] tracking-tight">
                  Status - In Progress
                </div>
                <div className="w-[30px] h-[33.33px] left-[81px] top-[58.33px] absolute flex-col justify-start items-start inline-flex" />
              </div>
            </div>
               
          </div>
        </div>
        <div className="w-full">
          <img src={AboutImage} alt="About" className="w-full object-cover" />
        </div>
      </div>
    </main>
  );
};

export default AboutChisco;
