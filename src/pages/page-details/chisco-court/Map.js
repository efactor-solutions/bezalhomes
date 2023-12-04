import React from 'react'

const Map = () => {
  return (
    <div>
        <div className='w-[90%] m-auto md:py-10'>
        <div className="text-zinc-800 md:text-3xl font-normal Inter uppercase leading-relaxed tracking-wide">Location on map</div>
        <div className="w-full h-[1px] md:h-[3px] bg-zinc-600 mt-4" />
        </div>
        <iframe
        title='Chisco Map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6873626641905!2d3.489539075153373!3d6.434188993556953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5d239e4aa03%3A0xd7e0fa201aecebbe!2sChisco!5e0!3m2!1sen!2sng!4v1701398487734!5m2!1sen!2sng"
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