import React from "react";
import Logo from "../../assets/logo.png";
import Facebook from "../../assets/Link.png";
import Twitter from "../../assets/Link (1).png";
import Instagram from "../../assets/Link (2).png";
import Youtube from "../../assets/Link (3).png";
import SendButton from "../../assets/Group 20.png";

const Footer = () => {
  return (
    <div className="bg-[#1D1D1D]">
      <div className="container flex flex-col justify-center items-center py-10">
        <div className="logo text-white w-[180px] md:w-[398px] flex justify-center py-10 items-center">
          <img src={Logo} alt="logo" className="w-full object-cover" />
        </div>
        <div className="5-divs-container flex flex-col md:flex-row space-x-14 justify-between w-full">
          <div className="div-1">
            <h1 className="inter font-[400] text-[20px] leading-[15.12px] text-white ">
              Address
            </h1>
            <div className="inter font-[400] text-[12.6px] mt-8 leading-[15.12px] text-left max-w-[200px] text-white ">
              39, Alfred Rewane Road, Ikoyi Lagos, Nigeria.
            </div>
            <div className="icons w-[28.8px] space-x-6 mt-4 md:mt-20 flex">
              <img src={Facebook} alt="logo" className="w-full object-cover" />
              <img src={Twitter} alt="logo" className="w-full object-cover" />
              <img src={Instagram} alt="logo" className="w-full object-cover" />
              <img src={Youtube} alt="logo" className="w-full object-cover" />
            </div>
          </div>
          <div className="div2 mt-6 md:mt-0">
            <h1 className="inter font-[400] text-[20px] leading-[15.12px] text-white ">
              Real Estate
            </h1>
            <div className="inter font-[400] mt-8 text-[12.4px]  leading-[15.12px] text-left max-w-[200px] text-white ">
              Banana island estate
            </div>
            <div className="inter font-[400] mt-2 text-[12.4px]  leading-[15.12px] text-left max-w-[200px] text-white ">
              Bourdillion estate
            </div>
            <div className="inter font-[400] text-[12.4px] mt-2 leading-[15.12px] text-left max-w-[200px] text-white ">
              Nikon town estate
            </div>
            <div className="inter font-[400] text-[12.4px] mt-2 leading-[15.12px] text-left max-w-[200px] text-white ">
              Living gold estate
            </div>
            <div className="inter font-[400] text-[12.4px] mt-2 leading-[15.12px] text-left max-w-[200px] text-white ">
              Lekki Gardens Estate
            </div>
          </div>
          <div className="div3 mt-8 md:mt-0">
            <h1 className="inter font-[400] text-[20px] leading-[15.12px] text-white ">
              Mortgage
            </h1>
            <div className="inter font-[400] mt-8 text-[12.4px]  leading-[15.12px] text-left max-w-[200px] text-white ">
              Parkview estate
            </div>
            <div className="inter font-[400] text-[12.4px] mt-2 leading-[15.12px] text-left max-w-[200px] text-white ">
              Pinnock view estate
            </div>
            <div className="inter font-[400] text-[12.4px] mt-2 leading-[15.12px] text-left max-w-[200px] text-white ">
              Chevy View estate
            </div>
            <div className="inter font-[400] text-[12.4px] mt-2 leading-[15.12px] text-left max-w-[200px] text-white ">
              Oral Estate
            </div>
            <div className="inter font-[400] text-[12.4px] mt-2 leading-[15.12px] text-left max-w-[200px] text-white ">
              Lekki Gardens Estate
            </div>
          </div>
          <div className="div4 mt-8 md:mt-0">
            <h1 className="inter font-[400] text-[20px] leading-[15.12px] text-white ">
              BLOG
            </h1>
            <div className="inter font-[400] text-[12.4px] mt-8 leading-[15.12px] text-left max-w-[250px] text-white ">
              Why you should invest in real estate
            </div>
            <div className="inter font-[400] text-[12.4px] mt-2 leading-[15.12px] text-left max-w-[200px] text-white ">
              The way to Investement
            </div>
          </div>
          <div className="div5 mt-8 md:mt-0">
            <h1 className="inter uppercase font-[400] text-[20px] leading-[15.12px] text-white ">
              Stay in the know
            </h1>
            <form className="mt-4 flex flex-col">
              <label className="inter font-[400] text-[12.4px] mt-2 leading-[15.12px] text-left max-w-[200px] text-white ">Email Address</label>
              <input type="email" className="line-input text-white w-full" placeholder="" />
            </form>
            <div className="inter font-[400] text-[10.63px] mt-8 leading-[15.12px] text-left w-full text-white ">
            By signing up I want to hear about new updates and masterpieces and
            </div>
            <div className="inter font-[400] text-[10.8px] mt-2 leading-[16.2px] text-left max-w-[200px] text-white ">
            agree with the data protection policy
            </div>
            <div className="logo text-white w-[123px] h-[35px] flex justify-center py-10 items-center">
          <img src={SendButton} alt="logo" className="w-full object-cover" />
        </div>
          </div>
        </div>
        <div className="2-divs-container relative flex w-full items-center ">
          <div className="inter font-[400] text-[12.11px] mt-4 md:mt-20 leading-[15.12px] text-left max-w-[200px] text-white ">
            Bezal Homes © 2023
          </div>
          <div className="flex space-x-10 w-full absolute mt-16 md:mt-0 md:left-[30%]">
            <span className="inter underline font-[400] text-[12.11px] mt-4 md:mt-20 leading-[15.12px] text-left max-w-[200px] text-white ">
              Terms of Use
            </span>
            <span className="inter underline font-[400] text-[12.11px] mt-4 md:mt-20 leading-[15.12px] text-left max-w-[200px] text-white ">
              Privacy
            </span>
            <span className="inter underline font-[400] text-[12.11px] mt-4 md:mt-20 leading-[15.12px] text-left max-w-[200px] text-white ">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
