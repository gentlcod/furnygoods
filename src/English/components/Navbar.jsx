/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState('home');

  const handleNav = () => setNav((prev) => !prev);

  const handleNavClick = (navLinkId) => () => {  // Updated: return a function
    setActiveNavLink(navLinkId);
    const targetSection = document.getElementById(navLinkId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 89,
        behavior: 'smooth',
      });
    }
    setNav(false); // Close the menu on click
  };

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    const verticalVisible = rect.top <= windowHeight && rect.bottom >= 0;
    const horizontalVisible = rect.left <= windowWidth && rect.right >= 0;

    return verticalVisible && horizontalVisible;
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const targetId = section.id;
      if (isElementInViewport(section)) {
        setActiveNavLink(targetId);
      }
    });
  };

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 5);
    };
    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='text-[#2f2f2f] mt-7 flex flex-col overflow-y-auto ml-8'>
      <ul className='flex items-center justify-between'>

        <div className='nav-links flex items-center justify-between'>
        <li
          className={`cursor-pointer ml-1 duration-500 ${
            activeNavLink === 'home' ? 'font-bold active' : ''
          }`}
          onClick={handleNavClick('home')}
        >
          Home
        </li>
        <li
          className={`cursor-pointer ml-24 duration-500 ${
            activeNavLink === 'catalogue' ? 'font-bold active' : ''
          }`}
          onClick={handleNavClick('catalogue')}
        >
          Catalogue
        </li>
        <li
          className={`cursor-pointer ml-24 duration-500 ${
            activeNavLink === 'rating' ? 'font-bold active' : ''
          }`}
          onClick={handleNavClick('rating')}
        >
          Rating
        </li>
        <li
          className={`cursor-pointer ml-24 duration-500 ${
            activeNavLink === 'contact' ? 'font-bold active' : ''
          }`}
          onClick={handleNavClick('contact')}
        >
          Contact
        </li>
        </div>


        {/* Languages Menu */}

        <div className='language-menu'>
        <li className="nav-item dropdown ml-12 absolute right-20">
          <a
            className="font-medium nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            EN
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                SP
              </a>
            </li>
          </ul>
        </li>
        </div>

      </ul>
    </div>
  );
};

export default Navbar;
