/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToUpBtn = () => {

  const [activeNavLink, setActiveNavLink] = useState('home');

  const handleNavClick = (navLinkId) => () => {
    setActiveNavLink(navLinkId);
    const targetSection = document.getElementById(navLinkId);
    if (targetSection) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='fixed lg:bottom-8 bottom-16 right-8'>
      <div className='flex items-center justify-center bg-[#2f2f2f] rounded-full lg:w-[50px] lg:h-[50px] sm:w-[50px] sm:h-[50px] w-[41px] h-[41px] lg:mr-0 sm:mr-0 mr-[-1.45rem]'>
        <MdOutlineKeyboardDoubleArrowUp
          onClick={handleNavClick('home')}
          size='35'
          className='cursor-pointer text-[#f6f6f6]'
        />
      </div>
    </div>
  );
}

export default ScrollToUpBtn;
