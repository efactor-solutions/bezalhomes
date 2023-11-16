import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import DropDown from "../../pages/landing-page/assets/dropdown.png";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");

  // const classnames = ["class1", "class2", "class3", "class4", "class5"];

  const showDrawer = () => {
    setDrawerVisible(true);
    setSelectedClass('class1');
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
    setSelectedClass("")
  };

  const handleButtonHover = (selectedClassName) => {
    setSelectedClass(selectedClassName);
  };
  useEffect(() => {
    // Disable body scrolling when the drawer is open
    if (drawerVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Enable scrolling when the drawer is closed
    }
  }, [drawerVisible]);

  return (
    <div className="bg-black bg-opacity-80 fixed w-full z-10">
      {drawerVisible && <div className={`class1 ${selectedClass}`}></div>}

      <div className="flex items-center justify-between md:px-12 p-4">
        <div
          onClick={showDrawer}
          className="logo cursor-pointer text-white w-[20px] md:w-[38px] flex justify-center items-center"
        >
          <img src={DropDown} alt="logo" className="w-full object-cover" />
        </div>
        <div className="logo text-white w-[100px] md:w-[398px] flex justify-center items-center">
          <img src={Logo} alt="logo" className="w-full object-cover" />
        </div>
        <div></div>
      </div>
      {drawerVisible && (
        <div
          className={`fixed top-0 left-0 h-full w-full max-w-2xl  bg-black bg-opacity-80 z-20 `}
        >
          <button
            className="text-white text-4xl absolute right-1 p-4"
            onClick={closeDrawer}
          >
            ✕
          </button>
          <div className="md:py-8 flex flex-col space-y-9 text-xl md:text-3xl md:px-12 mt-20 p-4">
            <p
              className=" inter cursor-pointer text-[#B3B3B3CC] text-[30px] md:text-30px] font-[400]  hover:text-white hover:font-[700]"
              onMouseEnter={() => handleButtonHover("class1")}
              onMouseLeave={() => handleButtonHover("")}
            >
              HOME
            </p>
            <p
              className=" inter cursor-pointer text-[#B3B3B3CC] text-[30px] md:text-30px] font-[400]  hover:text-white hover:font-[700]"
              onMouseEnter={() => handleButtonHover("class2")}
              onMouseLeave={() => handleButtonHover("")}
            >
              MASTERPIECES
            </p>
            <p
              className=" inter cursor-pointer text-[#B3B3B3CC] text-[30px] md:text-30px] font-[400]  hover:text-white hover:font-[700]"
              onMouseEnter={() => handleButtonHover("class3")}
              onMouseLeave={() => handleButtonHover("")}
            >
              BOARD OF DIRECTORS
            </p>
            <p
              className=" inter cursor-pointer text-[#B3B3B3CC] text-[30px] md:text-30px] font-[400]  hover:text-white hover:font-[700]"
              onMouseEnter={() => handleButtonHover("class4")}
              onMouseLeave={() => handleButtonHover("")}
            >
              MANAGEMENT TEAM
            </p>
            <p
              className=" inter cursor-pointer text-[#B3B3B3CC] text-[30px] md:text-30px] font-[400]  hover:text-white hover:font-[700]"
              onMouseEnter={() => handleButtonHover("class5")}
              onMouseLeave={() => handleButtonHover("")}
            >
              ABOUT US
            </p>
            <p
              className=" inter cursor-pointer text-[#B3B3B3CC] text-[30px] md:text-30px] font-[400]  hover:text-white hover:font-[700]"
              onMouseEnter={() => handleButtonHover("class6")}
              onMouseLeave={() => handleButtonHover("")}
            >
            BLOG
            </p>
            <p
              className=" inter cursor-pointer text-[#B3B3B3CC] text-[30px] md:text-30px] font-[400]  hover:text-white hover:font-[700]"
              onMouseEnter={() => handleButtonHover("class7")}
              onMouseLeave={() => handleButtonHover("")}
            >
             SEARCH
            </p>
          </div>
          <div className="py-8 flex flex-col fixed bottom-2 text-xl  md:text-3xl md:px-12 md:mt-10 p-4">
            <p className=" inter cursor-pointer text-[#B3B3B3CC] text-[30px] md:text-30px] font-[400]  hover:text-white hover:font-[700]">
              Sign In
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
