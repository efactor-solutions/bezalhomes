import React, { useEffect } from 'react'
import Head from './Head'

import { Cards, CardsMobile } from './Cards'
import AboutChisco from './AboutChisco'
import Amenities from './Amenities'
import HomeUnits from './HomeUnits'
import ChiscoGallery from '../ChiscoGallery'
import DiscoverProject from '../../landing-page/discover-project'
import Information from './Information'
import Map from './Map'
import MobileCards from '../MobileCards'
import VideoComponent from './VideoComponent'

const ChiscoDetails = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div className=''>
      <Head />
      {/*<VideoComponent />*/}
      <Cards />
      <CardsMobile />
      <AboutChisco />
      <MobileCards />
      <Amenities />
      <HomeUnits />
        <ChiscoGallery />
        <Information />
        <Map />
        <DiscoverProject />
        
    </div>
  )
}

export default ChiscoDetails