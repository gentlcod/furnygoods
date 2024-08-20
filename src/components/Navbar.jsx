/* eslint-disable no-unused-vars */
import React from 'react';
import LeftSide from './LeftSide';
import Home from './Home';

const Navbar = () => {
  return (
    <div className='flex'>
      {/* Left side - sticky */}
      <div className="mt-[-1.5rem] sticky top-0 h-screen">
        <LeftSide />
      </div>
      
      {/* Right side - scrollable */}
      <div className='text-[#2f2f2f] mt-7 flex flex-col overflow-y-auto ml-8'>
        <ul className='flex items-center justify-between'>
          <li><a href="#home" className='ml-1'>Home</a></li>
          <li><a href="#catalogue" className='ml-24'>Catalogue</a></li>
          <li><a href="#rating" className='ml-24'>Rating</a></li>
          <li><a href="#contact" className='ml-24'>Contact</a></li>
          
          {/* Languages Menu */}
          <div className='absolute right-20'>

          <li className="nav-item dropdown ml-12">
            <a className="font-medium nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              EN
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">SP</a></li>
            </ul>
          </li>
          </div>

        </ul>

        {/* Home component */}
        <Home />
      </div>
    </div>
  );
};

export default Navbar;
