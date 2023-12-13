// BoardOfDirectors.js

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import director1Image from "../../assets/directorThumbnail1.png";
import director2Image from "../../assets/directorThumb2.png";
import director3Image from "../../assets/directorThumbnail3.png";
import director4Image from "../../assets/directorThumbnail4.png";
import Scape from "../../assets/cityscape-wuxi.png";
import director1 from "../../assets/directorPicture1.png";
import director2 from "../../assets/directorPicture2.png";
import director3 from "../../assets/directorPicture3.png";
import director4 from "../../assets/directorPic4.png";
import DiscoverProject from "../landing-page/discover-project";
import CarouselComponent from "../../components/carousel";

const BoardOfDirectors = () => {
  const [activeDirector, setActiveDirector] = useState("1");
  const [hoveredDirector, setHoveredDirector] = useState(null);
  const { directorId } = useParams();
  const navigate = useNavigate();

  // Default to Director 1 if no directorId is provided
  const defaultDirectorId = directorId || "1";

  useEffect(() => {
    // Set the default director as active on component mount
    setActiveDirector(defaultDirectorId);
  }, [defaultDirectorId])



  const directors = [
    {
      id: "1",
      name: "OHIO",
      surname: "IFIABOR",
      position: "Chairman, Bezal Homes and Investment Ltd.",
      details: (
        <>
          Ohio Ifiabor is a highly accomplished professional with a diverse
          background in finance, banking, and business management. He is the
          current chairman of Cititrust Holdings Plc., Cititrust commercial and
          Investment Bank. Having obtained a First Degree in Finance & Banking
          from the University of Lagos and two Master's Degrees from the
          University of Nigeria, Nsukka, and the University of Lagos, he has
          amassed 32 years of extensive work experience.
          <br />
          <br />
          Ohio's career has seen him in prominent executive positions, including
          Chief Operating Officer and Chief Executive Officer, across various
          industries, such as Banking & Financial Services, Telecommunications &
          Technology, Infrastructures, Agriculture & Exports, Manufacturing &
          FMCG, Energy/Oil & Gas, Real Estate & Construction, Transportation &
          Logistics, as well as Renewable Power Generation & Distribution,
          covering economies in West Africa, South Africa, and East Africa.
        </>
      ),
      image: director1,
      Thumbnail: director1Image,
      ThumbName: "OHIO IFIABOR",
    },

    {
      id: "2",
      name: "AKINYEMI",
      surname: "ADEMOLA",
      position: "CEO, Bezal Homes and Investment Ltd.",
      details: (
        <>
          Ademola, the visionary leader at Bezal Homes and Investment Ltd,
          brings more than a decade of expertise to the forefront of the real
          estate industry. His remarkable leadership skills and strategic acumen
          have played a pivotal role in propelling the company's growth and
          achieving success. With a profound understanding of market trends and
          customer preferences, Ademola ensures that our projects not only meet
          but exceed expectations, consistently upholding the highest standards
          of quality and innovation.
          <br />
          <br />
          Ademola Akinyemi boasts over 10 years of experience specializing in
          Sustainable Development Issues and financing for development. He holds
          a degree in Banking and Finance, with a background in core banking
          operations, pension funds administration, and asset management.
          Ademola is a trained Global Custodian, aligning with the standards and
          procedures established by the Securities and Investment Institute in
          London, United Kingdom.
          <br />
          <br />
          A former United Nations Climate Change Ambassador and Nigeria Field
          Coordinator with Sustainable Market Foundation-350.org (New York),
          Ademola has represented Nigeria at numerous United Nations (UNFCCC)
          meetings on sustainable development. His credentials include being an
          accredited delegate for Climate Change Talks in Bonn, Germany (2009),
          COP15 Mexico (2010), COP17 South Africa (2011), the Australian Youth
          Climate Coalition Power Shift summit in Brisbane and Perth, Australia
          (2011), and the 3rd Earth Charter International – Costa Rica (Global
          Learning Opportunities) training on sustainable leadership.
          <br />
          <br />
          Ademola Akinyemi was handpicked by the World Bank Group to partake in
          the Financing for Development Specialist Course. During this course,
          he gained insights into the main sources and trends in development
          finance, emphasizing the need for innovative solutions to generate
          resources essential for implementing the new global development
          agenda.
          <br />
          <br />
          Notably, Ademola has effectively managed real estate investments and
          portfolios exceeding $4 million in value over the last two years,
          showcasing his expertise and proven track record in the industry.
        </>
      ),
      image: director2,
      Thumbnail: director2Image,
      ThumbName: "AKINYEMI ADEMOLA",
    },
    {
      id: "3",
      name: "OLUSEUN",
      surname: "TOGUNBO",
      position: "Director, Bezal Homes and Investment Ltd.",
      details: (
        <>
          Oluseun (FCA, CPA, MBA) serves as the Managing Partner of QFE
          Consulting, a prominent corporate advisory firm specializing in Public
          Private Partnerships (PPP) and Project Finance, headquartered in
          Lagos, Nigeria. Renowned as a seasoned business strategist, serial
          entrepreneur, and accomplished corporate executive, Oluseun boasts
          extensive experience gained from global accounting firms such as
          Deloitte-Nigeria and PwC-Canada, as well as the banking sector in
          Africa and North America. His expertise extends to Infrastructure
          Concessioning and Operations, and Public Sector engagements.
          <br />
          <br />
          In his role, Oluseun has achieved significant milestones, successfully
          raising funding for numerous green and brown field infrastructure
          projects. He has facilitated corporate funding in the form of equity,
          debt, mezzanine capital through public offers, private placements,
          bonds, and various debt instruments on both local and international
          fronts. Notably, he played a pivotal role in structuring a deal to
          secure $500 million in capital for the construction of the Lekki-Epe
          tolled road in Lagos, Nigeria, and has been involved in various other
          high-profile projects in Nigeria and Canada. Presently, Oluseun serves
          as an Advisor in Corporate/Project Finance with the City of Calgary,
          Alberta, Canada.
          <br />
          <br />
          Oluseun holds the esteemed title of Fellow of the Institute of
          Chartered Accountants of Nigeria (ICAN) and is a proud member of the
          Certified Public Accountants (CPA), Canada. Additionally, he holds an
          MBA degree from the University of Lagos, Nigeria.
          <br />
          <br />
          Beyond his professional pursuits, Oluseun actively engages in
          volunteering activities, particularly in youth development programs,
          environmental and community support initiatives, and leadership
          mentoring.
        </>
      ),
      image: director3,
      Thumbnail: director3Image,
      ThumbName: "OLUSEUN TOGUNBO",
    },
    {
      id: "4",
      name: "IYKE",
      surname: "OTUGO",
      position: "Director, Bezal Homes and Investment Ltd.",
      details: (
        <>
          Highly accomplished and results-driven executive with a diverse
          background in leadership roles across multiple industries. Currently
          serving as the Executive Director at The Loans Capital in Lagos,
          Nigeria, where I am actively involved in driving financial strategy
          and ensuring profitability.
          <br />
          <br />
          In my previous role, I excelled as the General Manager at Osifo Samson
          & Co, a reputable consultancy firm specializing in Financial Advisory
          and Debt Recovery. During my tenure, I effectively managed operations,
          provided expert financial advice, and led successful debt recovery
          initiatives.
          <br />
          <br />I am recognized as a visionary leader with expertise in
          financial management, risk assessment, and project execution. My
          skills extend to building and leading high-performing teams, fostering
          a culture of innovation, and driving sustainable growth in dynamic
          business environments.
        </>
      ),
      image: director4,
      Thumbnail: director4Image,
      ThumbName: "IYKE OTUGO",
    },
  ];

  const selectedDirector = directors.find(
    (director) => director.id === defaultDirectorId
  );

  if (!selectedDirector) {
    return <div>Director not found</div>;
  }
  const handleThumbnailClick = (id) => {
    // Navigate to the page for the selected director
    navigate(`/board-of-directors/${id}`);
    // Set the clicked director as the active one
    setActiveDirector(id);
  };

  return (
    <main>
      <div className="w-full object-cover">
        <img src={Scape} alt="scape" className="w-full object-cover" />
      </div>
      <div className=" lg:w-[90%]  m-auto py-10 md:py-20 flex flex-col">
        <h1 className="text-teal-800 text-[20px] px-5 md:px-0  md:text-[40px] font-black  Inter uppercase leading-[21px] tracking-[3px]">
          Board of Directors
        </h1>
        <div className=" text-zinc-800 px-5 md:px-0  py-3 md:py-10 text-sm md:text-lg font-normal Inter leading-[23px]">
          Our board of directors brings together a diverse mix of accomplished
          individuals with extensive expertise and experience in the real estate
          sector. Comprising seasoned professionals from various backgrounds,
          including real estate development, investment, finance, legal, market
          analysis, etc. Their collective knowledge and leadership enable us to
          make informed decisions, drive growth, and maintain a competitive edge
          in the industry.
        </div>
        <div className=" w-full lg:space-x-12  flex flex-col lg:flex-row">
          <div className="md:w-[573px] md:h-[793px] w-full">
            <img
              src={selectedDirector.image}
              alt={selectedDirector.name}
              className="w-full object-cover"
            />
          </div>
          <div className="w-full max-w-3xl mt-10 px-5 lg:px-0">
            <div className="flex gap-2">
              <span className="text-zinc-800 text-xl md:text-3xl  font-normal Inter uppercase leading-[21px] tracking-[3px]">
                {selectedDirector.name}
              </span>
              <span className="text-zinc-800 text-xl md:text-3xl font-black Inter uppercase leading-[21px] tracking-[3px]">
                {selectedDirector.surname}
              </span>
            </div>
            <div className="text-orange-500 md:mt-4 text-sm md:text-xl font-normal Inter leading-[21px]">
              {selectedDirector.position}
            </div>
            <div className="md:w-[791px] h-[3px] my-4 bg-zinc-600" />
            <p className="text-justify text-gray-600 text-sm md:text-lg font-normal Inter mt-8 leading-[30px">{selectedDirector.details}</p>
          </div>
        </div>

        <div className="director-thumbnails hidden md:flex md:mb-20  md:w-full h-full gap-1  justify-center items-center md:gap-3 mt-10 md:mt-40 md:max-w-3xl">
          {directors.map((director) => (
            <div
              key={director.id}
              className={`thumb cursor-pointer  flex flex-col ${activeDirector === director.id ? 'active md:mx-7' : ''}`}
              onClick={() => handleThumbnailClick(director.id)}
              onMouseEnter={() => setHoveredDirector(director.id)}
              onMouseLeave={() => setHoveredDirector(null)}
            >

              <div>
                <img
                  className={` ${hoveredDirector === director.id ? 'hovered' : ''}`}
                  src={director.Thumbnail}
                  alt={director.ThumbName}
                />
              </div>
              {(hoveredDirector === director.id || activeDirector === director.id) && (
                <p className="text-[8px] md:text-sm w-full text-center mt-2">{director.ThumbName}</p>
              )}
            </div>
          ))}
        </div>

        <div className="block px-5 md:hidden mt-10">
          <CarouselComponent>
            {directors.map((director) => (
              <div
                key={director.id}
                className={`thumb cursor-pointer  flex items-center flex-col ${false ? 'active md:mx-7 ' : ''}`}
                onClick={() => handleThumbnailClick(director.id)}
                onMouseEnter={() => setHoveredDirector(director.id)}
                onMouseLeave={() => setHoveredDirector(null)}
              >

                <div className="flex items-center mx-1 flex-col py-10">
                  <img
                    className={` ${[hoveredDirector, activeDirector].includes(director.id) ? 'hovered' : ''}`}
                    src={director.Thumbnail}
                    alt={director.ThumbName}
                  />
                  {(hoveredDirector === director.id || activeDirector === director.id) && (
                    <p className="text-[8px] md:text-sm w-full text-center mt-2">{director.ThumbName}</p>
                  )}
                </div>
              </div>
            ))}
          </CarouselComponent>
        </div>

      </div>
      <DiscoverProject />
    </main>
  );
};

export default BoardOfDirectors;
