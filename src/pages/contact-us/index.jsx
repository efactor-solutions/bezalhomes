import React, { useEffect } from 'react'
import ContactForm from './ContactForm'
import DiscoverProject from '../landing-page/discover-project'

const ContactUs = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactForm />
      <DiscoverProject />
    </div>
  )
}

export default ContactUs