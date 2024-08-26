/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { LuxuryChairImg, Sofa1CarouselImg, Sofa2CarouselImg, Sofa3CarouselImg } from '../../public/assets';

const Home = () => {
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
  };

  useEffect(() => {
    // Ensure that the carousel is initialized
    const carouselElement = document.getElementById('carouselExampleIndicators');
    if (carouselElement) {
      new window.bootstrap.Carousel(carouselElement);
    }
  }, []);

  return (
    <>
      {/* Bootstrap Carousel Box */}
      <div id='home' className='relative flex flex-col items-center md:flex-row md:justify-between'>
        {/* Carousel Section */}
        <div className='relative md:absolute top-28 md:ml-12 overflow-hidden'>
          <div 
            id="carouselExampleIndicators" 
            className="carousel slide relative w-full md:w-[290px]" 
            data-bs-ride="carousel" 
            data-bs-interval="2000"
          >
            {/* Carousel Indicators */}
            <div className="carousel-indicators absolute md:top-80">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            {/* Carousel Items */}
            <div className="carousel-inner rounded-2xl">
              <div className="carousel-item active">
                <img
                  src={Sofa1CarouselImg}
                  className="d-block w-full" 
                  alt="Sofa 1 Img" 
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Sofa2CarouselImg}
                  className="d-block w-full" 
                  alt="Sofa 2 Img" 
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Sofa3CarouselImg}
                  className="d-block w-full" 
                  alt="Sofa 3 Img" 
                />
              </div>
            </div>

            {/* Description Text */}
            <p className='mt-12 text-[#2f2f2f] text-base md:text-lg font-medium text-center md:text-left'>
              This furniture website lets the <br /> visitors create wish lists.
            </p>
          </div>
        </div>

        {/* Goods Store Text */}
        <div className='relative flex flex-col items-center md:items-start md:absolute md:right-16 top-28'>
          <div className='flex flex-col items-center md:items-start'>
            <h5 className='text-[#2f2f2f] text-xl md:text-2xl font-semibold text-center md:text-left'>
              Goods Store!
            </h5>

            <p className='mt-3 text-[#2f2f2f] text-xl md:text-2xl font-semibold text-center md:text-left'>
              Start at <br />
              <span className='font-light'>
                Chair
              </span>
            </p>
          </div>

          <div className='mt-8 md:mt-0'>
            <h4 className='text-[#2f2f2f] text-3xl md:text-5xl font-medium text-center md:text-right'>
              $59
            </h4>
          </div>
        </div>
      </div>

      {/* Explore Catalogue Chair Box */}
      <div className='relative flex flex-col items-center mt-20 md:mt-80'>
        <div className="flex items-center justify-center md:justify-end">
          <img
            src={LuxuryChairImg}
            className="rounded-2xl border-[5px] border-white shadow-2xl w-64 h-64 md:w-[290px] md:h-[290px]"
            alt="Chair Image"
          />
          <div className='absolute cursor-pointer' onClick={handleNavClick('catalogue')}>
            <p className="flex items-center text-[#f6f6f6] text-sm md:text-md absolute ml-[-5rem] md:ml-[-13rem] mt-[4rem] md:mt-[7rem]">
              Explore catalogue <FaArrowRightLong size={15} className="ml-2 text-[#f6f6f6]" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
