import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "../../assets/OrangeSend.svg";
const ContactUsSuccess = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])
  const navigate = useNavigate();

  const Back = () => {
    navigate("/contact-us");
  }
  const GoToMasterpieces = () => {
    navigate("/masterpieces");
  };

  return (
    <main className="md:py-20 px-3">
      <div className="w-full md:w-[90%] mx-auto md:py-10">
        <button
          onClick={Back}
          className="px-4 text-[#E9682B] mt-20  bg-stone-100"
        >
          Back
        </button>
        <div className="py-10 md:py-20">
          <div className="text-orange-500 text-[12px]  md:text-[32px] font-normal Inter text-center leading-9">
            Thank you! Your submission has been received!
          </div>
        </div>
        <div className=" flex py-5 mt-2 lg:mt-4 justify-center">
            <button onClick={GoToMasterpieces} className="py-2 text-[#E9682B] uppercase lg:py-4 flex justify-center border-orange-400 self-center text-[8px] tracking-[1.33 px] leading-[6.64px] md:text-[20.74px] rounded-[1.586px] flex items-center gap-2 px-8 border border-white bg-transparent transition duration-300 hover:bg-white hover:text-black  hover:border-black hover:border-2 focus:outline">
            explore masterpieces 
              <span>
                <img
                  src={ButtonIcon}
                  alt="button-icon"
                  className="w-[5.3px] h-[6.62px] md:w-[13.73px] md:h-[17.17px]"
                />
              </span>
            </button>
          </div>
      </div>
    </main>
  );
};

export default ContactUsSuccess;
