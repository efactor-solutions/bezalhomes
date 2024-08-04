

import { Empty, Spin } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// ProgressBar component
const ProgressBar = ({ totalImages, currentImage }) => {
  return (
    <div className="flex items-center w-full max-w-[50%] md:max-w-[35%]">
      {Array.from({ length: totalImages }).map((_, index) => (
        <div
          key={index}
          className={`h-[7px]  flex-shrink-0 ${
            index  === currentImage ? "bg-gray-600" : "bg-white"
          }`}
          style={{
            width: `${100 / totalImages}%`,
            borderRadius:
              index === 0
                ? "5px 0 0 5px" // rounded on the left side
                : index === totalImages - 1
                ? "0 5px 5px 0" // rounded on the right side
                : "none", // no rounding for other divs
          }}
        ></div>
      ))}
    </div>
  );
};

// ScrollBar component
const ScrollBar = ({ onPrev, onNext }) => {
  return (
    <div className="flex items-center space-x-6">
      <button onClick={onPrev}>
        <span className="text-2xl  md:text-4xl text-[#000000] ">&#8592;</span>
      </button>
      <button onClick={onNext}>
        <span className="text-2xl md:text-4xl text-[#000000] ">&#8594;</span>
      </button>
    </div>
  );
};
const BlogCard = ({ title, author, content, cardNumber, currentCard, slug, image }) => {

  const isActive = cardNumber === currentCard;

  return (
    <div
      className={`relative w-full lg:h-96 transition-all duration-300 grid ${
        isActive ? "lg:col-span-2 lg:grid-cols-2 grid-rows-2 lg:grid-rows-none" : "bg-gray-300 grid-cols-1"
      } rounded-md overflow-hidden`}
    >
      <img
        src={image}
        alt="Blog"
        className=" object-cover w-full shrink-0 h-full"
      />
      {isActive && (
        <div className=" bg-white px-8 flex flex-col  p-4 text-left">
          <h3 className="text-2xl text-[#333333] uppercase font-[400] inter mt-7 mb-2">{title}</h3>
          <p className="text-sm uppercase text-gray-500 mb-2">{author}</p>
          <p className="text-[#3d2c2c] inter font-[300] text-[14px] mt-4 leading-[16.94px] four-line-truncation ">{content}</p>
          <Link to={`/blog/${slug}`} className="mt-8 uppercase tracking-[2px] leading-[20px] text-[14px] font-[400] flex justify-start text-[#333333] underline">
            Read
          </Link>
        </div>
      )}
    </div>
  );
};

// Updated Blog component
const Blog = () => {
  const navigate = useNavigate()
  const [currentCard, setCurrentCard] = useState(0);
  
  const [blogs, setBlog] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(process.env.REACT_APP_API_URL + "/blog/get/all")
      .then(res => res.json())
      .then(data => {
        setBlog(data.data || []);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + 3) % 3);
  };

  return (
    <div className="text-center py-10 lg:py-[180px] lg:px-8 p-2 md:py-20 flex w-full justify-center items-center flex-col relative bg-[#D9D9D9]">
      <h1 className="text-[30px] leading-[45px] text-[#333333] md:text-[64px] inter font-[400]">Our Blog</h1>
      {isLoading ? (
        <p className="py-10"> <Spin size="large" /></p>
      ) : blogs.length === 0 ? (
        <div className="py-10 text-[#E9682B] text-[8px] lg:text-sm animate-pulse flex flex-col lg:space-y-6"> <span>No Blogs Available at the moment</span>
       <div> <Empty description={false} /></div>
        </div>
      ) : (
        <div className="justify-around py-20 lg:mt-8 grid gap-4 lg:grid-cols-4 w-full">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id || index}
              title={blog.title}
              author={blog.author}
              content={blog.description}
              cardNumber={index}
              currentCard={currentCard}
              slug={blog.slug}
              image={blog.header_image}
            />
          ))}
        </div>
      )}
      <button onClick={() => navigate("/blog")} className="uppercase underline absolute bottom-[9%] md:right-[3%] md:bottom-[25%]">
        View all
      </button>
      {/* Progress Bar and Scroll Bar */}
      <div className="flex flex-col gap-5  md:flex-row justify-center items-center mt-12 md:space-x-[360px] w-full">
        <ProgressBar totalImages={3} currentImage={currentCard} />
        <ScrollBar onPrev={handlePrev} onNext={handleNext} />
      </div>
   
    </div>
  );
};

export default Blog;
