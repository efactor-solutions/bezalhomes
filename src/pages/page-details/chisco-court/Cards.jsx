import React, { useState } from "react";

// image assets for cards
import DuplexPhoto from "../../../assets/chiscoG1.png";
import SemiDuplexPhoto from "../../../assets/chiscoG2.png";
import TerracePhoto from "../../../assets/chiscoG3.png";
import MallPhoto from "../../../assets/chisco-court/mall/chma1.png";

// ─── PDF paths — swap for your actual files ───────────────────────────────────
const PDF_LINKS = {
  "Fully detached duplexes": "/docs/fully-detached-duplex.pdf",
  "Semi-Detached Duplexes": "/docs/semi-detached-duplex.pdf",
  "Terrace Buildings": "/docs/terrace-buildings.pdf",
  "Chisco Mall": "/docs/mall.pdf",
};

// ─── Icons ────────────────────────────────────────────────────────────────────

const DuplexDetachedIcon = () => (
  <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M2 22L9 13L16 22V36H2V22Z" fill="#F5F5F5" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="5" y="27" width="4" height="5" rx="0.5" fill="#111111" opacity="0.4"/>
    <rect x="10" y="26" width="3" height="3" rx="0.5" fill="#111111" opacity="0.4"/>
    <path d="M24 22L31 13L38 22V36H24V22Z" fill="#F5F5F5" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="27" y="27" width="4" height="5" rx="0.5" fill="#111111" opacity="0.4"/>
    <rect x="32" y="26" width="3" height="3" rx="0.5" fill="#111111" opacity="0.4"/>
    <line x1="19" y1="18" x2="21" y2="18" stroke="#111111" strokeWidth="1.2" strokeDasharray="1.5 1.5"/>
  </svg>
);

const DuplexSemiDetachedIcon = () => (
  <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M2 22L11 11L20 22V37H2V22Z" fill="#F5F5F5" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="4" y="28" width="4" height="5" rx="0.5" fill="#111111" opacity="0.4"/>
    <rect x="10" y="27" width="3" height="3" rx="0.5" fill="#111111" opacity="0.4"/>
    <path d="M20 22L29 11L38 22V37H20V22Z" fill="#E8E8E8" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="22" y="28" width="4" height="5" rx="0.5" fill="#111111" opacity="0.4"/>
    <rect x="28" y="27" width="3" height="3" rx="0.5" fill="#111111" opacity="0.4"/>
    <line x1="20" y1="22" x2="20" y2="37" stroke="#111111" strokeWidth="1.8"/>
  </svg>
);

const TerraceIcon = () => (
  <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M1 21L8 13L15 21V37H1V21Z" fill="#F5F5F5" stroke="#111111" strokeWidth="1.4" strokeLinejoin="round"/>
    <rect x="5" y="29" width="3" height="4" rx="0.4" fill="#111111" opacity="0.4"/>
    <path d="M13 21L20.5 12L28 21V37H13V21Z" fill="#E8E8E8" stroke="#111111" strokeWidth="1.4" strokeLinejoin="round"/>
    <rect x="17" y="29" width="3" height="4" rx="0.4" fill="#111111" opacity="0.4"/>
    <path d="M26 21L33 13L40 21V37H26V21Z" fill="#F5F5F5" stroke="#111111" strokeWidth="1.4" strokeLinejoin="round"/>
    <rect x="30" y="29" width="3" height="4" rx="0.4" fill="#111111" opacity="0.4"/>
    <line x1="15" y1="21" x2="15" y2="37" stroke="#111111" strokeWidth="1.5"/>
    <line x1="26" y1="21" x2="26" y2="37" stroke="#111111" strokeWidth="1.5"/>
  </svg>
);

const MallSVGIcon = () => (
  <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="2" y="15" width="37" height="22" rx="1" fill="#F5F5F5" stroke="#111111" strokeWidth="1.5"/>
    <rect x="2" y="12" width="37" height="5" rx="0.5" fill="#E8E8E8" stroke="#111111" strokeWidth="1.5"/>
    <rect x="6" y="13.5" width="29" height="2" rx="0.4" fill="#111111" opacity="0.15"/>
    <path d="M16 37V28C16 25.8 18.2 24 20.5 24C22.8 24 25 25.8 25 28V37" fill="#E8E8E8" stroke="#111111" strokeWidth="1.4"/>
    <rect x="4" y="21" width="7" height="6" rx="0.5" fill="#D0D0D0" opacity="0.8" stroke="#111111" strokeWidth="1"/>
    <rect x="13" y="21" width="4" height="6" rx="0.5" fill="#D0D0D0" opacity="0.8" stroke="#111111" strokeWidth="1"/>
    <rect x="27" y="21" width="4" height="6" rx="0.5" fill="#D0D0D0" opacity="0.8" stroke="#111111" strokeWidth="1"/>
    <rect x="30" y="21" width="7" height="6" rx="0.5" fill="#D0D0D0" opacity="0.8" stroke="#111111" strokeWidth="1"/>
    <line x1="20.5" y1="3" x2="20.5" y2="13" stroke="#111111" strokeWidth="1.2"/>
    <path d="M20.5 3L27 6L20.5 9V3Z" fill="#111111" opacity="0.4"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const ViewIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

// ─── Card Data ────────────────────────────────────────────────────────────────
// Replace `image` values with your actual imported image paths, e.g.:
//   import DuplexImg from '../../../assets/duplex-photo.jpg'
//   then: image: DuplexImg
const cardData = [
  {
    icon: <DuplexDetachedIcon />,
    label: "Fully detached duplexes",
    units: "10 Units",
    details: "4 Bed · 2-Room BQ · Private compound",
    description: "Spacious standalone homes offering complete privacy, a personal driveway, and a generous compound — ideal for families seeking independence.",
    image: DuplexPhoto,
  },
  {
    icon: <DuplexSemiDetachedIcon />,
    label: "Semi-Detached Duplexes",
    units: "14 Units",
    details: "4 Bed · 1-Room BQ · Shared boundary",
    description: "Elegant paired homes that balance community living with personal space, featuring a shared side wall and individual outdoor areas.",
    image: SemiDuplexPhoto,
  },
  {
    icon: <TerraceIcon />,
    label: "Terrace Buildings",
    units: "10 Units",
    details: "4 Bed · 1-Room BQ · Row layout",
    description: "Beautifully arranged row homes offering a cohesive streetscape, with each unit enjoying its own entrance and private rear garden.",
    image: TerracePhoto,
  },
  {
    icon: <MallSVGIcon />,
    label: "Chisco Mall",
    units: "1 Block",
    details: "Commercial · Ground floor retail",
    description: "A vibrant commercial hub at the heart of the estate, designed to serve residents and the wider community with retail and lifestyle outlets.",
    image: MallPhoto,
  },
];

// ─── Image placeholder (shown when no image is provided) ─────────────────────
const ImagePlaceholder = ({ label }) => (
  <div className="w-full h-full bg-zinc-100 flex flex-col items-center justify-center gap-1">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c0c0c0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
    <span className="text-[9px] text-zinc-300 tracking-widest uppercase">Add image</span>
  </div>
);

// ─── Single Card ──────────────────────────────────────────────────────────────
const PropertyCard = ({ card, isHovered, isDimmed, onMouseEnter, onMouseLeave, isMobile }) => {
  const { icon, label, units, details, description, image } = card;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        filter: isDimmed ? "grayscale(100%) opacity(0.35)" : "grayscale(0%) opacity(1)",
        transform: isHovered
          ? isMobile ? "translateX(5px)" : "translateY(-6px)"
          : "translate(0)",
        transition: "filter 0.35s ease, transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: isHovered
          ? "0 18px 44px rgba(0,0,0,0.11)"
          : "0 1px 4px rgba(0,0,0,0.05)",
      }}
      className={`
        bg-slate-50 rounded-[10px] cursor-default overflow-hidden flex flex-col
        ${isMobile ? "w-full" : "flex-1 min-w-0"}
      `}
    >
      {/* ── Image area ─────────────────────────────────────────────── */}
      <div className="w-full h-[140px] overflow-hidden flex-shrink-0 relative">
        {image ? (
          <img
            src={image}
            alt={label}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImagePlaceholder label={label} />
        )}
        {/* Unit badge */}
        <span className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm text-zinc-600 text-[9px] tracking-widest uppercase px-2 py-1 rounded">
          
        </span>
      </div>

      {/* ── Card body ──────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 px-5 py-4 flex-1">

        {/* Icon + title */}
        <div className="flex items-center gap-3">
          <div className="w-[32px] h-[32px] flex-shrink-0">{icon}</div>
          <div>
            <div className="text-zinc-800 text-[14px] font-normal leading-snug tracking-wide">
              {label}
            </div>
       
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-200 w-full" />

        {/* Short description */}
        <p className="text-zinc-500 text-[12px] leading-relaxed tracking-wide flex-1">
          {description}
        </p>

        {/* Action buttons */}
        <div className="flex gap-2 pt-1">
          <a
            href={PDF_LINKS[label]}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] tracking-widest uppercase text-zinc-600 border border-zinc-300 rounded hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-200"
          >
            <ViewIcon /> View
          </a>
          <a
            href={PDF_LINKS[label]}
            download
            className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] tracking-widest uppercase text-zinc-600 border border-zinc-300 rounded hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-200"
          >
            <DownloadIcon /> PDF
          </a>
        </div>
      </div>
    </div>
  );
};

// ─── Merged Cards Component ───────────────────────────────────────────────────
const Cards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {/* Section heading with underline */}
      <div className="w-[90%] m-auto  mt-12">
        <div className="flex items-center">
          <h2 className="text-zinc-800 text-[24px] md:text-[32px] font-black Inter uppercase tracking-wide">
            Explore Chisco Court offerings
          </h2>
          <div className="flex-1 h-[2px] bg-zinc-300 ml-4" />
        </div>
      </div>
      {/* Desktop — horizontal row, hidden on mobile */}
      <div className="lg:flex hidden py-20">
        <div className="w-[90%] flex space-x-4 items-stretch m-auto">
          {cardData.map((card, i) => (
            <PropertyCard
              key={card.label}
              card={card}
              isHovered={hoveredIndex === i}
              isDimmed={hoveredIndex !== null && hoveredIndex !== i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              isMobile={false}
            />
          ))}
        </div>
      </div>

      {/* Mobile — vertical stack, hidden on desktop */}
      <div className="flex lg:hidden py-10">
        <div className="w-[90%] flex flex-col space-y-4 m-auto">
          {cardData.map((card, i) => (
            <PropertyCard
              key={card.label}
              card={card}
              isHovered={hoveredIndex === i}
              isDimmed={hoveredIndex !== null && hoveredIndex !== i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              isMobile={true}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
// Named exports kept for backward compatibility
export { Cards };