import React from 'react'
import CardSlider from './chisco-court/CardSlider'
import Timeline from "../../assets/Timeline.svg"
import Units from "../../assets/Units.svg";
import Progress from "../../assets/Progress.svg";

const cards = [
    { icon: Timeline, text: "Timeline - Q4 - 2026" },
    { icon: Units, text: "100 Units" },
    { icon: Progress, text: "Status - In Progress" },
  ];

const MobileCards = () => {
  return (
    <div className='block lg:hidden'>
         <div className="flex justify-center py-10"> <CardSlider cards={cards} /></div> 
    </div>
  )
}

export default MobileCards