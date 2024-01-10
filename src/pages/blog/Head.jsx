const Head = () => {
  return (
    <div className="w-full flex flex-col">
      <div style={{ filter: "brightness(80%)" }} className="blog"></div>
      <div className="lg:w-[90%] flex justify-center items-center mx-auto absolute flex-col top-[30%] ml-[25%] md:ml-[5%] px-4 ">
        <div className="">
          <p className=" text-center text-slate-100 text-base md:text-4xl font-normal Inter">
            WELCOME TO
          </p>
          {/* <p className=" text-center text-slate-100 text-xl font-normal Inter mt-3 leading-3">TO</p> */}
          <p className=" text-center text-white text-[30px] font-bold md:text-[50px]  Inter leading-[72px]">
            OUR BLOG
          </p>
        </div>
      </div>
    </div>
  );
};

export default Head;
