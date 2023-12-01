import React from 'react'

const Map = () => {
  return (
    <div>
        <div className='w-[90%] m-auto py-10'>
        <div className="text-zinc-800 md:text-3xl font-normal Inter uppercase leading-relaxed tracking-wide">Location on map</div>
        <div className="w-full h-[1px] md:h-[3px] bg-zinc-600 mt-4" />
        </div>
        <iframe
        title='Legacy Place Map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7067521504164!2d3.4792895751533415!3d6.431703793559408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5c9bdb0d4fb%3A0xd4bf40319a3f3e98!2sLegacy%20Place!5e0!3m2!1sen!2sng!4v1701443758393!5m2!1sen!2sng"
          className='w-full'
          height="450"
          style={{border:'0'}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )
}

export default Map
