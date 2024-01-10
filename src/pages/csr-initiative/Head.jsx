const Head = () => {
  return (
    <div className="w-full flex flex-col">
      <div style={{ filter: "brightness(80%)" }} className="csr"></div>
      <div className="lg:w-[90%] flex justify-center items-center mx-auto absolute flex-col top-[50%] ml-[15%] md:ml-[5%] px-4 ">
        <div className="flex justify-center flex-col items-center">
          <p className=" text-center text-slate-100 text-sm md:text-4xl font-normal Inter leading-7">
            CSR INITIATIVES
          </p>

          <p className=" text-center md:mt-2 text-white md:text-[50px] text-base font-bold Inter md:leading-[72px]">
            Building A Better Community
          </p>
        </div>
      </div>
    </div>
  );
};

export default Head;
