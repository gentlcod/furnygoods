 
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { IoClose } from "react-icons/io5";
import { FaArrowRightLong, FaArrowLeftLong, FaBars } from "react-icons/fa6";

const MenuIcon = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState('home');

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

  return (
    <>
    <div className='md:hidden'>

    <div className='fixed top-0 right-0 w-full h-full p-6'>
    <h4 className='cursor-pointer text-2xl  text-[#f6f6f6]'
     onClick={handleNavClick('home')}>
    <span className='font-bold'>FURNY</span>
    <span className='font-regular'>GOODS</span>
  </h4>
    </div>
      {/* Menu Icon for Mobile/Tablet */}
      <div className={`md:hidden fixed top-6 right-6 ${isMenuOpen ? 'hidden' : 'block'}`}>
        <button onClick={handleMenuToggle}>
          <FaBars size={25} color="#f6f6f6" />
        </button>
      </div>

      <div className={`fixed top-0 left-0 w-full h-full p-6 bg-[#2f2f2f] z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
        {/* Close Menu Button */}
        <button onClick={handleMenuToggle} className='fixed top-0 right-0 p-6 text-[#f6f6f6] mb-8'>
          <IoClose size={31} />
        </button>

        {/* Menu Content */}
        <div className='mb-9 '>
            <div className='fixed top-0 left-0 p-6'>
            <h4 className='cursor-pointer text-2xl  text-[#f6f6f6]'
    onClick={function() {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }}>
    <span className='font-bold'>FURNY</span>
    <span className='font-regular'>GOODS</span>
  </h4>
    </div>

          <h1 className='text-[#f6f6f6] text-2xl font-bold mt-16 mb-8'>
            Simple & <br /> Comfort
          </h1>
          <div className='w-[3px] bg-[#f6f6f6] h-full' />


          <ul className='flex flex-col text-[#f6f6f6] items-start justify-start space-y-6'>
            <li
              className={`cursor-pointer duration-500 text-lg ${
                activeNavLink === 'home' ? 'font-semibold active' : ''
              }`}
              onClick={handleNavClick('home')}
            >
              Home
            </li>
            <li
              className={`cursor-pointer duration-500 text-lg ${
                activeNavLink === 'catalogue' ? 'font-semibold active' : ''
              }`}
              onClick={handleNavClick('catalogue')}
            >
              Catalogue
            </li>
            <li
              className={`cursor-pointer duration-500 text-lg ${
                activeNavLink === 'rating' ? 'font-semibold active' : ''
              }`}
              onClick={handleNavClick('rating')}
            >
              Rating
            </li>
            <li
              className={`cursor-pointer duration-500 text-lg ${
                activeNavLink === 'contact' ? 'font-semibold active' : ''
              }`}
              onClick={handleNavClick('contact')}
            >
              Contact
            </li>

            {/* Languages Menu */}
            <div className='mt-6'>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="bg-[#2f2f2f] hover:bg-[#2f2f2f] text-[#f6f6f6] border-none font-semibold"
                >
                  EN
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <a href="/spanish">
                      <p className='font-medium text-center'>
                        SP
                      </p>
                    </a>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </ul>

          <br />
          <br />


          <p className='mt-2 text-[#f6f6f6] tracking-normal text-sm font-regular'>
            This furniture website lets visitors<br />create wish lists for their favorite<br />items, which help honor.
          </p>
          <br />

          <button
            onClick={handleAboutClick}
            className='flex items-center bg-[#f6f6f6] py-2 px-6 rounded-2xl text-[#2f2f2f] font-regular'
          >
            About Us {isExpanded ? <FaArrowLeftLong className='ml-2' size={12} /> : <FaArrowRightLong className='ml-2' size={12} />}
          </button>

          {/* Expanding section for Mobile/Tablet */}
          <div className={`bg-[#2f2f2f] text-[#f6f6f6] transition-all duration-500 ease-in-out ${isExpanded ? 'mt-4' : 'hidden'}`}>
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
