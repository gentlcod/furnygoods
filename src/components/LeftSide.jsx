 
/* eslint-disable no-unused-vars */
import React from 'react';
import About from './About'

const LeftSide = () => {  

  return (
    <>
      {/* LeftSide Content for Larger Screens */}
      <div className={`w-[600px] mt-[-1.5rem] pl-24 bg-[#2f2f2f] h-[100vh] z-10 relative hidden md:block`}>
        {/* Logo */}
        
        <h4 
  className='cursor-pointer md:block hidden pt-7 my-4 text-[#f6f6f6] bg-[#2f2f2f] md:bg-[#2f2f2f] px-2 md:px-0'
  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
>
  <span className='text-3xl font-bold'>
    FURNY
  </span>
  <span className='text-3xl font-extralight'>
    GOODS
  </span>
</h4>

        <div className='mt-32 mb-9'>
          <h1 className='text-[#f6f6f6] text-7xl font-bold'>
            Simple &
            <br />
            Comfort
          </h1>

          <p className='mt-9 text-[#f6f6f6] tracking-normal text-md font-regular'>
            This furniture website lets visitors
            <br /> create wish lists for their favorite
            <br /> items, which help honor.
          </p>
          <br />

         <About />
        </div>
      </div>

     
    </>
  );
}

export default LeftSide;
