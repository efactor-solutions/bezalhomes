import React, { useEffect } from 'react'
import Head from './Head'
import Varieties from './Varieties'
import DiscoverProject from '../landing-page/discover-project'

const MasterPiecesPage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className=''>
        <Head />
        <Varieties />
        <DiscoverProject />
    </div>
  )
}

export default MasterPiecesPage