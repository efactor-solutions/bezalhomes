import React from "react";
import Csr1 from "../../assets/csr1.png";
import Csr2 from "../../assets/csr2.png";
import Csr3 from "../../assets/csr3.png";
import Csr4 from "../../assets/csr4.png";
import Csr5 from "../../assets/csr5.png";

const Contents = () => {
  return (
    <main className="w-[90%] mx-auto py-10">
      <div>
        <div>
          <span className="text-teal-800 text-xs md:text-3xl font-bold Inter uppercase leading-[21px] tracking-[3px]">
            CSR
          </span>
          <span className="text-zinc-800 text-xs md:text-3xl font-bold Inter uppercase leading-[21px] tracking-[3px]">
            {" "}
            / Bezal Homes CSR Initiatives
          </span>
        </div>
        <div className="w-full h-[1px] md:h-[3px] mt-2 bg-zinc-600" />
        <div className=" mt-6">
          <span className="text-zinc-800 text-sm md:text-xl font-normal Inter underline">
            Bezal Homes CSR Initiatives”
            <br className="hidden md:block" />
          </span>
          <span className="text-zinc-800 text-xs md:text-xl font-normal Inter">
            <br />
            At Bezal Homes, we are committed to making a positive impact on
            society through our Corporate Social Responsibility (CSR)
            initiatives aligned with the United Nations Sustainable Development
            Goals (SDGs). Our focus on SDGs 8, 11, and 17 reflects our
            dedication to fostering sustainable development and creating a
            lasting, positive change in our host communities.
          </span>
        </div>
        <div className="py-5">
          <img loading="lazy" src={Csr1} alt="fun" className="w-full" />
        </div>
        <div className="">
          <span className="text-zinc-800 text-sm md:text-xl font-normal Inter underline">
            SDG 8: Decent Work and Economic Growth
            <br className="hidden md:block" />
          </span>
          <span className="text-zinc-800 text-xs md:text-xl font-normal Inter">
            <br />
            Bezal Homes is dedicated to promoting decent work and economic
            growth in our host communities. We prioritize creating employment
            opportunities and supporting fair labour practices within our
            projects. By providing skill development programs, vocational
            training, and employment opportunities, we contribute to the
            economic empowerment of individuals, fostering a thriving local
            workforce.
          </span>
        </div>
        <div className="py-5">
          <img loading="lazy" src={Csr2} alt="fun" className="w-full" />
        </div>
        <div className="">
          <span className="text-zinc-800 text-sm md:text-xl font-normal Inter underline">
            SDG 11: Sustainable Cities and Communities
            <br className="hidden md:block" />
          </span>
          <span className="text-zinc-800 text-xs md:text-xl font-normal Inter">
            <br />
            Our commitment to SDG 11 drives us to contribute to the development
            of sustainable cities and communities. Through our urban development
            projects, we aim to create environmentally conscious and inclusive
            spaces. We incorporate green building practices, prioritize energy
            efficiency, and design communities that enhance the quality of life
            for residents. By focusing on sustainable urbanization, we strive to
            create resilient, safe, and harmonious living environments.
            <br />
            <br />
          </span>
        </div>
        <div className="py-5">
          <img loading="lazy" src={Csr3} alt="fun" className="w-full" />
        </div>
        <div className="">
        <span className="text-zinc-800 text-sm md:text-xl font-normal Inter underline">
            SDG 17: Partnerships for the Goals
            <br className="hidden md:block" />
          </span>
          <span className="text-zinc-800 text-xs md:text-xl font-normal Inter">
            <br />
            Collaboration is key to achieving sustainable development, and at
            Bezal Homes, we embrace SDG 17 by actively seeking partnerships for
            common goals. We engage with local communities, governmental bodies,
            and non-profit organizations to amplify our impact. Through
            strategic partnerships, we leverage collective strengths to address
            social challenges, promote economic growth, and build a more
            sustainable future.
            <br />
            <br />
            Through these CSR initiatives, Bezal Homes is not just building
            homes; we are cultivating a legacy of responsible and impactful real
            estate development that contributes to the broader global agenda for
            sustainable development. Our commitment goes beyond construction; it
            is about fostering positive change and leaving a lasting imprint on
            the communities where we carry out our projects.
            <br />
            <br />
          </span>
        </div>
        <div className="py-5">
          <img loading="lazy" src={Csr4} alt="fun" className="w-full" />
        </div>
        <div className="">
          <img loading="lazy" src={Csr5} alt="fun" className="w-full" />
        </div>
      </div>
    </main>
  );
};

export default Contents;
