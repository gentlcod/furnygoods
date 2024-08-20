/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ScrollToUpBtn from './ScrollToUpBtn'
import { FaArrowRightLong } from "react-icons/fa6";
import { LuxuryChair, Sofa1CarouselImg, Sofa2CarouselImg, Sofa3CarouselImg } from '../../public/assets';

const Home = () => {
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

    <div className='flex items-center'>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators absolute right-32">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Sofa1CarouselImg}
              className="rounded-2xl border border-[5px] border-white shadow-2xl"
              height={290}
              width={290}
              alt="Sofa 1 Img"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Sofa2CarouselImg}
              className="rounded-2xl border border-[5px] border-white shadow-2xl"
              height={290}
              width={290}
              alt="Sofa 2 Img"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Sofa3CarouselImg}
              className="rounded-2xl border border-[5px] border-white shadow-2xl"
              height={290}
              width={290}
              alt="Sofa 3 Img"
            />
          </div>
        </div>
        <p className='mt-12 text-[#2f2f2f] text-md font-semibold'>
        This furniture website let’s the
        <br /> visitors create wish lists.
        </p>
      </div>

      <div className='absolute top-28 right-60'>
        <div className='flex items-center'>

          <div className='flex flex-col'>

        <h5 className='text-[#2f2f2f] text-xl font-semibold'>
          Goods Store !
          </h5>
      
          <p className='mt-3 text-[#2f2f2f] text-xl font-semibold'>
            Start at <br />
            <span className='font-light'>
            Chair
            </span>
          </p>
          </div>

          <div className='absolute left-60'>
        <h4 className='mt-7 text-[#2f2f2f] text-3xl font-medium'>
        $59
        </h4>
        </div>

        </div>
      </div>
    </div>




      {/* Explore Catalogue Chair Box */}

      <div className='absolute right-16 bottom-32'>
        <div className="flex items-center mt-8">
          <img
            src={LuxuryChair}
            height={290}
            width={290}
            alt="Chair Image"
            className="rounded-2xl border border-[5px] border-white shadow-2xl"
          />
          <a href="#catalogue">
            <p className="flex items-center text-[#f6f6f6] text-md absolute z-10 ml-[-13rem] mt-[7rem]">
              Explore catalogue <FaArrowRightLong size={15} className="ml-2 text-[#f6f6f6]" />
            </p>
          </a>
        </div>

        <ScrollToUpBtn />

      
      </div>
    </>
  );
};

export default Home;
