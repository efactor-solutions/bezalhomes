import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import director2Image from "../../assets/directorThumb2.png";
import manager2Thumb from "../../assets/managerThumbnail2.png";
import manager3Thumb from "../../assets/managerThumb3.png";
import Scape from "../../assets/cityscape-wuxi.png";

import manager1 from "../../assets/directorPicture2.png";
import manager2 from "../../assets/managerPicture2.png";
import manager3 from "../../assets/managerPicture3.png";
import DiscoverProject from "../landing-page/discover-project";

const ManagementTeam = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])
  const [activeManager, setActiveManager] = useState("1");
  const [hoveredManager, setHoveredManager] = useState(null);
  const { managerId } = useParams();
  const navigate = useNavigate();

  // Default to Director 1 if no directorId is provided
  const defaultManagerId = managerId || "1";

  useEffect(() => {
    // Set the default director as active on component mount
    setActiveManager(defaultManagerId);
  }, [defaultManagerId]);

  const managers = [
    {
      id: "1",
      name: "AKINYEMI",
      surname: "ADEMOLA",
      position: "CEO, Bezal Homes and Investment Ltd.",
      details: (
        <>
          Ademola Akinyemi, the visionary leader behind Bezal Homes and
          Investment Ltd., brings a wealth of experience, with over a decade of
          expertise in the real estate industry. His outstanding leadership
          skills and strategic mindset have played a pivotal role in driving the
          company's remarkable growth and success. Demonstrating a keen
          understanding of market trends and a deep insight into customer
          preferences, Ademola ensures that our projects not only meet but
          exceed expectations, consistently upholding the highest standards of
          quality and innovation.
          <br />
          <br />
          Notably, Ademola has a proven track record of successfully managing
          real estate investments and portfolios, amounting to over $4 million
          in the last two years. This achievement further highlights his
          exceptional expertise and credibility in the industry.
        </>
      ),
      image: manager1,
      Thumbnail: director2Image,
      ThumbName: "AKINYEMI ADEMOLA",
    },

    {
      id: "2",
      name: "OLADOKUN",
      surname: "MICHAEL",
      position: "Head of Construction, Bezal Homes and Investment Ltd.",
      details: (
        <>
          Michael (REG. ENG. MNSE, MNICE) is an accomplished Construction
          Management Executive with a wealth of experience in leading the design
          and development of intricate multi-unit commercial construction
          projects. His expertise spans the entire project lifecycle, from
          inception and design to the successful completion of construction.
          <br />
          <br />
          Michael's functional expertise covers a broad spectrum, including
          Multi-unit Construction Management, Project & Facility Management,
          Organizational Development, Business Operations Organization, and the
          strategic alignment of teams for profitability. His leadership ensures
          the seamless execution of projects, and his strategic approach
          contributes to the overall success of complex construction endeavors.
        </>
      ),
      image: manager2,
      Thumbnail: manager2Thumb,
      ThumbName: "OLADOKUN MICHAEL",
    },
    {
      id: "3",
      name: "FOLASADE",
      surname: "OLUMUTIMI",
      position: "Admin/HR Head, Bezal Homes and Investment Ltd.",
      details: (
        <>
          Folasade Olumutimi is a highly accomplished professional with a robust
          background in administrative functions and human capital development.
          Holding a BSc. in Accounting from Ambrose Alli University, she brings
          a wealth of experience and expertise to her role.
          <br />
          <br />
          Currently serving as the Head of Admin/HR Practice at Bezal Homes and
          Investment Ltd, Folasade plays a crucial role in overseeing and
          guiding the development and implementation of various processes. Her
          responsibilities include spearheading recruitment and retention
          strategies, ensuring compliance with regulations, managing
          compensation and benefits, and overseeing training and development
          initiatives. Folasade also leads the administrative functions of the
          company, ensuring seamless operations and efficient workflows.
          <br />
          <br />
          With her profound understanding of human resources best practices and
          her keen eye for talent development, Folasade has been instrumental in
          driving transformational initiatives within the organization. Her
          commitment to excellence and her ability to create a positive work
          environment contribute significantly to the overall success of Bezal
          Homes and Investment Ltd.
          <br />
          <br />
          Folasade's expertise and leadership in administrative functions and
          human capital development make her an invaluable asset to our team.
          Her dedication to fostering a strong and motivated workforce aligns
          seamlessly with our company's mission of delivering exceptional
          results.
        </>
      ),
      image: manager3,
      Thumbnail: manager3Thumb,
      ThumbName: "FOLASADE OLUMUTIMI",
    },
  ];

  const selectedManager = managers.find(
    (manager) => manager.id === defaultManagerId
  );

  if (!selectedManager) {
    return <div>Manager not found</div>;
  }
  const handleThumbnailClick = (id) => {
    // Navigate to the page for the selected director
    navigate(`/management-team/${id}`);
    // Set the clicked director as the active one
    setActiveManager(id)
    window.scrollTo(0, 0);
  };

  return (
    <main className="">
      <div className="w-full object-cover">
        <img src={Scape} alt="scape" className="w-full object-cover" />
      </div>
      <div className=" lg:w-[90%]  m-auto py-10 md:py-20 flex flex-col">
        <h1 className="text-teal-800 text-[20px] px-5 md:px-0  md:text-[40px] font-black  Inter uppercase leading-[21px] tracking-[3px]">
          Core Management Team
        </h1>
        <div className=" text-zinc-800 text-justify  px-5 md:px-0  py-3 md:py-10 text-sm md:text-lg font-normal Inter md:leading-[25px]">
          Our management team is made up of experienced professionals with
          valuable career footprints. Each member brings a unique set of skills,
          industry knowledge, and a proven track record in real estate
          development. Together, their expertise and experience form a solid
          foundation for the success of the company. Through their collaborative
          approach, strategic decision-making, and commitment to excellence,
          they ensure that our projects are delivered on time, within budget,
          and exceed customer expectations.
        </div>
        <div className=" w-full lg:space-x-12  flex flex-col lg:flex-row">
          <div className="w-[90%] pr-5 md:pr-0 mx-auto md:w-full">
            <img
              src={selectedManager.image}
              alt={selectedManager.name}
              className="w-full object-cover"
            />
          </div>
          <div className="w-full  mt-10 px-5 lg:px-0">
            <div className="flex gap-2">
              <span className="text-zinc-800 text-xl md:text-3xl  font-normal Inter uppercase leading-[21px] tracking-[3px]">
                {selectedManager.name}
              </span>
              <span className="text-zinc-800 text-xl md:text-3xl font-black Inter uppercase leading-[21px] tracking-[3px]">
                {selectedManager.surname}
              </span>
            </div>
            <div className="text-orange-500 md:mt-4 text-sm md:text-xl font-normal Inter leading-[21px]">
              {selectedManager.position}
            </div>
            <div className="md:w-[791px] h-[3px] my-4 bg-zinc-600" />
            <p className="text-justify text-gray-600 text-sm md:text-lg font-normal Inter mt-8 leading-[30px">
              {selectedManager.details}
            </p>
          </div>
        </div>

        <div className="director-thumbnails hidden md:mb-20 mt-[5%]  md:w-full  md:flex gap-1  mx-auto  md:gap-6 ">
          {managers.map((manager) => (
            <div
              key={manager.id}
              className={`thumb cursor-pointer w-full flex flex-col ${
                activeManager === manager.id ? "active md:mx-8 hidden" : ""
              }`}
              onClick={() => handleThumbnailClick(manager.id)}
              onMouseEnter={() => setHoveredManager(manager.id)}
              onMouseLeave={() => setHoveredManager(null)}
            >
              <div className="relative">
              <div className="w-full absolute  bottom-0 left-0 h-full bg-black opacity-0 hover:opacity-40"></div>
                <img
                  className={` w-full ${
                    hoveredManager === manager.id ? "hovered w-full" : "w-full"
                  }`}
                  src={manager.Thumbnail}
                  alt={manager.ThumbName}
                />
                <div className="absolute bottom-[5%] left-[25%]"> {(hoveredManager === manager.id ||
                activeManager === manager.id) && (
                <p className="text-[8px] text-white md:text-xl flex flex-col items-center text-center">
                  {manager.ThumbName}
                  <span className="text-[8px] text-white md:text-sm flex flex-col text-center">
              {manager.position}
            </span>
                </p>
              )}</div>
              </div>
              
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 px-5 md:hidden mt-10">
          
            {managers.map((manager) => (
              <div
                key={manager.id}
                className={`thumb cursor-pointer  flex items-center flex-col ${
                  false ? "active md:mx-7 " : ""
                }`}
                onClick={() => handleThumbnailClick(manager.id)}
                onMouseEnter={() => setHoveredManager(manager.id)}
                onMouseLeave={() => setHoveredManager(null)}
              >
                <div className="flex relative items-center mx-1 flex-col">
        <div className="w-full absolute bottom-0 left-0 h-full bg-black opacity-30"></div>

                  <img
                    className={`w-full ${
                      [hoveredManager, activeManager].includes(manager.id)
                        ? "hovered"
                        : ""
                    }`}
                    src={manager.Thumbnail}
                    alt={manager.ThumbName}
                  />
               
               <div className="absolute bottom-[5%] left-[20%]">
                  <p className="text-[10px] font-[700] text-white md:text-sm w-full mt-2 text-center">
                    {manager.ThumbName}
                  </p></div>
                
                </div>
              </div>
            ))}
         
        </div>
      </div>
      <DiscoverProject />
    </main>
  );
};

export default ManagementTeam;
