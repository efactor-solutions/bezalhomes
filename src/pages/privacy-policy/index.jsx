import React, { useEffect } from "react";
import Head from './Head'
import Content from "./Content";


const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
        <Head />
        <Content />
        
    </div>
  )
}

export default PrivacyPolicy