import React from "react";
import AboutImage from "../../../assets/AboutLegacy.png";

const AboutLegacy = () => {
  return (
    <main className="flex py-5 lg:py-20 mobileGray">
      <div className="lg:w-[90%] w-full m-auto lg:space-x-12 items-center flex flex-col-reverse lg:flex-row">
        <div className=" px-5 lg:px-0">
          <h1 className="text-zinc-800 mt-6 lg:mt-0  text-[16px] lg:text-3xl font-normal Inter uppercase lg:leading-[21px] lg:tracking-[3px]">
            About legacy Place
          </h1>
          <div className="max-w-5xl py-6 lg:py-0 text-[12px] lg:mt-8 about-new-text  lg:text-xl font-normal Inter lg:leading-[30px]">
            The Legacy Place is situated in the heart of Omole Phase I, Ikeja, this
            exceptional project is surrounded by the allure of a thriving
            neighborhood. Enjoy the convenience of being close to major business
            districts, educational institutions, shopping centers, and
            recreational spots.
            <br />
            <br />
            Omole Phase I is known for its tranquil ambiance and a strong sense
            of community, making it the perfect destination for those who crave
            both urban excitement and suburban serenity.
          </div>
          <div></div>
        </div>
        <div className="w-full">
          <img src={AboutImage} alt="About" className="w-full object-cover" />
        </div>
      </div>
    </main>
  );
};

export default AboutLegacy;
