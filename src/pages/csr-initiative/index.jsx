import React, { useEffect } from 'react'
import Head from './Head'
import Contents from './Contents';
import OtherHeader from './OtherHeader';
import BlogGallery from '../blog/BlogGallery';
import DiscoverProject from '../landing-page/discover-project';

const CsrIntitiative = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <Head />
      <Contents />
      <OtherHeader />
      <BlogGallery />
      <DiscoverProject />
    </div>
  )
}

export default CsrIntitiative