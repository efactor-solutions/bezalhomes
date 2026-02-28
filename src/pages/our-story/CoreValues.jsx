import React, { useState } from "react";
import Core from "../../assets/coreIcon.svg";
import Innovation from "../../assets/innovation.svg";
import Excelence from "../../assets/excellence.svg";
import Centric from "../../assets/centric.svg";
import Sustain from "../../assets/sustainability.svg";

const values = [
  {
    icon: Core,
    title: "Integrity",
    desc: "Trust is our foundation. We operate with unwavering ethics, transparency, and honesty. At Bezal Homes, it's not just about building homes; it's about building trust.",
  },
  {
    icon: Innovation,
    title: "Innovation",
    desc: "We pride ourselves on being a trailblazer in the real estate industry. We continually seek creative solutions to improve our properties and services.",
  },
  {
    icon: Excelence,
    title: "Excellence",
    desc: "Quality is the cornerstone of every home we create. We hold ourselves to the highest standards of craftsmanship, using premium materials and top-tier design.",
  },
  {
    icon: Centric,
    title: "Client-Centric",
    desc: "Our clients are the heart of our business. We go the extra mile to ensure expectations are not only met but exceeded. Their satisfaction is our ultimate measure of success.",
  },
  {
    icon: Sustain,
    title: "Sustainability",
    desc: "As responsible stewards of the environment, we prioritize sustainable building practices that minimize our environmental impact for generations to come.",
  },
];

const CoreValues = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div id="core-values" className="w-[90%] mx-auto py-10 md:py-20">
      <div className="w-[90%] rounded-xl core-values py-16 md:py-24 px-6 md:px-16 mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <p className="text-orange-400 text-[15px] md:text-xl uppercase tracking-[4px] mb-3">
            Our Core Values
          </p>
          <div className="w-10 h-[2px] bg-orange-400 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={
                "group flex flex-col gap-5 p-6 md:p-8 rounded-2xl border border-white/10 bg-black/80 hover:bg-white/10 hover:border-orange-400/40 transition-all duration-300 " +
                // apply grayscale to cards that are not hovered when one is active
                (hovered !== null && hovered !== i ? "filter grayscale" : "")
              }
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-orange-500 shadow-md shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300">
                <img src={v.icon} alt={v.title} className="w-6 h-6 md:w-7 md:h-7" />
              </div>

              {/* Divider */}
              <div className="w-8 h-[1.5px] bg-orange-400/50 group-hover:w-12 transition-all duration-300 rounded-full" />

              {/* Title */}
              <h2 className="text-orange-300 text-lg md:text-lg font-semibold uppercase tracking-widest">
                {v.title}
              </h2>

              {/* Description */}
              <p className="text-white/60 text-[14px] md:text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CoreValues;