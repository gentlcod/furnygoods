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
      {/* Caja del Carrusel de Bootstrap */}
      <div id='home' className='relative flex flex-col items-center md:flex-row md:justify-between mt-0'>
        {/* Sección del Carrusel */}
        <div className='relative md:absolute top-28 md:ml-12 overflow-hidden'>
          <div 
            id="carouselExampleIndicators" 
            className="carousel slide relative w-11/12 max-w-xs md:w-[290px]" 
            data-bs-ride="carousel" 
            data-bs-interval="2000"
          >
            {/* Indicadores del Carrusel */}
            <div className="carousel-indicators absolute lg:bottom-[90px] md:bottom-[90px] bottom-[57.75px] left-[-31.75px] flex justify-center w-full">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Diapositiva 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Diapositiva 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Diapositiva 3"></button>
            </div>

            {/* Elementos del Carrusel */}
            <div className="carousel-inner rounded-2xl">
              <div className="carousel-item active">
                <img
                  src={Sofa1CarouselImg}
                  className="d-block w-full" 
                  alt="Sofá 1 Img" 
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Sofa2CarouselImg}
                  className="d-block w-full" 
                  alt="Sofá 2 Img" 
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Sofa3CarouselImg}
                  className="d-block w-full" 
                  alt="Sofá 3 Img" 
                />
              </div>
            </div>

            {/* Texto de Descripción */}
            <p className='mt-6 md:mt-12 text-[#2f2f2f] text-base lg:ml-0 ml-1 md:text-lg font-medium md:text-left'>
              Este sitio web de muebles permite a los visitantes crear listas de deseos.
            </p>
          </div>
        </div>

        {/* Texto de la Tienda de Bienes */}
        <div className='relative flex flex-col items-center md:items-start md:absolute md:right-32 lg:right-16 top-28'>
          <div className='flex flex-col items-center md:items-start'>
            <h5 className='text-[#2f2f2f] text-xl md:text-2xl font-semibold xl:mt-0 xl:mr-0 lg:mt-0 lg:mr-64 md:mr-0 mr-[11rem] mt-8 md:text-left'>
              ¡Tienda de Bienes!
            </h5>

            <div className='flex items-center justify-between lg:mb-0 mb-12'>
              <p className='lg:mt-0 mt-3 lg:mr-[5.9rem] md:mr-0 mr-[14.5rem] text-[#2f2f2f] text-xl md:text-2xl font-semibold md:text-left'>
                Desde <br />
                <span className='font-light'>Silla</span>
              </p>
              <div className='mt-8 md:mt-0'>
                <h4 className='text-[#2f2f2f] lg:text-5xl md:text-4xl text-3xl lg:ml-0 md:ml-[7.5rem] ml-[-5.9rem] font-medium md:text-right'>
                  $59
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caja de Exploración del Catálogo de Sillas */}
      <div className='overflow-hidden'>
        <div className='relative flex flex-col items-center mt-20 lg:mr-[-27.5rem] xl:ml-0 lg:ml-[-7rem] md:ml-[17.5rem] ml-[-2rem] md:mt-80'>
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={LuxuryChairImg}
              className="rounded-2xl border-[5px] border-white shadow-2xl w-11/12 max-w-xs md:w-[290px] md:h-[290px] lg:w-[350px] lg:h-[350px] xl:w-[325px] xl:h-[325px]"
              alt="Imagen de Silla de Lujo"
            />
            <div className='absolute cursor-pointer' onClick={handleNavClick('catalogue')}>
              <p className="flex items-center text-[#f6f6f6] absolute text-md w-[300px] lg:ml-[-12rem] md:ml-[-13rem] ml-[-3rem] md:mt-[7rem] mt-[8rem]">
                Explora el catálogo <FaArrowRightLong size={15} className="ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
