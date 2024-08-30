/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuIcon from './MenuIcon'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState('home');

  const handleNav = () => setNav((prev) => !prev);

  const handleNavClick = (navLinkId) => () => {
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
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`xl:bg-[#ffffff] xl:pb-12 bg-[#2f2f2f] text-[#2f2f2f] py-7 px-12 flex flex-col overflow-y-auto
      ${isSticky ? 'sticky top-0 z-50 xl:bg-[#ffffff] bg-[#2f2f2f]' : ''}
    `}>
      <ul className='hidden xl:flex items-center justify-between'>

        <div className='nav-links flex items-center justify-between space-x-10'>
          <li
            className={`cursor-pointer duration-500 ${
              activeNavLink === 'home' ? 'font-semibold active' : ''
            }`}
            onClick={handleNavClick('home')}
          >
            Inicio
          </li>
          <li
            style={{ marginLeft: '4rem' }}
            className={`cursor-pointer duration-500 ${
              activeNavLink === 'catalogue' ? 'font-semibold active' : ''
            }`}
            onClick={handleNavClick('catalogue')}
          >
            Catálogo
          </li>
          <li
            style={{ marginLeft: '4rem' }}
            className={`cursor-pointer duration-500 ${
              activeNavLink === 'rating' ? 'font-semibold active' : ''
            }`}
            onClick={handleNavClick('rating')}
          >
            Calificación
          </li>
          <li
            style={{ marginLeft: '4rem' }}
            className={`cursor-pointer duration-500 ${
              activeNavLink === 'contact' ? 'font-semibold active' : ''
            }`}
            onClick={handleNavClick('contact')}
          >
            Contacto
          </li>

          {/* Menú de Idiomas */}
          <Dropdown>
            <Dropdown.Toggle 
              variant="success" 
              id="dropdown-basic" 
              className="bg-[#2f2f2f] hover:bg-[#2f2f2f] text-[#f6f6f6] border-none font-semibold lg:ml-[9.42rem] overflow-hidden"
            >
              SP
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className='xl:mt-[-.5rem]'>
                <Link to='/en'>
                  <p className='font-medium text-center'>
                    EN
                  </p>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>

      </ul>

      {/* Icono de Menú para Móviles/Tablet/Ipad.. */}
      <MenuIcon />

    </div>
  );
};

export default Navbar;
