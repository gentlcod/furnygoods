/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';


const Navbar = () => {
  const handleNav = () => setNav(prev => !prev);

  const handleNavClick = (navLinkId) => {
    setActiveNavLink(navLinkId);
    const targetSection = document.getElementById(navLinkId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 89,
        behavior: 'smooth'
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
    sections.forEach(section => {
      const targetId = section.id;
      const navLink = document.querySelector(`.nav-link[href='#${targetId}']`);

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
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  
  return (
    <div className='text-[#2f2f2f] mt-7 flex flex-col overflow-y-auto ml-8'>
      <ul className='flex items-center justify-between'>
        <li><a href="#home" className='ml-1'>Home</a></li>
        <li><a href="#catalogue" className='ml-24'>Catalogue</a></li>
        <li><a href="#rating" className='ml-24'>Rating</a></li>
        <li><a href="#contact" className='ml-24'>Contact</a></li>
        
        {/* Languages Menu */}
        <li className="nav-item dropdown ml-12 absolute right-20">
          <a className="font-medium nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            EN
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">SP</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
