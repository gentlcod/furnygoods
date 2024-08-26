/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import MenuIcon from './MenuIcon'
import { FaArrowRightLong, FaArrowLeftLong, FaBars } from "react-icons/fa6";

const LeftSide = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAboutClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
     

      {/* LeftSide Content for Larger Screens */}
      <div className={`w-[600px] mt-[-1.5rem] pl-24 bg-[#2f2f2f] h-[100vh] z-10 relative hidden md:block`}>
        {/* Logo */}
        
        <h4 
  className='cursor-pointer md:block hidden pt-7 my-4 text-[#f6f6f6] bg-[#2f2f2f] md:bg-[#2f2f2f] px-4 md:px-0'
  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
>
  <span className='text-2xl font-bold'>
    FURNY
  </span>
  <span className='text-2xl font-extralight'>
    GOODS
  </span>
</h4>

        <div className='mt-32 mb-9'>
          <h1 className='text-[#f6f6f6] text-7xl font-bold'>
            Simple &
            <br />
            Comfort
          </h1>

          <p className='mt-9 text-[#f6f6f6] tracking-normal text-md font-regular'>
            This furniture website lets visitors
            <br /> create wish lists for their favorite
            <br /> items, which help honor.
          </p>
          <br />

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
      </div>

      {/* LeftSide Content for Mobile/Tablet */}
      <MenuIcon />
    </>
  );
}

export default LeftSide;
