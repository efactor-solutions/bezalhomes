import React from 'react'
import Head from './Head'

import { Cards, CardsMobile } from './Cards'
import AboutChisco from './AboutChisco'

const ChiscoDetails = () => {
  return (
    <div className=''>
      <Head />
      <Cards />
      <CardsMobile />
      <AboutChisco />
        
    </div>
  )
}

export default ChiscoDetails