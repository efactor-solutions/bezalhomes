// Gallery.js
import React from "react";

import Image1 from "../../assets/blogpage1.png";
import Image2 from "../../assets/blogpage2.png";
import Image3 from "../../assets/blogPage3.png";
import Image4 from "../../assets/blogPage4.png";
import Image5 from "../../assets/blogPage5.png";

const BlogGallery = () => {
  const images = [
    {
      id: 1,
      title: "The future is now",
      date: "23/10/2023",
      name: "John Doe",
      image: Image1,
    },
    {
      id: 2,
      title: "multiply your income",
      date: "23/10/2023",
      name: "Jane Doe",
      image: Image2,
    },
    {
      id: 3,
      title: "Land Appreciation ",
      date: "23/10/2023",
      name: "Bob Smith",
      image: Image3,
    },
    {
      id: 4,
      title: "why real estate remain the best investment ",
      date: "23/10/2023",
      name: "Alice Johnson",
      image: Image4,
    },
    {
      id: 5,
      title: "Prime area",
      date: "23/10/2023",
      name: "Chris Evans",
      image: Image5,
    },
  ];

  return (
    <div className="w-[90%] mx-auto mb-4 py-10">
      <div  className=" grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`gallery-item w-full relative  ${
              index === 3 ? "md:col-span-2 h-full" : ""
            }`}
          >
             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"></div>
            <img src={image.image} alt={image.title} className="w-full " />
            <div className=" absolute left-4 bottom-2 md:left-[8%] md:bottom-[16%]">
              <p className=" text-white text-opacity-90 text-sm md:text-3xl font-normal Inter uppercase md:leading-[50.40px] tracking-wide">
                {image.title}
              </p>
              <p className=" text-white text-opacity-90 text-xs md:text-base font-normal Inter md:leading-7">
                {`${image.date} - ${image.name}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGallery;
