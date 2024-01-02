import React, { useEffect, useState } from "react";
import Logo from "../../assets/BezalLogo.png";
import DropDown from "../../pages/landing-page/assets/dropdown.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showOurPeople, setShowOurPeople] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");

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
  };

  const handleLinkClick = () => {
    closeDrawer();
  };

  const handleMasterpiecesHover = () => {
    setShowMenu(true);
  };

  const handleMasterpiecesLeave = () => {
    setShowMenu(false);
  };
  const handleOurpeopleHover = () => {
    setShowOurPeople(true);
  };

  const handleOurpeopleLeave = () => {
    setShowOurPeople(false);
  };

  const renderOurPeople = () => (
    <div className="menu flex flex-col  mt-2">
      <Link
       className=" text-[16px] text-[#B3B3B3CC] font-normal hover:font-semibol max-w-fit hover:text-white hover:border-b-white hover:border-b"
        onClick={handleLinkClick}
        to="/board-of-directors"
      >
        BOARD OF DIRECTORS
      </Link>
      <Link
       className=" text-[16px] text-[#B3B3B3CC] font-normal hover:font-semibol max-w-fit hover:text-white hover:border-b-white hover:border-b"
        onClick={handleLinkClick}
        to="/management-team"
      >
        MANAGEMENT TEAM
      </Link>
    </div>
  );

  const renderMenu = () => (
    <div className="menu flex flex-col  mt-2">
      <Link
        className=" text-[16px] text-[#B3B3B3CC] font-normal hover:font-semibol max-w-fit hover:text-white hover:border-b-white hover:border-b"
        onClick={handleLinkClick}
        to="/chisco-details"
      >
        CHISCO COURT
      </Link>
      <Link
         className=" text-[16px] text-[#B3B3B3CC] font-normal hover:font-semibol max-w-fit hover:text-white hover:border-b-white hover:border-b"
        onClick={handleLinkClick}
        to="/rehoboth-details"
      >
        REHOBOTH APARTMENT
      </Link>
      <Link
         className=" text-[16px] text-[#B3B3B3CC] font-normal hover:font-semibol max-w-fit hover:text-white hover:border-b-white hover:border-b"
        onClick={handleLinkClick}
        to="/legacy-place"
      >
        LEGACY PLACE
      </Link>
    </div>
  );

  useEffect(() => {
    // Disable body scrolling when the drawer is open
    if (drawerVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Enable scrolling when the drawer is closed
    }
  }, [drawerVisible]);

  return (
    <div className="bg-black bg-opacity-50  w-full absolute z-10">
      {drawerVisible && <div className={`class1 ${selectedClass}`}></div>}

      <div className="flex justify-between mx-auto items-center md:px-12 p-2 md:p-4">
        <div
          onClick={showDrawer}
          className="logo cursor-pointer text-white w-[20px] md:w-[38px]"
        >
          <img src={DropDown} alt="button" className="w-full object-cover" />
        </div>
        <div onClick={ () => {navigate('/')}} className="logo cursor-pointer text-white w-[100px] md:w-[398px] ml-[8%] flex  ">
          <img src={Logo} alt="logo" className="w-full object-cover" />
        </div>
        <div>
          <button
            className=" inter cursor-pointer text-[#FFFFFF] py-1 md:py-2 text-[10.05px] rounded-md bg-[#414141] px-3 md:px-6 md:text-[26px] font-[400]  hover:text-[#414141] hover:bg-white md:hover:text-[26px] hover:font-[700]"
            onMouseEnter={() => handleButtonHover("class7")}
            onMouseLeave={() => handleButtonHover("")}
          >
            <Link onClick={handleLinkClick} to="/contact-us">
              Contact Us
            </Link>
          </button>
        </div>
      </div>
      {drawerVisible && (
        <div
          className={`fixed top-0 left-0 h-full w-full max-w-2xl  bg-black bg-opacity-50 z-20 `}
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
                className="inter text-[#B3B3B3CC] text-[15.52px] md:text-[26px] font-[400] hover:text-white md:hover:text-[26px] hover:font-[700]"
                onMouseEnter={() => handleButtonHover("class1")}
                onMouseLeave={() => handleButtonHover("")}
              >
                <Link onClick={handleLinkClick} to="/">
                  HOME
                </Link>
              </li>
              <li
                className="menu-container"
                onMouseEnter={handleMasterpiecesHover}
                onMouseLeave={handleMasterpiecesLeave}
              >
                <div
                  className="inter text-[#B3B3B3CC] text-[15.52px] md:text-[26px] font-[400] hover:text-white md:hover:text-[26px] hover:font-[700]"
                  onMouseEnter={() => handleButtonHover("class7")}
                  onMouseLeave={() => handleButtonHover("")}
                >
                  MASTERPIECES
                </div>
                {showMenu && renderMenu()}
              </li>
              <li
                className="menu-container"
                onMouseEnter={handleOurpeopleHover}
                onMouseLeave={handleOurpeopleLeave}
              >
                <div
                  className="inter text-[#B3B3B3CC] text-[15.52px] md:text-[26px] font-[400] hover:text-white md:hover:text-[26px] hover:font-[700]"
                  onMouseEnter={() => handleButtonHover("class7")}
                  onMouseLeave={() => handleButtonHover("")}
                >
                  OUR PEOPLE
                </div>
                {showOurPeople && renderOurPeople()}
              </li>

           
              <li
                className=" inter cursor-pointer text-[#B3B3B3CC] text-[15.52px] md:text-[26px] font-[400]  hover:text-white md:hover:text-[26px] hover:font-[700]"
                onMouseEnter={() => handleButtonHover("class5")}
                onMouseLeave={() => handleButtonHover("")}
              >
                <Link to="/our-story" onClick={handleLinkClick}>
                  OUR STORY
                </Link>
              </li>
                 <li
                className=" inter uppercase cursor-pointer text-[#B3B3B3CC] text-[15.52px] md:text-[26px] font-[400]  hover:text-white md:hover:text-[26px] hover:font-[700]"
                onMouseEnter={() => handleButtonHover("class4")}
                onMouseLeave={() => handleButtonHover("")}
              >
                <Link to="/" onClick={handleLinkClick}>
                CSR Initiatives
                </Link>
              </li>
              <li
                className=" inter cursor-pointer text-[#B3B3B3CC] text-[15.52px] md:text-[26px] font-[400]  hover:text-white md:hover:text-[26px] hover:font-[700]"
                onMouseEnter={() => handleButtonHover("class3")}
                onMouseLeave={() => handleButtonHover("")}
              >
                <Link to="/contact-us" onClick={handleLinkClick}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-[15%] px-12 md:fixed md:bottom-[15%] ml-[5%] md:ml-7">
            <span className=" inter cursor-pointer text-[#B3B3B3CC] text-[13px] md:text-[21px] font-[400]  hover:text-white md:hover:text-[21px] hover:font-[700]">
            <Link to="/blog" onClick={handleLinkClick}>
              BLOG
              </Link>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
