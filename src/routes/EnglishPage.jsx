/* eslint-disable no-unused-vars */
import React from 'react'
import LeftSide from "../en components/LeftSide";
import Navbar from "../en components/Navbar";
import ScrollToUpBtn from "../en components/ScrollToUpBtn";
import Home from "../en components/Home";
import Catalogue from "../en components/Catalogue";
import Rating from "../en components/Rating";
import Contact from "../en components/Contact";

const EnglishPage = () => {
  return (
    <div>
       <div className='flex'>
          {/* Left side - sticky */}
          <div className="sticky top-0 h-screen z-30">
            <LeftSide />
          </div>

          {/* Right side */}
          <div className="flex-1 relative">
            {/* Fixed Navbar */}
            <div className="bg-[#2f2f2f] pb-3 xl:bg-[#ffffff] fixed top-0 w-full h-[70px] z-10">
              <Navbar />
            </div>

          
       

              <Home />
              <Catalogue />
              <Rating />
              <Contact />
              <ScrollToUpBtn />
              </div>
          </div>
      
    </div>
  )
}

export default EnglishPage
