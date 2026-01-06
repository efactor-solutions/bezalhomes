import React from "react";
import Logo from "../../assets/newBezalLogo.png";
import Facebook from "../../assets/Link.png";
import Twitter from "../../assets/Link (1).png";
import Instagram from "../../assets/Link (2).png";
import Youtube from "../../assets/Link (3).png";
import SendButton from "../../assets/Group 20.png";
import { useNavigate } from "react-router-dom";
import { useSendStayInTheKnow } from "../../hooks/api";


const Footer = () => {

  const navigate = useNavigate();
  const openSocialMediaLink = (url) => {
    window.open(url, "_blank");
  };

  const [email, setEmail] = React.useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const {
    isLoading,
    sendStayInTheKnow
  } = useSendStayInTheKnow({
    onError: () => { },
    callBack: (res) => {
      setEmail("");
    }
  });

  return (
    <div className="bg-[#1D1D1D] hidden lg:block">
      <div className="w-[90%] m-auto flex flex-col justify-center items-center  py-10">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="logo text-white w-[180px] cursor-pointer md:w-[398px] flex justify-center py-10 items-center"
        >
          <img src={Logo} alt="logo" className="w-full object-cover" />
        </div>
        <div className="5-divs-container gap-8 justify-between flex w-full">
          <div className="div-1 w-full">
            <h1
              onClick={() => {
                navigate("/our-story");
              }}
              className="inter font-[400] cursor-pointer text-[20px] leading-[15.12px] footer-heading "
            >
              OUR STORY
            </h1>
            <div className="inter font-[400] text-[12.6px] mt-8 leading-20px] text-left max-w-[250px] text-white ">
              Our primary focus lies in the residential sector, where we
              passionately dedicate ourselves to the creation and investment in
              top-tier properties located in prime areas across Nigeria.
            </div>
            <div className="icons w-[28.8px] space-x-6 mt-4 md:mt-20 flex">
              <img
                onClick={() =>
                  openSocialMediaLink(
                    "https://web.facebook.com/profile.php?id=61556152582287"
                  )
                }
                src={Facebook}
                alt="logo"
                className="w-full cursor-pointer object-cover"
              />
              <img onClick={() =>
                openSocialMediaLink(
                  "https://twitter.com/Bezalhomes"
                )
              } src={Twitter} alt="logo" className="w-full cursor-pointer object-cover" />
              <img onClick={() =>
                openSocialMediaLink(
                  "https://www.instagram.com/bezal.homes/"
                )
              }
                src={Instagram} alt="logo" className="w-full cursor-pointer object-cover" />
              <img
                src={Youtube} alt="logo" className="w-full object-cover" />
            </div>
          </div>
          <div className="div2 mt-6 md:mt-0 w-full">
            <h1
              onClick={() => {
                navigate("/masterpieces");
              }}
              className="inter cursor-pointer font-[400] text-[20px] leading-[15.12px] footer-heading "
            >
              MASTERPIECES
            </h1>
            <div
              onClick={() => navigate("/chisco-details")}
              className="inter cursor-pointer font-[400] mt-8 text-[12.4px]  leading-[15.12px] text-left max-w-[200px] text-white "
            >
              Chisco Court
            </div>
            <div
              onClick={() => navigate("/rehoboth-details")}
              className="inter font-[400] cursor-pointer mt-2 text-[12.4px]  leading-[15.12px] text-left max-w-[200px] text-white "
            >
              Rehoboth Apartment
            </div>
            <div
              onClick={() => navigate("/legacy-place")}
              className="inter font-[400] cursor-pointer text-[12.4px] mt-2 leading-[15.12px] text-left max-w-[200px] text-white "
            >
              Legacy Place
            </div>

            <div className="inter uppercase font-[400] text-[12.11px] mt-4 md:mt-[150px] leading-[15.12px] text-white ">
              Bezal Homes © 2025
            </div>
          </div>
          <div className="div3 mt-8 md:mt-0 w-full">
            <h1
              onClick={() => {
                navigate("/contact-us");
              }}
              className="inter cursor-pointer font-[400] text-[20px] leading-[15.12px] footer-heading "
            >
              CONTACT US
            </h1>
            <div className="inter font-[400] mt-8 text-[12.4px]  leading-[15.12px] text-left max-w-[200px] footer-text ">
              info@bezalhomes.ng
            </div>
            <div className="inter font-[400] text-[12.4px] mt-2 leading-[15.12px] text-left max-w-[200px] footer-text ">
              +234 (0) 817 8206002
            </div>
            <div className="flex gap-2 w-full mt-4 md:mt-[90px] md:left-[0%]">
              <span
                onClick={() => navigate("/terms-of-use")}
                className="inter underline cursor-pointer font-[400] text-[10px] mt-4 md:mt-20 leading-[15.12px]  footer-text "
              >
                Terms of Use
              </span>
              <span
                onClick={() => navigate("/privacy-policy")}
                className="inter cursor-pointer underline font-[400] text-[10px] mt-4 md:mt-20 leading-[15.12px] text-left max-w-[200px] footer-text "
              >
                Privacy
              </span>
              <span className="inter underline font-[400] text-[10px] mt-4 md:mt-20 leading-[15.12px] text-left max-w-[200px] footer-text ">
                Cookie Policy
              </span>
            </div>
          </div>
          <div className="div4 mt-8 md:mt-0 w-full">
            <h1 className="inter font-[400] text-[20px] leading-[15.12px] footer-heading ">
              OUR PEOPLE
            </h1>
            <div
              onClick={() => navigate("/board-of-directors")}
              className="inter cursor-pointer font-[400] text-[12.4px] mt-8 leading-[15.12px] text-left max-w-[250px] text-white "
            >
              Board of Directors
            </div>
            <div
              onClick={() => navigate("/management-team")}
              className="inter font-[400] cursor-pointer text-[12.4px] mt-2 leading-[15.12px] text-left max-w-[200px] text-white "
            >
              Management Team
            </div>
          </div>
          <form className="div5 mt-8 w-full md:mt-0">
            <h1 className="inter uppercase font-[400] text-[20px] leading-[15.12px] footer-heading ">
              Stay in the know
            </h1>
            <div className="mt-4 flex flex-col">
              <label className="inter font-[400] text-[12.4px] mt-2 leading-[15.12px] text-left max-w-[200px] text-white ">
                Email Address
              </label>
              <input
                onChange={handleEmailChange}
                type="email"
                className="line-input text-white "
                placeholder=""
                value={email}
              />
            </div>
            <div className="inter font-[400] text-[10.63px] mt-8 leading-[17.12px] text-left w-full text-white ">
              By signing up I want to hear about new updates and masterpieces
              and agree with the data protection policy
            </div>
            <div className="inter font-[400] text-[10.8px] mt-2 leading-[16.2px] text-left max-w-[200px] text-white "></div>
            <div className="logo text-white w-[123px] h-[35px] flex justify-center py-10 items-center">
              <img
                src={SendButton}
                alt="logo"
                className={`w-full object-cover cursor-pointer ${isLoading ? "opacity-60" : ""}`}
                onClick={() => !isLoading && sendStayInTheKnow(email)}
              />
            </div>
          </form>
        </div>
        <div className="2-divs-container  flex w-full items-center "></div>
      </div>
    </div>
  );
};

export default Footer;
