/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import { Dropdown } from 'react-bootstrap';
import React, { useState, useEffect, useRef } from 'react';
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaArrowRightLong, FaArrowLeftLong, FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const MenuIcon = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const menuRef = useRef(null); // Ref for the dropdown menu

  const handleNavClick = (navLinkId) => () => {
    setActiveNavLink(navLinkId);
    const targetSection = document.getElementById(navLinkId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 89,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false); // Close the menu on click
  };

  const handleAboutClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (event) => {
    event.stopPropagation(); // Prevent click from propagating to body
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add or remove the menu-open class from body
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    // Listen for clicks outside the dropdown menu to close it
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className='xl:hidden'>
        <h4 className='cursor-pointer text-2xl text-[#f6f6f6]'>
          <span className=' font-bold' onClick={handleNavClick('home')}>FURNY</span>
          <span className='font-regular' onClick={handleNavClick('home')}>GOODS</span>
        </h4>
        {/* Menu Icon for Mobile/Tablet */}
        <div className={`fixed top-6 right-6 z-30 ${isMenuOpen ? 'hidden' : 'block'}`}>
          <button onClick={handleMenuToggle}>
            <FaBars size={25} color="#f6f6f6" />
          </button>
        </div>

        {/* Fullscreen Menu Overlay */}
        <div className={`menu-overlay ${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* Close Menu Button */}
          <button onClick={handleMenuToggle} className='fixed top-0 right-0 p-6 text-[#f6f6f6]'>
            <IoClose size={31} />
          </button>

          {/* Menu Content */}
          <div className='mt-16 bg-[#2f2f2f] px-12 py-8'>
            <h4 className='cursor-pointer mt-[-4.3rem] text-2xl text-[#f6f6f6]' onClick={handleNavClick('home')}>
              <span className='font-bold'>FURNY</span>
              <span className='font-regular'>GOODS</span>
            </h4>

            <h1 className='text-[#f6f6f6] text-2xl font-bold mt-8 mb-8'>
              Simple & <br /> Comfort
            </h1>

            <ul className='flex flex-col text-[#f6f6f6] items-start justify-start space-y-6'>
              <li
                className={`cursor-pointer duration-500 text-lg ${activeNavLink === 'home' ? 'font-semibold active' : ''}`}
                onClick={handleNavClick('home')}
              >
                Home
              </li>
              <li
                className={`cursor-pointer duration-500 text-lg ${activeNavLink === 'catalogue' ? 'font-semibold active' : ''}`}
                onClick={handleNavClick('catalogue')}
              >
                Catalogue
              </li>
              <li
                className={`cursor-pointer duration-500 text-lg ${activeNavLink === 'rating' ? 'font-semibold active' : ''}`}
                onClick={handleNavClick('rating')}
              >
                Rating
              </li>
              <li
                className={`cursor-pointer duration-500 text-lg ${activeNavLink === 'contact' ? 'font-semibold active' : ''}`}
                onClick={handleNavClick('contact')}
              >
                Contact
              </li>

              {/* Languages Menu */}
              <li className="nav-item dropdown relative" ref={menuRef}>
           
                <a
                  className="nav-link flex items-center font-semibold text-[#f6f6f6] cursor-pointer"
                  onClick={handleDropdownToggle}
                >
                  EN <IoMdArrowDropdown size={25} className='ml-1'/>
                </a>
         
                
                <ul
                  className={`dropdown-menu ${isDropdownOpen ? 'block' : 'hidden'} absolute 
                  bg-[#f6f6f6] rounded-md p-1 text-[#f6f6f6] top-full left-0 z-[9999]`}
                >
                  <li><Link to="/sp" className="dropdown-item font-semibold">SP</Link></li>
                </ul>
              </li>
            </ul>

            <p className='mt-12 text-[#f6f6f6] tracking-normal text-sm font-regular'>
              This furniture website lets visitors<br />create wish lists for their favorite<br />items, which help honor.
            </p>

            <button
              onClick={handleAboutClick}
              className='flex items-center bg-[#f6f6f6] py-2 px-6 rounded-2xl text-[#2f2f2f] font-regular mt-4'
            >
              About Us {isExpanded ? <FaArrowLeftLong className='ml-2' size={12} /> : <FaArrowRightLong className='ml-2' size={12} />}
            </button>

            {/* Expanding section for Mobile/Tablet */}
            <div className={`text-[#f6f6f6] transition-all duration-500 ease-in-out ${isExpanded ? 'mt-4' : 'hidden'}`}>
              <p className='text-sm font-regular tracking-wide'>
                Welcome to <span>FURNYGOODS.</span>
                <br /><br />
                Your ultimate destination for stylish<br />and functional furniture. We specialize<br />in offering a curated selection of<br />chairs, tables, and home furnishings<br />that blend comfort with design.
                <br />Whether you're looking to upgrade<br />your living space or add a touch of<br />elegance to your office, FurnyGoods<br />has something for every taste.
                <br />Discover quality craftsmanship and<br />modern aesthetics with us. Transform<br />your space, one piece at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuIcon;

