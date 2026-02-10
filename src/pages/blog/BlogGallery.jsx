// Gallery.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const BlogGallery = () => {
  const navigate = useNavigate();
  const [blogs, setBlog] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  React.useEffect(() => {
    // Load local posts index from public folder and sort by date (newest first)
    fetch('/blog/posts/posts.json')
      .then(res => res.json())
      .then(data => {
        const posts = Array.isArray(data) ? data.slice() : []
        posts.sort((a, b) => new Date(b.date) - new Date(a.date))
        setBlog(posts)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, []);

  return (
    <div className="w-[90%] mx-auto mb-4 py-10">

      {!loading ?
        !blogs ? <div className="h-48 flex justify-center items-center">
          <p className="text-xl text-gray-500">No blogs available</p>
        </div> :
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {
              blogs.map((blog, index) => {
                const isDimmed = hoveredIndex !== null && hoveredIndex !== index
                return (
                  <div
                    key={`blog-${index}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => navigate(`/blog/${blog.slug}`)}
                    className={`hover:shadow-xl rounded-lg hover:translate-y-[-30px] cursor-pointer transition-all duration-300 ${isDimmed ? 'grayscale filter opacity-80' : ''}`}
                  >
                    <div className="bg-white rounded-md overflow-hidden shadow-sm">
                      <div className="h-44 md:h-56 lg:h-64 overflow-hidden">
                        <img src={blog.header_image} alt={blog.title} className={`w-full h-full object-cover transition-transform duration-500 ${hoveredIndex === index ? 'scale-105' : ''}`} />
                      </div>
                      <div className="p-6">
                        <p className="text-xs text-orange-500 uppercase mb-2">{(blog.category || 'Blog').toUpperCase()}</p>
                        <h3 className="text-2xl md:text-3xl font-semibold  text-[#363535] leading-tight mb-3 ">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-gray-500">{blog.date}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        : <div className="h-48 flex justify-center items-center">
          <Spin />
        </div>}
    </div>
  );
};

export default BlogGallery;
