import React, { useState } from "react";


const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="bg-black bg-opacity-60 md:px-12 p-4 fixed w-full z-10">
      <div className="flex items-center justify-between">
        <button className="text-white text-5xl" onClick={showDrawer}>
          ☰
        </button>
        <div className="text-white text-lg font-bold">Logo</div>
        <div></div>
      </div>
      {drawerVisible && (
        <div className="fixed  top-0 left-0 h-full w-full bg-black bg-opacity-60 z-20">
          <div className="w-full max-w-3xl bg-black bg-opacity-60  text-white h-full fixed top-0 left-0 overflow-y-auto transform translate-x-0 transition-transform ease-in-out duration-300">
            <button
              className="text-white text-4xl absolute right-1 p-4"
              onClick={closeDrawer}
            >
              ✕
            </button>
            <div className="md:py-8 flex flex-col  gap-8 text-xl md:text-3xl md:px-12 mt-16 p-4">
              <p>Home</p>
              <p>About</p>
              <p>Search</p>
              <p>Masterpieces</p>
              <p>Blog</p>
            </div>
            <div className="py-8 flex flex-col fixed bottom-8 text-xl gap-8 md:text-3xl md:px-12 md:mt-10 p-4">
              <p>Login</p>
              <p>Legal and Compliance</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
