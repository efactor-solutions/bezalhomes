import React, { useEffect, useState } from "react";
import Logo from "../../assets/BezalLogo.png";
import DropDown from "../../pages/landing-page/assets/dropdown.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");

  // const classnames = ["class1", "class2", "class3", "class4", "class5"];

  const showDrawer = () => {
    setDrawerVisible(true);
    setSelectedClass("class1");
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
    setSelectedClass("");
  };

  const handleButtonHover = (selectedClassName) => {
    setSelectedClass(selectedClassName);
  }
  const handleLinkClick = () => {
    closeDrawer();
  } 
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

      <div className="flex items-center md:px-12 p-2 md:p-4">
        <div
          onClick={showDrawer}
          className="logo cursor-pointer text-white w-[20px] md:w-[38px] absolute right-[3%]"
        >
          <img src={DropDown} alt="button" className="w-full object-cover" />
        </div>
        <div className="logo text-white w-[100px] md:w-[398px] flex  m-auto ">
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
          <div className="md:py-8 flex flex-col  text-xl md:text-3xl md:px-12 mt-[10%] md:mt-20 p-8">
            <ul className="flex flex-col space-y-[5%] md:space-y-7 px-8">
              <li
                className=" inter cursor-pointer text-white text-[15.52px] md:text-[30px] font-[700]"
                onMouseEnter={() => handleButtonHover("class1")}
                onMouseLeave={() => handleButtonHover("")}
              >
                <Link onClick={handleLinkClick} to="/">HOME</Link>
              </li>
              <li
                className=" inter cursor-pointer text-[#B3B3B3CC] text-[15.52px] md:text-[30px] font-[400]  hover:text-white md:hover:text-[30px] hover:font-[700]"
                onMouseEnter={() => handleButtonHover("class2")}
                onMouseLeave={() => handleButtonHover("")}
              >
                <Link onClick={handleLinkClick} to="/masterpieces">MASTERPIECES</Link>
              </li>
              <li
                className=" inter cursor-pointer text-[#B3B3B3CC] text-[15.52px] md:text-[30px] font-[400]  hover:text-white md:hover:text-[30px] hover:font-[700]"
                onMouseEnter={() => handleButtonHover("class3")}
                onMouseLeave={() => handleButtonHover("")}
              >
                <Link to="/board-of-directors"></Link>
                BOARD OF DIRECTORS
              </li>
              <li
                className=" inter cursor-pointer text-[#B3B3B3CC] text-[15.52px] md:text-[30px] font-[400]  hover:text-white md:hover:text-[30px] hover:font-[700]"
                onMouseEnter={() => handleButtonHover("class4")}
                onMouseLeave={() => handleButtonHover("")}
              >
                <Link to="/management-team"></Link>
                MANAGEMENT TEAM
              </li>
              <li
                className=" inter cursor-pointer text-[#B3B3B3CC] text-[15.52px] md:text-[30px] font-[400]  hover:text-white md:hover:text-[30px] hover:font-[700]"
                onMouseEnter={() => handleButtonHover("class5")}
                onMouseLeave={() => handleButtonHover("")}
              >
                <Link to="/our-story"></Link>
                OUR STORY
              </li>
              <li
                className=" inter cursor-pointer text-[#B3B3B3CC] text-[15.52px] md:text-[30px] font-[400]  hover:text-white md:hover:text-[30px] hover:font-[700]"
                onMouseEnter={() => handleButtonHover("class6")}
                onMouseLeave={() => handleButtonHover("")}
              >
                <Link to="/blog">BLOG</Link>
              </li>
              <li
                className=" inter cursor-pointer text-[#B3B3B3CC] text-[15.52px] md:text-[30px] font-[400]  hover:text-white md:hover:text-[30px] hover:font-[700]"
                onMouseEnter={() => handleButtonHover("class7")}
                onMouseLeave={() => handleButtonHover("")}
              >
                <Link to="/contact-us"></Link>
                CONTACT US
              </li>
            </ul>
          </div>
          <div className="mt-[15%] px-12 md:fixed md:bottom-[7%] ml-[5%] md:ml-7">
            <span className=" inter cursor-pointer text-[#B3B3B3CC] text-[13px] md:text-[25px] font-[400]  hover:text-white md:hover:text-[25px] hover:font-[700]">
              Sign In
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
