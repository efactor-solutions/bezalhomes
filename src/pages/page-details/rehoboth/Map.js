import React from 'react'

const Map = () => {
  return (
    <div>
        <div className='w-[90%] m-auto md:py-10'>
        <div className="text-zinc-800 md:text-3xl font-normal Inter uppercase leading-relaxed tracking-wide">Location on map</div>
        <div className="w-full h-[1px] md:h-[3px] bg-zinc-600 mt-4" />
        </div>
        <iframe
        title=' Map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31708.034718760642!2d3.3434566743164065!3d6.584053100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b928a34601619%3A0x83b8e7818fa2394d!2sRehoboth!5e0!3m2!1sen!2sng!4v1701443982330!5m2!1sen!2sng"
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
