import React from "react";

// --- Inline SVG Icons ---

const DuplexDetachedIcon = () => (
  <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Left house */}
    <path d="M2 22L9 13L16 22V36H2V22Z" fill="#F5F5F5" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="5" y="27" width="4" height="5" rx="0.5" fill="#111111" opacity="0.4"/>
    <rect x="10" y="26" width="3" height="3" rx="0.5" fill="#111111" opacity="0.4"/>
    {/* Right house — fully detached, separate */}
    <path d="M24 22L31 13L38 22V36H24V22Z" fill="#F5F5F5" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="27" y="27" width="4" height="5" rx="0.5" fill="#111111" opacity="0.4"/>
    <rect x="32" y="26" width="3" height="3" rx="0.5" fill="#111111" opacity="0.4"/>
    {/* Gap indicator */}
    <line x1="19" y1="18" x2="21" y2="18" stroke="#111111" strokeWidth="1.2" strokeDasharray="1.5 1.5"/>
  </svg>
);

const DuplexSemiDetachedIcon = () => (
  <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Left unit */}
    <path d="M2 22L11 11L20 22V37H2V22Z" fill="#F5F5F5" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="4" y="28" width="4" height="5" rx="0.5" fill="#111111" opacity="0.4"/>
    <rect x="10" y="27" width="3" height="3" rx="0.5" fill="#111111" opacity="0.4"/>
    {/* Right unit — shares wall at x=20 */}
    <path d="M20 22L29 11L38 22V37H20V22Z" fill="#E8E8E8" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="22" y="28" width="4" height="5" rx="0.5" fill="#111111" opacity="0.4"/>
    <rect x="28" y="27" width="3" height="3" rx="0.5" fill="#111111" opacity="0.4"/>
    {/* Shared wall */}
    <line x1="20" y1="22" x2="20" y2="37" stroke="#111111" strokeWidth="1.8"/>
  </svg>
);

const TerraceIcon = () => (
  <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Three terrace units side by side */}
    <path d="M1 21L8 13L15 21V37H1V21Z" fill="#F5F5F5" stroke="#111111" strokeWidth="1.4" strokeLinejoin="round"/>
    <rect x="5" y="29" width="3" height="4" rx="0.4" fill="#111111" opacity="0.4"/>

    <path d="M13 21L20.5 12L28 21V37H13V21Z" fill="#E8E8E8" stroke="#111111" strokeWidth="1.4" strokeLinejoin="round"/>
    <rect x="17" y="29" width="3" height="4" rx="0.4" fill="#111111" opacity="0.4"/>

    <path d="M26 21L33 13L40 21V37H26V21Z" fill="#F5F5F5" stroke="#111111" strokeWidth="1.4" strokeLinejoin="round"/>
    <rect x="30" y="29" width="3" height="4" rx="0.4" fill="#111111" opacity="0.4"/>

    {/* Shared walls */}
    <line x1="15" y1="21" x2="15" y2="37" stroke="#111111" strokeWidth="1.5"/>
    <line x1="26" y1="21" x2="26" y2="37" stroke="#111111" strokeWidth="1.5"/>
  </svg>
);

const MallIcon = () => (
  <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Large commercial building */}
    <rect x="2" y="15" width="37" height="22" rx="1" fill="#F5F5F5" stroke="#111111" strokeWidth="1.5"/>
    {/* Roof parapet */}
    <rect x="2" y="12" width="37" height="5" rx="0.5" fill="#E8E8E8" stroke="#111111" strokeWidth="1.5"/>
    {/* Sign band */}
    <rect x="6" y="13.5" width="29" height="2" rx="0.4" fill="#111111" opacity="0.15"/>
    {/* Entrance arch */}
    <path d="M16 37V28C16 25.8 18.2 24 20.5 24C22.8 24 25 25.8 25 28V37" fill="#E8E8E8" stroke="#111111" strokeWidth="1.4"/>
    {/* Shop windows */}
    <rect x="4" y="21" width="7" height="6" rx="0.5" fill="#D0D0D0" opacity="0.8" stroke="#111111" strokeWidth="1"/>
    <rect x="13" y="21" width="4" height="6" rx="0.5" fill="#D0D0D0" opacity="0.8" stroke="#111111" strokeWidth="1"/>
    <rect x="27" y="21" width="4" height="6" rx="0.5" fill="#D0D0D0" opacity="0.8" stroke="#111111" strokeWidth="1"/>
    <rect x="30" y="21" width="7" height="6" rx="0.5" fill="#D0D0D0" opacity="0.8" stroke="#111111" strokeWidth="1"/>
    {/* Flag / signage */}
    <line x1="20.5" y1="3" x2="20.5" y2="13" stroke="#111111" strokeWidth="1.2"/>
    <path d="M20.5 3L27 6L20.5 9V3Z" fill="#111111" opacity="0.4"/>
  </svg>
);

// --- Card Data ---
const cardData = [
  { icon: <DuplexDetachedIcon />, label: "Fully detached duplexes" },
  { icon: <DuplexSemiDetachedIcon />, label: "Semi-Detached Duplexes" },
  { icon: <TerraceIcon />, label: "Terrace Buildings" },
  { icon: <MallIcon />, label: "Mall" },
];

export const Cards = () => {
  return (
    <div className="lg:flex hidden py-20">
      <div className="w-[90%] flex space-x-4 items-center m-auto">
        {cardData.map(({ icon, label }) => (
          <div key={label} className="px-8 py-5 flex gap-6 justify-center items-center bg-slate-50 rounded-[10px]">
            <div className="w-[41px] h-[41px] flex-shrink-0">{icon}</div>
            <div className="text-zinc-800 text-lg font-normal leading-[27px] tracking-wide">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CardsMobile = () => {
  return (
    <div className="flex lg:hidden py-10">
      <div className="w-[90%] flex flex-col space-y-4 items-center m-auto">
        {cardData.map(({ icon, label }) => (
          <div key={label} className="px-8 w-full py-5 flex items-center gap-12 bg-slate-50 rounded-[10px]">
            <div className="w-[27px] h-[27px] flex-shrink-0">{icon}</div>
            <div className="text-zinc-800 text-[14px] font-normal leading-[27px] tracking-[0.45px]">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};