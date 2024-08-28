/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";


const About = () => {

  const [isExpanded, setIsExpanded] = useState(false);


  const handleAboutClick = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div>
       <div className='relative'>
            <button 
              onClick={handleAboutClick}
              className='flex items-center bg-[#f6f6f6] py-2 px-6 rounded-2xl text-[#2f2f2f] font-regular'
            >
              About Us {isExpanded ? <FaArrowLeftLong className='ml-2' size={12}/> : <FaArrowRightLong className='ml-2' size={12}/>}
            </button>

            {/* Expanding section */}
            <div className={`fixed bg-[#2f2f2f] text-[#f6f6f6] transition-all duration-500 ease-in-out ${isExpanded ? 'left-[37.5rem] top-0 w-[calc(100vw-600px)] h-[100vh] z-20' : 'transform translate-x-[-600px]'}`}>
              {isExpanded && (
                <p className='text-md font-regular ml-48 mt-36 tracking-wide'>
                  Welcome to <span>FURNYGOODS.</span>
                  <br /><br />
                  Your ultimate destination for stylish
                  <br /> and functional furniture. We specialize
                  <br /> in offering a curated selection of
                  <br /> chairs, tables, and home furnishings
                  <br /> that blend comfort with design.
                  <br /> Whether you're looking to upgrade
                  <br /> your living space or add a touch of
                  <br /> elegance to your office, FurnyGoods
                  <br /> has something for every taste.
                  <br /> Discover quality craftsmanship and
                  <br /> modern aesthetics with us. Transform
                  <br /> your space, one piece at a time.
                </p>
              )}
            </div>
          </div>
    </div>
  )
}

export default About
