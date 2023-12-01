import React, { useEffect } from 'react'
import Head from './Head'
import { Cards } from './Cards'
import AboutLegacy from './AboutLegacy'
import Amenities from './Amenities'
import LegacyGallery from '../LegacyGallery'
import Map from './Map'
import DiscoverProject from '../../landing-page/discover-project'

const LegacyPlaceDetails = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])
  

  return (
    <div>
      <Head />
      <Cards />
      <AboutLegacy />
      <Amenities />
      <LegacyGallery />
      <Map />
      <DiscoverProject /> 
      
    </div>
  )
}

export default LegacyPlaceDetails