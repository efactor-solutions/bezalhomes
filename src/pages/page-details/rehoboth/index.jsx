import React, { useEffect } from 'react'
import Head from './Head'
import { Cards, CardsMobile } from './Cards';
import AboutRehoboth from './AboutRehoboth';
import Amenities from './Amenities';
import RehobothGallery from '../RehobothGallery';
import Information from './Information';
import DiscoverProject from '../../landing-page/discover-project';
import Map from './Map';

const RehobothDetails = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div className=''>
        <Head />
        <Cards />
        <CardsMobile />
        <AboutRehoboth />
        <Amenities />
        <RehobothGallery />
        <Information />
        <Map />
        <DiscoverProject />
    </div>
  )
}

export default RehobothDetails