import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import director2Image from "../../assets/operation-team/operation_1.jpg";
import manager2Thumb from "../../assets/operation-team/operation_3.jpg";
import manager3Thumb from "../../assets/operation-team/operation_4.jpg";
import manager4Thumb from "../../assets/operation-team/operation_2.jpg";
import Scape from "../../assets/cityscape-wuxi.png";

import ops1 from "../../assets/operation-team/operation_1.jpg";
import ops2 from "../../assets/operation-team/operation_2.jpg";
import ops3 from "../../assets/operation-team/operation_3.jpg";
import ops4 from "../../assets/operation-team/operation_4.jpg";
import DiscoverProject from "../landing-page/discover-project";

const OperationTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeMember, setActiveMember] = useState("1");
  const [hoveredMember, setHoveredMember] = useState(null);
  const { memberId } = useParams();
  const navigate = useNavigate();
  const defaultMemberId = memberId || "1";

  useEffect(() => {
    setActiveMember(defaultMemberId);
  }, [defaultMemberId]);

  const members = [
    {
      id: "1",
      name: "TEMITOPE",
      surname: "OMOYELE",
      position: "Lead Construction Engineer, Bezal Homes and Investment Ltd.",
      details: (
        <>
          <p className="mb-4">
            Temitope Omoyele is a results-driven structural engineering professional with over five years of progressive experience in construction project delivery and structural design. With an M.Eng in Civil Engineering (Structures) from the Federal University Oye-Ekiti and academic training in Architectural Technology, he brings a strong blend of structural precision and architectural integration to real estate development projects.
          </p>
          <p className="mb-4">
            As Lead Construction Engineer at Bezal Homes and Investment Ltd., Temitope plays a key role in overseeing the execution of construction projects from planning through delivery. He works closely with project teams, contractors, and consultants to ensure that developments are completed on schedule, within budget, and in line with the company's quality standards. His structured approach to coordination, problem-solving, and site supervision helps ensure that every project is delivered safely, efficiently, and with lasting value.
          </p>
          <p>
            A Graduate Member of the Nigerian Society of Engineers (NSE) and the Nigerian Institute of Structural Engineers (GNISTRUCTE), Temitope remains committed to maintaining strong professional standards and continuous development. His training and professional discipline support the company's focus on delivering projects that are structurally sound, well executed, and built for long-term durability.
          </p>
        </>
      ),
      image: ops1,
      Thumbnail: director2Image,
      ThumbName: "TEMITOPE OMOYELE",
    },
    {
      id: "3",
      name: "FRANCIS",
      surname: "ADEBARE",
      position: "Operations Manager, Bezal Homes and Investment Ltd.",
      details: (
        <>
          <p className="mb-4">
            Francis Adebare is an experienced operations and project management professional with a strong background in construction supervision, procurement coordination, and facilities management. With progressive experience across multiple real estate developments, he brings structured execution and operational discipline to project delivery.
          </p>
          <p className="mb-4">
            As Operations Manager at Bezal Homes and Investment Ltd., Francis oversees project planning, site coordination, vendor management, and quality assurance processes. He ensures that construction activities are executed efficiently, deadlines are met, and projects are delivered within budget while maintaining strict compliance with quality and regulatory standards.
          </p>
          <p>
            Through close coordination of operational processes and day-to-day project activities, Francis supports the smooth execution of construction work across the company's developments, helping ensure that tasks are carried out in an organized and timely manner.
          </p>
        </>
      ),
      image: ops3,
      Thumbnail: manager2Thumb,
      ThumbName: "FRANCIS ADEBARE",
    },
  ];

  const selectedMember = members.find(
    (m) => m.id === defaultMemberId
  );

  if (!selectedMember) {
    return <div>Member not found</div>;
  }

  const handleThumbnailClick = (id) => {
    navigate(`/operation-team/${id}`);
    setActiveMember(id);
    window.scrollTo(0, 0);
  };

  return (
    <main className="">
      <div className="w-full object-cover">
        <img src={Scape} alt="scape" className="w-full object-cover" />
      </div>
      <div className=" lg:w-[90%]  m-auto py-10 md:py-20 flex flex-col">
        <h1 className="text-teal-800 text-[20px] px-5 md:px-0  md:text-[40px] font-black  Inter uppercase leading-[21px] tracking-[3px]">
          Core Operations Team
        </h1>
        <div className=" text-zinc-800 text-justify  px-5 md:px-0  py-3 md:py-10 text-sm md:text-lg font-normal Inter md:leading-[25px]">
          Our Operations Team is composed of experienced professionals with strong technical expertise and hands-on industry experience. Each member brings a disciplined approach to project execution, operational efficiency, and quality assurance across all stages of development. Together, their combined knowledge in construction management, structural coordination, site supervision, and process optimization forms the backbone of our project delivery framework.
        </div>
        <div className=" w-full lg:space-x-12  flex flex-col lg:flex-row">
          <div className="w-[90%] pr-5 md:pr-0 mx-auto md:w-full">
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-full object-cover"
            />
          </div>
          <div className="w-full  mt-10 px-5 lg:px-0">
            <div className="flex gap-2">
              <span className="text-zinc-800 text-xl md:text-3xl  font-normal Inter uppercase leading-[21px] tracking-[3px]">
                {selectedMember.name}
              </span>
              <span className="text-zinc-800 text-xl md:text-3xl font-black Inter uppercase leading-[21px] tracking-[3px]">
                {selectedMember.surname}
              </span>
            </div>
            <div className="text-orange-500 md:mt-4 text-sm md:text-xl font-normal Inter leading-[21px]">
              {selectedMember.position}
            </div>
            <div className="md:w-[791px] h-[3px] my-4 bg-zinc-600" />
            <p className="text-justify text-gray-600 text-sm md:text-lg font-normal Inter mt-8 leading-[30px">
              {selectedMember.details}
            </p>
          </div>
        </div>

       {/*<div className="  director-thumbnails hidden md:mb-20 mt-[5%]  md:w-full  md:flex gap-1  mx-auto  md:gap-6 ">
          */} 
         <div className="md:grid hidden grid-cols-4 gap-2 px-5  mt-10">

        {members.map((member) => (
            <div
              key={member.id}
              className={`thumb cursor-pointer w-full flex flex-col ${
                activeMember === member.id ? "active md:mx-8 hidden" : ""
              }`}
              onClick={() => handleThumbnailClick(member.id)}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative">
                <div className="w-full absolute  bottom-0 left-0 h-full bg-black opacity-0 hover:opacity-40"></div>
                <img
                  className={` w-full ${
                    hoveredMember === member.id ? "hovered w-full" : "w-full"
                  }`}
                  src={member.Thumbnail}
                  alt={member.ThumbName}
                />
                <div className="absolute bottom-[5%] left-[10%] right-[10%]">
                  {" "}
                  {(hoveredMember === member.id ||
                    activeMember === member.id) && (
                    <p className="text-[8px] text-white md:text-xl flex flex-col items-center text-center">
                      {member.ThumbName}
                      <span className="text-[8px] text-white md:text-sm flex flex-col text-center">
                        {member.position}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 px-5 md:hidden mt-10">
          {members.map((member) => (
            <div
              key={member.id}
              className={`thumb cursor-pointer  flex items-center flex-col ${
                activeMember === member.id  ? "active md:mx-7 hidden" : ""
              }`}
              onClick={() => handleThumbnailClick(member.id)}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="flex relative items-center mx-1 flex-col">
                <div className="w-full absolute bottom-0 left-0 h-full bg-black opacity-30"></div>

                <img
                  className={`w-full ${
                    [hoveredMember, activeMember].includes(member.id)
                      ? "hovered"
                      : ""
                  }`}
                  src={member.Thumbnail}
                  alt={member.ThumbName}
                />

                <div className="absolute bottom-[5%] left-[20%]">
                  <p className="text-[10px] font-[700] text-white md:text-sm w-full mt-2 text-center">
                    {member.ThumbName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DiscoverProject />
    </main>
  );
};

export default OperationTeam;