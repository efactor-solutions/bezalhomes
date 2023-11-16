import React from 'react'
import BlackDiamond from '../assets/image 36.png'
import Marble from '../assets/image 34.png'
import Jaiz from '../assets/image 35.png'

const Partners = () => {
  return (
    <div className='flex justify-center items-center flex-col py-10'>
        <h2 className='inter uppercase font-[500] text-[13.89px] leading-[24.5px] trackin-[1px] text-[#A18A6B] md:mt-10'>They Trust us</h2>
        <h1 className='uppercase font-[400] text-[#333333] inter text-[24px] md:text-[46px] leading-[50.4px]'>Our Partners</h1>
        <div className='flex px-2 md:space-x-20 mt-10'>
            <div>
                <img src={BlackDiamond} alt='partners' className='w-full '/>
            </div>
           <div>
                <img src={Marble} alt='partners' className='w-full '/>
            </div>
           <div>
                <img src={Jaiz} alt='partners' className='w-full '/>
            </div>
        </div>

        
    </div>
  )
}

export default Partners