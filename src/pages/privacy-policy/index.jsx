import React, { useEffect } from "react";
import Head from './Head'


const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
        <Head />
        
    </div>
  )
}

export default PrivacyPolicy