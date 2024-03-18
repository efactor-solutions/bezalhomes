// Gallery.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const BlogGallery = () => {
  const navigate = useNavigate();
  const [blogs, setBlog] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/blog/get/all")
      .then(res => res.json())
      .then(data => {
        setBlog(data.data || null)
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
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {
              blogs.map((blog, index) => (
                <div
                  key={`blog-${index}`}
                  className={`gallery-item w-full relative cursor-pointer  ${index === 3 ? "md:col-span-2 h-full" : ""
                    }`}
                  onClick={() => navigate(`/blog/${blog.slug}`)}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"></div>
                  <img src={blog.header_image} alt={blog.title} className="w-full " />
                  <div className=" absolute w-full h-[100%] top-0 p-4 flex flex-col justify-end gap-4">
                    <p className=" text-white text-opacity-90 two-line-truncation w-full text-sm md:text-lg xl:text-3xl font-normal Inter uppercase md:leading-[50.40px] tracking-wide">
                      {blog.title}
                    </p>
                    <p className=" text-white text-opacity-90 text-xs md:text-base font-normal Inter md:leading-7 truncate w-full">
                      {`${new Date(blog.date).toLocaleDateString()} - ${blog.author.split("-")[0]}`}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        : <div className="h-48 flex justify-center items-center">
          <Spin />
        </div>}
    </div>
  );
};

export default BlogGallery;
