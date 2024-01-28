import React from 'react'
import BlackDiamond from '../assets/image 36.png'
import Marble from '../assets/image 34.png'
import Jaiz from '../assets/image 35.png'

const Partners = () => {
  return (
    <div className='flex justify-center items-center flex-col py-10 lg:py-20'>
      <h1 className='uppercase font-[400] text-[#333333] inter text-[16px] md:text-[46px] leading-[20.24px] lg:leading-[50.4px] mt-7'>Our Partners</h1>
        <h2 className='inter uppercase font-[500] text-[9px] leading-[7.86px] lg:leading-[24.5px] mt-2 trackin-[1px] text-[#2D6462] lg:text-[#E9682B]'>They Trust us</h2>
        
        <div className='flex w-full justify-center px-2 gap-8 md:gap-14 py-10'>
            <div>
                <img src={BlackDiamond} alt='partners' className=' w-full'/>
            </div>
           <div>
                <img src={Marble} alt='partners' className='w-full'/>
            </div>
           <div>
                <img src={Jaiz} alt='partners' className='w-full '/>
            </div>
        </div>

        
    </div>
  )
}

export default Partners