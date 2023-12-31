import React, { useEffect } from 'react'
import Head from './Head'
import BlogGallery from './BlogGallery';
import DiscoverProject from '../landing-page/discover-project';

const BlogPage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <Head />
      <BlogGallery />
      <DiscoverProject />
    </div>
  )
}

export default BlogPage