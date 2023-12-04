
import React from "react";
import LandingPage from "./pages/landing-page";
import MasterPieces from "./pages/masterpieces";
import Blog from "./pages/blog";
import Navbar from './components/layouts/Navbar'
import MobileFooter from './components/layouts/MobileFooter'
import Footer from './components/layouts/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChiscoDetails from "./pages/page-details/chisco-court";
import RehobothDetails from "./pages/page-details/rehoboth";
import LegacyPlaceDetails from "./pages/page-details/legacy-place";

function App() {
 

  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
    
    <Route index element={<LandingPage />} />
    <Route path="masterpieces" element={<MasterPieces />} />
    <Route path="blog" element={<Blog />} />
    <Route path="chisco-details" element={<ChiscoDetails />} />
    <Route path="rehoboth-details" element={<RehobothDetails />} />
    <Route path="legacy-place" element={<LegacyPlaceDetails/>} />


     
     
      </Routes>
      <MobileFooter />
      <Footer />
      </BrowserRouter>
  );
}

export default App;
