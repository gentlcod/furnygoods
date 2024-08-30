/* eslint-disable no-unused-vars */
import React from 'react'
import LeftSide from "../sp components/LeftSide";
import Navbar from "../sp components/Navbar";
import ScrollToUpBtn from "../sp components/ScrollToUpBtn";
import Home from "../sp components/Home";
import Catalogue from "../sp components/Catalogue";
import Rating from "../sp components/Rating";
import Contact from "../sp components/Contact";


const SpanishPage = () => {
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
         <div className="pb-3 fixed top-0 w-full h-[70px] z-20">
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
  );
}; 

export default SpanishPage;

